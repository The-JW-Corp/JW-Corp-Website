import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectCards } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
import "swiper/css/effect-cards";

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">Our Projects</div>

      <div className="carousel-wrap">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide onDoubleClick={() => console.log("double click")}>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">ZIZI</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
