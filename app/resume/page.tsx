import { ResumeItem } from './ResumeItem'
import ResumeItemComponent from './ResumeItem';

import fsPromises from 'fs/promises';
import path from 'path'

type Props = {
  resumeItems: ResumeItem[];
};

export async function getLocalData(): Promise<ResumeItem[]> {
  const filePath = path.join(process.cwd(), 'public/resume.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData: ResumeItem[] = JSON.parse(jsonData.toString());
  return objectData;
}


async function ResumePage() {
  const resumeItems = await getLocalData()

  return (
    <div>
      <h1>Hey ho</h1>
      {resumeItems.map(item => (
        <ResumeItemComponent key={item.id} item={item}/>
      ))} 
    </div>
  )
}



export default ResumePage;