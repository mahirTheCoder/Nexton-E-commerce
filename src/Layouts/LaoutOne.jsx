import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LaoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LaoutOne