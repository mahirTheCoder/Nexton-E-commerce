import React from "react";

const DetailsRecom = () => {
  return (
    <>
      <div className="DetailsRecom">
        <div className="container">
          <div className="div w-[309px] h-[448px] bg-amber-50 rounded-[16px]">
            {/* --------------img part-------- */}
            <div className="w-[309px] h-[360px] bg-slate-300 mb-3 rounded-[16px]">
              <img src={""} alt="img" />
            </div>
            {/* ----------prodict name and pricr ---- */}
            <div className=" flex justify-between items-center px-2 mb-0.5">
              <h2 className="text-base font-semibold font-poppins text-primery ">Black Automatic Watch</h2>
              <h2 className="text-base font-semibold font-poppins text-primery ">$169.99</h2>
            </div>
            {/* ---------accesory discount price  */}
            <div className=" flex justify-between items-center px-2 mb-1">
              <h2 className="text-base font-normal font-poppins text-primery ">Ac-normal</h2>
              <h2 className="text-base font-normal font-poppins text-primery ">$199.99</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsRecom;
