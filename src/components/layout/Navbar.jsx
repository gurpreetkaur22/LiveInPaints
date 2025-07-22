import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import accountIcon from "/images/icons8-account1.webp";
import accountIconFilled from "/images/icons8-account-filled.webp";
import cartIcon from "/images/cart.webp";
import cartIconFilled from "/images/cart-filled.webp";
import { motion, AnimatePresence } from "motion/react";
import "./Navbar.css";

const Navbar = ({ showNavbar }) => {
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-btn")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
        {/* Logo */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <NavLink to="/" className="navbar-logo">
            LiveInPaints.
          </NavLink>
        </motion.div>

        {/* Desktop Navigation Menu */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="navbar-menu"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </motion.div>

        {/* Desktop Actions */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="navbar-actions"
        >
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div
              className="navbar-icon"
              onMouseEnter={() => setIsAccountHovered(true)}
              onMouseLeave={() => setIsAccountHovered(false)}
            >
              <img
                className="w-full h-full"
                src={isAccountHovered ? accountIconFilled : accountIcon}
                alt="Account"
                draggable={false}
              />
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div
              className="navbar-icon"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            >
              <img
                className="w-full h-full"
                src={isCartHovered ? cartIconFilled : cartIcon}
                alt="Cart"
                draggable={false}
              />
            </div>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="navbar-login-btn">Login</button>
          </NavLink>
        </motion.div>

        {/* Hamburger Menu Button */}
        <motion.button
          className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu - Slides down from top when hamburger is clicked */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -500, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mobile-menu-links">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavLinkClick}
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavLinkClick}
              >
                Contact Us
              </NavLink>
            </div>

            <div className="mobile-menu-actions">
              <div className="mobile-menu-icons">
                <NavLink to="/account" onClick={handleNavLinkClick}>
                  <div
                    className="navbar-icon mobile-icon"
                    onMouseEnter={() => setIsAccountHovered(true)}
                    onMouseLeave={() => setIsAccountHovered(false)}
                    onTouchStart={() => setIsAccountHovered(true)}
                    onTouchEnd={() => setIsAccountHovered(false)}
                  >
                    <img
                      src={isAccountHovered ? accountIconFilled : accountIcon}
                      alt="Account"
                      draggable={false}
                    />
                  </div>
                </NavLink>
                <NavLink to="/cart" onClick={handleNavLinkClick}>
                  <div
                    className="navbar-icon mobile-icon"
                    onMouseEnter={() => setIsCartHovered(true)}
                    onMouseLeave={() => setIsCartHovered(false)}
                    onTouchStart={() => setIsCartHovered(true)}
                    onTouchEnd={() => setIsCartHovered(false)}
                  >
                    <img
                      src={isCartHovered ? cartIconFilled : cartIcon}
                      alt="Cart"
                      draggable={false}
                    />
                  </div>
                </NavLink>
              </div>

              <NavLink
                to="/login"
                onClick={handleNavLinkClick}
                className="mobile-menu-login"
              >
                <button className="navbar-login-btn">Login</button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
