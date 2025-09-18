import React from "react";
import { Link } from "react-router";

const Cart = () => {
  return (
    <>
      <section id="Cart" className="w-full h-screen absolute top-0 left-0">
        {/* -------side click-------- */}
        <div className="w-full h-screen bg-[#0000004e]"></div>

        {/* ----------slid cart--------- */}
        <div className="w-[400px] h-screen bg-white absolute top-0 right-0 p-5">
          <h2 className="text-xl font-poppins font-medium text-[#000]">Cart</h2>

          {/* ---------cart items -------- */}
          <div className="w-full h-[700px] overflow-y-scroll">
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

        </div>
      </section>
    </>
  );
};

export default Cart;
