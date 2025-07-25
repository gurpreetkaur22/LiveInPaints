import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#fff5f8] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl playfair-display-bold text-[#FF5D8F] mb-6 sm:mb-8">
          404
        </h1>

        {/* Main Content */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl playfair-display-bold text-[#390F0F] mb-3 sm:mb-4">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#FF5D8F] dancing-script-bold mb-4 sm:mb-6">
            This page doesn't exist in our gallery
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 poppins-regular mb-6 sm:mb-8 leading-relaxed">
            The page you're looking for might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-6 py-3 bg-[#FF5D8F] hover:bg-[#ff4d7d] text-white font-medium rounded-lg transition-colors duration-300 poppins-bold text-sm sm:text-base"
            >
              Go Home
            </button>
            
            <button
              onClick={() => navigate('/products')}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 text-[#390F0F] font-medium rounded-lg border-2 border-[#FF5D8F] transition-colors duration-300 poppins-bold text-sm sm:text-base"
            >
              Browse Products
            </button>
          </div>

          {/* Back Link */}
          <button
            onClick={() => window.history.back()}
            className="PNF-btn text-[#FF5D8F] hover:text-[#ff4d7d] poppins-regular transition-colors duration-300 underline text-sm sm:text-base"
          >
            ← Go back to previous page
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
