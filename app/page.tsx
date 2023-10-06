import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { Project } from './api/projects/route';
import { headers } from 'next/headers'
import Header from "./components/Header"
import { ProjectsProvider } from './context/ProjectContext';
import ProjectsGallery from './components/ProjectGallery';
import HomeGreeting from './components/HomeGreeting';


const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400','500'], subsets: ['latin'] })


interface Props {

}

const Home: React.FC<Props> = ({}) => {

  return (
    <>
        <ProjectsProvider>
        <Header />
        <div className='max-w-6xl mx-auto'>
          <HomeGreeting/>
          <ProjectsGallery />
        </div>
          

        </ProjectsProvider>
    </>
  )
}


export default Home