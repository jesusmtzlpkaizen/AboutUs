import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cardi from "./aboutCards";
import circle from "../../assets/images/circle.jpg";

const AboutSlider = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="CambioTam">
          <SwiperSlide>
            <img src={circle} alt="circle" />
          </SwiperSlide>
        </div>

        <SwiperSlide>
          <img src={circle} alt="circle" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={circle} alt="circle" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={circle} alt="circle" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={circle} alt="circle" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default AboutSlider;
