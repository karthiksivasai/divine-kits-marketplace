
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomizeKitPage = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const kitItems = [
    { id: '1', name: 'Incense Sticks', image: 'https://images.unsplash.com/photo-1606937295596-d0474778b1db?w=500&auto=format&fit=crop', price: 250 },
    { id: '2', name: 'Ghee Lamp', image: 'https://images.unsplash.com/photo-1605365070248-299a182a2ca6?w=500&auto=format&fit=crop', price: 350 },
    { id: '3', name: 'Flowers', image: 'https://images.unsplash.com/photo-1602928371666-978753a67856?w=500&auto=format&fit=crop', price: 200 },
    { id: '4', name: 'Sandalwood', image: 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&auto=format&fit=crop', price: 450 },
    { id: '5', name: 'Prayer Bell', image: 'https://images.unsplash.com/photo-1585504156473-30d147008415?w=500&auto=format&fit=crop', price: 550 },
    { id: '6', name: 'Prayer Beads', image: 'https://images.unsplash.com/photo-1607677686474-ad91bdb6c6bf?w=500&auto=format&fit=crop', price: 300 },
    { id: '7', name: 'Kumkum', image: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=500&auto=format&fit=crop', price: 150 },
    { id: '8', name: 'Camphor', image: 'https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?w=500&auto=format&fit=crop', price: 180 },
  ];

  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const getTotalPrice = () => {
    return kitItems
      .filter(item => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="container-custom py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="heading-xl text-center mb-2">Customize Your Spiritual Kit</h1>
          <p className="text-center text-charcoal/70 mb-10 text-lg">
            Select the items you wish to include in your personalized pooja kit
          </p>
          
          <div className="bg-white rounded-xl shadow-neuro p-6 mb-10">
            <h2 className="text-xl font-medium text-charcoal mb-6">Select Items for Your Kit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kitItems.map(item => (
                <div 
                  key={item.id}
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedItems.includes(item.id) 
                      ? 'border-gold ring-2 ring-gold/30' 
                      : 'border-gray-200 hover:border-gold/50'
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x400/F9F4F0/FF9933?text=Item&font=Poppins";
                      }}
                    />
                    {selectedItems.includes(item.id) && (
                      <div className="absolute top-2 right-2 bg-gold text-white rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-charcoal">{item.name}</h3>
                    <p className="text-saffron">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-neuro p-6">
            <h2 className="text-xl font-medium text-charcoal mb-4">Your Customized Kit</h2>
            
            {selectedItems.length === 0 ? (
              <p className="text-gray-500 italic mb-6">No items selected yet. Choose items above to create your custom kit.</p>
            ) : (
              <div className="mb-6">
                <div className="space-y-2 mb-4">
                  {kitItems
                    .filter(item => selectedItems.includes(item.id))
                    .map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                      </div>
                    ))
                  }
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between items-center font-semibold">
                  <span>Total</span>
                  <span className="text-saffron">₹{getTotalPrice()}</span>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 disabled:opacity-50" disabled={selectedItems.length === 0}>
                Add to Cart
              </button>
              <button className="btn-outline border-charcoal text-charcoal flex-1">
                Save Kit
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomizeKitPage;
