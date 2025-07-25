import React, { useEffect } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Account = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast.info("Please sign in to access your account.", {
        icon: "🔐",
      });
      navigate("/login");
    }
  }, [isSignedIn, isLoaded, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get user's actual name from Google/Clerk authentication
  const getDisplayName = () => {
    // First try first name + last name (like "Gurpreet Kaur")
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }

    // Then try just first name (like "Gurpreet")
    if (user?.firstName) {
      return user.firstName;
    }

    // Then try full name if available
    if (user?.fullName) {
      return user.fullName;
    }

    // Fallback to "Artist" if no name is available
    return "Artist";
  };

  const displayName = getDisplayName();

  const handleLogout = async () => {
    try {
      sessionStorage.setItem("liveinpaints_from_auth", "true");
      await signOut();
      toast.success("Successfully logged out. See you soon!", {
        icon: "👋",
      });
      navigate("/");
    } catch (error) {
      toast.error("Error logging out. Please try again.");
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8] px-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#FF5D8F]/20 border-t-[#FF5D8F] rounded-full mx-auto mb-4 animate-spin"></div>
          <p className="text-[#390F0F] poppins-regular text-sm sm:text-base">
            Loading your account...
          </p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl playfair-display-bold text-[#390F0F] mb-4">
            My Account
          </h1>
          <p className="lg:text-[2vw] md:text-[4vw] text-[#FF5D8F] dancing-script-bold">
            Welcome back, {displayName}! 🎨
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#FF5D8F]/10 p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#FF5D8F]/20 mx-auto mb-4">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt={`${displayName}'s profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#FF5D8F] to-[#ff9e9e] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {displayName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <h2 className="text-2xl playfair-display-bold text-[#390F0F] mb-2">
              {displayName}
            </h2>
            <p className="text-gray-600 poppins-regular">
              {user?.emailAddresses?.[0]?.emailAddress}
            </p>
          </div>

          {/* Account Info */}
          <div className="space-y-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-xl">
              <label className="text-sm poppins-bold text-[#390F0F] block mb-1">
                Email Address
              </label>
              <p className="text-gray-700 poppins-regular">
                {user?.emailAddresses?.[0]?.emailAddress}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <label className="text-sm poppins-bold text-[#390F0F] block mb-1">
                Member Since
              </label>
              <p className="text-gray-700 poppins-regular">
                {new Date(user?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/products")}
              className="flex-1 bg-[#FF5D8F] hover:bg-[#ff4d7d] text-white poppins-bold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Browse Products
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 bg-white hover:bg-gray-50 text-[#390F0F] border-2 border-[#FF5D8F] poppins-bold py-3 px-6 rounded-xl transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
