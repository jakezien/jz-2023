import { IBM_Plex_Mono, Inter } from 'next/font/google'
import Header from "./components/Header"
import { ProjectsProvider } from './context/ProjectContext';
import ProjectsGallery from './components/ProjectGallery';
import HomeGreeting from './components/HomeGreeting';
import { FavesProvider } from './context/FavesContext';
import FavesGallery from './components/FavesGallery';

const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400','500'], subsets: ['latin'] })


interface Props {

}

const Home: React.FC<Props> = ({}) => {

  return (
    <>
      <ProjectsProvider>
        <FavesProvider>
          <Header hideTitle />
          <div className='max-w-6xl mx-auto'>
            <HomeGreeting/>
            <ProjectsGallery />
            {/* <FavesGallery /> */}
          </div>
        </FavesProvider>
      </ProjectsProvider>
    </>
  )
}


export default Home