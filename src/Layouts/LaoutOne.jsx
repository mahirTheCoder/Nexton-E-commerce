import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Responsivenav from '../Components/Responsivenav'

const LaoutOne = () => {
  return (
    <>
    <Navbar/>
    <Responsivenav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LaoutOne