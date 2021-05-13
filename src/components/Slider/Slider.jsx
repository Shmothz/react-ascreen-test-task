import React from 'react'
import mountain1 from '../../assets/img/mountain1.jpg'
import mountain2 from '../../assets/img/mountain2.jpg'
import mountain3 from '../../assets/img/mountain3.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css'

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src={mountain1} alt='slide' style={{width: '100%'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={mountain2} alt='slide' style={{width: '100%'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={mountain3} alt='slide' style={{width: '100%'}}/>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider

