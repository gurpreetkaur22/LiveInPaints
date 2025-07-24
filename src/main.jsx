import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsProvider, CartProvider } from "./contexts";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./styles/scrollbar-fix.css"; // Import the scrollbar fix CSS

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          bodyClassName="text-base"
          toastClassName="text-base"
        />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
);
