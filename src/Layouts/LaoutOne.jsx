import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const LaoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LaoutOne