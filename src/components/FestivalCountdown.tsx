
import React, { useState, useEffect } from 'react';
import { useFestival } from '../contexts/FestivalContext';
import { Link } from 'react-router-dom';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FestivalCountdown = () => {
  const { getNearestFestival } = useFestival();
  const nearestFestival = getNearestFestival();
  
  // Fall back to a default date if no upcoming festivals
  const targetDate = nearestFestival?.date || new Date('2023-11-12T00:00:00');
  const festivalName = nearestFestival?.name || 'Festival of Lights';
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
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
    
    const element = document.getElementById('countdown-section');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    if (!nearestFestival) return 65; // Default progress
    
    const now = new Date().getTime();
    const festivalDate = nearestFestival.date.getTime();
    
    // Assuming announcement was roughly 3 months before
    const announcementDate = new Date(nearestFestival.date);
    announcementDate.setMonth(announcementDate.getMonth() - 3);
    
    const totalDuration = festivalDate - announcementDate.getTime();
    const elapsed = now - announcementDate.getTime();
    
    const progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
    return progress;
  };

  return (
    <section id="countdown-section" className="section-padding bg-gradient-to-r from-beige to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {festivalName} is Coming Soon
          </h2>
          <p className={`text-charcoal/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get your {festivalName} pooja kits before they sell out. Special offers end with the countdown.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {/* Days */}
                <div className="neuro-card p-6 md:p-8">
                  <div className="text-4xl md:text-5xl font-bold text-saffron">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-charcoal/70 font-medium mt-2">Days</div>
                </div>
                
                {/* Hours */}
                <div className="neuro-card p-6 md:p-8">
                  <div className="text-4xl md:text-5xl font-bold text-saffron">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-charcoal/70 font-medium mt-2">Hours</div>
                </div>
                
                {/* Minutes */}
                <div className="neuro-card p-6 md:p-8">
                  <div className="text-4xl md:text-5xl font-bold text-saffron">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-charcoal/70 font-medium mt-2">Minutes</div>
                </div>
                
                {/* Seconds */}
                <div className="neuro-card p-6 md:p-8">
                  <div className="text-4xl md:text-5xl font-bold text-saffron">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-charcoal/70 font-medium mt-2">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-12">
            <div className="h-3 bg-white shadow-neuro-sm rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-saffron to-gold rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-charcoal/70">
              <span>Festival Announced</span>
              <span>Preparations</span>
              <span>Festival Day</span>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">Pre-Order Festival Kit</button>
              {/* Admin link */}
              <Link to="/admin/festivals" className="btn-outline">
                Manage Festivals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalCountdown;
