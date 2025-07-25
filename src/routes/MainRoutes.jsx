import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import ProductDetail from "../pages/Products/ProductDetail.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Login/Register.jsx";
import Account from "../pages/Account/Account.jsx";
import Checkout from "../pages/Checkout/Checkout.jsx";
import SSOCallback from "../pages/Login/SSOCallback.jsx";
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
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
        <Route path="/sign-factor-one" element={<Login />} />
        <Route path="/sign-factor-two" element={<Login />} />
        <Route path="/verify" element={<Login />} />
        <Route path="/sign-up/verify-email-address" element={<Register />} />
        <Route path="/sign-up/continue" element={<Register />} />
        <Route path="/sign-in/factor-one" element={<Login />} />
        <Route path="/sign-in/factor-two" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
