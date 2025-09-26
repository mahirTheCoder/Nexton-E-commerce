import React, { useState } from "react";
import favicon from "../assets/Images/favicon.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./Cart";
const Responsivenav = () => {
  const [showCartt, setShowCArtt] = useState(false);
  const [showCart, setShowCArt] = useState(false);

  return (
    <>
      <nav className="lg:hidden block">
        <div className="container px-4">
          <div className="res-row flex justify-between items-center pt-5">
            <div className="logo">
              <Link className="w-6" to={"/"}>
                <img src={favicon} alt="logo" />
              </Link>
            </div>


            <div className="search-buton rounded-[9999px]  bg-[#F8F8F8] flex gap-2 items-center  w-[200px] h-[36px] ">
              <button className="pl-4">
                <CiSearch className="text-sm text-primery" />
              </button>
              <input
                type="text"
                placeholder="Search in products..."
                className="text-sm font-normal font-poppins text-primery border-none outline-none"
              />
            </div>


            {/* -------------menu button---------- */}

            <div onClick={()=>setShowCArtt(!showCartt) } className="buttons text-2xl text-primery duration-1000">
              <IoMdMenu />
            </div>
          </div>
        </div>


        {showCartt && (
          <div className="cart-button w-full bg-white py-4 px-4 flex justify-center  items-center gap-2">
            <button>
              <RiUser3Line className="text-xl text-primery" />
            </button>
            <button onClick={()=>setShowCArt(true)} >
              <IoCartOutline className="text-xl text-primery" />
            </button>
          </div>
        )}

        <Cart isOpen={showCart} closeCart={() => setShowCArt(false)} />

        
      </nav>
    </>
  );
};

export default Responsivenav;
