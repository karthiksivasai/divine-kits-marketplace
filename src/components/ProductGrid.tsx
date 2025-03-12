
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { FilterState } from './ProductFilter';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  categories: string[];
  festivals: string[];
  deities: string[];
}

interface ProductGridProps {
  filters: FilterState;
}

const ProductGrid: React.FC<ProductGridProps> = ({ filters }) => {
  // Sample product data
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Deluxe Diwali Pooja Kit',
      price: 1899,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1604423082164-3c481c056aea?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewCount: 128,
      isNew: true,
      isBestseller: true,
      categories: ['Pooja Kits'],
      festivals: ['Diwali'],
      deities: ['Lakshmi', 'Ganesh']
    },
    {
      id: '2',
      name: 'Navratri Special Kit',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.unsplash.com/photo-1558180053-f059cae4b8c7?q=80&w=800&auto=format&fit=crop',
      rating: 4.7,
      reviewCount: 85,
      isNew: false,
      isBestseller: true,
      categories: ['Pooja Kits'],
      festivals: ['Navratri'],
      deities: ['Durga']
    },
    {
      id: '3',
      name: 'Ganesh Chaturthi Essentials',
      price: 999,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1571424461208-d9181e237ba9?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewCount: 74,
      isNew: false,
      isBestseller: false,
      categories: ['Pooja Kits'],
      festivals: ['Ganesh Chaturthi'],
      deities: ['Ganesh']
    },
    {
      id: '4',
      name: 'Daily Pooja Essentials',
      price: 699,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1527938767652-467bc70101da?q=80&w=800&auto=format&fit=crop',
      rating: 4.6,
      reviewCount: 92,
      isNew: false,
      isBestseller: false,
      categories: ['Pooja Kits'],
      festivals: [],
      deities: []
    },
    {
      id: '5',
      name: 'Handcrafted Brass Diya Set',
      price: 1499,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1634106612951-e2ca536a759c?q=80&w=800&auto=format&fit=crop',
      rating: 4.7,
      reviewCount: 68,
      isNew: true,
      isBestseller: false,
      categories: ['Diyas'],
      festivals: ['Diwali'],
      deities: []
    },
    {
      id: '6',
      name: 'Marble Ganesh Idol',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1601045569976-2d4b3f4f5bc4?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewCount: 42,
      isNew: false,
      isBestseller: true,
      categories: ['Idols'],
      festivals: ['Ganesh Chaturthi'],
      deities: ['Ganesh']
    },
    {
      id: '7',
      name: 'Holi Festival Kit',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1550045538-0dc84c7bfd03?q=80&w=800&auto=format&fit=crop',
      rating: 4.6,
      reviewCount: 54,
      isNew: false,
      isBestseller: false,
      categories: ['Pooja Kits'],
      festivals: ['Holi'],
      deities: []
    },
    {
      id: '8',
      name: 'Premium Sandalwood Incense',
      price: 499,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1549715089-838e7e9a36d6?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewCount: 112,
      isNew: false,
      isBestseller: true,
      categories: ['Incense'],
      festivals: [],
      deities: []
    },
    {
      id: '9',
      name: 'Traditional Silk Dhoti Set',
      price: 2899,
      originalPrice: 3499,
      image: 'https://images.unsplash.com/photo-1603910234616-91728aca2605?q=80&w=800&auto=format&fit=crop',
      rating: 4.7,
      reviewCount: 37,
      isNew: true,
      isBestseller: false,
      categories: ['Clothing'],
      festivals: [],
      deities: []
    },
    {
      id: '10',
      name: 'Silver Lakshmi Idol',
      price: 3499,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1624729495640-208d61b1d3cb?q=80&w=800&auto=format&fit=crop',
      rating: 4.9,
      reviewCount: 28,
      isNew: false,
      isBestseller: true,
      categories: ['Idols'],
      festivals: ['Diwali'],
      deities: ['Lakshmi']
    },
    {
      id: '11',
      name: 'Sankranti Special Kit',
      price: 799,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1545037823-93cc8af3cbb3?q=80&w=800&auto=format&fit=crop',
      rating: 4.5,
      reviewCount: 42,
      isNew: false,
      isBestseller: false,
      categories: ['Pooja Kits'],
      festivals: ['Sankranti'],
      deities: []
    },
    {
      id: '12',
      name: 'Brass Shiva Idol',
      price: 1999,
      originalPrice: 2299,
      image: 'https://images.unsplash.com/photo-1603720534707-acf380861d9d?q=80&w=800&auto=format&fit=crop',
      rating: 4.8,
      reviewCount: 32,
      isNew: true,
      isBestseller: false,
      categories: ['Idols'],
      festivals: [],
      deities: ['Shiva']
    },
  ];
  
  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    // Filter by price range
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    
    // Filter by categories
    if (filters.categories.length > 0 && !filters.categories.some(cat => product.categories.includes(cat))) {
      return false;
    }
    
    // Filter by festivals
    if (filters.festivals.length > 0 && !filters.festivals.some(fest => product.festivals.includes(fest))) {
      return false;
    }
    
    // Filter by deities
    if (filters.deities.length > 0 && !filters.deities.some(deity => product.deities.includes(deity))) {
      return false;
    }
    
    // Filter by search query
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'newest':
        return (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0);
      case 'rating':
        return b.rating - a.rating;
      default: // popularity
        return (b.reviewCount * b.rating) - (a.reviewCount * a.rating);
    }
  });

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-charcoal">
          {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'}
        </h2>
        
        {/* Selected filters pills */}
        <div className="flex flex-wrap gap-2">
          {filters.categories.map((category) => (
            <span key={`cat-${category}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold/20 text-charcoal">
              {category}
            </span>
          ))}
          
          {filters.festivals.map((festival) => (
            <span key={`fest-${festival}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-crimson/20 text-charcoal">
              {festival}
            </span>
          ))}
          
          {filters.deities.map((deity) => (
            <span key={`deity-${deity}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-saffron/20 text-charcoal">
              {deity}
            </span>
          ))}
        </div>
      </div>
      
      {sortedProducts.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-xl font-medium text-charcoal mb-2">No products found</h3>
          <p className="text-charcoal/60">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
