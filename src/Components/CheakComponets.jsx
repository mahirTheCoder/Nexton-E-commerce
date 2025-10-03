import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";
import CommonHead from "./CommonHead";
import RecCArt from "./RecCArt";

const CheakComponets = () => {

  const [allproducts, setAllproducts] = useState ([]);

  useEffect (() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllproducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(allproducts);


  const [img, setImg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq5cxkSyzBP_L8bkUUH1A_QIJaKeyjZjkPQ&s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftJ8OKRqa4P_nZbqMbOvHcW5uaNUXVYRphw&s"
  );

  return (
    <>
      <section id="cheakout " className="mt-10">
        <div className="container">
          {/* ---------------img and cart part ------------- */}
          <div className="img-and-content flex gap-10">
            {/* --------------img part------------- */}
            <div className="imgpart lg:w-[804px] h-[690px]  ">
              <div className="button-img flex justify-between">
                <div className="button flex flex-col">
                  <button
                    onClick={() => {
                      setImg(
                        "https://cdn.pixabay.com/photo/2016/03/09/09/43/cat-1245963_640.jpg"
                      );
                    }}
                    className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]"
                  >
                    <img
                      className="w-full h-full"
                      src={
                        "https://cdn.pixabay.com/photo/2016/03/09/09/43/cat-1245963_640.jpg"
                      }
                      alt="img"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setImg(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJzgV54PKtzJDLmBUBUmcSic4hoeGXsMuOA&s"
                      );
                    }}
                    className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]"
                  >
                    <img
                      className="w-full h-full"
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJzgV54PKtzJDLmBUBUmcSic4hoeGXsMuOA&s"
                      }
                      alt="img"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setImg(
                        "https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_640.jpg"
                      );
                    }}
                    className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]"
                  >
                    <img
                      className="w-full h-full"
                      src={
                        "https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_640.jpg"
                      }
                      alt="img"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setImg(
                        "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_640.jpg"
                      );
                    }}
                    className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]"
                  >
                    <img
                      className="w-full h-full"
                      src={
                        "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_640.jpg"
                      }
                      alt="img"
                    />
                  </button>
                </div>
                <div className="img w-[640px] h-[690px]  overflow-hidden rounded-[16px]  ">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt="img"
                  />
                </div>
              </div>
            </div>

            {/* --------------cart part------------- */}

            <div className="addt-to-cart w-[460px] h-[463px] bg-[#FFF]] rounded-[16px] border border-[#E5E7EB] p-10 ">
              <div className="review-part  flex justify-between">
                <div className="star flex gap-1.5">
                  <div className="text-base font-semibold font-poppins text-[#4B5563] flex gap-1.5">
                    {" "}
                    <FaStar className="text-[#FBBF24]" /> 4.9
                  </div>
                  <p className="text-base font-semibold font-poppins text-[#4B5563] underline ">
                    142 reviews
                  </p>
                </div>
                <div className="price">
                  <h2 className="text-2xl font-semibold font-poppins text-primery">
                    $169.99
                  </h2>
                  <p className="text-sm font-medium font-poppins text-[#4B5563]">
                    {" "}
                    <del>$199.99 </del>{" "}
                  </p>
                </div>
              </div>



          {/* ---------------content ba details part----------- */}
          <div className="details-part mt-26 mb-24">
            <h1 className="lg:text-[36px] text-lg font-semibold font-poppins text-primery mb-4 ">
              Black Automatic Watch
            </h1>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563] mb-15 ">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>

            {/* ---------febric part-------- */}

            <h2 className="lg:text-[24px] text-lg font-semibold font-poppins text-primery mb-1 ">
              Fabric + Care
            </h2>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563]  ">
              Material: Soft wool blend
            </p>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563]  ">
              Color: Various
            </p>

            {/* ---------sale performance  part-------- */}

            <h2 className="lg:text-[24px] text-lg font-semibold font-poppins text-primery mt-15 mb-1 ">
              Sale performance
            </h2>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563]  ">
              Sales: 0
            </p>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563]  ">
              Review Count: -
            </p>
            <p className=" lg:w-[735px] text-4  font-normal font-poppins w-full text-[#4B5563]  ">
              Review Average: -
            </p>

            {/* ------------Keywords----------- */}
            <div className="Keyword-part">
              <h2 className="lg:text-[24px] text-lg font-semibold font-poppins text-primery mt-15 mb-1 ">
                Keywords
              </h2>
              <div className="all-fashion flex gap-2 flex-wrap ">
                <Link
                  to={"/"}
                  className="flex justify-center items-center border border-[#E5E7EB] w-[127px] h-[32px] bg-[#FFF] rounded-[16px] text-xs font-poppins font-normal text-[#4B5563] gap-1 "
                >
                  <BsStars />
                  men's fashion
                </Link>
                <Link
                  to={"/"}
                  className="flex justify-center items-center border border-[#E5E7EB] w-[104px] h-[32px] bg-[#FFF] rounded-[16px] text-xs font-poppins font-normal text-[#4B5563] gap-1 "
                >
                  <BsStars />
                  winter hat
                </Link>
                <Link
                  to={"/"}
                  className="flex justify-center items-center border border-[#E5E7EB] w-[153px] h-[32px] bg-[#FFF] rounded-[16px] text-xs font-poppins font-normal text-[#4B5563] gap-1 "
                >
                  <BsStars />
                  colorful accessory
                </Link>
                <Link
                  to={"/"}
                  className="flex justify-center items-center border border-[#E5E7EB] w-[143px] h-[32px] bg-[#FFF] rounded-[16px] text-xs font-poppins font-normal text-[#4B5563] gap-1 "
                >
                  <BsStars />
                  warm headwear
                </Link>
              </div>
            </div>
          </div>
           
           {/* -----------------api Recommended products--------- */}
           <div className="header mb-10">
            <CommonHead
              common1={"Recommended products."}
         
            />
          </div>
          <div className="slider-container">
            <div>
              <div className="recommended-items flex flex-wrap gap-10">
                {allproducts.slice(5, 9).map((item) => (
                  <RecCArt
                    key={item.id}
                    img={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    catagory={item.category}
                    discount={item.discountPercentage}
                    rating={item.rating}
                    stock={item.stock}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CheakComponets;
