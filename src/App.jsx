import React from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import LaoutOne from './Layouts/LaoutOne'
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage'
import Checkout from './Pages/Checkout'
const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LaoutOne/>}>
    <Route index element={<Home/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/ProductPage/:alus' element={<ProductPage/>}/>
  </Route>
))


  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App