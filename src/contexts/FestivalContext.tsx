
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Festival {
  id: string;
  name: string;
  date: Date;
  description: string;
  image?: string;
}

interface FestivalContextType {
  festivals: Festival[];
  addFestival: (festival: Omit<Festival, 'id'>) => void;
  removeFestival: (id: string) => void;
  getNearestFestival: () => Festival | null;
}

const FestivalContext = createContext<FestivalContextType | undefined>(undefined);

export const useFestival = () => {
  const context = useContext(FestivalContext);
  if (!context) {
    throw new Error('useFestival must be used within a FestivalProvider');
  }
  return context;
};

export const FestivalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [festivals, setFestivals] = useState<Festival[]>(() => {
    const savedFestivals = localStorage.getItem('festivals');
    if (savedFestivals) {
      // Parse the dates properly when loading from localStorage
      const parsed = JSON.parse(savedFestivals);
      return parsed.map((festival: any) => ({
        ...festival,
        date: new Date(festival.date)
      }));
    }
    
    // Default festivals if none in localStorage
    return [
      {
        id: 'diwali-2023',
        name: 'Diwali',
        date: new Date('2023-11-12T00:00:00'),
        description: 'Festival of Lights',
        image: 'https://images.unsplash.com/photo-1604423862618-72105d4e1188?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'holi-2024',
        name: 'Holi',
        date: new Date('2024-03-25T00:00:00'),
        description: 'Festival of Colors',
        image: 'https://images.unsplash.com/photo-1613064427212-bbf9a4ea9b5d?q=80&w=800&auto=format&fit=crop'
      }
    ];
  });

  // Save to localStorage whenever festivals change
  useEffect(() => {
    localStorage.setItem('festivals', JSON.stringify(festivals));
  }, [festivals]);

  const addFestival = (festival: Omit<Festival, 'id'>) => {
    const newFestival = {
      ...festival,
      id: `${festival.name.toLowerCase().replace(/\s+/g, '-')}-${new Date().getTime()}`
    };
    setFestivals(prev => [...prev, newFestival]);
  };

  const removeFestival = (id: string) => {
    setFestivals(prev => prev.filter(festival => festival.id !== id));
  };

  const getNearestFestival = (): Festival | null => {
    const now = new Date();
    const upcomingFestivals = festivals
      .filter(festival => festival.date > now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    
    return upcomingFestivals.length > 0 ? upcomingFestivals[0] : null;
  };

  return (
    <FestivalContext.Provider value={{ festivals, addFestival, removeFestival, getNearestFestival }}>
      {children}
    </FestivalContext.Provider>
  );
};

export default FestivalProvider;
