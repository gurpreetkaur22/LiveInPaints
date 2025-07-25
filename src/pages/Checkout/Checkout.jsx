import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts";
import { toast } from "react-toastify";

const Checkout = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast.error("Please sign in to access checkout", {
        icon: "🔐",
      });
      navigate("/login");
    }
  }, [isSignedIn, isLoaded, navigate]);

  useEffect(() => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty. Add some products first!", {
        icon: "🛒",
      });
      navigate("/products");
    }
  }, [cartItems.length, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlaceOrder = () => {
    // Simulate order placement
    toast.success("Order placed successfully! Thank you for your purchase.", {
      icon: "🎉",
    });
    clearCart();
    navigate("/");
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF5D8F]/20 border-t-[#FF5D8F] rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-[#390F0F] poppins-regular">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn || cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl playfair-display-bold text-[#390F0F] mb-3 sm:mb-4">
            Checkout
          </h1>
          <p className="lg:text-[2vw] md:text-[4.5vw] sm:text-xl text-[#FF5D8F] dancing-script-bold">
            Almost there, {user?.firstName || "Artist"}! 🎨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Order Summary */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#FF5D8F]/10">
            <h2 className="text-xl sm:text-2xl playfair-display-bold text-[#390F0F] mb-4 sm:mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#390F0F] text-sm sm:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    {item.customizations &&
                      Object.keys(item.customizations).length > 0 && (
                        <div className="text-xs text-[#FF5D8F] mt-1">
                          Customized:{" "}
                          {Object.entries(item.customizations)
                            .map(([key, value]) => `${key}: ${value}`)
                            .join(", ")}
                        </div>
                      )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-[#FF5D8F] text-sm sm:text-base">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-3 sm:pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base sm:text-lg font-semibold text-[#390F0F]">
                  Total Items: {getTotalItems()}
                </span>
              </div>
              <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                <span className="text-[#390F0F]">Total Amount:</span>
                <span className="text-[#FF5D8F]">₹{getTotalPrice()}</span>
              </div>
            </div>
          </div>

          {/* Customer Info & Payment */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#FF5D8F]/10">
            <h2 className="text-xl sm:text-2xl playfair-display-bold text-[#390F0F] mb-4 sm:mb-6">
              Customer Information
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-white/50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Name</p>
                <p className="font-semibold text-[#390F0F] text-sm sm:text-base">
                  {user?.firstName} {user?.lastName}
                </p>
              </div>

              <div className="p-3 sm:p-4 bg-white/50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">Email</p>
                <p className="font-semibold text-[#390F0F] text-sm sm:text-base break-all">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>

            {/* Placeholder for payment method */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-[#390F0F] mb-3 sm:mb-4">
                Payment Method
              </h3>
              <div className="p-3 sm:p-4 bg-[#FF5D8F]/10 rounded-lg border border-[#FF5D8F]/20">
                <p className="text-xs sm:text-sm text-[#390F0F] text-center">
                  💳 Payment integration coming soon!
                  <br />
                  For now, this is a demo checkout process.
                </p>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-[#FF5D8F] text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#ff4d7d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🎨 Place Order - ₹{getTotalPrice()}
            </button>

            <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
              By placing this order, you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
