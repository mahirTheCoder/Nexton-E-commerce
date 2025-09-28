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

    </>
  );
};

export default FashionPart;
