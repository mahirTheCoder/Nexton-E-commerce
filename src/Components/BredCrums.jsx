import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

const BredCrums = ({pagename , pagelink, subpage, sublink}) => {


  return (
    <>
      <div className="bredcrums flex items-center gap-2 ">
        <Link className="text-lg  font-normal text-gray-500 flex items-center gap-2 " to={"/"}><FaHome /> /</Link>
        <Link className={`text-lg ${pagename? 'text-red-500':'text-gray-500' }  font-normal flex items-center gap-2`}  to={pagelink}>{pagename}</Link>
     

       
          {/* <Link className="text-lg text-gray-500 font-normal flex items-center gap-2 " to={sublink}>{subpage}</Link> */}
       
      </div> 
    </>
  );
};

export default BredCrums;
