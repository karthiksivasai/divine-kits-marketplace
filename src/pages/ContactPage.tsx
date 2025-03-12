
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pb-16">
        {/* Contact Hero Section */}
        <section className="py-12 bg-beige/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-4">Get in Touch</h1>
              <p className="text-charcoal/70 text-lg">
                We're here to help with all your spiritual needs and questions
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Options */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Email */}
              <motion.div 
                className="bg-white rounded-xl shadow-neuro p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-saffron" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-charcoal/70 mb-3">For general inquiries and support</p>
                <a href="mailto:connect@divinekits.com" className="text-saffron hover:underline">
                  connect@divinekits.com
                </a>
              </motion.div>
              
              {/* Phone */}
              <motion.div 
                className="bg-white rounded-xl shadow-neuro p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-saffron" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-charcoal/70 mb-3">For immediate assistance</p>
                <a href="tel:+919876543210" className="text-saffron hover:underline">
                  +91 98765 43210
                </a>
              </motion.div>
              
              {/* Address */}
              <motion.div 
                className="bg-white rounded-xl shadow-neuro p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-saffron" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-charcoal/70 mb-3">Our store and office</p>
                <address className="not-italic text-saffron">
                  123 Divine Street<br />
                  Spiritual City, 400001
                </address>
              </motion.div>
              
              {/* Hours */}
              <motion.div 
                className="bg-white rounded-xl shadow-neuro p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-saffron" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-charcoal/70 mb-3">When you can reach us</p>
                <div className="text-saffron">
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-xl shadow-neuro p-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50" 
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50" 
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50" 
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50" 
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="flex items-center justify-center py-3 px-6 bg-saffron text-white rounded-lg hover:bg-saffron/90 transition-colors"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </motion.div>
              
              {/* Map */}
              <motion.div 
                className="rounded-xl overflow-hidden shadow-neuro h-[400px] md:h-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Google Maps iFrame would go here in a real implementation */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={48} className="mx-auto mb-4 text-saffron" />
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-charcoal/70">
                      This is where a Google Map would be embedded showing our location at 123 Divine Street, Spiritual City.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-beige/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-3">Frequently Asked Questions</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Find quick answers to common questions about our products and services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-neuro divide-y">
                {/* FAQ Item 1 */}
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">How do I track my order?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70">
                    You can track your order by logging into your account and visiting the "Order History" section. Alternatively, you can use the tracking number provided in your order confirmation email.
                  </p>
                </details>
                
                {/* FAQ Item 2 */}
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">What are your shipping rates?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70">
                    We offer free shipping on all orders above ₹1,500. For orders below this amount, a flat shipping fee of ₹150 is charged. International shipping rates vary based on the destination.
                  </p>
                </details>
                
                {/* FAQ Item 3 */}
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">Do you offer customized pooja kits?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70">
                    Yes, we offer customized pooja kits for specific rituals or preferences. Please contact our customer service team with your requirements, and we'll create a personalized kit for you.
                  </p>
                </details>
                
                {/* FAQ Item 4 */}
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">What is your return policy?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/70">
                    We accept returns within 7 days of delivery for unused and unopened items in their original packaging. Food items, incense, and customized products are non-returnable for hygiene reasons.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
