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
    <div className={className + ' h-full w-full'} onClick={() => {
      swiper?.slideNext()
    }}>
          {children}
        </div>
  );
};

export default GallerySlide;

