import React, { useEffect, useState } from "react";
import CommonHead from "./CommonHead";
import FashinCart from "./FashinCart";
import axios from "axios";

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
          <div className="api-part flex flex-wrap gap-10">
            {showAll.map((item) => (
              <FashinCart
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
      </section>
    </>
  );
};

export default FashionPart;
