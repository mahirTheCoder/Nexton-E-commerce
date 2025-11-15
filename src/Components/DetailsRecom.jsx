import React from "react";
import { FaStar } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";

const DetailsRecom = ({
  brandName,
  image,
  price,
  Accessories,
  discountPrice,
  rating,
  stock,
}) => {
  return (
    <>
      <div className="DetailsRecom">
        <div className="container">
          <div className="div w-[309px] h-[448px] rounded-[16px] relative group overflow-hidden duration-1000">
            <button className="w-10 h-10 bg-white text-xl absolute top-7 group-hover:right-7 right-[-50px] flex justify-center items-center rounded-full shadow-lg hover:bg-primery hover:text-white transition-all duration-700">
              <Link to={""}>
                <HiMiniShoppingBag />
              </Link>
            </button>
            {/* --------------img part-------- */}

            <div className="w-[309px] h-[360px] bg-slate-300 mb-3 rounded-[16px]">
              <img src={image} alt="img" />
            </div>
            {/* ----------prodict name and pricr ---- */}

            <div className=" flex justify-between items-center px-2 mb-0.5">
              <h2 className="text-base font-semibold font-poppins text-primery ">
                {brandName}
              </h2>
              <h2 className="text-base font-semibold font-poppins text-primery ">
                {price}
              </h2>
            </div>
            {/* ---------accesory discount price  */}

            <div className=" flex justify-between items-center px-2 mb-1">
              <h2 className="text-base font-normal font-poppins text-primery ">
                {Accessories}
              </h2>
              <h2 className="text-base font-normal font-poppins text-primery ">
                {discountPrice} %
              </h2>
            </div>
            {/* ----------star reviews------------ */}
            <div className="star-reviews">
              <div className="star flex gap-1">
                <button className="text-base font-normal font-poppins text-primery flex gap-1 ">
                  {" "}
                  <FaStar className="text-[#FBBF24]" /> {rating}
                </button>
                <p className="text-base font-normal font-poppins text-primery flex gap-1 ">
                  ({stock})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsRecom;
