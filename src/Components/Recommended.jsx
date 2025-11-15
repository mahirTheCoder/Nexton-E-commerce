import React, { useEffect, useState } from "react";
import RecCArt from "./RecCArt";
import axios, { Axios } from "axios";
import CommonHead from "./CommonHead";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Slide, toast } from "react-toastify";

const Recommended = () => {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllproducts(res.data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // -----------handleer -----------
  const navigate = useNavigate();

  const DetailsClick = (ProductSet) => {
    navigate(`/ProductPage/${ProductSet}`);
  };

  // -----------add to card -------------

  function generateRandomID() {
    let number = "";
    for (let i = 0; i < 16; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  }

  // -----------cookies add-------------

  Cookies.set("userId", generateRandomID, { expires: 7, path: "" });

  const ProductArray = [];

  // -----------handle cart add -------------

  const handlecartadd = (product) => {
    const productObject = {
      id: product,
      quantity: 1,
    };
    ProductArray.push(productObject);

    axios
      .post("https://dummyjson.com/carts/add", {
        userId: 1,
        products: ProductArray,
      })
      .then((ress) => {
        toast.success(" Product Added Successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      })
      .catch((err) => {
        toast.warn("Product no added!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <>
      <section id="Recommended" className="Recommended  mt-44">
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
                {allproducts.slice(6, 10).map((item) => (
                  <RecCArt
                    key={item.id}
                    img={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    catagory={item.category}
                    discount={item.discountPercentage}
                    rating={item.rating}
                    stock={item.stock}
                    DetailsClick={() => DetailsClick(item.id)}
                    cardClick={() => {
                      handlecartadd(item.id);
                    }}
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
