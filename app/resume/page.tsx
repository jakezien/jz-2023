import { ResumeData, Experience, Education, Brag } from './ResumeTypes';
import ResumeItemExperience from './ResumeItemExperience';
import ResumeItemEducation from './ResumeItemEducation';
import ResumeItemBrag from './ResumeItemBrag';
import ResumeItemPersonal from './ResumeItemPersonal';
import ResumeItemTech from './ResumeItemTech';
import ResumeSectionWrapper from './ResumeSectionWrapper';
import { IBM_Plex_Mono } from 'next/font/google'
const plex = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'] })


export async function getLocalData(): Promise<ResumeData> {
  const baseURL = "http://localhost:3000"
  const response = await fetch(baseURL + '/api/resume');
  if (!response.ok) {
    throw new Error('Failed to fetch resume data.');
  }
  return await response.json() as ResumeData;
}


async function ResumePage() {
  let resumeData = await getLocalData()
  let h1ClassName = plex.className + " font-bold tracking-normal"
  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-xl mx-8 mt-16 mb-48'> 
      <ResumeSectionWrapper>
          <h1 className={plex.className + ' text-5xl tracking-tight font-semibold'}>Jake Zien</h1>
          <p className={plex.className + ' text-xl text-stone-500 tracking-tight'}>{resumeData.blurb}</p>
      </ResumeSectionWrapper>

      <ResumeSectionWrapper>
        <h1 className={h1ClassName}>Experience</h1>
        {resumeData.experience.map((experienceItem: Experience) => (
            <ResumeItemExperience key={experienceItem.id} item={experienceItem} />
        ))}
      </ResumeSectionWrapper>
  
      <ResumeSectionWrapper>
        <h1 className={h1ClassName}>Brags</h1>
        {resumeData.brags.map((bragItem: Brag) => (
            <ResumeItemBrag key={bragItem.id} item={bragItem} />
        ))}
      </ResumeSectionWrapper>

      <ResumeSectionWrapper>
        <h1 className={h1ClassName}>Education</h1>
        {resumeData.education.map((educationItem: Education) => (
            <ResumeItemEducation key={educationItem.id} item={educationItem} />
        ))}
      </ResumeSectionWrapper>
      

      <ResumeSectionWrapper>
        <h1 className={h1ClassName}>Tech</h1>
        <ul>
          {resumeData.tech.map((techItem: string) => (
            <ResumeItemTech key={resumeData.tech.indexOf(techItem)} item={techItem}/>
          ))}
        </ul>
        
        <h1 className={h1ClassName}>Personal</h1>
        <ul>
          {resumeData.personal.map((personalItem: string) => (
            <ResumeItemPersonal key={resumeData.personal.indexOf(personalItem)} item={personalItem}/>
          ))}
        </ul>

        
      </ResumeSectionWrapper>
      </div>
    </div>
  );
}

export default ResumePage;