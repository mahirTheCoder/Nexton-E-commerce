import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { Link } from "react-router";

const RecCArt = ({
  img,
  title,
  price,
  catagory,
  discount,
  rating,
  stock,
  DetailsClick,
  cardClick
}) => {
  return (
    <>
      <div className="recommenmded-content lg:w-[344px] lg:h-[448px] px-10 lg:px-0 mt-5 mb-5">
        <div className="img-part w-full lg:h-[347px] bg-gray-300 rounded-[16px] relative group overflow-hidden duration-1000 mb-5">
          <div>
            <button onClick={cardClick} className=" w-10 h-10 bg-white text-xl absolute top-7 group-hover:right-7 right-[-50px] flex justify-center items-center rounded-full shadow-lg hover:bg-primery hover:text-white transition-all duration-700">
              <Link to={""}>
                <FaCartPlus />
              </Link>
            </button>

            <div className=" w-10 h-10 bg-white text-xl absolute top-20 group-hover:right-7 right-[-50px] flex justify-center items-center rounded-full shadow-lg hover:bg-primery hover:text-white transition-all duration-700'>">
              <button onClick={DetailsClick}>
                <RiMenuSearchFill />
              </button>
            </div>
          </div>

          <img src={img} alt="img" />
        </div>
        <div className="title-price flex justify-between mb-1">
          <h2 className="text-base font-semibold font-poppins text-primery ">
            {title}
          </h2>
          <h2 className="text-base font-semibold font-poppins text-primery ">
            ${price}
          </h2>
        </div>
        <div className="accesoris flex justify-between mb-4">
          <p className="text-sm font-normal font-poppins text-[#4B5563]">
            {catagory}
          </p>
          <p className="text-sm font-normal font-poppins text-[#4B5563]">
            {discount}
          </p>
        </div>
        <div className="accesoris flex gap-2 ">
          <div className="star flex gapp-1">
            <FaStar className="text-xl text-[#FBBF24]" />
            <p className="text-sm font-normal font-poppins text-[#4B5563]">
              {rating}
            </p>
          </div>
          <p className="text-sm font-normal font-poppins text-[#4B5563]">
            ({stock})
          </p>
        </div>
      </div>
    </>
  );
};

export default RecCArt;
