import React from "react";
import { TitleChange } from "../../titleChange";
import MenuCover from "../banner/MenuCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import BannnerTitle from "../banner/BannnerTitle";
import useMenu from "../../customHooks/useMenu";
import MenuSection from "../extra/MenuSection";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
  TitleChange("Menu | TasteTreasury");
  const [foods] = useMenu();

  const offeredFoods = foods.filter((food) => food.category === "offered");
  const dessertFoods = foods.filter((food) => food.category === "dessert");
  const dessertLimit = dessertFoods.slice(0,4);
  const pizzas = foods.filter((food) => food.category === "pizza");
  const pizzasLimit = pizzas.slice(0,4);
  const salads = foods.filter((food) => food.category === "salad");
  const saladsLImit = salads.slice(0,4);
  const soup = foods.filter((food) => food.category === "soup");
  const soupLimit = soup.slice(0,4);


  return (
    <div>
      <MenuCover
        img={bannerImg}
        name="our menu"
        msg="would you like to try some dishes"
      ></MenuCover>
      <BannnerTitle
        mainText="TODAY'S OFFER"
        smallText="Don't miss"
      ></BannnerTitle>
      <div className="my-28 md:mx-36 text-center">
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          {offeredFoods.map((food) => (
            <MenuSection key={food._id} food={food}></MenuSection>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-16">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    <MenuCover img={dessertImg} name="desserts" msg="Indulge in a world of sweetness, where desserts reign supreme."></MenuCover>
    <div className="my-28 md:mx-36 text-center">
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          {dessertLimit.map((food) => (
            <MenuSection key={food._id} food={food}></MenuSection>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-16">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCover img={pizzaImg} name="Pizza" msg=" A heavenly combination of melted cheese, savory toppings."></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          {pizzasLimit.map((food) => (
            <MenuSection key={food._id} food={food}></MenuSection>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-16">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCover img={saladImg} name="Salad" msg=" A refreshing medley of vibrant colors, crisp textures."></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          {saladsLImit.map((food) => (
            <MenuSection key={food._id} food={food}></MenuSection>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-16">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <MenuCover img={soupImg} name="Soup" msg="  A comforting elixir that warms the soul."></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          {soupLimit.map((food) => (
            <MenuSection key={food._id} food={food}></MenuSection>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-16">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>

    </div>
  );
};

export default Menu;
