import React from "react";
import { Link } from "react-router";
import fashionImg from '../assets/Images/fashionimg.png'

const Fashion = () => {
  return (
    <>
<section id="fashion px- ">
        <div className="container w-full lg:h-[437px] bg-[#F5F5F5] rounded-[24px] mt-30 mb-13 ">
          <div className="fasion-menu-row flex justify-between flex-wrap px-6 lg:px-0">


            {/* -----------test part-------- */}
            <div className="content pt-[94px] lg:pl-30">
              <p className="text-sm text-[#4B5563] font-poppins font-normal mb-3.5 ">
                100% Original Products
              </p>
              <h2 className="lg:w-[362px] lg:text-3xl  text-primery font-semibold font-poppins mb-6">
                The All New Fashion Collection Items
              </h2>
              <p  className="text-sm text-[#4B5563] font-poppins font-normal mb-6 ">Starting from: $59.99</p>
              <Link className="w-[144px] h-[52px] bg-primery text-white flex justify-center items-center rounded-4xl" to={'/AllProducts'}>Shop now</Link>
            </div>


            {/* -----------img part------- */}
            <div className="fashionImg lg:pr-24 pt-10 lg:pt-0 pb-6 lg:pb-0">
              <img src={fashionImg} alt="fasion img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fashion;
