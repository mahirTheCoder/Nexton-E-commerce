import React from "react";
import { Link } from "react-router";

const Cart = ({ isOpen, closeCart }) => {
  return (
    <>
      <section
        id="Cart"
        className={`  h-screen absolute top-0  right-0 ${
          isOpen ? "w-full" : "w-0"
        } duration-1000 overflow-hidden z-20 `}
      >
        {/* -------side click-------- */}
        <div
          onClick={closeCart}
          className="w-full h-screen bg-[#0000004e]"
        ></div>

        {/* ----------slid cart--------- */}
        <div
          className={`lg:w-[400px] w-full h-screen bg-white absolute top-0 right-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } p-5 overflow-hidden z-20`}
        >
          
          <h2 className="text-xl font-poppins font-medium text-[#000]">Cart</h2>

          {/* ---------cart items -------- */}
          <div className="w-full lg:h-[90%] h-[70%] overflow-y-scroll">
            <div className="cardItems flex mt-5 gap-5">
              <div className="cardIMg w-15 h-15 bg-gray-300 rounded-xl "></div>
              <div className="cardItem">
                <h2 className="text-lg font-medium to-black font-poppins">
                  product Name
                </h2>
                <h2 className="text-base font-medium to-black font-poppins">
                  product price
                </h2>
              </div>
            </div>
            <div className="cardItems flex mt-5 gap-5">
              <div className="cardIMg w-15 h-15 bg-gray-300 rounded-xl "></div>
              <div className="cardItem">
                <h2 className="text-lg font-medium to-black font-poppins">
                  product Name
                </h2>
                <h2 className="text-base font-medium to-black font-poppins">
                  product price
                </h2>
              </div>
            </div>
            <div className="cardItems flex mt-5 gap-5">
              <div className="cardIMg w-15 h-15 bg-gray-300 rounded-xl "></div>
              <div className="cardItem">
                <h2 className="text-lg font-medium to-black font-poppins">
                  product Name
                </h2>
                <h2 className="text-base font-medium to-black font-poppins">
                  product price
                </h2>
              </div>
            </div>
    
          
          </div>

          {/* ----------chrakout button and product sum ----- */}
          <div className="subTotal w-[270px] flex justify-between py-2">
            <p className="text-base font-normal font-poppins text-black">
              SubTotal
            </p>
            <p className="text-base font-medium font-poppins text-black">
              $350
            </p>
          </div>

          {/* ----------cheakout Button */}
          <Link
            onClick={closeCart}
            className="lg:w-full w-[280px] py-3 bg-[#111827] inline-block text-base font-medium font-poppins  text-white text-center rounded-xl active:scale-[1.1] z-50"
            to={"/Checkout"}
          >
            Cheakout
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
