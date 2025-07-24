import React from "react";
import { useCart } from "../../contexts";
import { motion, AnimatePresence } from "motion/react";

function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-opacity-10 z-40"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-999 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#fff5f8]">
              <h2 className="text-xl font-bold text-[#390F0F]">
                Shopping Cart ({totalItems})
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-[#390F0F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    className="w-24 h-24 text-[#FF5D8F]/40 mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 13h6"
                      opacity="0.5"
                    />
                    <circle cx="12" cy="15" r="1" fill="currentColor" opacity="0.3"/>
                  </svg>
                  <p className="text-gray-500 text-lg mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-gray-400 text-sm">
                    Add some products to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#390F0F] truncate mb-1">
                          {item.name}
                        </h3>
                        <p className="text-base text-[#FF5D8F] font-bold mb-2">
                          ₹{item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center mt-2 space-x-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="plus-minus-btn w-10 h-8 rounded-lg bg-[#FF5D8F] text-white hover:bg-[#FF5D8F]/80 flex items-center justify-center transition-colors duration-200 shadow-sm text- font-bold hover:bg-[#FF5D8F]/90 transition-all duration-300 shadow-lg hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            −
                          </button>

                          <span className="text-lg font-bold min-w-[3rem] text-center text-[#390F0F] bg-gray-100 px-4 py-2 rounded-lg">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="plus-minus-btn w-10 h-8 rounded-lg bg-[#FF5D8F] text-white hover:bg-[#FF5D8F]/80 flex items-center justify-center transition-colors duration-200 shadow-sm text-xl font-bold hover:bg-[#FF5D8F]/90 transition-all duration-300 shadow-lg hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 hover:text-red-700 flex-shrink-0"
                        title="Remove item"
                      >
                        <svg
                          className="w-5 h-5 stroke-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t-2 border-gray-200 p-4 bg-[#fff5f8] space-y-4">
                {/* Clear Cart Button */}
                <button
                  onClick={clearCart}
                  className="clear-cart-btn w-full py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200 border border-red-200"
                >
                  Clear Cart
                </button>

                {/* Total */}
                <div className="flex justify-between items-center py-2 px-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-lg font-semibold text-[#390F0F]">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-[#FF5D8F]">
                    ₹{totalPrice}
                  </span>
                </div>

                {/* Checkout Button */}
                <button className="proceed-btn w-full bg-[#FF5D8F] text-white py-4 rounded-full font-semibold hover:bg-[#FF5D8F]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartSidebar;
