import React from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LaoutOne from './Layouts/LaoutOne'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout '
const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LaoutOne/>}>
    <Route index element={<Home/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
  </Route>
))


  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App