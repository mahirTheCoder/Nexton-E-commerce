import React from "react";
import CommonHead from "./CommonHead";

const RecCArt = () => {
  return (
    <>
      <CommonHead
        common1={"Recommendations."}
        common2={"Best matching products for you"}
      />

      <div className="recommenmded-content w-[344px] h-[448px]">
        <div className="img-part w-full h-[347px] bg-gray-300 rounded-[16px] mt-5">
          <img src={""} alt="img" />
        </div>
        

      </div>
    </>
  );
};

export default RecCArt;
