import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useFetch from "../../customHooks/useFetch";

const Navbar = () => {
  const { user, userSignOut } = useContext(DataProvider);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const cartItemsLength = useFetch("http://localhost:5000/cart").length;
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#EEFF25] mx-2" : "hover:text-[#EEFF25] mx-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#EEFF25] mx-2" : "hover:text-[#EEFF25] mx-2"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-[#EEFF25] mx-2" : "hover:text-[#EEFF25] mx-2"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "text-[#EEFF25] mx-2" : "hover:text-[#EEFF25] mx-2"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/order/salad"
        className={({ isActive }) =>
          isActive ? "text-[#EEFF25] mx-2" : "hover:text-[#EEFF25] mx-2"
        }
      >
        Order Now
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    userSignOut();
  };
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl text-white">
          TasteTreasury
        </p>
      </div>
      <div className="navbar-end hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
        <div className="mx-2">
          <button className="btn btn-ghost">
            <FaShoppingCart className="text-2xl"></FaShoppingCart>
            <sup className="badge badge-secondary ml-1">{cartItemsLength}</sup>
          </button>
        </div>
        {hover ? <p className="font-bold mr-2">{user.displayName}</p> : <></>}
        {user ? (
          <>
            <div
              className="avatar online mr-2"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#E8E8E8] text-[#BB8506] border-none md:ml-8"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
