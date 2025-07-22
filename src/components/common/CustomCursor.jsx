import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.cursor = 'none';
    });

    // Handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              node.style.cursor = 'none';
              const children = node.querySelectorAll('*');
              children.forEach(child => {
                child.style.cursor = 'none';
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = '';
      allElements.forEach(el => {
        el.style.cursor = '';
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="custom-cursor-element"
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '30px',
        height: '30px',
        backgroundImage: 'url("/cursorpink.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    />
  );
};

export default CustomCursor;