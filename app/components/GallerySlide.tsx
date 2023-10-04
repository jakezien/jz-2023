'use client'
import { Children } from 'react';
import { SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'

type Props = {
  children: React.ReactNode;
  className?: string
};

const GallerySlide: React.FC<Props> = ({ children, className }) => {
  let swiper = useSwiper()

  return (
    <div className={className + ' h-full w-full'} onClick={(event) => {
      console.log(event.clientX, swiper.width)
      if (event.clientX <= swiper.width * 0.33) {
        swiper?.slidePrev()
      } else if (event.clientX >= swiper.width * 0.66) {
        swiper?.slideNext()
      }
    }}>
      {children}
    </div>
  );
};

export default GallerySlide;

