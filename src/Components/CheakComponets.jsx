import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link, useParams } from "react-router";
import CommonHead from "./CommonHead";
import RecCArt from "./RecCArt";

const CheakComponets = () => {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllproducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);


  // -----------use params---------
  const myparams = useParams();

  // -----------single product api -----------
  const [singleproduct, setSingleproduct] = useState();
  const [image , setImage] = useState('https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg');

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${myparams.alus}`)
      .then((res) => setSingleproduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(singleproduct?.images?.[0]);


  return (
    <>
      <section id="cheakout " className="mt-10">
        <div className="container">
          {/* ---------------img and cart part ------------- */}
          <div className="img-and-content flex gap-10">
            {/* --------------img part------------- */}
            <div className="imgpart lg:w-[804px] h-[690px]  ">
              <div className="button-img flex justify-between">
                <div className="button flex flex-col gap-4">
                  {singleproduct?.images?.map((item, i) => (
                    <button onClick={() => setImage(item)}
                      key={i}
                      className="w-[140px] h-[158px] mb-4 overflow-hidden rounded-[16px]"
                    >
                      <img
                        src={item}
                        alt="product-img"
                        className="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
                <div className="img w-[640px] h-[690px]  overflow-hidden rounded-[16px]  ">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
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

              {/* -----------size part------------ */}
              <h2 className="text-base font-semibold font-poppins text-[#111827] mb-3 mt-8 ">
                Size: S
              </h2>

              <div className="all-sizes  flex justify-between">
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] text-base font-semibold font-poppins text-primery flex justify-center items-center rounded-[16px] hover:bg-[#0EA5E9] hover:text-white duration-700">
                  S
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] text-base font-semibold font-poppins text-primery flex justify-center items-center rounded-[16px] hover:bg-[#0EA5E9] hover:text-white duration-700">
                  M
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] text-base font-semibold font-poppins text-primery flex justify-center items-center rounded-[16px] hover:bg-[#0EA5E9] hover:text-white duration-700">
                  L
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] text-base font-semibold font-poppins text-primery flex justify-center items-center rounded-[16px] hover:bg-[#0EA5E9] hover:text-white duration-700">
                  XL
                </button>
                <button className="w-[72px] h-[44px] border border-[#E5E7EB] text-base font-semibold font-poppins text-primery flex justify-center items-center rounded-[16px] hover:bg-[#0EA5E9] hover:text-white duration-700">
                  2XL
                </button>
              </div>

              {/* -------------add to cart --------- */}
              <div
                className="both-items mt-9.5 flex items-center justify-between
               "
              >
                <div className="cart-update w-27.5 h-10 bg-[#E5E7EB] rounded-4xl flex justify-between items-center px-2 ">
                  <button className="w-6 h-6 bg-white border border-[#E5E7EB] flex justify-center items-center text-xs text-primery rounded-4xl ">
                    -
                  </button>
                  <h2 className="text-base font-medium font-poppins text-primery">
                    1
                  </h2>
                  <button className="w-6 h-6 bg-white border border-[#E5E7EB] flex justify-center items-center text-xs text-primery rounded-4xl ">
                    +
                  </button>
                </div>

                <Link
                  to={"/"}
                  className="cart-add w-[178px] h-[52px] bg-primery rounded-[9999px] flex  items-center justify-center text-white text-base font-medium font-poppins gap-2 "
                >
                  <HiMiniShoppingBag className="text-base" />
                  Add to cart
                </Link>
              </div>

              {/* ---------------discount & price--------------  */}
              <div className="discount-price flex justify-between mt-8 mb-2.5">
                <p className="text-base font-medium font-poppins text-primery">
                  $169.99 x 1
                </p>
                <p className="text-base font-medium font-poppins text-primery">
                  $169.99
                </p>
              </div>
              <div className="discount-price flex justify-between mt-2.5 mb-4">
                <p className="text-base font-medium font-poppins text-primery">
                  Tax estimate
                </p>
                <p className="text-base font-medium font-poppins text-primery">
                  $0
                </p>
              </div>

              {/* -------------underlime ---------- */}
              <hr className="text-[#E5E7EB] mb-4" />

              {/* --------------total----------- */}
              <div className="total flex justify-between ">
                <p className="text-base font-semibold font-poppins text-primery">
                  Total
                </p>
                <p className="text-base font-semibold font-poppins text-primery">
                  $169.99
                </p>
              </div>
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
            <CommonHead common1={"Recommended products."} />
          </div>
          <div className="slider-container">
            <div>
              <div className="recommended-items flex flex-wrap gap-10">
                {/* {allproducts.slice(5, 9).map((item) => (
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
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheakComponets;
