import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

const BredCrums = ({pagename , pagelink}) => {


  return (
    <>
      <div className="bredcrums">
        <Link className="text-lg  font-normal flex items-center gap-2 " to={"/"}><FaHome /> /</Link>
        <Link className="text-lg  font-normal flex items-center gap-2 " to={pagelink}>{pagename}</Link>
      </div>
    </>
  );
};

export default BredCrums;
