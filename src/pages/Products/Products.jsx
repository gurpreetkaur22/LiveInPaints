import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "../../contexts";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";

function Products() {
  const {
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
    getFilteredProducts,
  } = useProducts();

  const [searchParams] = useSearchParams();

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

  const filterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle category parameter from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, categories, setSelectedCategory]);

  const filteredProducts = getFilteredProducts();

  if (loading) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-2xl text-[#FF5D8F] playfair-display-bold mb-4">
            Loading products...
          </div>
          <motion.div
            className="w-12 h-1 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] mx-auto rounded-full"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#fff5f8] to-[#fff] pt-32 pb-20 px-10 relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Subtle background decoration */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#390F0F] playfair-display-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="lg:text-[2vw] md:text-[4vw] text-[#FF5D8F] dancing-script-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our beautiful collection of custom art
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] mx-auto rounded-full mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={filterVariants}
        initial="initial"
        animate="animate"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-filter-btn ${
              selectedCategory === category ? "active" : "inactive"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "all"
              ? "All Products"
              : category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Products Grid - Responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={gridVariants}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-500 playfair-display-regular">
            No products found in this category.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Products;
