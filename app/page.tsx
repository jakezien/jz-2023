import Image from 'next/image'
import Link from 'next/link'
import { headers } from 'next/headers';
import monogramImage from '../public/monogram.jpg'
import { IBM_Plex_Mono } from 'next/font/google'
import { Project } from './api/projects/route';

const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })

export default async function Home() {

  async function getData() {
    const domain = headers().get('host');
    const res = await fetch(`http://${domain}/api/projects`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  let h1ClassName = plex.className + " font-bold tracking-normal my-2 cursor-pointer"
  let data = await getData()
  let projects:Project[] = data.projects

  return (
    <main className="min-h-screen flex flex-row items-center justify-center py-24">
      <div className='text-center pb-4 md:pb-8 lg:pb-12'>
        <Image src={monogramImage} alt="JZ monogram" width={160} height={160} className='rounded-xl mx-auto mb-6'></Image>
        <h1 className={h1ClassName}><Link href="/resume" className="cursor-pointer underline underline-offset-4 text-designOrange hover:text-orange-600 active:text-orange-700">My resume</Link></h1>
        <h1 className={h1ClassName}><a className='cursor-pointer underline underline-offset-4 text-designOrange hover:text-orange-600 active:text-orange-700' href={"mailto:jz@jakezien.com"}>Get in touch</a></h1>
        <h2 className='mt-4 font-medium text-stone-400'>Stay tuned for more</h2>
      </div>
      <figure className='block md: w-3/4'>
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
      </figure>
    </main>
  )
}
