import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { FaLongArrowAltRight } from "react-icons/fa";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <section id="slider" className="mt-[88px]">
        <div className="container">
         <div className="header flex mb-10">
          <h2 className="text-[36px] font-semibold font-poppins text-primery ">Start exploring.</h2>
          <h2 className="text-[36px] font-semibold font-poppins text-[#4B5563] ">Good things are waiting for you</h2>
         </div>
        <div className="slider-container">
          <Slider {...settings}>


            <div>
              <div className="w-[418px] h-[132px] border  border-[#E5E7EB] rounded-[16px] flex items-center justify-between px-10 ">
                <div className="part1">
                  <h2 className="text-2xl font-medium text-primery font-poppins">
                    For Men's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-poppins">
                    Starting at $24
                  </p>
                </div>
                <div className="par2 flex gap-5">
                  <div className="border-l-[3px] h-8 border-[#E5E7EB]"></div>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#4B5563] font-normal font-poppins">
                      Shop Now
                    </p>
                    <FaLongArrowAltRight className="text-base text-[#4B5563]" />
                  </div>
                </div>
              </div>
            </div>


            <div>
              <div className="w-[418px] h-[132px] border border-[#E5E7EB] rounded-[16px] flex items-center justify-between px-10 ">
                <div className="part1">
                  <h2 className="text-2xl font-medium text-primery font-poppins">
                    For Women's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-poppins">
                    Starting at $19
                  </p>
                </div>
                <div className="par2 flex gap-5">
                  <div className="border-l-[3px] h-8 border-[#E5E7EB]"></div>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#4B5563] font-normal font-poppins">
                      Shop Now
                    </p>
                    <FaLongArrowAltRight className="text-base text-[#4B5563]" />
                  </div>
                </div>
              </div>
            </div>


            <div>
              <div className="w-[418px] h-[132px] border border-[#E5E7EB] rounded-[16px] flex items-center justify-between px-10 ">
                <div className="part1">
                  <h2 className="text-2xl font-medium text-primery font-poppins">
                    Accessories
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-poppins">
                    Explore accessories
                  </p>
                </div>
                <div className="par2 flex gap-5">
                  <div className="border-l-[3px] h-8 border-[#E5E7EB]"></div>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#4B5563] font-normal font-poppins">
                      Shop Now
                    </p>
                    <FaLongArrowAltRight className="text-base text-[#4B5563]" />
                  </div>
                </div>
              </div>
            </div>


            <div>
              <div className="w-[418px] h-[132px] border border-[#E5E7EB] rounded-[16px] flex items-center justify-between px-10 ">
                <div className="part1">
                  <h2 className="text-2xl font-medium text-primery font-poppins">
                    For Men's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-poppins">
                    Starting at $24
                  </p>
                </div>
                <div className="par2 flex gap-5">
                  <div className="border-l-[3px] h-8 border-[#E5E7EB]"></div>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#4B5563] font-normal font-poppins">
                      Shop Now
                    </p>
                    <FaLongArrowAltRight className="text-base text-[#4B5563]" />
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <div className="w-[418px] h-[132px] border border-[#E5E7EB] rounded-[16px] flex items-center justify-between px-10 ">
                <div className="part1">
                  <h2 className="text-2xl font-medium text-primery font-poppins">
                    For Women's
                  </h2>
                  <p className="text-sm text-[#4B5563] font-normal font-poppins">
                    Starting at $19
                  </p>
                </div>
                <div className="par2 flex gap-5">
                  <div className="border-l-[3px] h-8 border-[#E5E7EB]"></div>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-[#4B5563] font-normal font-poppins">
                      Shop Now
                    </p>
                    <FaLongArrowAltRight className="text-base text-[#4B5563]" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        </div>
      </section>
    </>
  );
};

export default SimpleSlider;
