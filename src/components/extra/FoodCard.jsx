import React, { useContext } from "react";
import { DataProvider } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { image, recipe, name, price, _id } = food;
  const { user } = useContext(DataProvider);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    const food = {food_id: _id,image,name,price,email: user.email}
    if (user) {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food is added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
      Swal.fire({
        title: 'For order food please login !!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
    console.log(item);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Foods" className="w-full h-[18rem]" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="bg-black text-white py-2 px-4 rounded absolute top-4 right-4">
          ${price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(food)}
            className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 hover:border-none"
          >
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
