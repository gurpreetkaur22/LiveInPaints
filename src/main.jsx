import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { ProductsProvider, CartProvider } from "./contexts";
import App from "./App.jsx";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./styles/index.css";
import "./styles/scrollbar-fix.css"; // Import the scrollbar fix CSS
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log("Clerk Publishable Key:", PUBLISHABLE_KEY ? "✅ Found" : "❌ Missing");

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Wrapper component to provide navigate function to Clerk
function ClerkProviderWithRouter({ children }) {
  const navigate = useNavigate();
  
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => {
        // Handle Clerk's internal routes by redirecting to appropriate pages
        if (to.includes('sign-factor') || to.includes('verify') || to.includes('factor-one') || to.includes('factor-two')) {
          navigate('/login');
        } else if (to.includes('sign-up')) {
          navigate('/register');
        } else {
          navigate(to);
        }
      }}
      afterSignInUrl="/"
      afterSignUpUrl="/"
      signInUrl="/login"
      signUpUrl="/register"
    >
      {children}
    </ClerkProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRouter>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </ClerkProviderWithRouter>
    </BrowserRouter>
  </StrictMode>
);
