
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

interface DealBannerProps {
  title: string;
  description: string;
  discount: string;
  endTime: Date;
  image: string;
}

const LimitedDealBanner: React.FC<DealBannerProps> = ({
  title,
  description,
  discount,
  endTime,
  image
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('limited-deal-banner');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endTime - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section id="limited-deal-banner" className="my-12">
      <motion.div 
        className="rounded-2xl overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-crimson/80 to-saffron/80 relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
            <p className="mb-4 opacity-90">{description}</p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="text-4xl font-bold">{discount}</div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="mr-2" size={18} />
                  <span>Ends in:</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="bg-white/20 p-2 rounded-md">
                    <span className="text-xl font-semibold">{formatNumber(timeLeft.hours)}</span>
                  </div>
                  <span>:</span>
                  <div className="bg-white/20 p-2 rounded-md">
                    <span className="text-xl font-semibold">{formatNumber(timeLeft.minutes)}</span>
                  </div>
                  <span>:</span>
                  <div className="bg-white/20 p-2 rounded-md">
                    <span className="text-xl font-semibold">{formatNumber(timeLeft.seconds)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-white text-crimson font-medium rounded-lg hover:bg-opacity-90 transition-colors flex items-center">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="mt-6 md:mt-0 md:w-1/3">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg max-h-48 md:max-h-64 object-cover mx-auto"
            />
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-0 pattern-dots pattern-white pattern-bg-transparent pattern-size-4"></div>
      </motion.div>
    </section>
  );
};

export default LimitedDealBanner;
