import Image from "next/image"
import Link from "next/link"
import monogramImage from '../../public/monogram.jpg'
import { Bau } from "./LocalFonts"



type Props = {
  className?: string
  hideTitle?: boolean
}


const Header: React.FC<Props> = ({ className, hideTitle }) => {
  return (
    <header className={`${className} flex flex-row align items-center py-4 px-6 max-w-6xl mx-auto `}>
      <div className="flex flex-row items-center justify-between w-full">
        <Link href="/" className="no-underline flex flex-row items-center">
          <Image src={monogramImage} alt="JZ monogram" className="w-10 h-10 mr-2 rounded-sm" width={60} height={60} />
          <p className={`text-xl ${Bau.className} text-stone-700 font-medium tracking-tight ${hideTitle ? 'hidden' : 'relative'} bottom-[-1.5px]`}>Jake Zien</p>
        </Link>
        {/* <p className={`ml-auto lg:ml-0 text-md underline text-stone-500 ${plex.className}`}><Link href="/resume">My Resume</Link></p> */}
      </div>
    </header>
  )
}

export default Header