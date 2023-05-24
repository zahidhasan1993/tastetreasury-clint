import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <Link>
        <li className="hover:text-[#EEFF25] mx-2">HOME</li>
      </Link>
      <Link>
        <li className="hover:text-[#EEFF25] mx-2">CONTACT US</li>
      </Link>
      <Link>
        <li className="hover:text-[#EEFF25] mx-2">DASHBOARD</li>
      </Link>
      <Link>
        <li className="hover:text-[#EEFF25] mx-2">OUR MENU</li>
      </Link>
      <Link>
        <li className="hover:text-[#EEFF25] mx-2">OUR SHOP</li>
      </Link>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white container mx-auto">
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
        <p className="btn btn-ghost normal-case text-xl text-white">TasteTreasury</p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
        <a className="btn bg-[#E8E8E8] text-[#BB8506] border-none ">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
