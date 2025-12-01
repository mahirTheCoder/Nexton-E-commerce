import axios from "axios";
import React, { useEffect, useState } from "react";
import BredCrums from "./BredCrums";
import { Pagination, Slider } from "antd";
import RecCArt from "./RecCArt";

const AllProducts = () => {
  const [product, setProducts] = useState([]);
  const [limitPage, setLimitPage] = useState({
    limit: 12,
    skip: 0,
  });

  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products?limit=${limitPage.limit}&skip=${limitPage.skip}`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, [limitPage]);

  const onChangeItem = (current, pageSize) => {
    const skip = (current - 1) * pageSize;
    setLimitPage({ limit: pageSize, skip });
  };

  return (
    <section id="AllProducts" className="py-12">
      <div className="container mx-auto">
        <BredCrums pagename={"All-Product"} />

        <div className="flex gap-10 mt-8">

          {/* 🟦 FIXED SIDEBAR */}
          <div className="w-[260px] bg-white p-3 rounded-xl shadow-sm py-10 ">

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Categories</h3>
              <div className="flex flex-col gap-4 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Men's Fashion
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Women's Fashion
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Kids & Toys
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Accessories
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Cosmetics
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Shoes
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Sports
                </label>
              </div>
            </div>

     

          </div>

          {/* 🟩 PRODUCT GRID */}
          <div className="flex-1">

            {/* Grid With Proper Gap + Bottom Padding */}
            <div className="grid grid-cols-3  pb-20">
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

            {/* Pagination */}
            <div className="flex justify-end mt-10 pt-5 border-t border-gray-200">
              <Pagination
                showSizeChanger
                onChange={onChangeItem}
                defaultCurrent={1}
                total={product.total}
                pageSizeOptions={[12, 24, 40, 50, 80, 100]}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AllProducts;
