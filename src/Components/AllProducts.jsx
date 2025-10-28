import axios from "axios";
import React, { useEffect, useState } from "react";
import BredCrums from "./BredCrums";
import { useLocation } from "react-router";
import { Pagination } from "antd";
import RecCArt from "./RecCArt";

const AllProducts = () => {
  // ----------limit and skip with select example----------

  // products fetched from API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch once on mount
    axios
      .get(
        "https://dummyjson.com/products?limit=15&skip=10&select=title,price,thumbnail,discountPercentage,rating,stock"
      )
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  // ----------use location example----------
  const myLocation = useLocation();
  // console.log(myLocation.pathname.split("/")[1]);

  const currentpagepath = myLocation.pathname.split("/")[1];

  const onChangeItem = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (
    <>
      <section id="AllProdsucts">
        <div className="container">
          <div className="content ">
            <BredCrums pagename={"All-Product"} />
            <div className="cntn flex justify-between flex-wrap">
              {products.map((item) => (
                <RecCArt />
              ))}
            </div>

            <Pagination
              showSizeChanger
              onChange={onChangeItem}
              defaultCurrent={1}
              total={500}
              align="end"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
