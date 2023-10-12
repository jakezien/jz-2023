import { IBM_Plex_Mono, Inter } from 'next/font/google'
import Link from 'next/link'
const plex = IBM_Plex_Mono({ weight: ['400','700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400','500'], subsets: ['latin'] })

const HomeGreeting: React.FC = () => {
  

  return (
    <div className='mb-16 px-4 max-w-prose ml-0'>
      <h1 className={'mt-4 mb-1 font-bold text-4xl '+ plex.className}>Jake Zien</h1>
      <p className={'text-xl text-stone-500 ' + plex.className}>Business-minded product designer, design-minded developer. Check out <Link href={'/resume'} className='inline underline text-stone-500'>my resume.</Link></p>
    </div>
  )
}

export default HomeGreeting