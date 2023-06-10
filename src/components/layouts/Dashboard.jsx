import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { TitleChange } from "../../customHooks/titleChange";
import {
  FaCalendar,
  FaCartPlus,
  FaConnectdevelop,
  FaHome,
  FaList,
  FaMoneyBillAlt,
  FaPager,
  FaRegNewspaper,
  FaShopify,
  FaStackExchange,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../../customHooks/useCart";
import useAdmin from "../../customHooks/useAdmin";

const Dashboard = () => {
  TitleChange("Dashboard | TasteTreasury");
  const {admin} = useAdmin();
  // console.log(users);
  const {cart} = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center mx-10">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-16 w-80 h-full bg-[#D1A054] text-base-content">
          <h1 className="mb-16 text-3xl font-bold">TasteTreasury</h1>
          {
            admin ? <>
              <NavLink
            to="/dashboard/adminhome"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }
          >
            <FaHome></FaHome>
            <li>Admin Home</li>
          </NavLink>
          <NavLink to='/dashboard/additem' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaUtensils></FaUtensils> <li>Add Items</li>
          </NavLink>
          <NavLink to='/dashboard/manageitems' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaStackExchange></FaStackExchange> <li>Manage Items</li>
          </NavLink>
          
          <NavLink to='/dashboard/bookings' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaRegNewspaper></FaRegNewspaper> <li>Manage Bookings</li>
          </NavLink>
          <NavLink to='/dashboard/allusers' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaUsers></FaUsers> <li>All Users</li>
          </NavLink>
            </> : <>
              <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }
          >
            <FaHome></FaHome>
            <li>User Home</li>
          </NavLink>
          <NavLink to='/dashboard/reservation' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaCalendar></FaCalendar> <li>Reservation</li>
          </NavLink>
          <NavLink to='/dashboard/paymenthistory' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaMoneyBillAlt></FaMoneyBillAlt> <li>Payment history</li>
          </NavLink>
          <NavLink to='/dashboard/cart' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaCartPlus></FaCartPlus> <li>My cart</li><sup className="badge badge-secondary ml-1">+{cart.length}</sup>
          </NavLink>
          <NavLink to='/dashboard/review' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaRegNewspaper></FaRegNewspaper> <li>Add review</li>
          </NavLink>
          <NavLink to='/dashboard/booking' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaPager></FaPager> <li>My booking</li>
          </NavLink>
            </>
          }
          <div className="divider"></div>
          <NavLink to='/' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaHome></FaHome> <li>Home</li>
          </NavLink>
          <NavLink to='/menu' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaList></FaList> <li>Menu</li>
          </NavLink>
          <NavLink to='/order' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaShopify></FaShopify> <li>Shop</li>
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex mb-4 text-xl items-center gap-2"
                : "flex mb-4 text-xl items-center gap-2"
            }>
            <FaConnectdevelop></FaConnectdevelop> <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
