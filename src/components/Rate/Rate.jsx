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
import flag1 from "../assets/rate/flag1.png";
import "../Rate/Rate.scss";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={8}
        centeredSlides={true}
        spaceBetween={2}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
        <SwiperSlide className="box-1">
          <td>
            <tr>
              <img src={flag1} className="flag" alt="flag1" />
            </tr>
            <tr className="con-name">USA</tr>
          </td>
          <td>
            <tr className="vertical-line">|</tr>
          </td>
          <td>
            <tr className="rate1">Buy 370.09</tr>
            <tr className="rate2">Sell 360.91</tr>
          </td>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
