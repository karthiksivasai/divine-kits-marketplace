
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const CategoryNavigation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories: Category[] = [
    { id: 'all', name: 'All Items', icon: '🔍' },
    { id: 'diwali', name: 'Diwali', icon: '🪔' },
    { id: 'navratri', name: 'Navratri', icon: '🪩' },
    { id: 'holi', name: 'Holi', icon: '🎨' },
    { id: 'ganesh', name: 'Ganesh Chaturthi', icon: '🙏' },
    { id: 'daily', name: 'Daily Rituals', icon: '🌅' },
  ];

  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="glass-card px-3 py-2 flex items-center gap-x-2 overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`relative px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'text-charcoal'
                    : 'text-charcoal/60 hover:text-charcoal/80'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-white rounded-full shadow-neuro-sm"
                    initial={false}
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
