import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsProvider, CartProvider } from "./contexts";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./styles/scrollbar-fix.css"; // Import the scrollbar fix CSS
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          bodyClassName="text-base"
          toastClassName="text-base"
        />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
);
