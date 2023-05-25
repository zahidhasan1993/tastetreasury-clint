import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaBook } from "react-icons/fa";
import BannnerTitle from "../banner/BannnerTitle";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="mb-20 md:mx-36">
      <BannnerTitle
        smallText={"What Our Clients Say"}
        mainText={"TESTIMONIALS"}
      ></BannnerTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-7"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-24 flex flex-col justify-center items-center gap-6">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaBook className="text-8xl"></FaBook>
                <p>{review.details}</p>
                <h1 className="text-[#CD9003] text-2xl font-bold">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
