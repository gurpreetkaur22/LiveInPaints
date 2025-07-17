import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const scrollRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
      lerp: 0.08,
    });

    scroll.on("scroll", (args) => {
      const currentScroll = args.scroll.y;
      if (currentScroll > lastScroll && currentScroll > 150) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      lastScroll = currentScroll;
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Navbar showNavbar={showNavbar} />
      <div
        ref={scrollRef}
        data-scroll-container
        className="relative overflow-x-hidden bg-gradient-to-b from-[#f7e7e9] to-[#fff]"
      >
        <MainRoutes />
      </div>
    </>
  );
};

export default App;
