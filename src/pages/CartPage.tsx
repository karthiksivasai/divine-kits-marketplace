
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For demo purposes, let's load some mock data
    setLoading(true);
    
    const mockItems: CartItem[] = [
      {
        id: '1',
        name: 'Deluxe Diwali Pooja Kit',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1604423082164-3c481c056aea?q=80&w=800&auto=format&fit=crop',
        quantity: 1
      },
      {
        id: '2',
        name: 'Brass Diya Set',
        price: 799,
        image: 'https://images.unsplash.com/photo-1609142522365-a9b5dd1515e9?q=80&w=800&auto=format&fit=crop',
        quantity: 2
      }
    ];
    
    setCartItems(mockItems);
    setLoading(false);
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? 
          { ...item, quantity: Math.max(1, item.quantity + delta) } : 
          item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <div className="container-custom py-12">
          <h1 className="heading-lg mb-8">Your Shopping Cart</h1>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[30vh]">
              <div className="w-12 h-12 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag size={64} className="text-saffron mb-4" />
              <h2 className="heading-md mb-2">Your cart is empty</h2>
              <p className="text-charcoal/70 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-neuro p-6">
                  <h2 className="heading-sm mb-6">Cart Items</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                        <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback image if the original fails to load
                              (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/F9F4F0/FF9933?text=Image&font=Poppins';
                            }}
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <Link to={`/product/${item.id}`} className="font-medium text-lg text-charcoal hover:text-saffron transition-colors">
                            {item.name}
                          </Link>
                          
                          <div className="flex flex-wrap justify-between mt-2">
                            <div className="flex items-center mt-2 sm:mt-0">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 text-charcoal hover:border-saffron hover:text-saffron transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="mx-3 min-w-[2rem] text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 text-charcoal hover:border-saffron hover:text-saffron transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <div className="flex items-center justify-between mt-2 sm:mt-0 w-full sm:w-auto">
                              <span className="font-semibold text-charcoal sm:ml-8">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </span>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-crimson hover:text-opacity-80 transition-opacity ml-4"
                                aria-label="Remove item"
                              >
                                <Trash size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-neuro p-6 sticky top-24">
                  <h2 className="heading-sm mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Shipping</span>
                      <span className="font-medium">₹{shipping.toLocaleString()}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="font-semibold text-charcoal">Total</span>
                        <span className="font-bold text-lg text-charcoal">₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <button className="w-full btn-primary py-3">
                        Proceed to Checkout
                      </button>
                      <Link to="/shop" className="block w-full text-center mt-4 text-saffron hover:text-saffron/80 transition-colors font-medium">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;
