import React from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
import gsap from "gsap";
import painting from "../assets/hare.jpg";
import illus from "../assets/illus.jpg";
import tile from "../assets/tile1.jpg";
import bookmark from "../assets/bookmark4.jpg";
import walletcard from "../assets/walletCard1.jpg";
import rainbow from "../assets/rainbow.svg";
import ipad from "../assets/ipad.svg";
import paints from "../assets/paints.svg";
import hare from "../assets/hare.jpg";

const Home = () => {
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
    <div>
      {" "}
      <motion.div
        className="section-1 h-screen flex flex-col justify-center items-center gap-4 text-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        {" "}
        {/* <img src={rainbow} alt="" className="absolute left-[5vw] w-[12vw] -rotate-30 top-[15vw]" />
        <img src={ipad} alt="" className="absolute right-[2vw] w-[13vw] -rotate-30 top-[30vw]" /> */}
        <div className=" relative flex justify-center items-center  poppins-bold w-full text-center text-[8vw] uppercase text-[#FF5D8F]">
          <h1 className="leading-tight">
            <span className="text-[#390F0F]">Live</span> in Art. <br /> Live in{" "}
            <span className="text-[#390F0F]">Paints.</span>
          </h1>
        </div>
        <button>Shop Now</button>
      </motion.div>
      <div className="section-2 overflow-hidden whitespace-nowrap  bg-[#FFEEF3] py-4 text-[3vw]">
        <div className="marquee-track inline-block font-semibold">
          &nbsp; ✦ &nbsp; ART FOR YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM
          ILLUSTRATIONS &nbsp; ✦ &nbsp; LIVEINPAINTS &nbsp; ✦ &nbsp; ART FOR
          YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM ILLUSTRATIONS &nbsp; ✦ &nbsp;
          LIVEINPAINTS &nbsp; ✦ &nbsp; ART FOR YOUR WALLS &nbsp; ✦ &nbsp; CUSTOM
          ILLUSTRATIONS &nbsp; ✦ &nbsp; LIVEINPAINTS &nbsp; ✦
        </div>
      </div>
      <div className="section-3 h-screen playfair-display-medium">
        <div class="elem">
          <img src={painting} alt="" />
          <h1>Paintings</h1>
          <h4>2022</h4>
        </div>
        <div class="elem">
          <img src={illus} alt="" />
          <h1>Custom Illustrations</h1>
          <h4>2022</h4>
        </div>
        <div class="elem">
          <img src={bookmark} alt="" />
          <h1>Cute Bookmarks</h1>
          <h4>2022</h4>
        </div>
        <div class="elem">
          <img src={walletcard} alt="" />
          <h1>Wallet Cards</h1>
          <h4>2022</h4>
        </div>
        <div class="elem elemlast">
          <img src={tile} alt="" />
          <h1>Tile Frames</h1>
          <h4>2021</h4>
        </div>
      </div>
      <div className="section-4 mt-[10vw] px-[5vw]">
        {" "}
        <h1 className="text-[3.7vw] playfair-display-medium">
          Our Best Creations
        </h1>
      </div>
      <div className="section-5 h-screen px-[5vw]">
        <div></div>
      </div>
    </div>
  );
};

export default Home;
