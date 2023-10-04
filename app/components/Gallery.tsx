"use client";
import { Children, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import GallerySlide from "./GallerySlide";
import { Project, ProjectImage } from "../api/projects/route";
import Image from "next/image";


type Props = {
  projects: Project[];
  className?: string;
};

interface GalleryItem {
  project: Project,
  projectIndex: number,
  image: ProjectImage,
  imageIndex: number
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

  const [currentItem, setCurrentItem] = useState<GalleryItem>(galleryItems[0])
  const [initialTranslation, setInitialTranslation] = useState<number>(0.0)
  const [translation, setTranslation] = useState<number>(0.0)
  
  function updateCurrentItem(swiper: SwiperClass) {
    let index = swiper.realIndex  
    const newItem = galleryItems[index]
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
        className={className}
        onSetTranslate={(slider) => { updateTranslate(slider); updateCurrentItem(slider) }}
        onSlideChange={updateCurrentItem}
        onSlideChangeTransitionStart={updateCurrentItem}
        onSlideResetTransitionStart={updateCurrentItem}
        onTransitionEnd={updateTranslate}
        onSliderFirstMove={startNewTranslation}
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
      <div style={{transform: `translateX(${translation}px)`}} >
        <h2>{currentItem?.project.title}</h2>
      </div>
    </>
  );
};

export default Gallery;
