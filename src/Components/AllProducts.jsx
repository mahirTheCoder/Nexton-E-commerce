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
      <div className="container mx-auto px-4">
        
        <BredCrums pagename={"All-Product"} />

        <div className="flex gap-10 mt-8">

          {/* 🟦 SIDEBAR — Only Visible on Large Screens */}
          <div className="hidden lg:block w-[260px] p-4 rounded-xl bg-white">

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Categories</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                {[
                  "Men's Fashion",
                  "Women's Fashion",
                  "Kids & Toys",
                  "Accessories",
                  "Cosmetics",
                  "Shoes",
                  "Sports",
                ].map((cat, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-4 mt-10 text-gray-800">
                Price Range
              </h3>
              <Slider
                range
                min={0}
                max={2000}
                value={priceRange}
                onChange={setPriceRange}
              />
              <div className="flex justify-between text-sm mt-2 text-gray-600">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold mb-4 mt-10 text-gray-800">
                Sort Order
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-700">
                {[
                  "Most Popular",
                  "Best Rating",
                  "Newest",
                  "Low → High",
                  "High → Low",
                ].map((label, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="radio" name="sort" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 🟩 PRODUCTS GRID */}
          <div className="flex-1">

            {/* GRID */}
            <div
              className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-3 
                xl:grid-cols-3 
                gap-6 
                pb-20
              "
            >
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

            {/* PAGINATION */}
            <div className="flex justify-center lg:justify-end mt-10 pt-5 border-t border-gray-200">
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
