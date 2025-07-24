import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import painting from "/images/hare.webp";
import illus from "/images/illus1.webp";
import tile from "/images/tile1.webp";
import bookmark from "/images/bookmark4.webp";
import walletcard from "/images/walletCard1.webp";
import owner from "/images/owner.webp";
import paintbrush1 from "/images/paintbrush.webp";
import businesscard from "/images/businesscard.webp";
import paintbrush2 from "/images/paintbrush3.webp";
import paintpallete from "/images/icons8-microsoft-paint.webp";
import ipad_pencil from "/images/ipad_pencil.webp";
import lappy from "/images/lappy.webp";

import Gallery from "../../components/gallery/Gallery";
import ScreenshotTestimonials from "../../components/testimonials/ScreenshotTestimonials";

import "./Home.css";
import "./ElemFix.css";
import "../../components/gallery/GalleryMobileFix.css";
import "../../components/gallery/GalleryTabletFix.css";
import "./section4-styles.css";
import "../../assets/fonts/fonts.css";

const Home = () => {
  // Navigation hook
  const navigate = useNavigate();

  // State for mobile dropdown functionality
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for scroll animations
  const section1Ref = useRef(null);

  // Scroll animation values
  const { scrollY } = useScroll();
  const leftBrushX = useTransform(scrollY, [0, 500], [0, -150]);
  const rightBrushX = useTransform(scrollY, [0, 500], [0, 150]);
  const ipadPencilX = useTransform(scrollY, [0, 500], [0, -100]);
  const ipadPencilRotate = useTransform(scrollY, [0, 500], [-5, 15]);
  const lappyX = useTransform(scrollY, [0, 500], [0, 100]);
  const lappyRotate = useTransform(scrollY, [0, 500], [5, -15]);
  const leftBrushRotate = useTransform(scrollY, [0, 500], [-15, -45]);
  const rightBrushRotate = useTransform(scrollY, [0, 500], [15, 45]);
  const paletteY = useTransform(scrollY, [0, 500], [0, 100]);
  const paletteOpacity = useTransform(scrollY, [0, 300], [0.8, 0]);
  // Check if device is mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Handle dropdown toggle for mobile/tablet
  const handleDropdownToggle = (index, event) => {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
    }
    if (isMobile) {
      const newActiveDropdown = activeDropdown === index ? null : index;
      console.log(
        "Toggling dropdown from",
        activeDropdown,
        "to",
        newActiveDropdown
      );
      setActiveDropdown(newActiveDropdown);

      // Force update the DOM
      setTimeout(() => {
        const dropdown = document.querySelector(`.mobile-image-dropdown`);
        if (dropdown) {
          dropdown.style.display = "flex";
          dropdown.style.opacity = "1";
        }
      }, 10);
    }
  };

  // Handle navigation
  const handleElemClick = (category, index) => {
    if (!isMobile) {
      // On desktop, direct navigation
      navigate(`/products?category=${category}`);
    }
    // On mobile, do nothing when clicking the main area
  };

  // Handle arrow click specifically
  const handleArrowClick = (index, event) => {
    event.stopPropagation(); // Prevent triggering elem click
    console.log(
      "Arrow clicked for index:",
      index,
      "isMobile:",
      isMobile,
      "activeDropdown:",
      activeDropdown
    );
    handleDropdownToggle(index, event);
  };

  useEffect(() => {
    gsap.to(".marquee-track", {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll(".elem");

    elems.forEach((elem) => {
      let rotate = 0;
      let diffrot = 0;

      // Add cursor pointer style to indicate clickable elements
      elem.style.cursor = "pointer";

      elem.addEventListener("mouseleave", () => {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      });

      elem.addEventListener("mousemove", (e) => {
        const diff = e.clientY - elem.getBoundingClientRect().top;
        diffrot = e.clientX - rotate;
        rotate = e.clientX;

        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: "power3.out",
          top: diff,
          left: e.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.4),
        });
      });
    });
  }, []);

  return (
    <div className="home-container w-full max-w-[100vw] overflow-hidden">
      <motion.div
        ref={section1Ref}
        className="section-1 h-screen flex flex-col justify-center items-center gap-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        {/* Left paintbrush with responsive animation */}
        <motion.div
          className="absolute w-[22vw] left-0 z-10 paintbrush-container scroll-animated-element"
          style={{
            x: leftBrushX,
            rotate: leftBrushRotate,
            originX: 0,
            originY: 0.5,
            background: "transparent",
            border: "none",
            overflow: "visible",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            draggable="false"
            src={paintbrush1}
            alt="Paint Brush"
            className="w-full h-auto"
            animate={{
              y: [0, -15, 0],
              filter: [
                "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.3))",
                "drop-shadow(0px 10px 20px rgba(255, 93, 143, 0.5))",
                "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.3))",
              ],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right paintbrush with responsive animation */}
        <motion.div
          className="absolute w-[20vw] right-0 z-10 paintbrush-container scroll-animated-element"
          style={{
            x: rightBrushX,
            rotate: rightBrushRotate,
            originX: 1,
            originY: 0.5,
            background: "transparent",
            border: "none",
            overflow: "visible",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            draggable="false"
            src={paintbrush2}
            alt="Paint Brush"
            className="w-full h-auto"
            animate={{
              y: [0, 15, 0],
              filter: [
                "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.3))",
                "drop-shadow(0px 10px 20px rgba(255, 93, 143, 0.5))",
                "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.3))",
              ],
            }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* ipad_pencil with responsive animation */}
        <motion.div
          className="absolute w-[13vw] left-[10%] z-10 paintbrush-container scroll-animated-element"
          style={{
            top: "65%",
            x: ipadPencilX,
            rotate: ipadPencilRotate,
            originX: 0.5,
            originY: 0.5,
            background: "transparent",
            border: "none",
            overflow: "visible",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            draggable="false"
            src={ipad_pencil}
            alt="iPad Pencil"
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.4))",
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
              opacity: 0.95,
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              duration: 1,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Laptop with responsive animation */}
        <motion.div
          className="absolute w-[12vw] right-[10%] z-10 paintbrush-container scroll-animated-element"
          style={{
            top: "65%",
            x: lappyX,
            rotate: lappyRotate,
            originX: 0.5,
            originY: 0.5,
            background: "transparent",
            border: "none",
            overflow: "visible",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            draggable="false"
            src={lappy}
            alt="Laptop"
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0px 5px 15px rgba(255, 93, 143, 0.4))",
            }}
            animate={{
              y: [0, 10, 0],
              rotate: [5, -5, 5],
              opacity: 0.9,
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              duration: 1,
              delay: 0.2,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Paint palette with responsive animation */}
        <motion.div
          className="absolute w-[8vw] bottom-[0%] left-1/2 transform -translate-x-1/2 z-0 scroll-animated-element"
          style={{
            y: paletteY,
            opacity: paletteOpacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            draggable="false"
            src={paintpallete}
            alt="Paint Palette"
            className="w-full h-auto"
            animate={{ rotate: [0, 360] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          />
        </motion.div>

        {/* Main content with responsive typography */}
        <div className="relative flex flex-col justify-center items-center poppins-bold w-full text-center text-[#FF5D8F]">
          <h1 className="leading-tight">
            <span className="text-[#390F0F]">Live</span> in Art. <br /> Live in{" "}
            <span className="text-[#390F0F]">Paints.</span>
          </h1>
          <motion.p
            className="mt-4 text-[#390F0F] dancing-script-bold font-medium normal-case poppins-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Where colors come alive and imagination finds its canvas
          </motion.p>
        </div>

        {/* Shop Now button with responsive styling */}
        <motion.button
          className="z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => navigate("/products")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      <div className="section-2 whitespace-nowrap bg-[#FFEEF3] py-4 text-[3vw] w-full max-w-[100vw] overflow-hidden">
        <div className="marquee-track inline-block font-semibold">
          &nbsp; ✦ &nbsp; ART FOR YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM
          ILLUSTRATIONS &nbsp; ✦ &nbsp; LIVEINPAINTS &nbsp; ✦ &nbsp; ART FOR
          YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM ILLUSTRATIONS &nbsp; ✦ &nbsp;
          LIVEINPAINTS &nbsp; ✦ &nbsp; ART FOR YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM
          ILLUSTRATIONS &nbsp; ✦ &nbsp; LIVEINPAINTS &nbsp; ✦
        </div>
      </div>

      <div className="section-3 bg-gradient-to-b from-[#fff] to-[#ffedf3] lg:h-screen md:h-auto playfair-display-medium">
        <div className="elem" onClick={() => handleElemClick("paintings", 0)}>
          <img
            draggable="false"
            src={painting}
            alt="Paintings"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Paintings</h1>
            <h4>Starts from ₹299</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 0 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(0, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 0 && (
            <div className="mobile-image-dropdown">
              <img src={painting} alt="Paintings" className="dropdown-image" />
            </div>
          )}
        </div>
        <div
          className="elem"
          onClick={() => handleElemClick("illustrations", 1)}
        >
          <img
            draggable="false"
            src={illus}
            alt="Custom Illustrations"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Custom Illustrations</h1>
            <h4>Starts from ₹499</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 1 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(1, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 1 && (
            <div className="mobile-image-dropdown">
              <img
                src={illus}
                alt="Custom Illustrations"
                className="dropdown-image"
              />
            </div>
          )}
        </div>
        <div className="elem" onClick={() => handleElemClick("bookmarks", 2)}>
          <img
            draggable="false"
            src={bookmark}
            alt="Cute Bookmarks"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Cute Bookmarks</h1>
            <h4>Starts from ₹99</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 2 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(2, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 2 && (
            <div className="mobile-image-dropdown">
              <img
                src={bookmark}
                alt="Cute Bookmarks"
                className="dropdown-image"
              />
            </div>
          )}
        </div>
        <div className="elem" onClick={() => handleElemClick("walletcards", 3)}>
          <img
            draggable="false"
            src={walletcard}
            alt="Wallet Cards"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Wallet Cards</h1>
            <h4>Starts from ₹199</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 3 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(3, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 3 && (
            <div className="mobile-image-dropdown">
              <img
                src={walletcard}
                alt="Wallet Cards"
                className="dropdown-image"
              />
            </div>
          )}
        </div>
        <div
          className="elem"
          onClick={() => handleElemClick("businesscards", 4)}
        >
          <img
            draggable="false"
            src={businesscard}
            alt="Business Cards"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Business Cards</h1>
            <h4>Starts from ₹199</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 4 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(4, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 4 && (
            <div className="mobile-image-dropdown">
              <img
                src={businesscard}
                alt="Business Cards"
                className="dropdown-image"
              />
            </div>
          )}
        </div>
        <div
          className="elem elemlast"
          onClick={() => handleElemClick("tileframes", 5)}
        >
          <img
            draggable="false"
            src={tile}
            alt="Tile Frames"
            className="product-image"
          />
          <div className="elem-content">
            <h1>Tile Frames</h1>
            <h4>Starts from ₹599</h4>
            {isMobile && (
              <div
                className={`dropdown-arrow ${
                  activeDropdown === 5 ? "active" : ""
                }`}
                onClick={(e) => handleArrowClick(5, e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#FF5D8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {isMobile && activeDropdown === 5 && (
            <div className="mobile-image-dropdown">
              <img src={tile} alt="Tile Frames" className="dropdown-image" />
            </div>
          )}
        </div>
      </div>

      <div className="h-[5vh] lg:h-[5vh] md:h-[2vh] bg-[#ffedf3] responsive-spacer hidden md:block"></div>

      <div className="section-4 w-full max-w-[100vw]">
        <div className="gallery-container w-full">
          <Gallery />
        </div>
      </div>

      <div className="section-5 w-full min-h-screen md:bg-[#ffedf3]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full py-16 px-4">
          {/* Left side - Image with decorative elements */}
          <motion.div
            className="lg:pl-15 lg:w-1/2 relative mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[#FFECF2] rounded-3xl -rotate-2 transform scale-105 z-0"></div>

              {/* Main image container */}
              <div className="img-container relative z-10 bg-[#FFD6E5] p-4 rounded-3xl border-4 border-[#FF5D8F] shadow-xl">
                <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#FF5D8F]">
                  <span className="text-[#FF5D8F] font-bold text-xl relative">
                    AI
                    <div className="absolute w-full h-0.5 bg-[#FF5D8F] top-1/2 left-0 transform -rotate-45"></div>
                  </span>
                </div>

                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 border-2 border-[#FF5D8F]">
                  <span className="text-[#FF5D8F] font-medium text-sm">
                    @liveinpaints
                  </span>
                </div>

                <div className="bg-[#FFECF2] p-3 rounded-2xl">
                  <img
                    draggable="false"
                    className="rounded-xl w-full object-cover max-h-[70vh]"
                    src={owner}
                    alt="Artist at work"
                  />
                </div>

                <div className="text-center mt-4 mb-2">
                  <h3 className="text-[#390F0F] font-bold text-xl">
                    STARTER PACK
                  </h3>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF5D8F] rounded-full z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FF5D8F] rounded-full z-20"></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="right md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-[#390F0F] text-4xl md:text-5xl lg:text-6xl font-bold playfair-display-bold leading-tight mb-6">
              Every Masterpiece
              <br />
              Has a Beginning –
            </h1>

            <p className="text-[#ff5d8f] text-xl md:text-3xl mb-8 dancing-script-bold">
              Click below to see mine!
            </p>

            <motion.button
              className="bg-white text-[#FF5D8F] border-2 border-[#FF5D8F] rounded-full px-8 py-3 font-medium hover:bg-[#FF5D8F] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
            >
              How It All Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="section-6 testimonials min-h-screen text-center pt-10 bg-[#ffedf3] relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[15vw] h-[15vw] rounded-full bg-[#FF5D8F] opacity-5 blur-[50px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[20vw] h-[20vw] rounded-full bg-[#FF9E9E] opacity-5 blur-[60px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.07, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Section heading */}
        <motion.h1
          className="text-[3vw] playfair-display-bold text-[#390F0F] relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          See What Our Clients Say
        </motion.h1>
        <motion.p
          className="text-[1.7vw] dancing-script-bold text-[#FF5D8F] mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Because happy clients say it best
        </motion.p>

        {/* Screenshot Testimonials component */}
        <ScreenshotTestimonials />

        {/* Decorative paintbrushes */}
        <motion.img
          draggable="false"
          src={paintbrush1}
          alt="Paint Brush"
          className="absolute w-[10vw] left-[2%] bottom-[5%] opacity-30 z-0"
          style={{ rotate: "-30deg" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.img
          draggable="false"
          src={paintbrush2}
          alt="Paint Brush"
          className="absolute w-[8vw] right-[2%] top-[15%] opacity-30 z-0"
          style={{ rotate: "25deg" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Home;
