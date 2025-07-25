# 🎨 LiveInPaints

## Where Art Comes to Life ✨

LiveInPaints is a premium e-commerce platform that brings your photos to life with beautiful artistic animations. Our website offers a seamless shopping experience for custom illustrations, paintings, bookmarks, wallet cards, business cards, and tile frames with a focus on exceptional user experience and smooth animations.

## 🌐 Live Demo

[Visit LiveInPaints](https://live-in-paints.vercel.app) - Experience the magic of animated art!

![LiveInPaints Screenshot](/images/screenshot.png)

## 🎨 Features

### 🎭 **Animation & User Experience**

- **Stunning Entrance Animation**: Captivating preloader and entrance animation that sets the mood for an artistic experience
- **Smart Animation Control**: Animations only show on fresh visits, skip on login/logout for smooth UX
- **Smooth Scrolling**: Enhanced scrolling experience with custom pink-themed scrollbar
- **Interactive Elements**: Hover effects, smooth animations, and interactive product categories
- **Custom Cursor**: Artistic custom cursor that enhances the creative experience

### 🔐 **Authentication & User Management**

- **Clerk Integration**: Secure authentication with Google, email, and social login options
- **Custom Account Page**: Beautiful, personalized account management with user profile photos
- **Smart Redirects**: Seamless login/logout flow with proper redirect handling
- **User Profile Display**: Shows actual user names from Google authentication

### 📱 **Responsive Design**

- **Mobile-First Approach**: Fully responsive layout optimized for all devices
- **Tablet Optimization**: Special attention to tablet layouts and touch interactions
- **Desktop Experience**: Rich desktop experience with full animation suite
- **Cross-Browser Support**: Works seamlessly across all modern browsers

### 🛒 **E-Commerce Features**

- **Shopping Cart**: Fully functional cart with item management and clear notifications
- **Product Categories**: Interactive product browsing with smooth category transitions
- **Checkout System**: Secure, authentication-protected checkout process
- **Product Gallery**: Dynamic gallery showcasing animated artwork

### 🎨 **Visual Enhancements**

- **Custom Scrollbar**: Beautiful pink gradient scrollbar matching brand theme
- **Toast Notifications**: Elegant user feedback system for all interactions
- **Loading States**: Smooth loading animations and states throughout the app
- **404 Page**: Custom-designed 404 page with navigation options

## 🚀 Technologies Used

### **Frontend Framework**

- **React 18**: Latest React with hooks and modern patterns
- **Vite**: Lightning-fast build tool and development server
- **React Router DOM**: Client-side routing with smooth transitions

### **Styling & UI**

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom CSS**: Hand-crafted animations and responsive design
- **Google Fonts**: Poppins, Playfair Display, and Dancing Script fonts

### **Animations & Interactions**

- **GSAP (GreenSock)**: Professional-grade animation library
- **Motion/React (Framer Motion)**: React animation components
- **Custom Animations**: Hand-crafted entrance and scroll animations

### **Authentication & Backend**

- **Clerk**: Complete authentication solution with social login
- **Context API**: State management for cart and user data
- **Session Storage**: Smart session management for UX optimization

### **Development Tools**

- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Vercel**: Deployment and hosting platform

## 📱 Responsive Design

LiveInPaints is designed to provide an optimal viewing experience across a wide range of devices:

- **Desktop**: Full-featured experience with rich animations and interactions
- **Tablet**: Optimized layout that maintains all functionality
- **Mobile**: Streamlined interface with touch-friendly elements

## 🖌️ Product Categories

- **Paintings**: Stunning artwork starting from ₹299
- **Custom Illustrations**: Personalized designs starting from ₹499
- **Cute Bookmarks**: Artistic bookmarks starting from ₹99
- **Wallet Cards**: Portable art pieces starting from ₹199
- **Business Cards**: Creative professional cards starting from ₹199
- **Tile Frames**: Elegant decorative pieces starting from ₹599

## 🛠️ Installation and Setup

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager
- Clerk account for authentication (optional for development)

### **Quick Start**

```bash
# Clone the repository
git clone https://github.com/yourusername/LiveInPaints.git

# Navigate to the project directory
cd LiveInPaints

# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env
# Add your Clerk publishable key to .env

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
LiveInPaints/
├── public/
│   ├── images/           # Static images and assets
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── common/       # Reusable components
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Preloader.jsx
│   │   │   ├── EntranceAnimation.jsx
│   │   │   └── SmoothScroll.jsx
│   │   │
│   │   ├── layout/       # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FooterResponsive.css
│   │   │
│   │   ├── cart/         # Shopping cart components
│   │   │   ├── CartButton.jsx
│   │   │   └── CartSidebar.jsx
│   │   │
│   │   ├── products/     # Product-related components
│   │   │   └── ProductCard.jsx
│   │   │
│   │   ├── gallery/      # Gallery components
│   │   └── testimonials/ # Testimonial components
│   │
│   ├── pages/
│   │   ├── Home/         # Homepage with animations
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   │
│   │   ├── Products/     # Product catalog
│   │   │   ├── Products.jsx
│   │   │   └── ProductDetail.jsx
│   │   │
│   │   ├── Login/        # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── SSOCallback.jsx
│   │   │
│   │   ├── Account/      # User account management
│   │   │   └── Account.jsx
│   │   │
│   │   ├── Checkout/     # Checkout process
│   │   │   └── Checkout.jsx
│   │   │
│   │   ├── About/        # About page
│   │   ├── Contact/      # Contact page
│   │   └── PageNotFound.jsx
│   │
│   ├── contexts/         # React Context providers
│   │   ├── CartContext.jsx
│   │   └── ProductsContext.jsx
│   │
│   ├── routes/           # Routing configuration
│   │   └── MainRoutes.jsx
│   │
│   ├── styles/           # Global styles
│   │   ├── index.css
│   │   └── scrollbar-fix.css
│   │
│   ├── utils/            # Utility functions
│   │   └── smoothScroll.js
│   │
│   ├── App.jsx           # Main app component
│   └── main.jsx          # App entry point
│
├── .env                  # Environment variables
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Key Improvements & Optimizations

### **Performance Enhancements**

- ✅ **Smart Animation Loading**: Animations only load on fresh visits, not after authentication
- ✅ **Optimized Bundle Size**: Code splitting and lazy loading for better performance
- ✅ **Smooth Scrolling**: Custom scrollbar without performance impact on animations
- ✅ **Responsive Images**: Optimized image loading for all device sizes

### **User Experience Improvements**

- ✅ **Authentication Flow**: Seamless login/logout without animation interruptions
- ✅ **Cart Notifications**: Clear visual feedback for cart actions
- ✅ **Error Handling**: Comprehensive error handling with user-friendly messages
- ✅ **Loading States**: Smooth loading animations throughout the application

### **Mobile Optimization**

- ✅ **Touch-Friendly**: All interactions optimized for touch devices
- ✅ **Responsive Typography**: Fluid typography that scales perfectly
- ✅ **Mobile Navigation**: Intuitive mobile menu with smooth animations
- ✅ **Performance**: Optimized for mobile performance and battery life

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### **Deployment Steps**

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For inquiries, please reach out to us at:

- **Instagram**: [@liveinpaints](https://www.instagram.com/liveinpaints/)
- **Email**: liveinpaints@icloud.com

## 📄 License

© 2025 LiveInPaints. All rights reserved.

---

**Built with ❤️ by the LiveInPaints team**

_Where every pixel tells a story and every animation brings art to life._
