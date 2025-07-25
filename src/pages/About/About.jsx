import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
  };

  const heroAnimation = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  // Subtle floating animation
  const gentleFloat = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Component for animated sections
  const AnimatedSection = ({
    children,
    variant = fadeInUp,
    className = "",
    threshold = 0.1,
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "-50px",
      threshold: threshold,
    });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variant}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] via-[#fff5f8] to-[#ffedf3] relative overflow-hidden">
      {/* Subtle decorative elements */}
      <motion.div
        className="fixed top-20 left-10 w-4 h-4 bg-[#FF5D8F] rounded-full opacity-20"
        variants={gentleFloat}
        animate="animate"
      />
      <motion.div
        className="fixed top-40 right-20 w-3 h-3 bg-[#ff9e9e] rounded-full opacity-30"
        variants={gentleFloat}
        animate="animate"
      />
      <motion.div
        className="fixed bottom-40 left-20 w-2 h-2 bg-[#FF5D8F] rounded-full opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section with proper spacing for navbar */}
      <div className="pt-34 pb-16 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection
            variant={heroAnimation}
            className="text-center mb-16"
            threshold={0.3}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl playfair-display-bold text-[#390F0F] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
            >
              Hi, I am founder of Live In Paints,
              <motion.span
                className="text-[#FF5D8F]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.2,
                }}
              >
                {" "}
                Rashveen
              </motion.span>
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.8,
              }}
            ></motion.div>

            {/* Subtle inspirational quote */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 2.2,
              }}
            >
              <p className="lg:text-[2vw] md:text-[4.5vw] dancing-script-bold text-[#FF5D8F] italic opacity-80">
                "Living in my delusional little colourful world ✨"
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Story Section 1 - Enhanced with subtle interactions */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 relative">
            {/* Subtle background accent */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] rounded-full opacity-5 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Subtle background decoration */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#FF5D8F] rounded-full opacity-5 blur-xl"></div>

            <motion.div
              className="space-y-6 relative z-10"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 2.5,
              }}
            >
              <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                The Beginning
              </h2>
              <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                I started making illustrations{" "}
                <span className="poppins-bold text-[#FF5D8F]">
                  4 years ago at just 16
                </span>{" "}
                (wow!) out of pure boredom during lockdown.
              </p>
              <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                But then came that one order,{" "}
                <span className="poppins-bold text-[#FF5D8F]">
                  the one that gave me hope.
                </span>
              </p>
              <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                That's when God gave me this idea and kept me going.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 2.8,
              }}
            >
              <img
                src="/images/owner.webp"
                alt="Rashveen - Founder of Live In Paints"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                draggable={false}
              />

              {/* Static decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FF5D8F] rounded-full opacity-20"></div>
            </motion.div>
          </div>

          {/* Subtle section divider */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] rounded-full flex items-center justify-center shadow-lg opacity-80"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#FF5D8F] text-sm">✨</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Story Section 2 - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="relative">
                <img
                  src="/images/icon.webp"
                  alt="Colorful paints and brushes"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#ff9e9e] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  Why Live in Paints
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Because that's the whole point, me, happily living in my{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    delusional little colourful world
                  </span>
                  ,
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Now I get to fill that same{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    magic into every single illustration
                  </span>{" "}
                  I make with lots of love and a tiny bit of sparkle.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Story Section 3 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  Slowly but Surely
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  People started falling in love with Live in Paints, and
                  honestly,{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    so did my heart.
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  I'd do a little happy dance with every order!!{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    SERIOUSLY, every single one!
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  It was never just a product, it was a{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    tiny bundle of joy
                  </span>
                  , made with love for both of us.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <img
                  src="/images/review7.webp"
                  alt="Beautiful illustration artwork"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ff9e9e] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Story Section 4 - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="relative">
                <img
                  src="/images/businessOwner.webp"
                  alt="Art supplies and paintbrush"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FF5D8F] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  My biz, my tiny bestie
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  I poured my heart into this{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    little dream.
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  And it hugged me right back with{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    all its magic.
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Truly,{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    the sweetest friendship ever.
                  </span>
                </p>
              </div>
            </AnimatedSection>
          </div>
          {/* Story Section 5 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  From zero to the Custom Queen
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  I started off super clumsy{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    (self-taught and kinda clueless)
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  But even while juggling studies, I poured my heart into{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    every single piece
                  </span>{" "}
                  double-checked, triple-checked, until it felt just right
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Every stroke?{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    A lil love note.
                  </span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <img
                  src="/images/story2.webp"
                  alt="iPad with Apple Pencil for digital art"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#ff9e9e] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Story Section 6 - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="relative">
                <img
                  src="/images/story4.webp"
                  alt="Beautiful crochet work by mom"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF5D8F] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  My Support System
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Forever grateful to my little{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    cheersquad at home.
                  </span>{" "}
                  In the middle of study stress and order chaos, they always had
                  my back.
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  And my{" "}
                  <span className="poppins-bold text-[#FF5D8F]">MOM?</span>{" "}
                  She's the real MVP – the crochet queen, the silent hustler,
                  the guiding light behind it all
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Live in Paints wouldn't be what it is without her magic. She's
                  the{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    mastermind behind my messy little dream.
                  </span>
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Story Section 7 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
            <AnimatedSection variant={fadeInLeft}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl playfair-display-bold text-[#390F0F] mb-6">
                  Almost 4 Years with My Tiny Dream
                </h2>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  Still overthinking, but learning to trust. Sometimes I wonder,{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    "Could I have done more in these 4 years?"
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  But then I pause and remember{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    I'm exactly where I'm meant to be.
                  </span>
                </p>
                <p className="text-lg poppins-regular text-[#390F0F] leading-relaxed">
                  God's got the prettiest plans. I just need to{" "}
                  <span className="poppins-bold text-[#FF5D8F]">
                    hold on and believe.
                  </span>
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant={fadeInRight}>
              <div className="relative">
                <img
                  src="/images/story_last.webp"
                  alt="Colorful rainbow artwork"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  draggable={false}
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#ff9e9e] rounded-full opacity-20"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Final Section - Centered */}
          <AnimatedSection className="text-center mb-20">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl playfair-display-bold text-[#390F0F] mb-8">
                Forever Grateful
              </h2>
              <p className="text-xl poppins-regular text-[#390F0F] leading-relaxed">
                Forever grateful to the{" "}
                <span className="poppins-bold text-[#FF5D8F]">
                  kind souls who ordered from me
                </span>{" "}
                when I was just starting out.
              </p>
              <p className="text-xl poppins-regular text-[#390F0F] leading-relaxed">
                When my art was wobbly, messy, and full of baby steps,{" "}
                <span className="poppins-bold text-[#FF5D8F]">
                  you still believed in me.
                </span>
              </p>
              <p className="text-xl poppins-regular text-[#390F0F] leading-relaxed">
                You're a big part of this journey, and{" "}
                <span className="poppins-bold text-[#FF5D8F]">
                  my heart will never forget it.
                </span>
              </p>

              <div className="mt-12 p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl">
                <p className="text-2xl playfair-display-bold text-[#390F0F] mb-4">
                  xoxo
                </p>
                <p className="text-xl poppins-bold text-[#FF5D8F]">
                  Rashveen Kaur
                </p>
                <p className="text-lg poppins-regular text-[#390F0F]">
                  (owner of live in paints)
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
