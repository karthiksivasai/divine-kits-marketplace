
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';
import BlogCategories from '../components/BlogCategories';
import { motion } from 'framer-motion';

const BlogPage = () => {
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
            <FeaturedArticle />
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
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <BlogCard />
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
                  <BlogCategories />
                </div>
                
                {/* Popular Posts */}
                <div className="bg-white rounded-xl shadow-neuro p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex space-x-3">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={`https://images.unsplash.com/photo-${1570000000000 + i * 1000}?auto=format&fit=crop&w=100&q=80`} 
                            alt="Popular post" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 hover:text-saffron cursor-pointer">
                            Understanding the Spiritual Significance of Rituals
                          </h4>
                          <p className="text-xs text-charcoal/60 mt-1">June 12, 2023</p>
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
