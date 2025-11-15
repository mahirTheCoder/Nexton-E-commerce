import React from "react";
import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import { createRoutesFromElements } from "react-router";
import LaoutOne from "./Layouts/LaoutOne";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Checkout from "./Pages/Checkout";
import LocalStorage from "./Pages/LocalStorage";
import AllProducts from "./Components/AllProducts";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LaoutOne />}>
        <Route index element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/ProductPage/:alus" element={<ProductPage />} />
        <Route path="/Localstorage" element={<LocalStorage />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
