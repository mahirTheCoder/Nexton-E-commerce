import React from "react";
import favicon from "../assets/Images/favicon.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

const Responsivenav = () => {
  return (
    <>
      <nav className="lg:hidden block">
        <div className="container px-6">
          <div className="res-row mb-10 flex justify-between items-center py-5">
            <div className="logo">
              <Link className="w-6" to={"/"}>
                <img src={favicon} alt="logo" />
              </Link>
            </div>
            <div className="search-buton rounded-[9999px]  bg-[#F8F8F8] flex gap-2 items-center  w-[200px] h-[36px] ">
              <button className="pl-4">
                <CiSearch className="text-sm text-primery" />
              </button>
              <input type="text" placeholder="Search in products..."  className="text-sm font-normal font-poppins text-primery border-none outline-none"/>
            </div>
            <div className="buttons"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Responsivenav;
