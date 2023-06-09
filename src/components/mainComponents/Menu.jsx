import React from "react";
import { TitleChange } from "../../customHooks/titleChange";
import MenuCover from "../banner/MenuCover";
import bannerImg from "../../assets/menu/banner3.jpg";
import BannnerTitle from "../banner/BannnerTitle";
import useMenu from "../../customHooks/useMenu";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import MenuCatgory from "../extra/MenuCatgory";

const Menu = () => {
  TitleChange("Menu | TasteTreasury");
  const {items} = useMenu();

  const offeredFoods = items.filter((food) => food.category === "offered");
  const dessertFoods = items.filter((food) => food.category === "dessert");
  const dessertLimit = dessertFoods.slice(0, 4);
  const pizzas = items.filter((food) => food.category === "pizza");
  const pizzasLimit = pizzas.slice(0, 4);
  const salads = items.filter((food) => food.category === "salad");
  const saladsLImit = salads.slice(0, 4);
  const soup = items.filter((food) => food.category === "soup");
  const soupLimit = soup.slice(0, 4);

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
        <MenuCatgory foods={offeredFoods} title="offered"></MenuCatgory>
      </div>
      <MenuCover
        img={dessertImg}
        name="desserts"
        msg="Indulge in a world of sweetness, where desserts reign supreme."
      ></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <MenuCatgory foods={dessertLimit} title="dessert"></MenuCatgory>
      </div>
      <MenuCover
        img={pizzaImg}
        name="Pizza"
        msg=" A heavenly combination of melted cheese, savory toppings."
      ></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <MenuCatgory foods={pizzasLimit} title="pizza"></MenuCatgory>
      </div>
      <MenuCover
        img={saladImg}
        name="Salad"
        msg=" A refreshing medley of vibrant colors, crisp textures."
      ></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <MenuCatgory foods={saladsLImit} title="salad"></MenuCatgory>
      </div>
      <MenuCover
        img={soupImg}
        name="Soup"
        msg="  A comforting elixir that warms the soul."
      ></MenuCover>
      <div className="my-28 md:mx-36 text-center">
        <MenuCatgory foods={soupLimit} title="soup"></MenuCatgory>
      </div>
    </div>
  );
};

export default Menu;
