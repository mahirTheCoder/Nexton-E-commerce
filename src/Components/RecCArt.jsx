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
     
    </>
  );
};

export default RecCArt;
