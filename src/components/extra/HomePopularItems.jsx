import React from "react";
import BannnerTitle from "../banner/BannnerTitle";
import MenuSection from "./MenuSection";
import useMenu from "../../customHooks/useMenu";
import { Link } from "react-router-dom";

const HomePopularItems = () => {
  const [data] = useMenu();
  const popularFood = data.filter((food) => food.category === "popular");

  return (
    <div className="my-24 md:mx-36 text-center">
      <div>
        <BannnerTitle
          mainText={"FROM OUR MENU"}
          smallText={"Check it out"}
        ></BannnerTitle>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-16">
        {popularFood.map((item) => (
          <MenuSection key={item._id} food={item}></MenuSection>
        ))}
      </div>
      <Link to="/order/salad">
        <button className="btn btn-outline border-0 border-b-4 mt-8">
          VIEW FULL MENU
        </button>
      </Link>
    </div>
  );
};

export default HomePopularItems;
