
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FestivalCard from './FestivalCard';

interface Festival {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
  isUpcoming?: boolean;
}

const FestivalTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('festival-timeline');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Sample festival data
  const festivals: Festival[] = [
    {
      id: 'diwali-2023',
      name: 'Diwali',
      date: 'November 12, 2023',
      description: 'The festival of lights symbolizes the victory of light over darkness and good over evil.',
      image: 'https://images.unsplash.com/photo-1604423862618-72105d4e1188?q=80&w=800&auto=format&fit=crop',
      isUpcoming: true
    },
    {
      id: 'navratri-2023',
      name: 'Navratri',
      date: 'October 15-24, 2023',
      description: 'A nine-night festival celebrating the divine feminine and the victory of good over evil.',
      image: 'https://images.unsplash.com/photo-1589308454677-6d48df63d95a?q=80&w=800&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      id: 'ganesh-chaturthi-2023',
      name: 'Ganesh Chaturthi',
      date: 'September 19, 2023',
      description: 'A festival celebrating the birth of Lord Ganesha, the remover of obstacles.',
      image: 'https://images.unsplash.com/photo-1631788012412-65add544775e?q=80&w=800&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      id: 'holi-2024',
      name: 'Holi',
      date: 'March 25, 2024',
      description: 'The festival of colors celebrates the arrival of spring and the victory of good over evil.',
      image: 'https://images.unsplash.com/photo-1613064427212-bbf9a4ea9b5d?q=80&w=800&auto=format&fit=crop',
      isUpcoming: true
    },
    {
      id: 'janmashtami-2023',
      name: 'Janmashtami',
      date: 'August 19, 2023',
      description: 'Celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu.',
      image: 'https://images.unsplash.com/photo-1566936737687-8f392a237b8b?q=80&w=800&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      id: 'durga-puja-2023',
      name: 'Durga Puja',
      date: 'October 20-24, 2023',
      description: 'A major festival celebrating the goddess Durga and her victory over the demon Mahishasura.',
      image: 'https://images.unsplash.com/photo-1633972541291-c5ab91518ae0?q=80&w=800&auto=format&fit=crop',
      isUpcoming: false
    },
  ];

  return (
    <section id="festival-timeline" className="py-16">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-3">Festival Calendar</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore upcoming and recent festivals with our curated guides and pooja kits
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
            >
              <FestivalCard {...festival} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalTimeline;
