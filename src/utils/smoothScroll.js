import { gsap } from 'gsap';

// Smooth scroll to element
export const scrollToElement = (element, duration = 1, offset = 80) => {
  if (!element) return;
  
  const targetY = element.offsetTop - offset;
  
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: targetY,
      autoKill: true
    },
    ease: "power2.out"
  });
};

// Smooth scroll to top
export const scrollToTop = (duration = 1) => {
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: 0,
      autoKill: true
    },
    ease: "power2.out"
  });
};

// Smooth scroll by amount
export const scrollBy = (amount, duration = 0.5) => {
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: `+=${amount}`,
      autoKill: true
    },
    ease: "power2.out"
  });
};

// Get current scroll position smoothly
export const getCurrentScroll = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

// Check if element is in viewport
export const isInViewport = (element, threshold = 0) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top >= -threshold &&
    rect.bottom <= windowHeight + threshold
  );
};

// Smooth scroll with callback
export const scrollToWithCallback = (target, callback, duration = 1, offset = 80) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) {
    if (callback) callback();
    return;
  }
  
  const targetY = element.offsetTop - offset;
  
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: targetY,
      autoKill: true
    },
    ease: "power2.out",
    onComplete: callback
  });
};