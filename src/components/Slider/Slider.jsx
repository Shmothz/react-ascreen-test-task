import React from 'react'
import mountain1 from '../../assets/img/mountain1.jpg'
import mountain2 from '../../assets/img/mountain2.jpg'
import mountain3 from '../../assets/img/mountain3.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'

const Slider = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <img src={mountain1} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mountain2} alt='slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mountain3} alt='slide'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider

