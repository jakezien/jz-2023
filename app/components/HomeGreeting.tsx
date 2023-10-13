import { Exec } from './LocalFonts'
import Link from 'next/link'
import { H1 } from './TypeStyles'


const HomeGreeting: React.FC = () => {
  

  return (
    <div className='mb-16 px-4 max-w-prose ml-0'>

      <H1 className='mb-0 mt-4'>Jake Zien</H1>
      <p className={'text-2xl text-stone-500 tracking-tight leading-7 ' + Exec.className}>
        Business-minded product designer, design-minded developer.
        Check out&nbsp;
        <Link href={'/resume'} className='inline underline underline-offset-2 text-stone-500'>
          my resume.
        </Link>
       </p>
    </div>
  )
}

export default HomeGreeting