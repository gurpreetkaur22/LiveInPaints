import React, { useEffect, useRef, useState } from "react";
import galleryItems from "../../videos";
import rainbow from "/images/rainbow.webp";
import ipad from "/images/ipad.webp";
import paints from "/images/paints.webp";
import butterfly from "/images/butterfly.webp";
import "./GalleryMobileFix.css";
import "./GalleryTabletFix.css";
import "./GalleryTabletFix.css";

const Gallery = () => {
  const galleryRef = useRef(null);
  const [items, setItems] = useState([]);

  // Custom cursor is now applied globally in CSS

  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 4 },
      ];

      const newItems = rows.map((row) => {
        return Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = galleryItems.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video,
          };
        });
      });

      setItems(newItems);
    };

    generateItems();
    
    const handleMouseMove = (e) => {
      // Skip mouse move effect on mobile devices
      if (window.innerWidth <= 767) return;
      
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      // Adjust sensitivity for tablet - more subtle movement
      const sensitivity = window.innerWidth <= 1024 ? 2.5 : 1;
      const deltaX = (centerX - clientX) / sensitivity;
      const deltaY = (centerY - clientY) / sensitivity;

      // For tablet view, we need to maintain the centered position with the transform
      if (window.innerWidth <= 1024 && window.innerWidth > 767) {
        galleryRef.current.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
      } else {
        galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
      }
    };
    
    // Handle window resize to ensure proper layout
    const handleResize = () => {
      // Reset transform on resize to prevent layout issues
      if (galleryRef.current) {
        if (window.innerWidth <= 1024 && window.innerWidth > 767) {
          galleryRef.current.style.transform = 'translate(-50%, -50%)';
        } else if (window.innerWidth > 1024) {
          galleryRef.current.style.transform = 'translate(-50%, -50%)';
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Find the gallery container and add mouse move event
    const container = document.querySelector(".container.gallery-section");
    
    // Only add mouse move effect on non-mobile devices
    if (window.innerWidth > 767 && container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="container gallery-section">
      <img
        src={rainbow}
        alt=""
        className="opacity-80 absolute left-[15vw] w-[5vw] -rotate-30 top-[20vw] hidden md:block"
        draggable={false}
      />
      <img
        src={ipad}
        alt=""
        className="opacity-80 absolute right-[15vw] w-[7vw] -rotate-30 top-[20vw] hidden md:block"
        draggable={false}
      />
      <img
        src={paints}
        alt=""
        className="opacity-80 absolute right-[45vw] w-[10vw] -rotate-30 top-[2vw] hidden md:block"
        draggable={false}
      />
      <img
        src={butterfly}
        alt=""
        className="opacity-80 absolute right-[45vw] w-[3.5vw] -rotate-30 bottom-[2vw] hidden md:block"
        draggable={false}
      />

      <h1 className="text-[3vw] absolute backdrop-blur-xl bg-white/30 shadow-md rounded-2xl playfair-display-medium z-50 gallery-title">
        Our Best Creations
      </h1>
      <div className="gallery" ref={galleryRef}>
        {items.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="row">
            {row.map((item) => (
              <div key={item.id} className="item">
                <div className="preview-img">
                  <img src={item.video.previewImg} alt={item.video.name} draggable={false} />
                </div>
                <p className="videoName text-center">{item.video.name}</p>

                <div className="video-wrapper">
                  {item.video && (
                    <video
                      src={item.video.videoId}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      className="video-element"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;