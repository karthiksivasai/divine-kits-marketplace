
import React from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

interface BlogCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="glass-card px-3 py-2 flex items-center gap-x-2 overflow-x-auto scrollbar-none">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`relative px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeCategory === category.id
              ? 'text-charcoal'
              : 'text-charcoal/60 hover:text-charcoal/80'
          }`}
          onClick={() => onCategoryChange(category.id)}
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
            <span className="ml-2 text-xs rounded-full bg-charcoal/10 px-2 py-0.5">
              {category.count}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default BlogCategories;
