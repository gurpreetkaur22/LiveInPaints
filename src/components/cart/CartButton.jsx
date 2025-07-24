import React from 'react';
import { useCart } from '../../contexts';
import cartIcon from '/images/cart.webp';
import cartIconFilled from '/images/cart-filled.webp';

function CartButton({ onMobileClick }) {
  const { getTotalItems, toggleCart } = useCart();
  const itemCount = getTotalItems();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    toggleCart();
    if (onMobileClick) {
      onMobileClick();
    }
  };

  return (
    <div className="relative">
      <div
        className="navbar-icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ cursor: 'pointer', touchAction: 'manipulation' }}
      >
        <img
          className="w-full h-full"
          src={isHovered || itemCount > 0 ? cartIconFilled : cartIcon}
          alt="Cart"
          draggable={false}
        />
        
        {/* Item Count Badge */}
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#FFF] text-[#FF5D8F] text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium border-2 border-[#FF5D8F]">
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default CartButton;
