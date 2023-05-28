import React from "react";

const FoodCard = ({ food }) => {
  const { image, recipe, name, price } = food;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Foods" className="w-full h-[18rem]"/>
      </figure>
      <div className="card-body items-center text-center">
        <p className="bg-black text-white py-2 px-4 rounded absolute top-4 right-4">${price}</p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 hover:border-none"> Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
