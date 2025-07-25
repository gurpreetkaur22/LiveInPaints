import React, { useEffect } from "react";
import { SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Set flag to indicate navigation from auth
      sessionStorage.setItem('liveinpaints_from_auth', 'true');
      
      toast.success("Welcome to LiveInPaints! Account created successfully.", {
        icon: "🎨",
      });
      navigate("/");
    }
  }, [isSignedIn, isLoaded, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] via-[#fff5f8] to-[#ffedf3] pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Register Form */}
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 bg-white/30 backdrop-blur-sm order-2 lg:order-1">
          <div className="w-full max-w-md">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#FF5D8F]/10 overflow-hidden">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl playfair-display-bold text-[#390F0F] mb-2">
                  Create Account
                </h2>
                <p className="text-gray-600 poppins-regular text-sm sm:text-base">
                  Join the Live In Paints family
                </p>
              </div>

              <div className="w-full flex justify-center">
                <div className="w-full max-w-sm">
                  <SignUp
                    signInUrl="/login"
                    redirectUrl="/"
                    afterSignInUrl="/"
                    afterSignUpUrl="/"
                    appearance={{
                      elements: {
                        rootBox: "w-full flex justify-center",
                        card: "bg-transparent shadow-none border-none w-full",
                        headerTitle: "hidden",
                        headerSubtitle: "hidden",
                        socialButtonsBlockButton:
                          "border-[#FF5D8F]/30 hover:bg-[#FF5D8F]/10 text-[#390F0F] rounded-xl transition-all duration-200 text-sm sm:text-base py-2 sm:py-3 w-full text-center",
                        formButtonPrimary:
                          "bg-[#FF5D8F] hover:bg-[#ff4d7d] text-white font-medium rounded-xl py-2 sm:py-3 transition-all duration-200 hover:shadow-lg text-sm sm:text-base w-full",
                        formFieldInput:
                          "border-[#FF5D8F]/20 focus:border-[#FF5D8F] rounded-xl bg-white/70 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base py-2 sm:py-3 w-full text-center",
                        formFieldLabel: "text-[#390F0F] poppins-bold text-sm sm:text-base text-left w-full",
                        footerActionLink:
                          "text-[#FF5D8F] hover:text-[#ff4d7d] poppins-bold transition-colors duration-200 text-sm sm:text-base",
                        identityPreviewText: "text-[#390F0F] text-sm sm:text-base text-center",
                        identityPreviewEditButton:
                          "text-[#FF5D8F] hover:text-[#ff4d7d] text-sm sm:text-base",
                        formFieldRow: "w-full",
                        formField: "w-full",
                        formFieldAction: "w-full flex justify-center",
                        socialButtons: "w-full flex flex-col items-center space-y-2",
                        socialButtonsBlockButtonText: "text-sm sm:text-base",
                        dividerRow: "w-full flex justify-center",
                        dividerText: "text-sm text-gray-500 text-center",
                        form: "w-full space-y-4",
                        formFieldInputShowPasswordButton: "text-[#FF5D8F] hover:text-[#ff4d7d]",
                        footer: "w-full text-center",
                        footerAction: "w-full text-center",
                        footerActionText: "text-center",
                        main: "w-full",
                        formContainer: "w-full",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-600 poppins-regular text-xs sm:text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="LR-btns text-[#FF5D8F] hover:text-[#ff4d7d] poppins-bold transition-colors duration-200"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Headings and Image */}
        <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 order-1 lg:order-2">
          <div className="text-center max-w-lg w-full">
            {/* Logo/Image */}
            <div className="mb-6 md:mb-8">
              <img
                src="/images/icon2.webp"
                alt="Art supplies and paintbrush"
                className="w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-cover rounded-3xl shadow-xl mx-auto"
                draggable={false}
              />
            </div>

            {/* Headings */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl playfair-display-bold text-[#390F0F] mb-3 md:mb-4">
              Join Our Family!
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#FF5D8F] dancing-script-bold mb-4 md:mb-6">
              "Start your colorful journey with us 🎨"
            </p>

            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#FF5D8F] to-[#ff9e9e] mx-auto rounded-full mb-6 md:mb-8" />

            {/* Benefits - Hidden on mobile, visible on tablet+ */}
            <div className="space-y-3 md:space-y-4 hidden sm:block">
              <div className="flex items-center justify-center gap-3 text-[#390F0F]">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#FF5D8F] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="poppins-regular text-sm md:text-base">
                  Exclusive access to new collections
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#390F0F]">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#FF5D8F] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="poppins-regular text-sm md:text-base">
                  Member-only discounts and offers
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#390F0F]">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#FF5D8F] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="poppins-regular text-sm md:text-base">
                  Join our creative community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
