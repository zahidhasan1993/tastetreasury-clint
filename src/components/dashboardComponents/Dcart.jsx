import React from "react";
import { TitleChange } from "../../customHooks/titleChange";
import BannnerTitle from "../banner/BannnerTitle";
import DcartTable from "./DcartTable";
import useCart from "../../customHooks/useCart";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Dcart = () => {
  TitleChange("Cart | TasteTreasury");
  const {cart,refetch} = useCart();
  // const navigate = useNavigate();
  const total = cart?.reduce((sum,item) => item.price + sum,0 )
  // console.log(total);
  const finalTotal = parseFloat(total).toFixed(2)
  console.log(cart);
  return (
    <div className="w-full ">
      <BannnerTitle
        mainText="WANNA ADD MORE?"
        smallText="My Cart"
      ></BannnerTitle>
      <div className="md:flex md:justify-between">
        <h1 className="text-3xl font-bold">Total Orders : {cart?.length}</h1>
        <h1 className="text-3xl font-bold">Total Price : ${finalTotal}</h1>
        <Link to='/dashboard/payment' className="btn btn-wide bg-[#D1A054] border-none hover:bg-amber-300 hover:text-white ">PAY</Link>
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
                  cart?.map(cart => <DcartTable key={cart._id} cart ={cart} refetch={refetch}></DcartTable>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dcart;
