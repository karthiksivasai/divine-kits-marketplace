
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Regular Ritual Kits
  const regularRitualKits = [
    {
      id: 'regular-1',
      name: 'Ganapathi Pooja Kit',
      price: 799,
      originalPrice: 999,
      image: 'https://placehold.co/400x400/FCF5EA/FF9933?text=Ganapathi+Kit&font=Poppins',
      rating: 4.9,
      reviewCount: 87,
      isNew: false,
      isBestseller: true,
    },
    {
      id: 'regular-2',
      name: 'Satyanarayana Vratham Kit',
      price: 1299,
      originalPrice: 1599,
      image: 'https://placehold.co/400x400/FCF5EA/FF9933?text=Satyanarayana+Kit&font=Poppins',
      rating: 4.7,
      reviewCount: 62,
      isNew: false,
      isBestseller: false,
    },
    {
      id: 'regular-3',
      name: 'Akku Poojal Kit',
      price: 599,
      originalPrice: 799,
      image: 'https://placehold.co/400x400/FCF5EA/FF9933?text=Akku+Poojal+Kit&font=Poppins',
      rating: 4.8,
      reviewCount: 45,
      isNew: true,
      isBestseller: false,
    },
    {
      id: 'regular-4',
      name: 'Navagraha Pooja Kit',
      price: 1099,
      originalPrice: null,
      image: 'https://placehold.co/400x400/FCF5EA/FF9933?text=Navagraha+Kit&font=Poppins',
      rating: 4.6,
      reviewCount: 58,
      isNew: false,
      isBestseller: false,
    },
    {
      id: 'regular-5',
      name: 'Varalakshmi Vratham Kit',
      price: 999,
      originalPrice: 1299,
      image: 'https://placehold.co/400x400/FCF5EA/FF9933?text=Varalakshmi+Kit&font=Poppins',
      rating: 4.9,
      reviewCount: 73,
      isNew: false,
      isBestseller: true,
    },
  ];

  // Grand Ritual Function Kits
  const grandRitualKits = [
    {
      id: 'grand-1',
      name: 'Gruha Pravesham Kit',
      price: 3499,
      originalPrice: 3999,
      image: 'https://placehold.co/400x400/FFF3E0/FF9933?text=Gruha+Pravesham&font=Poppins',
      rating: 4.9,
      reviewCount: 42,
      isNew: false,
      isBestseller: true,
    },
    {
      id: 'grand-2',
      name: 'Marriage Pooja Kit',
      price: 5999,
      originalPrice: 6499,
      image: 'https://placehold.co/400x400/FFF3E0/FF9933?text=Marriage+Kit&font=Poppins',
      rating: 4.8,
      reviewCount: 38,
      isNew: true,
      isBestseller: true,
    },
    {
      id: 'grand-3',
      name: 'Ganapathi Homam Kit',
      price: 2999,
      originalPrice: 3299,
      image: 'https://placehold.co/400x400/FFF3E0/FF9933?text=Ganapathi+Homam&font=Poppins',
      rating: 4.7,
      reviewCount: 31,
      isNew: false,
      isBestseller: false,
    },
    {
      id: 'grand-4',
      name: 'Chandi Homam Kit',
      price: 3599,
      originalPrice: 3999,
      image: 'https://placehold.co/400x400/FFF3E0/FF9933?text=Chandi+Homam&font=Poppins',
      rating: 4.9,
      reviewCount: 27,
      isNew: true,
      isBestseller: false,
    },
  ];

  return (
    <section id="featured-products" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-saffron">Divine</span> Pooja Kits
          </h2>
          <p className={`text-charcoal/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Curated collections of premium pooja kits for every occasion and ritual, from daily worship to grand ceremonies.
          </p>
        </div>
        
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Tabs defaultValue="regular" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="regular" className="text-sm md:text-base">Regular Ritual Kits</TabsTrigger>
              <TabsTrigger value="grand" className="text-sm md:text-base">Grand Ritual Kits</TabsTrigger>
            </TabsList>
            
            <TabsContent value="regular" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {regularRitualKits.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-700`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <Link to="/shop" className="flex items-center text-saffron hover:text-gold transition-colors">
                  <span className="mr-2">View all regular ritual kits</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="grand" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {grandRitualKits.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-700`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <Link to="/shop" className="flex items-center text-crimson hover:text-crimson/80 transition-colors">
                  <span className="mr-2">View all grand ceremony kits</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop" className="btn-primary">Browse All Products</Link>
            <Link to="/customize-kit" className="btn-outline">Customize Your Own Kit</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
