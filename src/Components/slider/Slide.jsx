import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slide.css'
import { SwiperNavButtons } from './Swiperbtn';
import { Link } from 'react-router-dom';
import cloudimg from "../../Images/cloud123.jpg"
import cloudimg1 from "../../Images/migra.jpg"
import cloudimg2 from "../../Images/costtt.jpg"
import cloudimg3 from "../../Images/DevOps-FAQ.jpg"
import cloudimg4 from "../../Images/arcccc.jpg"
import cloudimg5 from "../../Images/infaa.png"

function Slide() {
  return (
    <>
        <Swiper className='swip'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={85}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg} alt='cloud consulting'></img>
            <h2>Cloud Consulting</h2>
            <Link to='/consulting'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg1} alt='cloud consulting'></img>
            <h2>Migration Process</h2>
            <Link to='/migration'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg2} alt='cloud consulting'></img>
            <h2>Cost optimization</h2>
            <Link to='/cost'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg3} alt='cloud consulting'></img>
            <h2>Architect Management</h2>
            <Link to='/arch'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg4} alt='cloud consulting'></img>
            <h2>DevOps</h2>
            <Link to='/devops'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="res-slide">
        <div className='card-slide'>
            <img src={cloudimg5} alt='cloud consulting'></img>
            <h2>IaC</h2>
            <Link to='/iac1'>Learn More</Link>
        </div>
      </SwiperSlide>
      <SwiperNavButtons />
    </Swiper>

    </>
  )
}

export default Slide
