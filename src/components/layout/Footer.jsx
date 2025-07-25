import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.webp";
import insta from "/images/icons8-instagram.webp";
import "./FooterResponsive.css";

const Footer = () => {
  // Function to handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:liveinpaints@icloud.com";
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
            <a
              href="https://pin.it/3ijDsIv6g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-[#ff5d8f] active:scale-95 transition-all duration-300"
            >
              <svg
                className="w-[2vw] h-[2vw] text-[#FF5D8F]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
              <p>Pinterest</p>
            </a>
            <button 
              onClick={handleEmailClick}
              className="email-btn text-left hover:text-[#ff5d8f] active:scale-95 transition-all duration-300 flex gap-2 items-center"
            >
              <svg
                className="w-[2vw] h-[2vw] text-[#FF5D8F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="hover:text-[#ff5d8f] active:scale-95 transition-all duration-300 ">liveinpaints@icloud.com</p>
            </button>
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
