import React from 'react'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LaoutOne from './Layouts/LaoutOne'
import Home from './Pages/Home'
const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LaoutOne/>}>
    <Route index element={<Home/>}/>
  </Route>
))


  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App