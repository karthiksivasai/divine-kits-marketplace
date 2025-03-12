
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronDown, Info, Check } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample product data
  const product = {
    id: '1',
    name: 'Deluxe Diwali Pooja Kit',
    price: 1899,
    originalPrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1604423082164-3c481c056aea?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1627307684466-548324393816?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610630639806-1005dba8eada?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 128,
    description: 'This premium Diwali Pooja Kit contains all the essential items needed for a complete and authentic Diwali celebration. Each item is carefully selected to ensure quality and authenticity.',
    highlights: [
      'Complete set of pooja items',
      'Premium quality diyas and candles',
      'Authentic incense and dhoop',
      'Traditional rangoli colors',
      'Eco-friendly materials'
    ],
    contents: [
      'Brass Diya Set (5 pieces)',
      'Scented Candles (10 pieces)',
      'Incense Sticks (3 packets)',
      'Rangoli Colors (5 colors)',
      'Lakshmi-Ganesh Idol',
      'Pooja Thali',
      'Roli & Chawal',
      'Decorative Lights'
    ],
    stock: 24,
    deliveryDate: '26 Oct, 2023',
  };
  
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.stock));
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-white shadow-neuro">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`w-24 h-24 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-saffron' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-charcoal">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mt-2">
              <div className="flex items-center text-gold">
                <Star size={16} fill="currentColor" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="mx-1 text-charcoal/30">•</span>
              <span className="text-sm text-charcoal/60">{product.reviewCount} reviews</span>
            </div>
            
            {/* Price */}
            <div className="flex items-center mt-4">
              <span className="text-3xl font-bold text-charcoal">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="ml-3 text-xl text-charcoal/60 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="ml-3 bg-saffron text-white text-sm font-medium px-2.5 py-1 rounded">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>
            
            <div className="my-6 border-t border-b border-gray-200 py-6">
              <p className="text-charcoal/80">{product.description}</p>
              
              {/* Highlights */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-charcoal mb-3">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-saffron mr-2" />
                      <span className="text-sm text-charcoal/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Stock and Delivery */}
              <div className="flex items-center space-x-6 mt-6">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-charcoal">In Stock:</span>
                  <span className="ml-2 text-sm text-saffron">{product.stock} units</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-charcoal">Delivery by:</span>
                  <span className="ml-2 text-sm text-saffron">{product.deliveryDate}</span>
                </div>
              </div>
            </div>
            
            {/* Quantity */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-charcoal font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-3 py-1 text-charcoal hover:text-saffron transition-colors"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-3 py-1 text-charcoal min-w-[40px] text-center">{quantity}</span>
                <button 
                  className="px-3 py-1 text-charcoal hover:text-saffron transition-colors"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="btn-primary flex-1 flex items-center justify-center">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="btn-outline flex items-center justify-center px-4">
                <Heart size={18} />
              </button>
              <button className="btn-outline flex items-center justify-center px-4">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button 
                className={`pb-4 px-1 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === 'description' 
                    ? 'border-saffron text-saffron' 
                    : 'border-transparent text-charcoal/60 hover:text-charcoal'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`pb-4 px-1 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === 'contents' 
                    ? 'border-saffron text-saffron' 
                    : 'border-transparent text-charcoal/60 hover:text-charcoal'
                }`}
                onClick={() => setActiveTab('contents')}
              >
                Kit Contents
              </button>
              <button 
                className={`pb-4 px-1 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === 'reviews' 
                    ? 'border-saffron text-saffron' 
                    : 'border-transparent text-charcoal/60 hover:text-charcoal'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-charcoal/80">
                <p>
                  This premium Diwali Pooja Kit is designed to provide you with all the essential items needed for an authentic and complete Diwali celebration. Each item in this kit has been carefully selected to ensure the highest quality and authenticity.
                </p>
                <p>
                  The Deluxe Diwali Pooja Kit is perfect for families looking to celebrate the festival of lights with traditional rituals and modern convenience. All items are packaged beautifully in an eco-friendly box, making it also an ideal gift for your loved ones.
                </p>
                <p>
                  Whether you're a seasoned practitioner or celebrating for the first time, this comprehensive kit provides everything you need to perform your Diwali rituals with ease and authenticity.
                </p>
                <p>
                  Our kits are assembled with care and respect for tradition, ensuring that your spiritual experience is enhanced and simplified.
                </p>
              </div>
            )}
            
            {activeTab === 'contents' && (
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">Kit Contents:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  {product.contents.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-saffron mr-2" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-gold mr-2">
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                  </div>
                  <span className="text-xl font-semibold text-charcoal">
                    {product.rating} out of 5
                  </span>
                </div>
                <p className="text-charcoal/60 mb-6">
                  Based on {product.reviewCount} reviews
                </p>
                
                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-gold mr-2">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <span className="font-medium text-charcoal">Excellent Quality</span>
                    </div>
                    <p className="text-sm text-charcoal/80 mb-2">
                      The quality of all the items in this pooja kit is excellent. The brass diyas are beautifully crafted and the incense smells divine. Highly recommend!
                    </p>
                    <div className="flex items-center text-xs text-charcoal/60">
                      <span>By Priya S.</span>
                      <span className="mx-1">•</span>
                      <span>Verified Purchase</span>
                      <span className="mx-1">•</span>
                      <span>October 10, 2023</span>
                    </div>
                  </div>
                  
                  <div className="pb-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-gold mr-2">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <span className="font-medium text-charcoal">Perfect for Diwali</span>
                    </div>
                    <p className="text-sm text-charcoal/80 mb-2">
                      This kit had everything I needed for Diwali celebration. The packaging was beautiful and all items were of premium quality. Will definitely buy again next year!
                    </p>
                    <div className="flex items-center text-xs text-charcoal/60">
                      <span>By Rahul M.</span>
                      <span className="mx-1">•</span>
                      <span>Verified Purchase</span>
                      <span className="mx-1">•</span>
                      <span>October 5, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
