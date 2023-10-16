import { Bau } from './LocalFonts'
import Link from 'next/link'
import { H1 } from './TypeStyles'


const HomeGreeting: React.FC = () => {
  

  return (
    <div className='mb-16 px-4 max-w-prose ml-0'>

      <H1 className='mb-4 mt-4 text-stone-800'>Jake Zien</H1>
      <p className={'text-2xl text-stone-500  leading-7 ' + Bau.className}>
        Business-minded product designer, design-minded developer.
        Check out&nbsp;
        <Link href={'/resume'} className='inline underline underline-offset-2 text-stone-600 hover:text-stone-500 active:text-stone-400'>
          my resume.
        </Link>
       </p>
    </div>
  )
}

export default HomeGreeting