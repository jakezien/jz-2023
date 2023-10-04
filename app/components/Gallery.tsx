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

  function updateCurrentItem(swiper: SwiperClass) {
    let index = swiper.activeIndex
    
    // if (index < 0) {
    //   index = galleryItems.length - 1
    // }
    const newItem = galleryItems[index]
    console.log(index, currentItem.project.title, newItem.project.title, galleryItems)
    if (currentItem !== newItem) {
      setCurrentItem(newItem)
    }
  }

  return (
    <>
      <Swiper
        className={className}
        onSetTranslate={(swiper, translate) => {
          updateCurrentItem(swiper)
        }}
        onSlideChange={(swiper) => {
          updateCurrentItem(swiper)
        }}
        onSlideChangeTransitionStart={(swiper) => {
          updateCurrentItem(swiper)
        }}
        onSlideResetTransitionStart={(swiper) => {
          updateCurrentItem(swiper)
        }}
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
      <div>
        <h2>{currentItem?.project.title}</h2>
      </div>
    </>
  );
};

export default Gallery;
