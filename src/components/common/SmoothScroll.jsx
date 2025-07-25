import React, { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Apply only non-interfering enhancements
    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced scrollbar styling only - no scroll behavior changes */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(255, 245, 248, 0.8);
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #ff5d8f, #ff9e9e);
        border-radius: 5px;
        border: 1px solid rgba(255, 245, 248, 0.5);
        transition: background 0.2s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #ff4d7f, #ff8e8e);
      }
      
      /* Firefox scrollbar */
      html {
        scrollbar-width: thin;
        scrollbar-color: #ff5d8f rgba(255, 245, 248, 0.8);
      }
    `;
    
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;