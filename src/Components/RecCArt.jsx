import React from "react";
import CommonHead from "./CommonHead";
import { FaStar } from "react-icons/fa6";

const RecCArt = () => {
  return (
    <>
    

      <div className="recommenmded-content w-[344px] h-[448px]">
        <div className="img-part w-full h-[347px] bg-gray-300 rounded-[16px] mb-5">
          <img src={"/"} alt="img" />
        </div>
        <div className="title-price flex justify-between mb-1">
          <h2 className="text-base font-semibold font-poppins text-primery ">Black Automatic Watch</h2>
          <h2 className="text-base font-semibold font-poppins text-primery ">$169.99</h2>
        </div>
        <div className="accesoris flex justify-between mb-4">
          <p className="text-sm font-normal font-poppins text-[#4B5563]">Accessories</p>
          <p className="text-sm font-normal font-poppins text-[#4B5563]">$199.99</p>
        </div>
        <div className="accesoris flex gap-2 ">
          <div className="star flex gapp-1">
            <FaStar className="text-xl text-[#FBBF24]"/>
             <p className="text-sm font-normal font-poppins text-[#4B5563]">4.9</p>
          </div>
         <p className="text-sm font-normal font-poppins text-[#4B5563]">(98)</p>
        </div>
      </div>
    </>
  );
};

export default RecCArt;
