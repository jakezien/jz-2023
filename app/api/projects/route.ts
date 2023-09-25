// pages/api/projects.ts

import { NextResponse } from "next/server"
import fs from 'fs/promises'
import path from 'path'

export interface Project {
  title: string
  images: ProjectImage[]
  description?: string
  org?: string
  press?: Press[]
  date?: string
}

export interface ProjectImage {
  src: string
  alt: string
  description?: string 
  bgColor?: string
}

export interface Press {
  name: string
  url: string
}

async function traverseDirectory(directory: string, projectList: Project[]): Promise<void> {
  const files = await fs.readdir(directory, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      await traverseDirectory(fullPath, projectList);
    } else if (file.name.includes('project.json')) {
      const data = await fs.readFile(fullPath, 'utf-8');
      projectList.push(JSON.parse(data) as Project);
    }
  }
}

async function buildProjectList(): Promise<Project[]> {
  var projectList: Project[] = [];
  await traverseDirectory(path.join(process.cwd(), 'public'), projectList);
  projectList = projectList.sort((a, b) => { 
    const dateA = new Date(a.date ?? "");
    const dateB = new Date(b.date ?? "");
    return dateB.getTime() - dateA.getTime(); // This will sort in descending order, so the most recent date comes first.
  })

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
