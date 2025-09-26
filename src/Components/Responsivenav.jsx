import React from 'react'
import favicon from '../assets/Images/favicon.png'
import { Link } from 'react-router'
const Responsivenav = () => {
  return (
    <>
    <nav className='lg:hidden block'>
      <div className="container">
        <div className="res-row">
          <div className="logo">
            <Link className='w-6' to={'/'} ><img  src={favicon} alt="logo" /></Link>
          </div>
          <div className="search-buton"></div>
          <div className="buttons"></div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Responsivenav