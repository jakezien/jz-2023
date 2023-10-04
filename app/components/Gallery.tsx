"use client";
import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import GallerySlide from "./GallerySlide";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGallery } from "../context/GalleryContext";

type Props = {
  className?: string;
};



const Gallery: React.FC<Props> = ({ className }) => {
  
  const {
    allItems: galleryItems,
    currentItem,
    setCurrentItem,
    translation,
    setTranslation
  } = useGallery()

  const p = useGallery()
  console.log(p)

  const [initialTranslation, setInitialTranslation] = useState<number>(0.0)
  
  function updateCurrentItem(swiper: SwiperClass) {
    let index = swiper.realIndex  
    const newItem = galleryItems[index]
    if (currentItem == undefined || newItem == undefined) {
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

        

    </>
  );
};

export default Gallery;
