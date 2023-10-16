import Image from "next/image"
import { Bau } from "./LocalFonts"

interface Props {
  project: Project
}

const PivotPowerContent: React.FC<Props> = ({project}) => {


  return (
    <div className="px-6">
      {project.images.map((img, i) => {return (
        <div key={i} className="mb-40">
          <Image
            src={img.src} alt={img.alt}
            width={2000} height={1124}
            className="transition-opacity opacity-0 duration-500"
            onLoadingComplete={(image) => {image.classList.remove('opacity-0')}}
          />
          <p className={"text-xl mt-4 ml-0 max-w-prose text-stone-700 " }>
            {img.description}
          </p>
        </div>
      )
      })}
    </div>
  )
}

export default PivotPowerContent