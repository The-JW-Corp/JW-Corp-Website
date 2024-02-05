import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectCards } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
import "swiper/css/effect-cards";

function Carousel() {
  const [isMouseOnSwiper, setIsMouseOnSwiper] = useState(false);
  useEffect(() => {
    console.log(isMouseOnSwiper);
  }, [isMouseOnSwiper]);
  return (
    <div className="carousel-container">
      <div className="carousel-title">Our Projects</div>

      <div className="carousel-wrap">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          // loop={true}
          className="mySwiper"
        >
          <SwiperSlide
            onMouseEnter={() => setIsMouseOnSwiper(true)}
            onMouseLeave={() => setIsMouseOnSwiper(false)}
            onDoubleClick={() => console.log("double click")}
            className="swiper-slide-container"
          >
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Republike</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Philippe Gonet</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Sofan</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
