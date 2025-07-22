import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/layout/Navbar";
import MainRoutes from "./routes/MainRoutes";
import CustomCursor from "./components/common/CustomCursor";
import Preloader from "./components/common/Preloader";
import EntranceAnimation from "./components/common/EntranceAnimation";
import { motion, AnimatePresence } from "motion/react";
import Footer from "./components/layout/Footer";

const App = () => {
  const scrollRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showEntrance, setShowEntrance] = useState(false);
  let lastScroll = 0;

  // Handle loading complete
  const handleLoadingComplete = () => {
    setShowEntrance(true);
  };

  // Handle entrance animation complete
  const handleEntranceComplete = () => {
    // Enable scrolling immediately
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";

    // Update state to show main content
    setShowEntrance(false);
    setIsLoading(false);
  };

  // Handle native scrolling for navbar
  useEffect(() => {
    if (isLoading || showEntrance) return;

    // Use native scroll event for navbar
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 150) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, showEntrance]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {/* Preloader */}
        {isLoading && !showEntrance && (
          <Preloader
            key="preloader"
            onLoadingComplete={handleLoadingComplete}
          />
        )}

        {/* Entrance Animation */}
        {showEntrance && (
          <EntranceAnimation
            key="entrance"
            onComplete={handleEntranceComplete}
          />
        )}

        {/* Main Content */}
        {!isLoading && !showEntrance && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="app-content w-full max-w-[100vw] overflow-hidden"
          >
            <Navbar showNavbar={showNavbar} />
            <div
              ref={scrollRef}
              className="relative bg-gradient-to-b from-[#f7e7e9] to-[#fff] w-full max-w-[100vw] overflow-hidden"
            >
              <MainRoutes />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
