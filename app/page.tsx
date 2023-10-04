import Image from 'next/image';
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { Project } from './api/projects/route';
import Gallery from './components/Gallery'
import Header from "./components/Header"
import {headers} from 'next/headers'

const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400','500'], subsets: ['latin'] })

export default async function Home() {

  async function getProjectData() {
    const domain = headers().get('host');
    const res = await fetch(`http://${domain}/api/projects`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  let h1ClassName = plex.className + " font-bold tracking-normal my-2 cursor-pointer"
  let data = await getProjectData()
  let projects: Project[] = data.projects

  return (
    <>
      <div className='h-full w-full lg:flex lg:flex-row lg:items-center'>
        <Header className='lg:order-first lg:w-1/4'/>
        <figure className='aspect-3/4 lg:w-3/4 lg:h-full'>
          <Gallery className={`w-full h-full`} projects={projects}/>
        </figure>
      </div>
    </>
  )
}
