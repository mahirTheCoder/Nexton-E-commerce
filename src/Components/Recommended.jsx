import React, { useEffect, useState } from "react";
import RecCArt from "./RecCArt";
import axios, { Axios } from "axios";
import CommonHead from "./CommonHead";
import Slider from "react-slick";

const Recommended = () => {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllproducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(allproducts);

  return (
    <>
      <section id="Recommended" className="Recommended mt-44">
        <div className="container">
          <div className="header mb-10">
            <CommonHead
              common1={"Recommendations."}
              common2={"Best matching products for you"}
            />
          </div>
          <div className="slider-container">
            <div>
              <div className="recommended-items flex flex-wrap gap-10">
                {allproducts.slice(0, 4).map((item) => (
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

export default Recommended;
