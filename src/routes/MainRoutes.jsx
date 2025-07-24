import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import ProductDetail from "../pages/Products/ProductDetail.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Login/Register.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
