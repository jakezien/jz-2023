'use client'
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import GallerySlide from './GallerySlide';

type Props = {
  children: React.ReactNode;
  className?: string
};

const Gallery: React.FC<Props> = ({ children, className }) => {
  return (
      <Swiper className={className} loop>
      {Children.map(children, child => (
        <SwiperSlide className=''>
          <GallerySlide>
            {child}
          </GallerySlide>
        </SwiperSlide>
      ))}
      </Swiper>
  );
};

export default Gallery;

