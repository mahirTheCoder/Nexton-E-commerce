import React from "react";
import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png";
import hero4 from "../assets/Images/hero4.png";

const Hero = () => {
  return (
    <>
      <section id="Hero">
        <div className="container">
<div className="heroRow  w-full h-[98px] bg-[#FFF] rounded-[16px] border border-[#E5E7EB] flex justify-between items-center px-10 mt-13">
            {/* -------shipping------ */}
            <div className="shipping flex gap-5 items-center">
              <div className="img w-6 h-6">
                <img src={hero1} alt="hero1" />
              </div>
              <div className="content">
                <h2 className="text-xl text-primery font-medium font-poppins">
                  Free shipping
                </h2>
                <p className="text-sm text-[#4B5563] font-medium font-poppins">
                  On orders over $50.00
                </p>
              </div>
            </div>

            {/* -----------return--------- */}
            <div className="return flex gap-3">
              <div className="border-l-[3px] h-12.5 border-[#E5E7EB]"></div>
              <div className="shipping flex gap-5 items-center">
                <div className="img w-6 h-6">
                  <img src={hero2} alt="hero1" />
                </div>
                <div className="content">
                  <h2 className="text-xl text-primery font-medium font-poppins">
                    Very easy to return
                  </h2>
                  <p className="text-sm text-[#4B5563] font-medium font-poppins">
                    Just phone number
                  </p>
                </div>
              </div>
            </div>

      
        </div>
      </section>
    </>
  );
};

export default Hero;
