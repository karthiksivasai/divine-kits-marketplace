import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';

const ShopRecommendations = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('shop-recommendations');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Sample recommended products with updated image URLs
  const recommendedProducts = [
    {
      id: '1',
      name: 'Deluxe Diwali Pooja Kit',
      price: 1899,
      originalPrice: 2499,
      image: 'https://placehold.co/400x400/FFEED9/FF9933?text=Diwali+Kit&font=Poppins',
      rating: 4.9,
      reviewCount: 128,
      isNew: true,
      isBestseller: true,
    },
    {
      id: '5',
      name: 'Handcrafted Brass Diya Set',
      price: 1499,
      originalPrice: 1899,
      image: 'https://placehold.co/400x400/FFEED9/FF9933?text=Diya+Set&font=Poppins',
      rating: 4.7,
      reviewCount: 68,
      isNew: true,
      isBestseller: false,
    },
    {
      id: '8',
      name: 'Premium Sandalwood Incense',
      price: 499,
      originalPrice: null,
      image: 'https://placehold.co/400x400/FFEED9/FF9933?text=Incense&font=Poppins',
      rating: 4.8,
      reviewCount: 112,
      isNew: false,
      isBestseller: true,
    },
    {
      id: '10',
      name: 'Silver Lakshmi Idol',
      price: 3499,
      originalPrice: 3999,
      image: 'https://placehold.co/400x400/FFEED9/FF9933?text=Lakshmi+Idol&font=Poppins',
      rating: 4.9,
      reviewCount: 28,
      isNew: false,
      isBestseller: true,
    },
  ];

  return (
    <section id="shop-recommendations" className="my-16">
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center mb-3 bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent"
        >
          <Sparkles size={20} className="mr-2 text-gold" />
          <span className="text-lg font-semibold">Personalized For You</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading-md"
        >
          Recommended Products
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-charcoal/70 max-w-2xl mx-auto mt-2"
        >
          Based on your browsing history and preferences
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopRecommendations;
