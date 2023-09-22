// pages/api/projects.ts

import { NextResponse } from "next/server"
import fs from 'fs/promises'
import path from 'path'

interface Project {
  title: string
  images: ProjectImage[]
  description?: string
  org?: string
  press?: Press[]
}

interface ProjectImage {
  src: string
  description?: string 
}

interface Press {
  name: string
  url: string
}

async function traverseDirectory(directory: string, projectList: Project[]): Promise<void> {
  const files = await fs.readdir(directory, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      await traverseDirectory(fullPath, projectList);
    } else if (file.name === 'project.json') {
      const data = await fs.readFile(fullPath, 'utf-8');
      console.log(data)
      projectList.push(JSON.parse(data) as Project);
    }
  }
}

async function buildProjectList(): Promise<Project[]> {
  const projectList: Project[] = [];
  await traverseDirectory(path.join(process.cwd(), 'public'), projectList);
  return projectList;
}

export async function GET() {
  try {
    const projects = await buildProjectList();
    return NextResponse.json({projects});
  } catch (error) {
    console.log(error)

    return NextResponse.json({
      error: 'Internal Server Error',
      errorData: error
    }, { status: 500 });
  }
}
