import Image from "next/image"
import Link from "next/link"
import monogramImage from '../../public/monogram.jpg'
import { IBM_Plex_Mono } from "next/font/google"
import GalleryInfo from "./GalleryInfo"
// const inter = Inter({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })
const plex = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'] })

type Props = {
  className?: string
}


const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={`${className} flex flex-row align items-center p-3 w-full`}>
      <div className="flex flex-row items-center justify-between w-full">
        <Link href="/" className="no-underline flex flex-row items-center">
          <Image src={monogramImage} alt="JZ monogram" className="w-10 h-10 mr-2" width={60} height={60} />
          <p className={`text-lg ${plex.className} text-stone-700 font-bold`}>Jake Zien</p>
        </Link>
        <p className={`ml-auto lg:ml-0 text-md underline text-stone-500 ${plex.className}`}><Link href="/resume">My Resume</Link></p>
      </div>
    </header>
  )
}

export default Header