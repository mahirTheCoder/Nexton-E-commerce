import React from "react";
import logo from "../assets/Images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <section id="Navbar">
        <div className="container">
          <div className="navRow flex justify-between py-7">
            <div className="logo">
              <img src={logo} alt="logoImg" />
            </div>
            <div className="search w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex gap-2 items-center px-6">
              <CiSearch className="text-xl text-[#4B5563]" />

              <input
                type="text"
                placeholder="Search in products..."
                className="text-[#4B5563] w-full border-none outline-none font-poppins"
              />
            </div>
            <div className="buttons flex gap-4.5">
              <button>
                <RiUser3Line className="text-2xl text-[#4B5563] " />
              </button>
              <button className=" relative">
                <IoCartOutline className="text-2xl text-[#4B5563]  " />
                <div className="round w-5 h-5 bg-[#0EA5E9] rounded-4xl flex justify-center items-center text-sm font-poppins font-normal text-[#FFF]  absolute top-1 right-[-9px]">
                  3
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
