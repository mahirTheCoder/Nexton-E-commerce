import React from 'react'
import logo from '../assets/Images/logo.png'
const Navbar = () => {
  return (
    <>
<section id='Navbar'>
<div className="container">
  <div className="navRow">
    <div className="logo">
      <img src={logo} alt="logoImg" />
    </div>
    <div className="search w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] ">
      
    </div>
    <div className="buttons"></div>
  </div>
</div>
</section>
    </>
  )
}

export default Navbar