import Image from 'next/image'
import Link from 'next/link'
import monogramImage from '../public/monogram.jpg'
import { IBM_Plex_Mono } from 'next/font/google'
const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })

export default function Home() {

  let h1ClassName = plex.className + " font-bold tracking-normal my-2 cursor-pointer"

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <div className='text-center pb-8'>
        <Image src={monogramImage} alt="JZ monogram" width={160} height={160} className='rounded-xl mx-auto mb-6'></Image>
        <h1 className={h1ClassName}><Link href="/resume" className="cursor-pointer underline underline-offset-4 text-designOrange hover:text-orange-600 active:text-orange-700">My resume</Link></h1>
        <h1 className={h1ClassName}><a className='cursor-pointer underline underline-offset-4 text-designOrange hover:text-orange-600 active:text-orange-700' href={"mailto:jz@jakezien.com"}>Get in touch</a></h1>
        <h2 className='mt-4 font-medium text-stone-400'>Stay tuned for more</h2>
      </div>
    </main>
  )
}
