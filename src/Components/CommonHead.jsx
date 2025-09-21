import React from 'react'

const CommonHead = ({common1, common2}) => {
  return (
    <>
    <div className="Common-head">
    <div className="heade">
    <h2 className="text-[36px] font-semibold font-poppins text-primery ">{common1}<span className="text-[#4B5563]">{common2}</span> </h2>
         
     </div>
    </div>
    </>
  )
}

export default CommonHead