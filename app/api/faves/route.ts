import { NextResponse } from "next/server"
import fs from 'fs/promises'
import path from 'path'


async function traverseDirectory(directory: string, faves: Fave[]): Promise<void> {
  const files = await fs.readdir(directory, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      await traverseDirectory(fullPath, faves);
    } else if (file.name.includes('faves.json')) {
      const data = await fs.readFile(fullPath, 'utf-8');
      faves.push(JSON.parse(data) as Fave);
    }
  }
}


async function fetchFaves(): Promise<Fave[]> {
  var faves: Fave[] = []

  await traverseDirectory(path.join(process.cwd(), 'public'), faves)
  faves = faves.sort((a, b) => { 
    const dateA = new Date(a.date ?? "");
    const dateB = new Date(b.date ?? "");
    return dateB.getTime() - dateA.getTime(); // This will sort in descending order, so the most recent date comes first.
  })

  return faves
}



export async function GET() {
  try {
    const faves = await fetchFaves();
    return NextResponse.json({faves});
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      error: 'Internal Server Error',
      errorData: error
    }, { status: 500 });
  }
}
