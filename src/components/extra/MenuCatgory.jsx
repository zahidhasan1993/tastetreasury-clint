import React from "react";
import { Link } from "react-router-dom";
import MenuSection from "./MenuSection";

const MenuCatgory = ({ foods, title }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-16 ">
        {foods.map((food) => (
          <MenuSection key={food._id} food={food}></MenuSection>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-16 md:col-span-2 w-full">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </>
  );
};

export default MenuCatgory;
