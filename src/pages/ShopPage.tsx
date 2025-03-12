
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductFilter, { FilterState } from '../components/ProductFilter';
import ProductGrid from '../components/ProductGrid';
import LimitedDealBanner from '../components/LimitedDealBanner';
import ShopRecommendations from '../components/ShopRecommendations';
import { motion } from 'framer-motion';

const ShopPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 5000],
    categories: [],
    festivals: [],
    deities: [],
    sortBy: 'popularity',
    search: ''
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // Example limited deal
  const limitedDeal = {
    title: 'Diwali Flash Sale!',
    description: 'Get huge discounts on all festive pooja kits and accessories.',
    discount: 'Up to 40% OFF',
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    image: 'https://images.unsplash.com/photo-1611464613921-4cfa2b8c486b?q=80&w=800&auto=format&fit=crop'
  };

  return (
    <div className="min-h-screen bg-beige/30">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-saffron/10 to-gold/10">
          <div className="container-custom">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-lg mb-4">Discover Divine Treasures</h1>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Explore our curated collection of pooja essentials, festive kits, and spiritual artifacts.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Shop Content */}
        <section className="py-12">
          <div className="container-custom">
            {/* Limited Time Deal Banner */}
            <LimitedDealBanner {...limitedDeal} />
            
            {/* Filters and Products */}
            <div className="mt-8">
              <ProductFilter onFilterChange={handleFilterChange} />
              <ProductGrid filters={filters} />
            </div>
            
            {/* AI Recommendations */}
            <ShopRecommendations />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopPage;
