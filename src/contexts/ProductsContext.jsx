import React, { createContext, useContext, useState, useEffect } from "react";
import { products as productData } from "../data/products";

// Create context
const ProductsContext = createContext();

// Provider component
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Categories list
  const categories = [
    "all",
    "paintings",
    "illustrations",
    "bookmarks",
    "cards",
    "frames",
    "crafts",
  ];

  // Get filtered products
  const getFilteredProducts = () => {
    if (selectedCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  // Get single product by ID
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    selectedCategory,
    setSelectedCategory,
    categories,
    getFilteredProducts,
    getProductById,
  };

  // Load products on mount
  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom hook
export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
