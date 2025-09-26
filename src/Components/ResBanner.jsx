import React from "react";
import { Link } from "react-router";
import explore from '../assets/Images/hero-button.png'
import Slider from "react-slick";

const ResBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <nav className="lg:hidden block w-full expolore pt-5">
         <div className="slider-container">
      <Slider {...settings}>
        <div className="content pt-[163px] pb-[199px] bg-[#F8FAFC] px-6">
          <h2 className="text-sm font-medium font-poppins text-[#111827] mb-2">
            Starting from: $49.99
          </h2>
          <h1 className="text-[24px] font-semibold font-poppins text-primery mb-10">Exclusive collection for everyone</h1>
          <Link to={'/'}>
          <img src={explore} alt="expolore" />
          </Link>
        </div>
        
        <div className="content pt-[163px] pb-[199px] bg-[#F8FAFC] px-6">
          <h2 className="text-sm font-medium font-poppins text-[#111827] mb-2">
            Starting from: $49.99
          </h2>
          <h1 className="text-[24px] font-semibold font-poppins text-primery mb-10">Exclusive collection for everyone</h1>
          <Link to={'/'}>
          <img src={explore} alt="expolore" />
          </Link>
        </div>
        
       
      </Slider>
    </div>
      </nav>
    </>
  );
};

export default ResBanner;
