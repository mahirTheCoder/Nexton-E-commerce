import React from "react";
import CommonHead from "./CommonHead";
import FashinCart from "./FashinCart";

const FashionPart = () => {
  return (
    <>
      <section id="fashion" className="mt-[176px]">
        <div className="container">
          <div className="header-part mb-10">
           <CommonHead
              common1={"Best Sellers."}
              common2={"Best selling of the month"}
            />
          </div>
          <div className="api-part">
            <FashinCart />
          </div>
        </div>
      </section>
    </>
  );
};

export default FashionPart;
 