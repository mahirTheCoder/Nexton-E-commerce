import React, { useEffect, useState } from "react";
import CommonHead from "./CommonHead";
import FashinCart from "./FashinCart";
import axios from "axios";
import Slider from "react-slick";

const FashionPart = () => {
  const [showAll, setShowAll] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setShowAll(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(showAll);
  }, [showAll]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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
          <div className="slider-container fashionSlider">
            <Slider {...settings}>
              {showAll.map((item) => (
                <div key={item.id}>
                  <FashinCart
                    img={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    catagory={item.category}
                    discount={item.discountPercentage}
                    rating={item.rating}
                    stock={item.stock}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FashionPart;
