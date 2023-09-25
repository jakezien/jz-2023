import Image from "next/image"
import Link from "next/link"
import monogramImage from '../../public/monogram.jpg'
type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={`${className} flex flex-row  lg:flex-col lg:h-full p-2 pr-4`}>

      <Link href="/" className="no-underline flex flex-row items-center">
        <Image src={monogramImage} alt="JZ monogram" className="w-10 h-10 mr-2" width={60} height={60} />
        <p className="font-medium">Jake Zien</p>
      </Link>

      <Link href="/resume" className="ml-auto lg:ml-0">
        <p className="font-medium">My Resume</p>
      </Link>
      
    </header>
  )
}

export default Header