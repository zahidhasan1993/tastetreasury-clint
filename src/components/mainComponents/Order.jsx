import React, { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import MenuCover from "../banner/MenuCover";
import { TitleChange } from "../../titleChange";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../customHooks/useMenu";
import FoodCard from "../extra/FoodCard";
import './order.css'
import { useParams } from "react-router-dom";

const Order = () => {
  TitleChange("Order | TasteTreasury");
  const categories = ['salad','pizza','soup','dessert','drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [foods] = useMenu();
  

  console.log(category);

  const drinks = foods.filter((food) => food.category === "drinks");
  const dessertFoods = foods.filter((food) => food.category === "dessert");

  const pizzas = foods.filter((food) => food.category === "pizza");

  const salads = foods.filter((food) => food.category === "salad");

  const soup = foods.filter((food) => food.category === "soup");

  return (
    <div>
      <MenuCover
        img={orderImg}
        name="Order Now"
        msg="Would you like to try a dish"
      ></MenuCover>
      <div className="my-32 text-center ">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="font-bold text-xl py-8">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {salads.map((food) => (
                <FoodCard key={food._id} food={food}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {pizzas.map((food) => (
                <FoodCard key={food._id} food={food}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {soup.map((food) => (
                <FoodCard key={food._id} food={food}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {dessertFoods.map((food) => (
                <FoodCard key={food._id} food={food}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {drinks.map((food) => (
                <FoodCard key={food._id} food={food}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
