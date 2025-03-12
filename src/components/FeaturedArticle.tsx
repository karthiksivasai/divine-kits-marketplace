
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  hasAudio?: boolean;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  image,
  hasAudio = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-neuro rounded-xl overflow-hidden">
        {/* Featured Image */}
        <div className="relative overflow-hidden aspect-square md:aspect-auto md:h-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent mix-blend-multiply"></div>
          
          <div className="absolute top-4 left-4">
            <span className="bg-crimson text-white text-sm font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          
          <div className="absolute top-4 right-4">
            <span className="bg-white/80 backdrop-blur-sm text-charcoal text-sm font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="flex items-center text-charcoal/60 text-sm mb-3">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h2 className="font-bold text-2xl md:text-3xl text-charcoal mb-3">{title}</h2>
          <p className="text-charcoal/70 mb-6">{excerpt}</p>
          
          <div className="flex items-center mb-6">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="w-10 h-10 rounded-full mr-3 object-cover" 
            />
            <span className="font-medium text-charcoal">{author.name}</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              to={`/blog/${id}`} 
              className="btn-primary"
            >
              Read Article
            </Link>
            
            {hasAudio && (
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-saffron text-saffron hover:bg-saffron hover:text-white transition-colors">
                <Play size={16} />
                <span>Listen</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;
