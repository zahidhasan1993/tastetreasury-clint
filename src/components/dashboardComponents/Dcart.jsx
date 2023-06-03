import React from "react";
import { TitleChange } from "../../customHooks/titleChange";
import BannnerTitle from "../banner/BannnerTitle";
import DcartTable from "./DcartTable";
import useCart from "../../customHooks/useCart";

const Dcart = () => {
  TitleChange("Cart | TasteTreasury");
  const items = useCart();
  const total = items.cart.reduce((sum,item) => item.price + sum,0 )
  console.log(total);
  return (
    <div className="w-full ">
      <BannnerTitle
        mainText="WANNA ADD MORE?"
        smallText="My Cart"
      ></BannnerTitle>
      <div className="md:flex md:justify-between">
        <h1 className="text-3xl font-bold">Total Orders : {items.cart.length}</h1>
        <h1 className="text-3xl font-bold">Total Price : ${total}</h1>
        <button className="btn btn-wide bg-[#D1A054] border-none hover:bg-amber-300 hover:text-white ">PAY</button>
      </div>
      <div className="mt-14">
        <div className="overflow-x-auto">
          <table className="table md:w-full">
            
            <thead>
              <tr>
                
                <th>Item Picture</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  items.cart.map(cart => <DcartTable key={cart._id} cart ={cart} refetch={items.refetch}></DcartTable>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dcart;
