import React, { useState } from "react";

const CheakComponets = () => {

const [img,setImg]= useState ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq5cxkSyzBP_L8bkUUH1A_QIJaKeyjZjkPQ&s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftJ8OKRqa4P_nZbqMbOvHcW5uaNUXVYRphw&s')

  return (
    <>
      <section id="cheakout " className="mt-10">
        <div className="container">
          <div className="img-and-content flex gap-10">
              <div className="imgpart lg:w-[804px] h-[690px] bg-amber-300 ">
                <div className="button-img flex justify-between">
                  <div className="button flex flex-col">
                    <button className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]"></button>
                    <button onClick={()=> {setImg('')}} className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]">
                      
                    </button>
                    <button className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]"></button>
                    <button className="w-[140px] h-[158px] bg-amber-800  overflow-hidden rounded-[16px]"></button>
                  </div>
                  <div className="img w-[640px] h-[678px] bg-amber-950 overflow-hidden rounded-[16px] mt-1.5 ">
                    <img className="w-full h-full object-cover" src={img} alt="img" /> 
                  </div>
                </div>
              </div>
              <div className="addt-to-cart w-[460px] h-[463px] bg-amber-200 "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheakComponets;
