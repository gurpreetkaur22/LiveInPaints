import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/layout/Navbar";
import MainRoutes from "./routes/MainRoutes";
import CustomCursor from "./components/common/CustomCursor";
import Preloader from "./components/common/Preloader";
import EntranceAnimation from "./components/common/EntranceAnimation";
import CartSidebar from "./components/cart/CartSidebar";
import SmoothScroll from "./components/common/SmoothScroll";
import { motion, AnimatePresence } from "motion/react";
import Footer from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const scrollRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const { isLoaded: userLoaded } = useUser();

  const isHomePage = location.pathname === "/";

  // Initialize with optimistic loading state
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading if on home page AND no auth flag
    if (!isHomePage) return false;
    const fromAuth = sessionStorage.getItem("liveinpaints_from_auth");
    return !fromAuth; // Show loading only if NOT from auth
  });
  const [showEntrance, setShowEntrance] = useState(false);
  const [animationsDecided, setAnimationsDecided] = useState(false);
  let lastScroll = 0;

  // Finalize animation decision and clean up auth flag
  useEffect(() => {
    if (animationsDecided) return;

    // Don't show animations if not on home page
    if (!isHomePage) {
      setIsLoading(false);
      setShowEntrance(false);
      setAnimationsDecided(true);
      // Ensure scrolling is enabled
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
      return;
    }

    // Check if user came from authentication pages (login/register/logout)
    const fromAuth = sessionStorage.getItem("liveinpaints_from_auth");
    if (fromAuth) {
      // Clear the flag and don't show animations
      sessionStorage.removeItem("liveinpaints_from_auth");
      setIsLoading(false);
      setShowEntrance(false);
      setAnimationsDecided(true);
      // Ensure scrolling is enabled
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
      return;
    }

    // Show animations on home page (including page refresh) unless coming from auth
    // isLoading should already be true from initial state if we got here
    setAnimationsDecided(true);
  }, [isHomePage, animationsDecided]);

  // Additional check once Clerk is loaded (safety net)
  useEffect(() => {
    if (!userLoaded || !animationsDecided) return;

    // If we're not on home page and animations are showing, stop them
    if (!isHomePage && isLoading) {
      setIsLoading(false);
      setShowEntrance(false);
      // Ensure scrolling is enabled
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
    }
  }, [userLoaded, isHomePage, isLoading, animationsDecided]);

  // Track navigation from auth pages
  useEffect(() => {
    const currentPath = location.pathname;

    // Set flag when navigating away from auth pages
    if (
      currentPath === "/login" ||
      currentPath === "/register" ||
      currentPath === "/account"
    ) {
      sessionStorage.setItem("liveinpaints_from_auth", "true");
    }
  }, [location.pathname]);

  // Handle loading complete
  const handleLoadingComplete = () => {
    setShowEntrance(true);

    // Fallback: if entrance animation doesn't complete in 10 seconds, show main content
    setTimeout(() => {
      if (showEntrance) {
        handleEntranceComplete();
      }
    }, 10000);
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
      <SmoothScroll>
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
      </SmoothScroll>

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
          backgroundColor: "#fff",
          color: "#390F0F",
          borderRadius: "12px",
          border: "1px solid #FF5D8F20",
          fontFamily: "Poppins, sans-serif",
        }}
      />
    </>
  );
};

export default App;
