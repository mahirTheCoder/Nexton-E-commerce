import React from "react";

const CheakComponets = () => {
  return (
    <>
      <section id="cheakout " className="mt-10">
        <div className="container">
          <div className="img-and-content flex gap-10">
              <div className="imgpart lg:w-[804px] h-[690px] bg-amber-300 ">
                <div className="button-img flex justify-between">
                  <div className="button flex flex-col">
                    <button className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]"></button>
                    <button className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]"></button>
                    <button className="w-[140px] h-[158px] bg-amber-800 mb-4 overflow-hidden rounded-[16px]"></button>
                    <button className="w-[140px] h-[158px] bg-amber-800  overflow-hidden rounded-[16px]"></button>
                  </div>
                  <div className="img w-[640px] h-[678px] bg-amber-950 overflow-hidden rounded-[16px] mt-1.5 "></div>
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
