import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google'
import { Project } from './api/projects/route';
import Gallery from './components/Gallery'
import Header from "./components/Header"

const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })

export default async function Home() {

  async function getData() {
    // const domain = headers().get('host');
    const domain = "localhost:3000"
    const res = await fetch(`http://${domain}/api/projects`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  let h1ClassName = plex.className + " font-bold tracking-normal my-2 cursor-pointer"
  let data = await getData()
  let projects: Project[] = data.projects

  return (
    <>
      <div className='h-full w-full lg:flex lg:flex-row lg:items-center'>
        <figure className='aspect-3/4 lg:w-3/4 lg:h-full'>
          <Gallery className={`w-full h-full`}>
            {projects.map((project, index) => (
              project.images.map((image, imageIndex) => {
                return (
                <div className='flex flex-col h-full justify-between' key={index}>
                  <Image
                    src={image.src} alt={image.alt}
                    width={2000} height={2000}
                      style={{
                        objectFit: "contain",
                        backgroundColor: image.bgColor
                      }}
                    className='h-full bg-neutral-100'>
                      
                  </Image>
                  <div className='bg-white'>
                    <p>{image.description}</p>
                    {image.description && <p>-</p>}
                    <p>{project.title}</p>
                    <p>at {project.org}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
              )}))
            )}        
          </Gallery>
          </figure>
        <Header className='lg:order-first lg:w-1/4'/>
      </div>

      {/* <div className='hidden lg:flex flex-row w-full'>
        <Header className='w-1/4'/>
        <figure className='w-3/4 aspect-4/3'>
          <Gallery className="h-full w-full">
            {projects.map((project, index) => (
              <div key={index}>
                <h3>{project.description}</h3>
                <ul>
                  {project.images.map((image, imageIndex) => (
                    <li key={imageIndex}>
                      <p>{image.src}</p>
                      <p>{image.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}        
          </Gallery>
        </figure>
      </div> */}
    </>
  )
}
