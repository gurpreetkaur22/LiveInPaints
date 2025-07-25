import React, { useEffect } from "react";
import { useUser, UserProfile } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Account = () => {
  const { isSignedIn, isLoaded, user } = useUser();
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
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl playfair-display-bold text-[#390F0F] mb-2 sm:mb-3 md:mb-4">
            My Account
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FF5D8F] dancing-script-bold px-2">
            Welcome back, {user?.firstName || "Artist"}! 🎨
          </p>
        </div>

        {/* User Profile Component */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-[#FF5D8F]/10 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <UserProfile
              appearance={{
                elements: {
                  rootBox: "w-full max-w-none",
                  card: "bg-transparent shadow-none border-none w-full max-w-none",
                  navbar: "bg-white/50 rounded-lg sm:rounded-xl flex-wrap gap-1 sm:gap-2 p-2 sm:p-3 overflow-x-auto",
                  navbarButton: "text-[#390F0F] hover:bg-[#FF5D8F]/10 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap flex-shrink-0 min-w-fit",
                  navbarButtonActive: "bg-[#FF5D8F] text-white text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap flex-shrink-0 min-w-fit",
                  formButtonPrimary:
                    "bg-[#FF5D8F] hover:bg-[#ff4d7d] text-white font-medium rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 w-full sm:w-auto",
                  formFieldInput:
                    "border-[#FF5D8F]/20 focus:border-[#FF5D8F] rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 w-full",
                  formFieldLabel: "text-[#390F0F] poppins-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2",
                  headerTitle: "text-[#390F0F] playfair-display-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3",
                  headerSubtitle: "text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6",
                  profileSectionTitle: "text-[#390F0F] text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3",
                  profileSectionContent: "text-xs sm:text-sm md:text-base leading-relaxed",
                  accordionTriggerButton: "text-[#390F0F] hover:bg-[#FF5D8F]/10 text-xs sm:text-sm md:text-base p-2 sm:p-3 rounded-lg w-full text-left",
                  menuButton: "text-[#390F0F] hover:bg-[#FF5D8F]/10 text-xs sm:text-sm md:text-base p-2 sm:p-3 rounded-lg w-full text-left",
                  menuList: "bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg border border-[#FF5D8F]/10 max-w-xs sm:max-w-sm",
                  menuItem: "text-[#390F0F] hover:bg-[#FF5D8F]/10 text-xs sm:text-sm md:text-base p-2 sm:p-3 border-b border-gray-100 last:border-b-0",
                  profileSection: "mb-4 sm:mb-6 md:mb-8",
                  profileSectionItem: "mb-3 sm:mb-4",
                  profileSectionItemTitle: "text-[#390F0F] font-medium text-xs sm:text-sm md:text-base mb-1",
                  profileSectionItemText: "text-gray-600 text-xs sm:text-sm md:text-base",
                  avatarBox: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4",
                  avatarImage: "rounded-full border-2 border-[#FF5D8F]/20",
                  badge: "bg-[#FF5D8F]/10 text-[#FF5D8F] text-xs px-2 py-1 rounded-full",
                  formFieldAction: "mt-2 sm:mt-3",
                  formFieldHintText: "text-xs text-gray-500 mt-1",
                  formFieldSuccessText: "text-xs text-green-600 mt-1",
                  formFieldErrorText: "text-xs text-red-600 mt-1",
                  formFieldInputShowPasswordButton: "text-[#FF5D8F] hover:text-[#ff4d7d] p-2",
                  formResendCodeLink: "text-[#FF5D8F] hover:text-[#ff4d7d] text-xs sm:text-sm",
                  identityPreviewText: "text-[#390F0F] text-xs sm:text-sm md:text-base",
                  identityPreviewEditButton: "text-[#FF5D8F] hover:text-[#ff4d7d] text-xs sm:text-sm md:text-base ml-2",
                  phoneInputBox: "flex gap-2",
                  formFieldPhoneInput: "flex-1 border-[#FF5D8F]/20 focus:border-[#FF5D8F] rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4",
                  formFieldPhoneInputCountryCode: "border-[#FF5D8F]/20 focus:border-[#FF5D8F] rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 min-w-fit",
                  main: "w-full overflow-hidden",
                  profilePage: "w-full",
                  page: "w-full max-w-none",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
