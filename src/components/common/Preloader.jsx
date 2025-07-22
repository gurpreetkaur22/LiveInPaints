import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Only set fallback if there's an error with the Lottie animation
  useEffect(() => {
    // We'll rely on the onEvent handler to set fallback if needed
    return () => {};
  }, []);

  // Simulate loading progress
  useEffect(() => {
    const duration = 2500; // 2.5 seconds for loading (slightly faster)
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      const displayProgress = Math.min(Math.floor(currentProgress), 100);
      setProgress(displayProgress);

      if (displayProgress >= 100) {
        clearInterval(timer);

        // Small delay before completing
        setTimeout(() => {
          setIsComplete(true);

          // Notify parent after animation completes
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 500); // Reduced wait time for exit animation
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="preloader-content">

        <motion.h1
          className="preloader-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          LiveInPaints.
        </motion.h1>

        <motion.div
          className="progress-container"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </motion.div>

        <motion.div
          className="progress-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
