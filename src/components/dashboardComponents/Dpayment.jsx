import React from "react";
import { TitleChange } from "../../customHooks/titleChange";
import { loadStripe } from "@stripe/stripe-js";
import BannnerTitle from "../banner/BannnerTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../customHooks/useCart";

const Dpayment = () => {
  TitleChange("Payment | TasteTreasury");
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const {cart} = useCart();
  const amount = cart.reduce((sum,item) => item.price + sum , 0);
  const price = parseFloat(amount.toFixed(2));

  // console.log(price);

  return (
    <div>
      <BannnerTitle
        smallText="payment"
        mainText="Take Your Food to Your Mouth"
      ></BannnerTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Dpayment;
