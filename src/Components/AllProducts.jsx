import axios from "axios";
import React, { useEffect, useState } from "react";
import BredCrums from "./BredCrums";
import { useLocation } from "react-router";
import { Pagination } from "antd";
import RecCArt from "./RecCArt";

const AllProducts = () => {
  // ----------limit and skip with select example----------

  // products fetched from API
  const [product, setProducts] = useState([]);

  // ----------- limi an dcurrent page er jonno hook-----
  const [limitPage, setLimitPage] = useState({ limit: 12, skip: 12 });

  useEffect(() => {
    // fetch once on mount
    axios
      .get(
        `https://dummyjson.com/products?limit=${limitPage.limit}&skip=${limitPage.skip}&select=title,price,thumbnail,discountPercentage,rating,stock,total`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [limitPage.limit, limitPage.skip]);

  console.log(product);

  // ----------use location example----------
  const myLocation = useLocation();
  // console.log(myLocation.pathname.split("/")[1]);

  // const currentpagepath = myLocation.pathname.split("/")[1];

  const onChangeItem = (current, pageSize) => {
    const skip = (current -1) * pageSize;
    setLimitPage({
      limit: pageSize,
      skip: skip,
    }); 
  };

  return (
    <>
      <section id="AllProdsucts">
        <div className="container">
          <div className="content ">
            <BredCrums pagename={"All-Product"} />
            <div className="cntn flex justify-between flex-wrap">
              {product.products?.map((item, i) => (
                <RecCArt
                  key={i}
                  img={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  discount={item.discountPercentage}
                  rating={item.rating}
                  stock={item.stock}
                  
                />
              ))}
            </div>

            <Pagination
              showSizeChanger
              onChange={onChangeItem}
              defaultCurrent={1}
              total={product.total}
              align="end"
              pageSizeOptions={[12, 24, 40, 50, 80, 100]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
