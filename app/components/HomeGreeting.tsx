import { IBM_Plex_Mono, Inter } from 'next/font/google'
const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })
const inter = Inter({ weight: ['400','500'], subsets: ['latin'] })

const HomeGreeting: React.FC = () => {
  

  return (
    <div className='mb-16 px-4'>
      <h1>Jake Zien</h1>
      <p>Business-minded designer, design-minded developer.</p>
    </div>
  )
}

export default HomeGreeting