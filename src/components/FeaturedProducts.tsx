
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('featured-products');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Sample product data
  const products = [
    {
      id: '1',
      name: 'Deluxe Diwali Pooja Kit',
      price: 1899,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1604423082164-3c481c056aea?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewCount: 128,
      isNew: true,
      isBestseller: true,
    },
    {
      id: '2',
      name: 'Navratri Special Kit',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1558180053-f059cae4b8c7?q=80&w=800&auto=format&fit=crop',
      rating: 4.7,
      reviewCount: 85,
      isNew: false,
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Ganesh Chaturthi Essentials',
      price: 999,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1571424461208-d9181e237ba9?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewCount: 74,
      isNew: false,
      isBestseller: false,
    },
    {
      id: '4',
      name: 'Daily Pooja Essentials',
      price: 699,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1527938767652-467bc70101da?q=80&w=800&auto=format&fit=crop',
      rating: 4.6,
      reviewCount: 92,
      isNew: false,
      isBestseller: false,
    },
  ];

  return (
    <section id="featured-products" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured <span className="text-saffron">Divine Kits</span>
          </h2>
          <p className={`text-charcoal/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Curated collections of premium pooja kits for every occasion and ritual.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="btn-outline">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
