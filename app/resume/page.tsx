import { ResumeData, Experience, Education, Brag } from './ResumeTypes';
import ResumeItemExperience from './ResumeItemExperience';
import ResumeItemEducation from './ResumeItemEducation';
import ResumeItemBrag from './ResumeItemBrag';
import ResumeItemPersonal from './ResumeItemPersonal';
import ResumeItemTech from './ResumeItemTech';
import ResumeSectionWrapper from './ResumeSectionWrapper';
import { IBM_Plex_Mono } from 'next/font/google'
import resumeJson from '../../public/resume.json'
import { H1 } from '../components/TypeStyles';
import { Bau } from '../components/LocalFonts';
import Header from '../components/Header';
const plex = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'] })

async function ResumePage() {
  let resumeData = resumeJson as ResumeData
  let h1ClassName = plex.className + " font-bold tracking-normal"
  return (
    <>
      <Header hideTitle className='max-w-prose px-8'/>
    <div className='flex flex-col items-center'>
      <div className='max-w-xl mx-6 mb-48'> 
      <ResumeSectionWrapper>
          <H1 className={' text-5xl tracking-tight font-semibold text-logoYellow '}>Jake Zien</H1>
          <p className={Bau.className + ' text-xl text-stone-500'}>{resumeData.blurb}</p>
      </ResumeSectionWrapper>

      <ResumeSectionWrapper>

      <H1 className='text-logoYellow'>Experience</H1>
        {resumeData.experience.map((experienceItem: Experience) => (
            <ResumeItemExperience key={experienceItem.id} item={experienceItem} />
        ))}
          
      </ResumeSectionWrapper>
  
      <ResumeSectionWrapper>
        <H1 className='text-logoYellow'>Brags</H1>
        {resumeData.brags.map((bragItem: Brag) => (
            <ResumeItemBrag key={bragItem.id} item={bragItem} />
        ))}
      </ResumeSectionWrapper>

      <ResumeSectionWrapper>
        <H1 className='text-logoYellow'>Education</H1>
        {resumeData.education.map((educationItem: Education) => (
            <ResumeItemEducation key={educationItem.id} item={educationItem} />
        ))}
      </ResumeSectionWrapper>
      

      <ResumeSectionWrapper>
        <H1 className='text-logoYellow'>Tech</H1>
        <ul>
          {resumeData.tech.map((techItem: string) => (
            <ResumeItemTech key={resumeData.tech.indexOf(techItem)} item={techItem}/>
          ))}
        </ul>
        
        <H1 className='text-logoYellow'>Personal</H1>
        <ul>
          {resumeData.personal.map((personalItem: string) => (
            <ResumeItemPersonal key={resumeData.personal.indexOf(personalItem)} item={personalItem}/>
          ))}
        </ul>

        
      </ResumeSectionWrapper>
      </div>
      </div>
      </>
  );
}

export default ResumePage;