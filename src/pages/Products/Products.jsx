import React, { useEffect } from "react";
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-[#FF5D8F]">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f8] to-[#fff] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#390F0F] playfair-display-bold mb-4">
            Our Products
          </h1>
          <p className="lg:text-[2vw] md:text-[4vw] text-[#FF5D8F] dancing-script-bold">
            Discover our beautiful collection of custom art
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter-btn ${
                selectedCategory === category ? "active" : "inactive"
              }`}
            >
              {category === "all"
                ? "All Products"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid - Responsive: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
