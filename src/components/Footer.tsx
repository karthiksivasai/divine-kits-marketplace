
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Divine<span className="text-saffron">Kits</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 text-sm">
              Curated pooja kits with authentic items for all your spiritual needs. We blend tradition with modern convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-white/70 hover:text-saffron transition-colors text-sm">Shop All</Link>
              </li>
              <li>
                <Link to="/festivals" className="text-white/70 hover:text-saffron transition-colors text-sm">Festivals</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-saffron transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-saffron transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-saffron transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-white/70 hover:text-saffron transition-colors text-sm">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/70 hover:text-saffron transition-colors text-sm">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/70 hover:text-saffron transition-colors text-sm">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-saffron transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-saffron transition-colors text-sm">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="text-saffron mt-1 mr-2" />
                <span className="text-white/70 text-sm">123 Divine Street, Spiritual City, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-saffron mr-2" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-saffron mr-2" />
                <span className="text-white/70 text-sm">connect@divinekits.com</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-white/10 text-white rounded-l-md text-sm w-full focus:outline-none focus:bg-white/20"
                />
                <button className="bg-saffron text-white px-3 py-2 rounded-r-md hover:bg-opacity-90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} DivineKits. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-crimson" /> by PixelBrick
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
