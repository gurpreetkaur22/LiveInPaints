import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../contexts';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleImageClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ 
        shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="aspect-square overflow-hidden cursor-pointer"
        onClick={handleImageClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {!imageError ? (
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            draggable={false}
            onError={handleImageError}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 hover:from-gray-200 hover:to-gray-300 transition-colors duration-300">
            <div className="flex flex-col items-center text-center p-2 md:p-4">
              <svg className="w-6 h-6 md:w-12 md:h-12 mb-1 md:mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs md:text-sm font-medium opacity-70">{product.name}</span>
            </div>
          </div>
        )}
      </motion.div>
      
      <div className="p-2 md:p-4 flex flex-col flex-grow">
        <h3 className="text-sm md:text-lg font-semibold text-[#390F0F] mb-1 md:mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 flex-grow line-clamp-2 md:line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-auto">
          <span className="text-base md:text-xl font-bold text-[#FF5D8F] order-1 md:order-1">
            ₹{product.price}
          </span>
          
          <motion.button
            onClick={handleAddToCart}
            disabled={isInCart(product.id)}
            className={`product-card-btn w-full md:w-auto order-2 md:order-2 ${
              isInCart(product.id) ? 'in-cart' : 'add-to-cart'
            }`}
            whileHover={{ 
              scale: isInCart(product.id) ? 1 : 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.span
              key={isInCart(product.id) ? 'in-cart' : 'add-to-cart'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isInCart(product.id) ? '✓ In Cart' : 'Customize Now'}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
