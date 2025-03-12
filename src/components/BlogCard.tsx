
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
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
  isFeatured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  image,
  isFeatured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full rounded-xl overflow-hidden shadow-neuro bg-white flex flex-col">
        {/* Blog image */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          
          {isFeatured && (
            <div className="absolute top-3 left-3">
              <span className="bg-crimson text-white text-xs font-medium px-2.5 py-1 rounded">Featured</span>
            </div>
          )}
          
          <div className="absolute top-3 right-3">
            <span className="bg-white/80 backdrop-blur-sm text-charcoal text-xs font-medium px-2.5 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
        
        {/* Blog details */}
        <div className="p-5 flex flex-col flex-grow">
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
          
          <h3 className="font-semibold text-xl text-charcoal mb-2">{title}</h3>
          <p className="text-charcoal/70 text-sm line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-8 h-8 rounded-full mr-2 object-cover" 
              />
              <span className="text-sm text-charcoal/80">{author.name}</span>
            </div>
            
            <Link 
              to={`/blog/${id}`} 
              className="flex items-center text-saffron font-medium text-sm"
            >
              <span className="mr-2">Read More</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
