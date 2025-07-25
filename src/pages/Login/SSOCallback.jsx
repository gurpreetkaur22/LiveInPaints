import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const SSOCallback = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        // Successfully signed in, redirect to home
        navigate("/", { replace: true });
      } else {
        // Something went wrong, redirect to sign in
        navigate("/login", { replace: true });
      }
    }
  }, [isSignedIn, isLoaded, navigate]);

  // Show loading while processing
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#fffdf9] via-[#fff5f8] to-[#ffedf3]">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-16 h-16 border-4 border-[#FF5D8F]/20 border-t-[#FF5D8F] rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2 
          className="text-2xl playfair-display-bold text-[#390F0F] mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Completing sign in...
        </motion.h2>
        <motion.p 
          className="text-gray-600 poppins-regular"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Please wait while we set up your account
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SSOCallback;