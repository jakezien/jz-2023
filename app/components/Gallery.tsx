'use client'
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

type Props = {
  children: React.ReactNode;
  className?: string
};

const Gallery: React.FC<Props> = ({ children, className }) => {
  return (
      <Swiper className={className}>
      {Children.map(children, child => (
        <SwiperSlide className=''>
          {child}
        </SwiperSlide>
      ))}
      </Swiper>
  );
};

export default Gallery;