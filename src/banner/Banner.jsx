import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
  return (
    <>

<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='img h-[10rem] md:h-[400px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='img h-[10rem] md:h-[400px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f19216118883485.6092425f52680.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='img h-[10rem] md:h-[400px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/52f0ca83991227.5d4d5e813918e.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='img h-[10rem] md:h-[400px]' src="https://img.freepik.com/free-psd/black-friday-banner-with-discounts-3d-rendering_1419-2424.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='img h-[10rem] md:h-[400px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/2fd93699737217.5ef9be3dbda79.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

    </>
  )
}

export default Banner