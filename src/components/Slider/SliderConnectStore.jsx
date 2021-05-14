import React from 'react'
import {useStore} from 'effector-react';
import {store} from '../../effector/effector';
import {Route} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'

const SliderConnectStore = () => {

  const getMountains = useStore(store)

  return <>
    {
      Object.keys(getMountains).map(i => <Route exact path={getMountains[i].link}>
        <Swiper>
          <SwiperSlide>
            <img src={getMountains[i].photos.first} alt='slide 1'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={getMountains[i].photos.second} alt='slide 2'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={getMountains[i].photos.third} alt='slide 3'/>
          </SwiperSlide>
        </Swiper>
      </Route>
      )
    }
  </>
}

export default SliderConnectStore