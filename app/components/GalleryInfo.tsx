import { IBM_Plex_Mono } from "next/font/google";
import { GalleryItem } from "./Gallery";
const plex = IBM_Plex_Mono({ weight: ['500'], subsets: ['latin'] })

interface Props {
  currentItem: GalleryItem
  translation: number
}

const GalleryInfo: React.FC<Props> = ({currentItem, translation}) => {

  if (currentItem === undefined) { return (<></>) }

  return (
    <div className="p-4 pl-0 overflow-hidden">
    {currentItem.image?.description &&
      <div className="flex flex-row  items-baseline mb-4"> 
        <p className={`${plex.className} w-20 pl-4 bg-white text-stone-400 uppercase text-xs tracking-wide relative z-[1]`}>
          Image
        </p>
        <p style={{transform: `translateX(${translation}px)`}}>
          { currentItem.image && currentItem.image?.description}
        </p>
      </div>
    }

    

    <div className="flex flex-row items-baseline mb-0"> 
      <p className={`${plex.className} w-20 pl-4 bg-white text-stone-400 uppercase text-xs tracking-wide relative z-[1]`}>
        Project
      </p>
      <div className="" style={{transform: `translateX(${translation}px)`}} >
        <p>{currentItem?.project.title}</p>
      </div>
    </div>

    <div className="flex flex-row items-stretch mb-2"> 
      <div className={`${plex.className} w-20 pl-4 bg-white text-stone-400 uppercase text-xs tracking-wide relative z-[1]`}>
        &nbsp;
      </div>
      <div className="" style={{transform: `translateX(${translation}px)`}} >
        <p className="m-0 leading-snug text-sm max-w-sm text-stone-500 ">{currentItem?.project.description}</p>
      </div>
    </div>
    

    <div className="flex flex-row items-baseline"> 
      <p className={`${plex.className} w-20 pl-4 bg-white text-stone-400 uppercase text-xs tracking-wide relative z-[1]`}>
        Where
      </p>
      {currentItem.project.org && 
        <p style={{transform: `translateX(${translation}px)`}}>{currentItem?.project.org}</p>
      }
    </div>

  </div>

  )

}

export default GalleryInfo