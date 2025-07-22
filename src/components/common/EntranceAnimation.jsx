import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import "./EntranceAnimation.css";

// Import images from assets folder
import logo from "/images/logo.webp";
import pre1 from "/images/hare.webp";
import pre2 from "/images/illus2.webp";
import pre3 from "/images/pre3.webp";
import bookmark from "/images/bookmark3.webp";
import rainbow from "/images/rainbow.webp";
import butterfly from "/images/butterfly.webp";
import paints from "/images/paints.webp";

const EntranceAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const strokesRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure all assets are loaded before starting animation
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Call the onComplete callback after animation finishes
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      },
      paused: true, // Start paused until ready
    });
    
    return () => clearTimeout(readyTimer);
  }, []);
  
  useEffect(() => {
    if (!isReady) return;
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Call the onComplete callback after animation finishes
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300);
      },
    });

    // Create colorful strokes animation from top
    tl.fromTo(
      ".color-stroke",
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scaleY: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }
    )
      // Animate butterfly - adjusted for better visibility on mobile
      .fromTo(
        ".butterfly-decor",
        {
          x: -50,
          y: 50,
          opacity: 0,
          scale: 0.5,
          rotation: -20,
        },
        {
          x: 0,
          y: 0,
          opacity: 0.9,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Animate paints icon - adjusted for better visibility on mobile
      .fromTo(
        ".paints-decor",
        {
          x: 50,
          y: 50,
          opacity: 0,
          scale: 0.5,
          rotation: 20,
        },
        {
          x: 0,
          y: 0,
          opacity: 0.9,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.5"
      )
      .fromTo(
        logoRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1"
      )
      .fromTo(
        ".artwork-image",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )
      .fromTo(
        textRef.current.querySelectorAll(".text-char"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .fromTo(
        ".tagline",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        ".rainbow-decor",
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 0.7,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(containerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.inOut",
      });

    // Create floating animations for decorative elements - enhanced for better visibility
    gsap.to(".butterfly-decor", {
      y: "+=10",
      x: "+=8",
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".paints-decor", {
      y: "+=8",
      x: "-=5",
      rotation: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(".rainbow-decor", {
      y: "+=6",
      rotation: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // No hover effects for artwork images - we'll use CSS instead

    return () => {
      // Clean up all GSAP animations
      tl.kill();
      gsap.killTweensOf(".butterfly-decor");
      gsap.killTweensOf(".paints-decor");
      gsap.killTweensOf(".rainbow-decor");
      gsap.killTweensOf(".artwork-image");
    };
  }, [isReady, onComplete]);

  // Split text into characters for animation
  const createTextElements = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="text-char inline-block">
        {char}
      </span>
    ));
  };

  return (
    <motion.div
      ref={containerRef}
      className="entrance-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#fffdf9] to-[#fff5f8] overflow-hidden"
      initial={{ opacity: 1 }}
      style={{ visibility: isReady ? 'visible' : 'hidden' }}
    >
      {/* Colorful strokes from top */}
      <div
        ref={strokesRef}
        className="strokes-container absolute top-0 left-0 w-full h-20 sm:h-24 md:h-28 flex"
      >
        <div className="color-stroke h-full flex-1 bg-[#FF5D8F]"></div>
        <div className="color-stroke h-full flex-1 bg-[#FF9E9E]"></div>
        <div className="color-stroke h-full flex-1 bg-[#FFCB74]"></div>
        <div className="color-stroke h-full flex-1 bg-[#FF5D8F]"></div>
        <div className="color-stroke h-full flex-1 bg-[#FF9E9E]"></div>
      </div>

      {/* Decorative elements - repositioned for better visibility on all devices */}
      <img
        src={butterfly}
        alt="Butterfly"
        className="butterfly-decor absolute top-[25%] left-[5%] sm:top-[20%] sm:left-[8%] md:top-[15%] md:left-[10%] w-[40px] sm:w-[60px] md:w-[80px] opacity-0 z-20"
        draggable="false"
      />

      <img
        src={paints}
        alt="Paints"
        className="paints-decor absolute bottom-[15%] right-[5%] sm:bottom-[18%] sm:right-[10%] md:bottom-[20%] md:right-[15%] w-[12vw] sm:w-[10vw] md:w-[8vw] opacity-0 z-20"
        draggable="false"
      />

      <div className="relative flex flex-col items-center justify-center z-10 px-4">
        {/* Logo with glow effect */}
        <div
          ref={logoRef}
          className="logo-container mb-4 sm:mb-6 md:mb-8 relative"
        >
          <div className="logo-glow absolute inset-0 rounded-full bg-[#FF5D8F] opacity-20 blur-xl"></div>
          <img
            src={logo}
            alt="LiveInPaints Logo"
            className="logo-image w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] object-contain relative z-10"
            draggable="false"
          />
        </div>

        {/* Artwork images */}
        <div className="artwork-container flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="artwork-image w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={pre1}
              alt="Artwork"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
          <div className="artwork-image w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={pre2}
              alt="Artwork"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
          <div className="artwork-image w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={pre3}
              alt="Artwork"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
          <div className="artwork-image w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={bookmark}
              alt="Artwork"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Text animation with enhanced gradient */}
        <div
          ref={textRef}
          className="animated-text text-[2rem] sm:text-[3.5rem] md:text-[5rem] font-bold playfair-display-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5D8F] via-[#FF9E9E] to-[#FF5D8F] bg-size-200 animate-gradient-x mb-2 sm:mb-3 md:mb-4"
        >
          {createTextElements("LiveInPaints")}
        </div>

        {/* Tagline with enhanced styling */}
        <div className="tagline text-[#390F0F] text-base sm:text-xl md:text-2xl dancing-script-bold relative">
          Where Art Comes to Life
          <div className="tagline-underline absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#FF5D8F] to-transparent"></div>
        </div>

        {/* Rainbow decoration - repositioned for better visibility */}
        <img
          src={rainbow}
          alt="Rainbow"
          className="rainbow-decor absolute bottom-[10%] right-[10%] sm:bottom-[12%] sm:right-[12%] md:right-[15%] w-[60px] sm:w-[90px] md:w-[120px] opacity-0 z-20"
          draggable="false"
        />
      </div>
    </motion.div>
  );
};

export default EntranceAnimation;
