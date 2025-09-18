import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./Cart";
import { Link } from "react-router";

const Navbar = () => {
const [showCart , setShowCArt ] = useState (false)


  return (
    <>
      <section id="Navbar">
        <div className="container">
          <nav>
            <div className="nav-row flex justify-between py-7">

              {/* -------------logo part---------- */}
              <div className="logo">
                <Link to={'/'}>
                <img src={logo} alt="logoImg" />
                </Link>
              </div>


              {/* -----------input search------------- */}
              <div className="search w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex gap-2 items-center px-6">
                <CiSearch className="text-xl text-[#4B5563]" />

                <input
                  type="text"
                  placeholder="Search in products..."
                  className="text-[#4B5563] w-full border-none outline-none font-poppins"
                />
              </div>

              {/* ------------------cart buttons------------- */}
              <div className="buttons flex gap-4.5">
                <button>
                  <RiUser3Line className="text-2xl text-[#4B5563] " />
                </button>
                <button onClick={()=> setShowCArt(true)} className=" relative">
                  <IoCartOutline className="text-2xl text-[#4B5563]  " />
                  <div className="round w-5 h-5 bg-[#0EA5E9] rounded-4xl flex justify-center items-center text-sm font-poppins font-normal text-[#FFF]  absolute top-1 right-[-9px]">
                    0
                  </div>
                </button>
              </div>
            </div>
     
              <Cart isOpen={showCart} closeCart={()=>setShowCArt(false)} />

          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
