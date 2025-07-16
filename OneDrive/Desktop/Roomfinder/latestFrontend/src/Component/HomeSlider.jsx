import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';


import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (

    <>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
  <img
    src="https://images.alphacoders.com/117/thumb-1920-1172157.jpeg"
    alt="Slide"
    style={{
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    }}
  />
</SwiperSlide>
        
         <SwiperSlide>
            <img src='https://images6.alphacoders.com/649/thumb-1920-649957.jpg' alt='Slide'style={{
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    }} />
        </SwiperSlide>

      </Swiper>
    
    </>
  )

}



