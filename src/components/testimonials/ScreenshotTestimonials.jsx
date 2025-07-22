import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import "./TestimonialsResponsive.css";
import review1 from "../../assets/images/review1.jpg";
import review2 from "../../assets/images/review2.jpg";
import review3 from "../../assets/images/review3.jpg";
import review4 from "../../assets/images/review4.jpg";
import review5 from "../../assets/images/review5.jpg";
import review6 from "../../assets/images/review6.jpg";
import review7 from "../../assets/images/review7.jpg";
import '../../assets/fonts/fonts.css'

// Actual Instagram testimonial screenshots
const testimonialScreenshots = [
  {
    id: 1,
    image: review1,
    alt: "Instagram testimonial from a satisfied customer"
  },
  {
    id: 2,
    image: review2,
    alt: "Instagram testimonial from a happy client"
  },
  {
    id: 3,
    image: review3,
    alt: "Instagram review from a client"
  },
  {
    id: 4,
    image: review4,
    alt: "Instagram feedback from a customer"
  },
  {
    id: 5,
    image: review5,
    alt: "Instagram post from a satisfied client"
  },
  {
    id: 6,
    image: review6,
    alt: "Instagram story from a happy customer"
  },
  {
    id: 7,
    image: review7,
    alt: "Instagram review from a delighted client"
  }
];

const ScreenshotTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mobileGalleryRef = useRef(null);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Calculate the indices for the visible testimonials
  const visibleIndices = [];
  const visibleCount = isMobile ? 1 : 3;
  for (let i = 0; i < visibleCount; i++) {
    visibleIndices.push((currentIndex + i) % testimonialScreenshots.length);
  }

  // Navigate to previous testimonials
  const prevTestimonials = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonialScreenshots.length) % testimonialScreenshots.length
    );
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  // Navigate to next testimonials
  const nextTestimonials = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonialScreenshots.length
    );
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);
  
  // Auto-swipe functionality
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      const interval = setInterval(() => {
        nextTestimonials();
      }, 5000); // Change slide every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [isPaused, isTransitioning, nextTestimonials]);
  
  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    if (isTransitioning) return;
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (isTransitioning) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (isTransitioning) return;
    
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextTestimonials();
    }
    
    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevTestimonials();
    }
  };
  
  // Preload images for smoother transitions
  useEffect(() => {
    // Preload next and previous images
    const preloadImages = () => {
      const nextIndex = (currentIndex + 1) % testimonialScreenshots.length;
      const prevIndex = (currentIndex - 1 + testimonialScreenshots.length) % testimonialScreenshots.length;
      
      const nextImage = new Image();
      nextImage.src = testimonialScreenshots[nextIndex].image;
      
      const prevImage = new Image();
      prevImage.src = testimonialScreenshots[prevIndex].image;
    };
    
    preloadImages();
  }, [currentIndex]);

  return (
    <div 
      className="py-12 px-4 relative testimonials-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation buttons with enhanced visibility */}
      <div 
        className="nav-button-left absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-50 bg-white hover:bg-white rounded-full w-12 h-12 shadow-xl flex items-center justify-center cursor-pointer border-2 border-[#FF5D8F]"
        onClick={() => {
          setIsPaused(true);
          prevTestimonials();
          setTimeout(() => setIsPaused(false), 5000);
        }}
        aria-label="Previous testimonials"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="#FF5D8F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div 
        className="nav-button-right absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 bg-white hover:bg-white rounded-full w-12 h-12 shadow-xl flex items-center justify-center cursor-pointer border-2 border-[#FF5D8F]"
        onClick={() => {
          setIsPaused(true);
          nextTestimonials();
          setTimeout(() => setIsPaused(false), 5000);
        }}
        aria-label="Next testimonials"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="#FF5D8F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Screenshot gallery */}
      {isMobile ? (
        // Mobile view - completely different approach to avoid glitches
        <div className="mobile-testimonials-container" ref={mobileGalleryRef}>
          <div className="mobile-testimonials-wrapper">
            {testimonialScreenshots.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`mobile-testimonial ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="bg-white p-2 rounded-xl shadow-xl border border-[#FF5D8F]/10 mobile-testimonial-card">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="rounded-lg w-auto h-auto max-h-[320px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile indicators */}
          <div className="mobile-indicators">
            {testimonialScreenshots.map((_, index) => (
              <div 
                key={index}
                className={`mobile-indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsPaused(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsPaused(false), 5000);
                  }
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop/Tablet view with motion animations
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto testimonials-gallery">
          {visibleIndices.map((index, i) => {
            const testimonial = testimonialScreenshots[index];
            return (
              <motion.div 
                key={`${testimonial.id}-${currentIndex}-${i}`}
                className="screenshot-card relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-2 sm:p-3 rounded-xl shadow-xl transform transition-transform duration-300 border border-[#FF5D8F]/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="rounded-lg w-[280px] sm:w-[300px] md:w-[320px] h-auto max-h-[400px] sm:max-h-[450px] object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Pagination dots - only show on desktop and tablet */}
      {!isMobile && (
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: testimonialScreenshots.length }).map((_, index) => (
            <button
              key={index}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                visibleIndices.includes(index) ? "bg-[#FF5D8F] w-6 sm:w-8" : "bg-gray-300 w-2 sm:w-3 hover:bg-[#FF5D8F]/50"
              }`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsPaused(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsPaused(false), 5000);
                }
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenshotTestimonials;