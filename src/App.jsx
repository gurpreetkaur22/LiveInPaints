import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainRoutes from "./routes/MainRoutes";
import CustomCursor from "./components/common/CustomCursor";
import Preloader from "./components/common/Preloader";
import EntranceAnimation from "./components/common/EntranceAnimation";
import CartSidebar from "./components/cart/CartSidebar";
import { motion, AnimatePresence } from "motion/react";
import Footer from "./components/layout/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Global variable to track if we've navigated (survives React re-renders but not page refresh)
if (!window.hasNavigatedInSession) {
  window.hasNavigatedInSession = false;
}

const App = () => {
  const scrollRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  // Simple logic: show animations only on home page when we haven't navigated yet
  const shouldShowAnimations = isHomePage && !window.hasNavigatedInSession;
  
  const [isLoading, setIsLoading] = useState(shouldShowAnimations);
  const [showEntrance, setShowEntrance] = useState(false);
  let lastScroll = 0;
  
  // Mark that we've navigated - but only after animations complete or if no animations
  useEffect(() => {
    if (!shouldShowAnimations) {
      // If no animations should show, mark immediately
      window.hasNavigatedInSession = true;
    }
    // If animations should show, we'll mark it in handleEntranceComplete
  }, [shouldShowAnimations]);

  // Handle loading complete
  const handleLoadingComplete = () => {
    console.log("Preloader completed, showing entrance animation");
    setShowEntrance(true);
    
    // Fallback: if entrance animation doesn't complete in 10 seconds, show main content
    setTimeout(() => {
      if (showEntrance) {
        console.log("Entrance animation timeout, forcing main content");
        handleEntranceComplete();
      }
    }, 10000);
  };

  // Handle entrance animation complete
  const handleEntranceComplete = () => {
    console.log("Entrance animation completed, showing main content");
    // Enable scrolling immediately
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";

    // Mark that we've navigated (after animations complete)
    window.hasNavigatedInSession = true;

    // Update state to show main content
    setShowEntrance(false);
    setIsLoading(false);
  };

  // Handle route changes
  useEffect(() => {
    if (!shouldShowAnimations) {
      // On navigation or other pages, skip animations and show content directly
      setIsLoading(false);
      setShowEntrance(false);
      // Ensure scrolling is enabled
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
    }
  }, [shouldShowAnimations]);

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

  // Debug logging
  console.log("App render - isLoading:", isLoading, "showEntrance:", showEntrance, "shouldShowAnimations:", shouldShowAnimations);

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
            <CartSidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: '#fff',
          color: '#390F0F',
          borderRadius: '12px',
          border: '1px solid #FF5D8F20',
          fontFamily: 'Poppins, sans-serif'
        }}
      />
    </>
  );
};

export default App;
