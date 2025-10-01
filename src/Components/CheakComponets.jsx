import React, { useState } from "react";

const CheakComponets = () => {

const [img,setImg]= useState ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq5cxkSyzBP_L8bkUUH1A_QIJaKeyjZjkPQ&s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftJ8OKRqa4P_nZbqMbOvHcW5uaNUXVYRphw&s')

  return (
    <>
      <section id="cheakout " className="mt-10">
        <div className="container">
          <div className="img-and-content flex gap-10">
              <div className="imgpart lg:w-[804px] h-[690px]  ">
                <div className="button-img flex justify-between">
                  <div className="button flex flex-col">
                   
                    <button onClick={()=> {setImg('https://cdn.pixabay.com/photo/2016/03/09/09/43/cat-1245963_640.jpg')}} className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]">
                      <img className="w-full h-full" src={'https://cdn.pixabay.com/photo/2016/03/09/09/43/cat-1245963_640.jpg'} alt="img" />
                    </button>
                    <button onClick={()=> {setImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJzgV54PKtzJDLmBUBUmcSic4hoeGXsMuOA&s')}} className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]">
                      <img className="w-full h-full" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJzgV54PKtzJDLmBUBUmcSic4hoeGXsMuOA&s'} alt="img" />
                    </button>
                    <button onClick={()=> {setImg('https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_640.jpg')}} className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]">
                      <img className="w-full h-full" src={'https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_640.jpg'} alt="img" />
                    </button>
                    <button onClick={()=> {setImg('https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_640.jpg')}} className="w-[140px] h-[158px]  mb-4 overflow-hidden rounded-[16px]">
                      <img className="w-full h-full" src={'https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_640.jpg'} alt="img" />
                    </button>
                   
                  </div>
                  <div className="img w-[640px] h-[690px]  overflow-hidden rounded-[16px]  ">
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
