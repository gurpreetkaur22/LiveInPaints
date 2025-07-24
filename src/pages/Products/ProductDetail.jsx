import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts, useCart } from '../../contexts';
import ProductCard from '../../components/products/ProductCard';
import { motion } from 'motion/react';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  const { addToCart, isInCart, updateQuantity, getCartItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentPrice, setCurrentPrice] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [imageError, setImageError] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [customText, setCustomText] = useState('');

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      console.log('Found product:', foundProduct.name, 'Price:', foundProduct.price);
      setProduct(foundProduct);
      setCurrentPrice(foundProduct.price);
      setImageError(false);
      
      // Initialize with first option of each customization type
      if (foundProduct.customizationOptions) {
        const initialOptions = {};
        Object.entries(foundProduct.customizationOptions).forEach(([optionType, options]) => {
          if (options.length > 0) {
            initialOptions[optionType] = options[0].name;
          }
        });
        setSelectedOptions(initialOptions);
      } else {
        // If no customization options, clear selected options
        setSelectedOptions({});
      }
      
      // Get related products from same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
      
      // Reset states for new product
      setQuantity(1);
      setUploadedImage(null);
      setCustomText('');
    } else {
      // Product not found, redirect to products page
      navigate('/products');
    }
  }, [id, getProductById, products, navigate]);

  // Calculate price based on selected options
  useEffect(() => {
    if (product) {
      let totalPrice = product.price;
      console.log('Base product price:', product.price);
      console.log('Selected options:', selectedOptions);
      
      if (product.customizationOptions && Object.keys(selectedOptions).length > 0) {
        // Find the highest priced option selected (since our data has absolute prices per option group)
        let maxPrice = product.price;
        
        Object.entries(selectedOptions).forEach(([optionType, selectedOption]) => {
          const optionGroup = product.customizationOptions[optionType];
          if (optionGroup) {
            const option = optionGroup.find(opt => opt.name === selectedOption);
            console.log(`Option ${optionType}:`, option);
            if (option && option.price > maxPrice) {
              maxPrice = option.price;
            }
          }
        });
        
        totalPrice = maxPrice;
      }
      
      console.log('Final calculated price:', totalPrice);
      setCurrentPrice(totalPrice);
    }
  }, [selectedOptions, product]);

  const handleOptionChange = (optionType, optionName) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionType]: optionName
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    const customizedProduct = {
      ...product,
      price: currentPrice,
      customizations: selectedOptions,
      uploadedImage: uploadedImage,
      customText: customText,
      originalPrice: product.price
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(customizedProduct);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff5f8] to-[#fff]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF5D8F] mx-auto mb-4"></div>
          <div className="text-xl text-[#FF5D8F] font-semibold">Loading product...</div>
        </div>
      </div>
    );
  }

  // Create image array (use single image multiple times if no gallery)
  const productImages = product.images || [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] to-[#fff] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => navigate('/')}
              className="text-[#FF5D8F] hover:text-[#390F0F] transition-colors duration-200"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <button 
              onClick={() => navigate('/products')}
              className="text-[#FF5D8F] hover:text-[#390F0F] transition-colors duration-200"
            >
              Products
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-[#390F0F] font-medium">{product.name}</span>
          </div>
        </nav>

        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {!imageError ? (
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500">
                  <div className="flex flex-col items-center text-center p-8">
                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg font-medium opacity-70">{product.name}</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-[#FF5D8F]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info & Customization */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#390F0F] mb-4 playfair-display-bold">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-[#FF5D8F]">₹{currentPrice}</span>
                {product.originalPrice && currentPrice !== product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'Available for Customization' : 'Currently Unavailable'}
                </span>
                <span className="text-sm text-gray-500 capitalize">Category: {product.category}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-[#390F0F] mb-3">About This Product</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Image Upload Section */}
            <div className="bg-[#fff5f8] p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#390F0F] mb-3">Upload Your Image</h3>
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FF5D8F] file:text-white hover:file:bg-[#FF5D8F]/90"
                />
                {uploadedImage && (
                  <div className="mt-3">
                    <img src={uploadedImage} alt="Uploaded" className="w-24 h-24 object-cover rounded-lg border-2 border-[#FF5D8F]" />
                    <p className="text-sm text-green-600 mt-1">✓ Image uploaded successfully</p>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Text Input */}
            <div>
              <h3 className="text-lg font-semibold text-[#390F0F] mb-3">Add Custom Text (Optional)</h3>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter any custom text, quotes, or special instructions..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5D8F] focus:border-transparent resize-none"
                rows="3"
              />
            </div>

            {/* Customization Options */}
            {product.customizationOptions && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#390F0F]">Customization Options</h3>
                
                {Object.entries(product.customizationOptions).map(([optionType, options]) => (
                  <div key={optionType} className="space-y-2">
                    <label className="text-sm font-medium text-[#390F0F] capitalize">
                      {optionType.replace(/([A-Z])/g, ' $1').trim()}:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {options.map((option) => (
                        <button
                          key={option.name}
                          onClick={() => handleOptionChange(optionType, option.name)}
                          className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                            selectedOptions[optionType] === option.name
                              ? 'border-[#FF5D8F] bg-[#FF5D8F] text-white shadow-md'
                              : 'border-gray-300 hover:border-[#FF5D8F] text-gray-700 hover:shadow-sm'
                          }`}
                        >
                          {option.name}
                          {option.price !== product.price && (
                            <span className="ml-1 text-xs">
                              {option.price > product.price ? `+₹${option.price - product.price}` : ''}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-lg font-semibold text-[#390F0F] mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-[#FF5D8F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-[#390F0F]">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              <motion.button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 ${
                  product.inStock
                    ? 'bg-[#FF5D8F] text-white hover:bg-[#FF5D8F]/90 hover:-translate-y-1 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={product.inStock ? { scale: 1.02 } : {}}
                whileTap={product.inStock ? { scale: 0.98 } : {}}
              >
                {!product.inStock 
                  ? 'Currently Unavailable' 
                  : `Add ${quantity} to Cart - ₹${currentPrice * quantity}`
                }
              </motion.button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#390F0F] mb-8 text-center playfair-display-bold">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
