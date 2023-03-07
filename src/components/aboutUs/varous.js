import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/bundle";
//import "swiper/css/free-mode";
//import "bootstrap/dist/css/bootstrap.min.css";
import Cardi from "./aboutCards";
//import circle from "../../assets/images/circle.jpg";

const AboutSlider = () => {
  return (
    <div className="container  ">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="aboutSwiper"
        breakpoints={{
          0: {
            slidesPerview: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerview: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerview: 3,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <Cardi
            data={{
              //imgA: circle,
              nameA: "Jesus",
              biografiA: "las palabras se van rapido",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cardi
            data={{
              //imgA: circle,
              nameA: "Jesus",
              biografiA: "las palabras se van rapido",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cardi
            data={{
              //imgA: circle,
              nameA: "Jesus",
              biografiA: "las palabras se van rapido",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cardi
            data={{
              //imgA: circle,
              nameA: "Jesus",
              biografiA: "las palabras se van rapido",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cardi
            data={{
              //imgA: circle,
              nameA: "Jesus",
              biografiA: "las palabras se van rapido",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
//export default AboutSlider;
