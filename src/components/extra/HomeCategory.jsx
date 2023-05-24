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

const HomeCategory = () => {
  return (
    <div className="md:mx-36 ">
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
          <img src={slide1} alt="food salad" />
          <h1 className="uppercase md:text-3xl -mt-16  text-white font-thin">
            salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="food salad" />
          <h1 className="uppercase md:text-3xl -mt-16  text-white font-thin">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="food salad" />
          <h1 className="uppercase md:text-3xl -mt-16 text-white font-thin">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="food salad" />
          <h1 className="uppercase md:text-3xl -mt-16  text-white font-thin">
            desert
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="food salad" />
          <h1 className="uppercase md:text-3xl -mt-16 text-white font-thin">
            salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCategory;
