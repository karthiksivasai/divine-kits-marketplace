
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
            Divine<span className="text-crimson">Kits</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-charcoal hover:text-saffron transition-colors">
            Home
          </Link>
          <Link to="/shop" className="font-medium text-charcoal hover:text-saffron transition-colors">
            Shop
          </Link>
          <Link to="/festivals" className="font-medium text-charcoal hover:text-saffron transition-colors">
            Festivals
          </Link>
          <Link to="/blog" className="font-medium text-charcoal hover:text-saffron transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium text-charcoal hover:text-saffron transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Account">
            <User size={20} />
          </button>
          <Link to="/cart" className="relative p-2 text-charcoal hover:text-saffron transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-crimson text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-charcoal hover:text-saffron"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="container-custom py-8 flex flex-col space-y-6">
          <Link 
            to="/" 
            className="font-medium text-xl text-charcoal hover:text-saffron transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="font-medium text-xl text-charcoal hover:text-saffron transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/festivals" 
            className="font-medium text-xl text-charcoal hover:text-saffron transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Festivals
          </Link>
          <Link 
            to="/blog" 
            className="font-medium text-xl text-charcoal hover:text-saffron transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="font-medium text-xl text-charcoal hover:text-saffron transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
            <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Search">
              <Search size={24} />
            </button>
            <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Wishlist">
              <Heart size={24} />
            </button>
            <button className="p-2 text-charcoal hover:text-saffron transition-colors" aria-label="Account">
              <User size={24} />
            </button>
            <Link 
              to="/cart" 
              className="relative p-2 text-charcoal hover:text-saffron transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-crimson text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
