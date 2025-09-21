import React from "react";
import CommonHead from "./CommonHead";

const RecCArt = () => {
  return (
    <>
      <CommonHead
        common1={"Recommendations."}
        common2={"Best matching products for you"}
      />

      <div className="recommenmded-content w-[344px] h-[448px] mt-10">
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
        <div className="accesoris flex ">
          <div className="star">
            
          </div>
          <p className="text-sm font-normal font-poppins text-[#4B5563]">$199.99</p>
        </div>
      </div>
    </>
  );
};

export default RecCArt;
