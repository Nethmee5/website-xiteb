import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"
import "../Carousel/Carousel.scss";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// install Swiper modules
// SwiperCore.use([Pagination,Navigation]);
import { MdLockOpen } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaHandHoldingUsd  } from "react-icons/fa";
import { SlKey} from "react-icons/sl";
import { BsCheck2Circle } from "react-icons/bs";
import { BiChat } from "react-icons/bi";



export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);



  return (
    <>
    <div className="carousel-container">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <MdLockOpen />
          </div>
          <div className="slide-name">ONLINE BANKING</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <ImLocation />
          </div>
          <div className="slide-name">LOCATE US</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <SlKey />
          </div>
          <div className="slide-name">ACCOUNTS</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <FaHandHoldingUsd />
          </div>
          <div className="slide-name">LOANS & ADVANCES</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <BsCheck2Circle />
          </div>
          <div className="slide-name">COMPLIANCE</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-icon">
            <BiChat />
          </div>
          <div className="slide-name">CONTACT US</div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
