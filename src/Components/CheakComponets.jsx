import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router";

const CheakComponets = () => {
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

            <div className="addt-to-cart w-[460px] h-[463px] bg-amber-200 "></div>
          </div>

          {/* ---------------content ba details part----------- */}
          <div className="details-part mt-26">
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
              <div className="all-fashion">
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
        </div>
      </section>
    </>
  );
};

export default CheakComponets;
