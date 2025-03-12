
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  categories: string[];
  festivals: string[];
  deities: string[];
  sortBy: string;
  search: string;
}

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 5000],
    categories: [],
    festivals: [],
    deities: [],
    sortBy: 'popularity',
    search: ''
  });
  
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    const newFilters = { ...filters, categories: updatedCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFestivalChange = (festival: string, checked: boolean) => {
    const updatedFestivals = checked 
      ? [...filters.festivals, festival]
      : filters.festivals.filter(f => f !== festival);
    
    const newFilters = { ...filters, festivals: updatedFestivals };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDeityChange = (deity: string, checked: boolean) => {
    const updatedDeities = checked 
      ? [...filters.deities, deity]
      : filters.deities.filter(d => d !== deity);
    
    const newFilters = { ...filters, deities: updatedDeities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, sortBy: event.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const newFilters = { ...filters, search: searchQuery };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      priceRange: [0, 5000],
      categories: [],
      festivals: [],
      deities: [],
      sortBy: 'popularity',
      search: ''
    };
    setFilters(resetFilters);
    setSearchQuery('');
    onFilterChange(resetFilters);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 rounded-xl bg-white shadow-neuro-sm focus:ring-2 focus:ring-saffron focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50" size={18} />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-saffron text-white p-1 rounded-md hover:bg-opacity-90">
            <Search size={16} />
          </button>
        </form>
        
        <button 
          onClick={toggleFilter}
          className="flex items-center gap-2 px-4 py-2.5 bg-white shadow-neuro-sm rounded-xl hover:shadow-neuro transition-shadow ml-4"
        >
          <SlidersHorizontal size={18} />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
      
      {isFilterOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-neuro rounded-xl p-6 mt-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-charcoal">Filters</h3>
            <div className="flex gap-3">
              <button 
                onClick={clearFilters}
                className="text-sm text-charcoal/60 hover:text-charcoal"
              >
                Clear All
              </button>
              <button 
                onClick={toggleFilter}
                className="text-charcoal/60 hover:text-charcoal"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Price Range Filter */}
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Price Range</h4>
              <div className="px-2">
                <Slider 
                  defaultValue={[filters.priceRange[0], filters.priceRange[1]]} 
                  min={0} 
                  max={5000} 
                  step={100}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between mt-2 text-sm text-charcoal/70">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Category</h4>
              <div className="space-y-2">
                {['Pooja Kits', 'Diyas', 'Idols', 'Incense', 'Clothing'].map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={filters.categories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <label 
                      htmlFor={`category-${category}`} 
                      className="ml-2 text-sm text-charcoal/80"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Festival Filter */}
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Festival</h4>
              <div className="space-y-2">
                {['Diwali', 'Navratri', 'Ganesh Chaturthi', 'Holi', 'Sankranti'].map((festival) => (
                  <div key={festival} className="flex items-center">
                    <Checkbox 
                      id={`festival-${festival}`} 
                      checked={filters.festivals.includes(festival)}
                      onCheckedChange={(checked) => handleFestivalChange(festival, checked as boolean)}
                    />
                    <label 
                      htmlFor={`festival-${festival}`} 
                      className="ml-2 text-sm text-charcoal/80"
                    >
                      {festival}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Deity Filter */}
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Deity</h4>
              <div className="space-y-2">
                {['Ganesh', 'Lakshmi', 'Shiva', 'Krishna', 'Durga'].map((deity) => (
                  <div key={deity} className="flex items-center">
                    <Checkbox 
                      id={`deity-${deity}`} 
                      checked={filters.deities.includes(deity)}
                      onCheckedChange={(checked) => handleDeityChange(deity, checked as boolean)}
                    />
                    <label 
                      htmlFor={`deity-${deity}`} 
                      className="ml-2 text-sm text-charcoal/80"
                    >
                      {deity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sort Option */}
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-3">Sort By</h4>
              <select 
                value={filters.sortBy}
                onChange={handleSortChange}
                className="w-full p-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-saffron focus:outline-none"
              >
                <option value="popularity">Popularity</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductFilter;
