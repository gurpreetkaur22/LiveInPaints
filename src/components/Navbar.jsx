import React from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../assets/icons8-search.svg";
import cartIcon from "../assets/icons8-cart.svg";
import { motion } from "motion/react";

const Navbar = ({ showNavbar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full px-[6%] flex justify-between items-center py-7 playfair-display-extrabold  z-50 transition-transform duration-500  backdrop-blur-xl bg-white/30 shadow-md ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {" "}
        <NavLink to="/" className="text-[2vw] text-[#390F0F] cursor-pointer">
          LiveInPaints.
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="flex gap-10 backdrop-blur-xl bg-white/30 shadow-md px-10 py-2  rounded-2xl poppins-medium"
      >
        <NavLink to="/" className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}>
          <p className="text-[1.1vw] hover:text-[#FF5D8F]">Home</p>
        </NavLink>
        <NavLink
          to="/products"
          className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}
        >
          <p className="text-[1.1vw] hover:text-[#FF5D8F]">Products</p>
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}
        >
          <p className="text-[1.1vw] hover:text-[#FF5D8F]">About Us</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}
        >
          <p className="text-[1.1vw] hover:text-[#FF5D8F]">Contact Us</p>
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="flex items-center justify-center gap-3 "
      >
        <NavLink to="" className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}>
          <img className="w-10 active:scale-95" src={searchIcon} alt="" />
        </NavLink>
        <NavLink to="" className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}>
          <img className="w-10 active:scale-95" src={cartIcon} alt="" />
        </NavLink>
        <NavLink
          to="/login"
          className={(e) => (e.isActive ? "text-[#FF5D8F]" : "")}
        >
          <button className="poppins-medium cursor-pointer active:scale-95">
            Login
          </button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
