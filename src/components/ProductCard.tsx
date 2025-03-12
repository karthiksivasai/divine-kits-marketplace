
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isBestseller = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  // Fallback image to use when the original image fails to load
  const fallbackImage = "https://placehold.co/400x400/F9F4F0/FF9933?text=Product&font=Poppins";

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 bg-white shadow-neuro hover:shadow-lg">
        {/* Product image with overlay */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Link to={`/product/${id}`}>
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              onError={(e) => {
                console.log(`Image failed to load: ${image}`);
                (e.target as HTMLImageElement).src = fallbackImage;
                (e.target as HTMLImageElement).onerror = null; // Prevent infinite loops
              }}
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-crimson text-white text-xs font-medium px-2.5 py-1 rounded">New</span>
            )}
            {isBestseller && (
              <span className="bg-gold text-charcoal text-xs font-medium px-2.5 py-1 rounded">Bestseller</span>
            )}
            {originalPrice && (
              <span className="bg-saffron text-white text-xs font-medium px-2.5 py-1 rounded">{discount}% OFF</span>
            )}
          </div>
          
          {/* Action buttons */}
          <div 
            className={`absolute bottom-3 right-3 flex flex-col gap-2 transform transition-all duration-300 ${
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-saffron hover:text-white transition-colors duration-300"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-saffron hover:text-white transition-colors duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
        
        {/* Product details */}
        <div className="p-4">
          <Link to={`/product/${id}`} className="block">
            <h3 className="font-medium text-lg text-charcoal mb-1 transition-colors group-hover:text-saffron">
              {name}
            </h3>
          </Link>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center text-gold">
              <Star size={14} fill="currentColor" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <span className="mx-1 text-charcoal/30">•</span>
            <span className="text-xs text-charcoal/60">{reviewCount} reviews</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center">
            <span className="text-lg font-semibold text-charcoal">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="ml-2 text-sm text-charcoal/60 line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
