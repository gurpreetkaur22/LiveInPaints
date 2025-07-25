import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#fffdf9] via-[#fff5f8] to-[#ffedf3] pt-32 pb-20 px-4 relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Subtle background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-6 h-6 bg-[#FF5D8F] rounded-full opacity-10"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-4 h-4 bg-[#ff9e9e] rounded-full opacity-15"
        animate={{
          y: [0, 15, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl playfair-display-bold text-[#390F0F] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="lg:text-[2vw] md:text-[4.5vw] text-[#FF5D8F] dancing-script-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "Let's create something beautiful together ✨"
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-8">
              <motion.div
                className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#FF5D8F]/10"
                whileHover={{
                  scale: 1.02,
                  shadow: "0 20px 40px -10px rgba(255, 93, 143, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  Let's Connect!
                </h2>
                <p className="text-gray-700 poppins-regular leading-relaxed mb-6">
                  Have a custom art project in mind? Want to collaborate? Or
                  just want to say hello? I'd love to hear from you! Drop me a
                  message and let's bring your creative vision to life.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FF5D8F]/5 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#FF5D8F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="poppins-bold text-[#390F0F]">Email</p>
                      <p className="text-gray-600 poppins-regular">
                        liveinpaints@icloud.com
                      </p>
                    </div>
                  </motion.div>



                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FF5D8F]/5 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#FF5D8F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="poppins-bold text-[#390F0F]">Location</p>
                      <p className="text-gray-600 poppins-regular">
                        Mumbai, India
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FF5D8F]/5 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#FF5D8F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="poppins-bold text-[#390F0F]">Response Time</p>
                      <p className="text-gray-600 poppins-regular">
                        Usually within 24-48 hours
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-[#FF5D8F]/20">
                  <p className="poppins-bold text-[#390F0F] mb-4">
                    Follow My Journey
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://pin.it/3ijDsIv6g"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center hover:bg-[#FF5D8F] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/liveinpaints/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center hover:bg-[#FF5D8F] hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#FF5D8F]/10"
              whileHover={{
                scale: 1.01,
                shadow: "0 20px 40px -10px rgba(255, 93, 143, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <label className="block text-[#390F0F] poppins-bold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#FF5D8F]/20 focus:border-[#FF5D8F] focus:outline-none focus:ring-2 focus:ring-[#FF5D8F]/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <label className="block text-[#390F0F] poppins-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#FF5D8F]/20 focus:border-[#FF5D8F] focus:outline-none focus:ring-2 focus:ring-[#FF5D8F]/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <label className="block text-[#390F0F] poppins-bold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#FF5D8F]/20 focus:border-[#FF5D8F] focus:outline-none focus:ring-2 focus:ring-[#FF5D8F]/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <label className="block text-[#390F0F] poppins-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#FF5D8F]/20 focus:border-[#FF5D8F] focus:outline-none focus:ring-2 focus:ring-[#FF5D8F]/20 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-bold text-white transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#FF5D8F] hover:bg-[#ff4d7d] hover:shadow-lg"
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </div>
                    ) : (
                      "Send Message ✨"
                    )}
                  </motion.button>
                </motion.div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border border-green-300 rounded-xl text-green-700 text-center"
                  >
                    ✅ Thank you! Your message has been sent successfully. I'll
                    get back to you soon!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 border border-red-300 rounded-xl text-red-700 text-center"
                  >
                    ❌ Oops! Something went wrong. Please try again or email me
                    directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-[#FF5D8F]/10">
            <h3 className="text-2xl playfair-display-bold text-[#390F0F] mb-4">
              Response Time
            </h3>
            <p className="text-gray-700 poppins-regular leading-relaxed max-w-2xl mx-auto">
              I typically respond to messages within 24-48 hours. For urgent
              custom orders or collaborations, feel free to mention it in your
              message and I'll prioritize getting back to you!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-[#FF5D8F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="poppins-bold text-[#390F0F] mb-2">
                  Quick Response
                </h4>
                <p className="text-sm text-gray-600">Usually within 24 hours</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-[#FF5D8F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="poppins-bold text-[#390F0F] mb-2">
                  Personal Touch
                </h4>
                <p className="text-sm text-gray-600">
                  Every project gets my full attention
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#FF5D8F]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-[#FF5D8F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="poppins-bold text-[#390F0F] mb-2">
                  Creative Solutions
                </h4>
                <p className="text-sm text-gray-600">
                  Bringing your ideas to life
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
