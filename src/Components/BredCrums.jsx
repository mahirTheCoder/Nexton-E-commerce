import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const BredCrums = () => {
const myLocation = useLocation()
console.log(myLocation);

  return (
    <>
      <div className="bredcrums">
        <Link className="text-lg  font-normal flex items-center gap-2 " to={"/"}><FaHome /> /</Link>
      </div>
    </>
  );
};

export default BredCrums;
