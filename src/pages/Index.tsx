
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CategoryNavigation from '../components/CategoryNavigation';
import FeaturedProducts from '../components/FeaturedProducts';
import FestivalCountdown from '../components/FestivalCountdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="om-symbol"></div>
      <div className="diya-pattern"></div>
      
      {/* Main content */}
      <Navbar />
      <HeroSection />
      <CategoryNavigation />
      <FeaturedProducts />
      <FestivalCountdown />
      <Footer />
    </div>
  );
};

export default Index;
