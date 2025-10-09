import React, { useState } from 'react'

const LocalStorage = () => {

// --------------local storage theke data neya -----
const localdtaget = localStorage.getItem('name') 
console.log(localdtaget);


  // -----------local storatge data add ----------
  const handleClick = () => {
  localStorage.setItem("roll", 10)
  
  // -----------local storage data update --------
  localStorage.setItem("name", 20)
  // -----------local storage data remove --------
  localStorage.removeItem("roll")


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