import React from "react";
import moment from 'moment';
import img from "../../../assets/home/featured.jpg";
import BannnerTitle from "../../banner/BannnerTitle";
import './featuredcss.css'
import { Link } from "react-router-dom";

const FeaturedItems = () => {
    const date = moment().format('LL');

  return (
    <div className="mb-20 featurenbackground bg-fixed text-white p-16">
      <div>
        <BannnerTitle
          mainText={"FROM OUR MENU"}
          smallText={"Check it out"}
        ></BannnerTitle>
      </div>
      <div className="md:flex md:justify-center md:gap-8 md:items-center md:mx-36 mb-14">
        <img src={img} alt="" className="w-[36rem]" />
        <div className="text-white flex flex-col gap-6">
            <h1 className="">{date}</h1>
            <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <Link to='/order'><button className="btn btn-outline border-0 border-b-4 text-white hover:bg-white hover:text-black">Order Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
