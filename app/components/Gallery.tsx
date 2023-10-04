"use client";
import { Children, useState, createContext, useContext, PropsWithChildren, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import GallerySlide from "./GallerySlide";
import { Project, ProjectImage } from "../api/projects/route";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GalleryInfo from "./GalleryInfo";


type Props = {
  projects: Project[];
  className?: string;
};

export interface GalleryItem {
  project: Project,
  projectIndex: number,
  image: ProjectImage,
  imageIndex: number
}



const GalleryContext = createContext<GalleryContextType>({
  currentItem: {
    project: { title: "", images: [] },
    projectIndex: 0,
    image: { src: "", alt: "" },
    imageIndex: 0
  },
  setCurrentItem: () => { },
  translation: 0,
  setTranslation: () => {}
  
});

export const GalleryProvider: React.FC<PropsWithChildren> = ({ children }) => {

  let defaultGalleryItem = {
    project: { title: "", images: []},
    projectIndex: 0,
    image: { src: "", alt: ""},
    imageIndex: 0
  }

  const [currentItem, setCurrentItem] = useState<GalleryItem>(defaultGalleryItem);
  const [translation, setTranslation] = useState<number>(0.0);

  return (
    <GalleryContext.Provider value={{
      currentItem,
      setCurrentItem,
      translation,
      setTranslation
    }}>
      {children}
    </GalleryContext.Provider>
  );
};

interface GalleryContextType {
  currentItem: GalleryItem,
  setCurrentItem:  Dispatch<SetStateAction<GalleryItem>>,
  translation: number,
  setTranslation:  Dispatch<SetStateAction<number>>,
}

export const useGallery = () => {
  return useContext(GalleryContext)
}

const Gallery: React.FC<Props> = ({ projects, className }) => {
  
  const galleryItems = projects.flatMap((project, projectIndex) => {
    return project.images.map((image, imageIndex) => {
      return {
        project: project,
        projectIndex: projectIndex,
        image: image,
        imageIndex: imageIndex
      }
    })
  })
  
  const {
    currentItem,
    setCurrentItem,
    translation,
    setTranslation
  } = useGallery()

  const p = useGallery()
  console.log(p)

  useEffect(() => {
    setCurrentItem(galleryItems[0]);
  }, []);

  const [initialTranslation, setInitialTranslation] = useState<number>(0.0)
  
  function updateCurrentItem(swiper: SwiperClass) {
    let index = swiper.realIndex  
    const newItem = galleryItems[index]
    if (currentItem == undefined) {
      return
    }

    if (currentItem.image != newItem.image) {
      setCurrentItem(newItem)
      startNewTranslation(swiper)
      updateTranslate(swiper)
    }
  } 

  function startNewTranslation(swiper: SwiperClass) {
    console.log('new translation', swiper.translate)
    setInitialTranslation(swiper.translate)
    updateTranslate(swiper)
  }

  function updateTranslate(swiper: SwiperClass) {
    console.log('translation', (swiper.translate - initialTranslation))
    setTranslation(swiper.translate - initialTranslation)
  }

  
  
  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 5000
        }}
        className={className}
        onSetTranslate={(slider) => { updateTranslate(slider); updateCurrentItem(slider) }}
        onSlideChange={updateCurrentItem}
        onSlideChangeTransitionStart={updateCurrentItem}
        onSlideResetTransitionStart={updateCurrentItem}
        onTransitionEnd={updateTranslate}
        onSliderFirstMove={startNewTranslation}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={64}


      >
        { galleryItems.map(({project, projectIndex, image, imageIndex}, index) => {
            return (
                <SwiperSlide key={`${projectIndex}- ${imageIndex}`}>
                  <GallerySlide>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={2000}
                      height={2000}
                      style={{
                        objectFit: "contain",
                        backgroundColor: image.bgColor,
                      }}
                      className="h-full bg-neutral-100 lg:aspect-square"
                      data-project={JSON.stringify(project)}
                    />
                  </GallerySlide>
                </SwiperSlide>
            );
          })
        }
        
      </Swiper>

      <GalleryInfo currentItem={currentItem} translation={translation} />
    </>
  );
};

export default Gallery;
