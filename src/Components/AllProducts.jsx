import axios from "axios";
import React from "react";
import BredCrums from "./BredCrums";
import { useLocation } from "react-router";

const AllProducts = () => {

  // ----------limit and skip with select example----------

  axios
    .get("https://dummyjson.com/products?limit=15&skip=10&select=title,price")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


    // ----------use location example----------
  const myLocation = useLocation();
  console.log(myLocation.pathname.split("/")[1]);

  const currentpagepath = myLocation.pathname.split("/")[1];

  return (
    <>
      <section id="AllProdsucts">
        <div className="container">
          <div className="content ">
          <BredCrums pagename={'All-Product'} />

          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
