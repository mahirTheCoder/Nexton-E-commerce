import axios from "axios";
import React from "react";
import BredCrums from "./BredCrums";
import { useLocation } from "react-router";

const AllProducts = () => {
  axios
    .get("https://dummyjson.com/products?limit=15&skip=10&select=title,price")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  const myLocation = useLocation();
  console.log(myLocation.pathname.split("/")[1]);

  return (
    <>
      <section id="AllProdsucts">
        <div className="container">
          <BredCrums />
        </div>
      </section>
    </>
  );
};

export default AllProducts;
