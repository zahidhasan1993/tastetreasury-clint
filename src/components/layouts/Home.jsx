import React, { useEffect } from "react";
import HomeBanner from "../banner/HomeBanner";
import { TitleChange } from "../../customHooks/titleChange";
import HomeCategory from "../extra/HomeCategory";
import HomeChefImage from "../extra/HomeChefImage";
import HomePopularItems from "../extra/HomePopularItems";
import FeaturedItems from "../extra/featuredItem/FeaturedItems";
import Reviews from "../extra/Reviews";
import CallUs from "../extra/CallUs";
import ChefRecomends from "../extra/ChefRecomends";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  TitleChange("Home | TasteTreasury");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div data-aos="zoom-in-up">
        <HomeCategory></HomeCategory>
      </div>
      <div data-aos="fade-up">
        <HomeChefImage></HomeChefImage>
      </div>
      <div data-aos="zoom-out-up">
        <HomePopularItems></HomePopularItems>
      </div>
      <div data-aos="flip-up">
        <CallUs></CallUs>
      </div>
      <div data-aos="zoom-in-down" className="my-11">
        <ChefRecomends></ChefRecomends>
      </div>
     
        <FeaturedItems></FeaturedItems>
      
      <div data-aos="zoom-out-down">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
