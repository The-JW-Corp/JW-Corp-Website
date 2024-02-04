import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

function Carousel() {
  return (
    <div className="carousel-container">
      Our Projects
      <div className="carousel-wrap">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide onDoubleClick={() => console.log("double click")}>
            <div className="carousel-slide-container">
              <div className="carousel-slide-wrap">Slide 1</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
