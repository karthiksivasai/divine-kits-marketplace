
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';
import BlogCategories from '../components/BlogCategories';
import { motion } from 'framer-motion';

const BlogPage = () => {
  // Sample featured article data
  const featuredArticle = {
    id: 'featured-1',
    title: 'Spiritual Significance of Navratri: The 9-Night Festival',
    excerpt: 'Discover the deep symbolism and spiritual journey represented in the nine nights of Navratri celebration, honoring the divine feminine energy.',
    category: 'Festivals',
    date: 'October 15, 2023',
    readTime: '8 min read',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
    },
    image: 'https://images.unsplash.com/photo-1600334761930-d0dec2a8a31d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    hasAudio: true
  };

  // Sample blog posts data
  const blogPosts = [
    {
      id: 'blog-1',
      title: 'Understanding the Sacred Geometry in Temple Architecture',
      excerpt: 'Explore how ancient temple designers used mathematical principles to create spaces that resonate with cosmic energy.',
      category: 'Architecture',
      date: 'September 28, 2023',
      readTime: '6 min read',
      author: {
        name: 'Rahul Desai',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1609146807178-82d27d9dad59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blog-2',
      title: 'The Spiritual Practice of Fasting: Benefits Beyond Religion',
      excerpt: 'A look at how fasting practices across different traditions can enhance physical health and spiritual awareness.',
      category: 'Wellness',
      date: 'September 15, 2023',
      readTime: '5 min read',
      author: {
        name: 'Ananya Patel',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blog-3',
      title: 'Sacred Plants in Ancient Traditions: From Tulsi to Sandalwood',
      excerpt: 'Discover the medicinal and spiritual properties of plants that have been venerated for centuries.',
      category: 'Nature',
      date: 'August 30, 2023',
      readTime: '7 min read',
      author: {
        name: 'Vikram Chandra',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1591271942096-2f2d7a90795e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blog-4',
      title: 'Mantras for Modern Life: Ancient Sounds for Today\'s Stress',
      excerpt: 'How traditional chants and mantras can be incorporated into busy modern routines for greater peace and focus.',
      category: 'Meditation',
      date: 'August 18, 2023',
      readTime: '4 min read',
      author: {
        name: 'Deepa Mehta',
        avatar: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1578695909733-3fbe6e3b2775?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blog-5',
      title: 'The Symbolic Meaning Behind Festival Colors',
      excerpt: 'A deep dive into how different colors used in festivals like Holi represent spiritual and natural elements.',
      category: 'Festivals',
      date: 'August 5, 2023',
      readTime: '6 min read',
      author: {
        name: 'Arjun Singh',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1617961689779-e969966820e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blog-6',
      title: 'Ancestral Wisdom: Connecting with Your Roots Through Ritual',
      excerpt: 'How traditional family rituals can create a sense of continuity and belonging across generations.',
      category: 'Traditions',
      date: 'July 22, 2023',
      readTime: '9 min read',
      author: {
        name: 'Meera Kapoor',
        avatar: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
      },
      image: 'https://images.unsplash.com/photo-1562949599-69ea8fc2a339?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Blog categories with counts
  const categories = [
    { id: 'all', name: 'All', count: 24, icon: '🔍' },
    { id: 'festivals', name: 'Festivals', count: 8, icon: '🪔' },
    { id: 'meditation', name: 'Meditation', count: 6, icon: '🧘' },
    { id: 'wellness', name: 'Wellness', count: 5, icon: '🌿' },
    { id: 'architecture', name: 'Architecture', count: 4, icon: '🏛️' },
    { id: 'traditions', name: 'Traditions', count: 7, icon: '📜' },
    { id: 'nature', name: 'Nature', count: 3, icon: '🌳' }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // In a real application, you would filter blog posts based on the selected category here
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pb-16">
        {/* Blog Hero Section */}
        <section className="py-12 bg-beige/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-4">Spiritual Insights Blog</h1>
              <p className="text-charcoal/70 text-lg">
                Discover authentic traditions, rituals, and stories from ancient heritage
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Article */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">Featured Article</h2>
            <FeaturedArticle {...featuredArticle} />
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <h2 className="heading-lg mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post, i) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <BlogCard {...post} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">
                      &lt;
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gold text-white">1</a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">2</a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">3</a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors">
                      &gt;
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Search */}
                <div className="bg-white rounded-xl shadow-neuro p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full py-2 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-neuro p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <BlogCategories 
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
                
                {/* Popular Posts */}
                <div className="bg-white rounded-xl shadow-neuro p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex space-x-3">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 hover:text-saffron cursor-pointer">
                            {post.title}
                          </h4>
                          <p className="text-xs text-charcoal/60 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
