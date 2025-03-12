
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FestivalCardProps {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
  isUpcoming?: boolean;
}

const FestivalCard: React.FC<FestivalCardProps> = ({
  id,
  name,
  date,
  description,
  image,
  isUpcoming = false
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
        {/* Festival image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          
          {isUpcoming && (
            <div className="absolute top-3 left-3">
              <span className="bg-crimson text-white text-xs font-medium px-2.5 py-1 rounded">Upcoming</span>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/70 to-transparent p-4">
            <div className="flex items-center text-white">
              <Calendar size={14} className="mr-2" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
        </div>
        
        {/* Festival details */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-semibold text-xl text-charcoal mb-2">{name}</h3>
          <p className="text-charcoal/70 text-sm line-clamp-3 mb-4 flex-grow">{description}</p>
          
          <Link 
            to={`/festivals/${id}`} 
            className="flex items-center text-saffron font-medium text-sm"
          >
            <span className="mr-2">View Details</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FestivalCard;
