
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FeaturedArticle } from '@/components/FeaturedArticle';
import { BlogCard } from '@/components/BlogCard';
import { BlogCategories } from '@/components/BlogCategories';

const BlogPage = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Understanding the Significance of Diwali Rituals',
      excerpt: 'Explore the spiritual meaning behind the traditional Diwali celebrations and rituals.',
      date: 'October 15, 2023',
      category: 'Festivals',
      image: 'https://images.unsplash.com/photo-1604423481761-549ce6247d14?q=80&w=2069&auto=format&fit=crop',
      author: 'Arjun Sharma'
    },
    {
      id: '2',
      title: 'Essential Elements for Your Home Temple',
      excerpt: 'Learn how to create a sacred space at home with these essential pooja items.',
      date: 'September 28, 2023',
      category: 'Home Rituals',
      image: 'https://images.unsplash.com/photo-1617926345675-3c7cf8c8f8e6?q=80&w=2070&auto=format&fit=crop',
      author: 'Priya Patel'
    },
    {
      id: '3',
      title: 'The Spiritual Science Behind Incense and Aromatherapy',
      excerpt: 'Discover how different fragrances can enhance your meditation and prayer experience.',
      date: 'August 10, 2023',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1519889817841-3d9465e1aeea?q=80&w=2071&auto=format&fit=crop',
      author: 'Rahul Mehta'
    },
    {
      id: '4',
      title: 'Navratri: Celebrating the Divine Feminine',
      excerpt: 'A deep dive into the nine-night festival that honors the goddess Durga.',
      date: 'July 22, 2023',
      category: 'Festivals',
      image: 'https://images.unsplash.com/photo-1634264529876-c5379cb646a1?q=80&w=1932&auto=format&fit=crop',
      author: 'Meera Desai'
    },
    {
      id: '5',
      title: 'Modern Adaptations of Ancient Rituals',
      excerpt: 'How to integrate traditional practices into your contemporary lifestyle.',
      date: 'June 14, 2023',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1617926345675-3c7cf8c8f8e6?q=80&w=2070&auto=format&fit=crop',
      author: 'Vikram Singh'
    },
    {
      id: '6',
      title: 'The Art of Making Prasad: Sacred Food Offerings',
      excerpt: 'Traditional recipes and the spiritual significance of prasad in Hindu rituals.',
      date: 'May 5, 2023',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1551308375-f56aee0c7f52?q=80&w=2043&auto=format&fit=crop',
      author: 'Anjali Kumar'
    }
  ];

  const featuredArticle = {
    id: '0',
    title: 'The Transformative Power of Daily Rituals',
    excerpt: 'Discover how incorporating simple spiritual practices into your daily routine can bring peace, clarity, and purpose to your life. This comprehensive guide explores ancient wisdom for modern living.',
    content: 'In our fast-paced modern world, the ancient practice of daily rituals offers a sanctuary of peace and mindfulness. This article explores how traditional spiritual practices can be seamlessly integrated into contemporary lifestyles, bringing balance and meaning to everyday existence.',
    date: 'November 3, 2023',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1598439210625-358150cc9f81?q=80&w=2072&auto=format&fit=crop',
    author: 'Dr. Neha Sharma',
    authorImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=774&auto=format&fit=crop',
    readTime: '8 min read'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-charcoal">
          Spiritual <span className="text-saffron">Insights</span> & Wisdom
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Explore our collection of articles on rituals, traditions, and spiritual practices
        </p>
      </div>
      
      {/* Featured Article */}
      <section className="container mx-auto px-4 mb-16">
        <FeaturedArticle article={featuredArticle} />
      </section>
      
      {/* Blog Categories */}
      <section className="container mx-auto px-4 mb-10">
        <BlogCategories />
      </section>
      
      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-charcoal">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-full bg-white shadow-neuro-sm text-charcoal hover:bg-saffron hover:text-white transition-colors">
              1
            </button>
            <button className="px-4 py-2 rounded-full bg-white shadow-neuro-sm text-charcoal hover:bg-saffron hover:text-white transition-colors">
              2
            </button>
            <button className="px-4 py-2 rounded-full bg-white shadow-neuro-sm text-charcoal hover:bg-saffron hover:text-white transition-colors">
              3
            </button>
            <button className="px-4 py-2 rounded-full bg-white shadow-neuro-sm text-charcoal hover:bg-saffron hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 md:p-12 shadow-neuro-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-charcoal">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Receive the latest articles, exclusive offers, and spiritual insights directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow max-w-md px-4 py-3 rounded-lg shadow-neuro-sm focus:outline-none focus:ring-2 focus:ring-saffron"
              />
              <button className="bg-saffron text-white px-6 py-3 rounded-lg shadow-neuro-sm hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
