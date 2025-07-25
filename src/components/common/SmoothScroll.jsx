import React, { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling CSS to html element
    const html = document.documentElement;
    const body = document.body;
    
    // Apply smooth scroll behavior
    html.style.scrollBehavior = 'smooth';
    body.style.scrollBehavior = 'smooth';
    
    // Add custom CSS for enhanced smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth !important;
      }
      
      body {
        scroll-behavior: smooth !important;
      }
      
      * {
        scroll-behavior: smooth !important;
      }
      
      /* Enhanced smooth scrolling for webkit browsers */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255, 93, 143, 0.1);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 93, 143, 0.3);
        border-radius: 4px;
        transition: background 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 93, 143, 0.5);
      }
      
      /* Smooth transitions for all elements */
      * {
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    `;
    
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      html.style.scrollBehavior = '';
      body.style.scrollBehavior = '';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;