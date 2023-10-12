import { NextResponse } from "next/server"
import fs from 'fs/promises'
import path from 'path'


async function traverseDirectory(directory: string, projectList: Project[], orgList: Org[]): Promise<void> {
  const files = await fs.readdir(directory, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      await traverseDirectory(fullPath, projectList, orgList);
    } else if (file.name.includes('project.json')) {
      const data = await fs.readFile(fullPath, 'utf-8');
      projectList.push(JSON.parse(data) as Project);
    } else if (file.name.includes('org.json')) {
      const data = await fs.readFile(fullPath, 'utf-8');
      orgList.push(JSON.parse(data) as Org);
    }
  }
}

interface RouteData {
  projects: Project[]
  orgs: Org[]
}

async function buildData(): Promise<RouteData> {
  var projectList: Project[] = []
  var orgList: Org[] = []

  await traverseDirectory(path.join(process.cwd(), 'public'), projectList, orgList)
  projectList = projectList.sort((a, b) => { 
    const dateA = new Date(a.date ?? "");
    const dateB = new Date(b.date ?? "");
    return dateB.getTime() - dateA.getTime(); // This will sort in descending order, so the most recent date comes first.
  })

  return {projects: projectList, orgs: orgList};
}



export async function GET() {
  try {
    const projectsAndOrgs = await buildData();
    return NextResponse.json({projectsAndOrgs});
  } catch (error) {
    console.log(error)

    return NextResponse.json({
      error: 'Internal Server Error',
      errorData: error
    }, { status: 500 });
  }
}
