import React from 'react'

const LocalStorage = () => {

localStorage.setItem("name", "sabbir")

  return (
    <>
   <div className="container">
    <button className='py-1 px-4 bg-gray-200 rounded-[4px] '> Click </button>
   </div>
    </>
  )
}

export default LocalStorage