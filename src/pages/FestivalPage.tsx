
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FestivalHero from '../components/FestivalHero';
import FestivalTimeline from '../components/FestivalTimeline';
import RitualGuide from '../components/RitualGuide';
import { motion } from 'framer-motion';

const FestivalPage = () => {
  // Current festival data (could be dynamic based on upcoming festivals)
  const currentFestival = {
    name: 'Diwali - The Festival of Lights',
    date: 'November 12, 2023',
    description: 'Join us in celebrating the triumph of light over darkness with our exclusive Diwali collection, ritual guides, and festive offers.',
    backgroundImage: 'https://images.unsplash.com/photo-1575552286133-2b232f7683a4?q=80&w=1200&auto=format&fit=crop'
  };
  
  // Ritual steps for the guide
  const ritualSteps = [
    {
      id: 1,
      title: 'Clean Your Home',
      description: 'Begin your Diwali preparations by thoroughly cleaning your home. This symbolizes the removal of negative energy and the welcoming of prosperity. Pay special attention to areas where you\'ll be performing rituals and placing diyas. A clean and clutter-free environment helps create a sacred space for the divine to enter.',
      image: 'https://images.unsplash.com/photo-1523575158218-e71a663a5caf?q=80&w=1024&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Set Up the Altar',
      description: 'Create a dedicated altar for your Diwali pooja. Place a clean cloth (preferably red or yellow) as the base. Arrange idols of Goddess Lakshmi and Lord Ganesha in the center. On their sides, place small bowls for offerings like kumkum, rice, flowers, and sweets. Position a kalash (metal pot) filled with water, mango leaves, and a coconut as a symbol of abundance.',
      image: 'https://images.unsplash.com/photo-1609141246070-4d1c2fc927a4?q=80&w=1024&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Light the Lamps',
      description: 'As evening approaches, light oil lamps (diyas) and place them throughout your home, especially at entrances, windows, and near the altar. This symbolizes the victory of light over darkness and guides Goddess Lakshmi to your home. Use pure ghee or sesame oil in the diyas for the most auspicious results. As you light each lamp, say a small prayer for peace and prosperity.',
      image: 'https://images.unsplash.com/photo-1549893072-4bc677a57a09?q=80&w=1024&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Perform Lakshmi Puja',
      description: 'Begin the main ritual by purifying yourself with a bath and wearing clean, preferably new clothes. Start the puja by lighting incense and a diya in front of the deities. Offer flowers, sweets, and fruits. Recite the Lakshmi Chalisa or mantras dedicated to Goddess Lakshmi. The worship of Lord Ganesha should precede Lakshmi Puja, as he removes obstacles.',
      image: 'https://images.unsplash.com/photo-1609142621151-c4c096188b34?q=80&w=1024&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Offer Prasad and Aarti',
      description: 'Present homemade sweets and savory items as prasad (blessed food offerings). Perform aarti by circulating a lit camphor or ghee lamp clockwise around the deities while singing devotional songs. This signifies your devotion and gratitude. The sound of bells during aarti is believed to ward off negative energies and welcome divine blessings.',
      image: 'https://images.unsplash.com/photo-1593014159088-3e6d346a5070?q=80&w=1024&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Festival Hero */}
        <FestivalHero festival={currentFestival} />
        
        {/* Featured Festival Kits */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="heading-lg mb-3">Featured Diwali Kits</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Everything you need for a complete and authentic Diwali celebration
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kit 1 */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-neuro"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604423082164-3c481c056aea?q=80&w=800&auto=format&fit=crop" 
                    alt="Essential Diwali Kit" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-saffron text-white text-xs font-medium px-2.5 py-1 rounded">Bestseller</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Essential Diwali Kit</h3>
                  <p className="text-charcoal/70 mb-4">Perfect for small households, includes diyas, candles, rangoli colors, and basic pooja items.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹1,299</span>
                    <button className="btn-primary py-2">Add to Cart</button>
                  </div>
                </div>
              </motion.div>
              
              {/* Kit 2 */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-neuro"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1636107061177-5f9f6833a1a2?q=80&w=800&auto=format&fit=crop" 
                    alt="Deluxe Diwali Kit" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-charcoal text-xs font-medium px-2.5 py-1 rounded">Premium</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Deluxe Diwali Kit</h3>
                  <p className="text-charcoal/70 mb-4">Comprehensive kit including brass diyas, decorative items, sweets, and premium pooja essentials.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹2,499</span>
                    <button className="btn-primary py-2">Add to Cart</button>
                  </div>
                </div>
              </motion.div>
              
              {/* Kit 3 */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-neuro"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1609142522365-a9b5dd1515e9?q=80&w=800&auto=format&fit=crop" 
                    alt="Family Celebration Kit" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-crimson text-white text-xs font-medium px-2.5 py-1 rounded">Limited Edition</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Family Celebration Kit</h3>
                  <p className="text-charcoal/70 mb-4">Complete family package with everything needed for grand celebrations, including gifts and decor.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">₹3,999</span>
                    <button className="btn-primary py-2">Add to Cart</button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-10">
              <a href="/shop" className="btn-outline">View All Festival Kits</a>
            </div>
          </div>
        </section>
        
        {/* Ritual Guide */}
        <RitualGuide festivalName="Diwali" steps={ritualSteps} />
        
        {/* Festival Calendar */}
        <FestivalTimeline />
        
        {/* Temple Live Streaming */}
        <section className="py-16 bg-gradient-to-r from-gold/10 to-saffron/10">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-3">Join Live Temple Ceremonies</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Experience sacred rituals from renowned temples across India, streamed live for your participation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Live Stream 1 */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-neuro"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1583428746489-daf4341066dd?q=80&w=800&auto=format&fit=crop" 
                    alt="Diwali Special Puja" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center cursor-pointer hover:bg-crimson/90 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Diwali Special Puja</h3>
                  <p className="text-charcoal/70 mb-4">Join the grand Lakshmi-Ganesh puja ceremony live from Varanasi.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-saffron">
                      <span className="inline-block w-2 h-2 bg-saffron rounded-full mr-2 animate-pulse"></span>
                      <span className="font-medium">Live on Nov 12, 7:00 PM</span>
                    </div>
                    <button className="px-4 py-2 bg-charcoal text-white rounded-lg hover:bg-charcoal/90 transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Live Stream 2 */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-neuro"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1630278156268-56612122dec0?q=80&w=800&auto=format&fit=crop" 
                    alt="Temple Aarti Ceremony" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <div className="w-16 h-16 rounded-full bg-crimson flex items-center justify-center cursor-pointer hover:bg-crimson/90 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Temple Aarti Ceremony</h3>
                  <p className="text-charcoal/70 mb-4">Experience the divine evening aarti ceremony from Somnath Temple.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-saffron">
                      <span className="inline-block w-2 h-2 bg-saffron rounded-full mr-2 animate-pulse"></span>
                      <span className="font-medium">Live on Nov 12, 6:30 PM</span>
                    </div>
                    <button className="px-4 py-2 bg-charcoal text-white rounded-lg hover:bg-charcoal/90 transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FestivalPage;
