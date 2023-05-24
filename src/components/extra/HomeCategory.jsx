import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import BannnerTitle from "../banner/BannnerTitle";

const HomeCategory = () => {
  return (
    <div className="mb-20 md:mx-36 ">
      <BannnerTitle smallText={"From 11:00am to 10:00pm"} mainText={"ORDER ONLINE"}></BannnerTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:relative">
            <img src={slide1} alt="food salad" />
            <h1 className="uppercase md:text-3xl md:absolute md:bottom-10 md:right-[7rem] text-white -mt-14 md:-mt-0 font-thin">
              salad
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:relative">
            <img src={slide2} alt="food salad" />
            <h1 className="uppercase md:text-3xl md:absolute md:bottom-10 md:right-[7rem] text-white -mt-14 md:-mt-0 font-thin">
              Pizza
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:relative">
            <img src={slide3} alt="food salad" />
            <h1 className="uppercase md:text-3xl md:absolute md:bottom-10 md:right-[7rem] text-white -mt-14 md:-mt-0 font-thin">
              Soup
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:relative">
            <img src={slide4} alt="food salad" />
            <h1 className="uppercase md:text-3xl md:absolute md:bottom-10 md:right-[7rem] text-white -mt-14 md:-mt-0 font-thin">
              desert
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:relative">
            <img src={slide5} alt="food salad" />
            <h1 className="uppercase md:text-3xl md:absolute md:bottom-10 md:right-[7rem] text-white -mt-14 md:-mt-0 font-thin">
              salad
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCategory;
