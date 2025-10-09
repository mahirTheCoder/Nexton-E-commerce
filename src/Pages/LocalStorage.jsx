import React, { useState } from 'react'

const LocalStorage = () => {


  
  // -----------local storatge data add ----------
  const handleClick = () => {
  localStorage.setItem("roll", 10)

}

  return (
    <>
   <div className="container">
    <button onClick={handleClick} className='py-1 px-4 bg-gray-200 rounded-[4px] '> Click </button>
   </div>
    </>
  )
}

export default LocalStorage