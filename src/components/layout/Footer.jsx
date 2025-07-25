import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.webp";
import insta from "/images/icons8-instagram.webp";
import "./FooterResponsive.css";

const Footer = () => {
  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:liveinpaints@gmail.com";
  };

  return (
    <footer className="mt-auto bg-gradient-to-b from-[#ffedf3] to-[#fff] footer-responsive">
      <div className="footer-main relative flex justify-between items-center px-20 py-10">
        <div className="div1 flex flex-col items-center">
          <NavLink to="/">
            <img
              className="footer-logo w-[15vw]"
              draggable="false"
              src={logo}
              alt="LiveInPaints Logo"
            />
          </NavLink>
          <p className="tagline footer-tagline text-[#390F0F] text-[5vw] -top-15 dancing-script-bold">
            Where Art Comes to Life
          </p>
        </div>
        <div className="div2">
          <h3 className="quick-links-title text-[1.5vw] poppins-bold text-[#ff5d8f] pb-5 pt-10">
            Quick Links
          </h3>
          <div className="quick-links-container flex gap-10 text-[1.2vw] font-medium">
            <NavLink className="hover:text-[#ff5d8f] active:scale-95" to="/">
              Home
            </NavLink>
            <NavLink
              className="hover:text-[#ff5d8f] active:scale-95"
              to="/products"
            >
              Categories
            </NavLink>
            <NavLink
              className="hover:text-[#ff5d8f] active:scale-95"
              to="/products"
            >
              Best Creations
            </NavLink>
            <NavLink
              className="hover:text-[#ff5d8f] active:scale-95"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="hover:text-[#ff5d8f] active:scale-95"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="div3">
          <h3 className="contact-title text-[1.5vw] poppins-bold text-[#ff5d8f] pb-5 pt-10">
            Contact Us
          </h3>
          <div className="contact-container flex flex-col gap-2 text-[1.2vw] font-medium">
            <a
              href="https://www.instagram.com/liveinpaints/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-[#ff5d8f] active:scale-95 transition-all duration-300"
            >
              <img
                className="w-[2vw]"
                draggable="false"
                src={insta}
                alt="Instagram Icon"
              />
              <p>Instagram</p>
            </a>
            {/* <button 
              onClick={handleEmailClick}
              className="text-left hover:text-[#ff5d8f] active:scale-95 transition-all duration-300"
            >
              liveinpaints@gmail.com
            </button> */}
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF5D8F] to-transparent"></div>
      <div className="copyright text-center py-4">
        &copy; 2025 LiveInPaints. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
