import React, { useEffect, useState } from "react";
import BannnerTitle from "../banner/BannnerTitle";
import MenuSection from "./MenuSection";

const HomePopularItems = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularFood = data.filter(food => food.category === 'popular');
            setItems(popularFood);
        })
    },[])

    // console.log(items);
  return (
    <div className="my-24 md:mx-36">
      <div>
        <BannnerTitle
          mainText={"FROM OUR MENU"}
          smallText={"Check it out"}
        ></BannnerTitle>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8">
            {
                items.map(item => <MenuSection key={item._id} food={item}></MenuSection>)
            }
      </div>
    </div>
  );
};

export default HomePopularItems;
