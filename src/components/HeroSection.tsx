
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/30"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className="spiritual-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1600419992652-a247287cf0d7?q=80&w=1800&auto=format&fit=crop" 
          alt="Spiritual background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/1800x900/FFEED9/FF9933?text=Divine+Spiritual+Kits&font=Poppins";
            console.log("Image failed to load, fallback applied");
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <div 
            className={`inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-white/90 font-medium">Celebrate Diwali with our Premium Collection</span>
          </div>
          
          <h1 
            className={`text-white heading-xl mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Divine Spiritual Kits for <span className="text-gold">Sacred Celebrations</span>
          </h1>
          
          <p 
            className={`text-white/80 text-lg md:text-xl mb-8 max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Curated pooja kits with authentic items for all your spiritual needs. Embrace tradition with modern convenience.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="btn-primary flex items-center justify-center">
              <span>Explore Collections</span>
              <ChevronRight size={18} className="ml-1 animate-pulse-soft" />
            </button>
            <Link to="/customize-kit" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal inline-flex items-center justify-center">
              Customize Your Kit
            </Link>
          </div>
        </div>
        
        {/* Floating elements */}
        <div 
          className={`absolute bottom-24 right-24 hidden lg:block glass-card p-5 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gold flex items-center justify-center animate-pulse-soft">
              <span className="text-xl font-bold text-charcoal">4.9</span>
            </div>
            <div>
              <p className="text-charcoal font-medium">Customer Rating</p>
              <p className="text-sm text-charcoal/70">Based on 2,500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
