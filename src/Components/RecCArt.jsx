import React from "react";
import CommonHead from "./CommonHead";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const RecCArt = ({img , title , price , catagory ,discount,  rating , stock }) => {
  return (
    <>
    

      <div className="recommenmded-content w-[344px] h-[448px]">
        <div className="img-part w-full h-[347px] bg-gray-300 rounded-[16px] relative mb-5">
          <FaCartPlus className="text-xl absolute top-5 right-5" />

          <img src={img} alt="img" />
        </div>
        <div className="title-price flex justify-between mb-1">
          <h2 className="text-base font-semibold font-poppins text-primery ">{title}</h2>
          <h2 className="text-base font-semibold font-poppins text-primery ">${price}</h2>
        </div>
        <div className="accesoris flex justify-between mb-4">
          <p className="text-sm font-normal font-poppins text-[#4B5563]">{catagory}</p>
          <p className="text-sm font-normal font-poppins text-[#4B5563]">{discount}</p>
        </div>
        <div className="accesoris flex gap-2 ">
          <div className="star flex gapp-1">
            <FaStar className="text-xl text-[#FBBF24]"/>
             <p className="text-sm font-normal font-poppins text-[#4B5563]">{rating}</p>
          </div>
         <p className="text-sm font-normal font-poppins text-[#4B5563]">({stock})</p>
        </div>
      </div>
    </>
  );
};

export default RecCArt;
