
import React, { useState } from 'react';
import { useFestival, Festival } from '../contexts/FestivalContext';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarIcon, Trash2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminFestivalPage: React.FC = () => {
  const { festivals, addFestival, removeFestival } = useFestival();
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddFestival = () => {
    if (!name || !date || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (name, date, description)",
        variant: "destructive"
      });
      return;
    }

    addFestival({
      name,
      date,
      description,
      image: image || undefined
    });

    toast({
      title: "Festival Added",
      description: `${name} has been added to the festival calendar.`
    });

    // Reset form
    setName('');
    setDate(undefined);
    setDescription('');
    setImage('');
  };

  const handleDelete = (id: string, name: string) => {
    removeFestival(id);
    toast({
      title: "Festival Removed",
      description: `${name} has been removed from the festival calendar.`
    });
  };

  return (
    <div className="min-h-screen bg-beige/30">
      <Navbar />
      <div className="container-custom py-12">
        <h1 className="heading-lg mb-8 text-center">Festival Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Add Festival Form */}
          <div className="bg-white shadow-neuro rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-saffron">Add New Festival</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                  Festival Name*
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Diwali"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Festival Date*
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-charcoal mb-1">
                  Description*
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the festival"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-charcoal mb-1">
                  Image URL (optional)
                </label>
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full"
                />
              </div>
              
              <Button 
                className="w-full bg-saffron hover:bg-gold text-white" 
                onClick={handleAddFestival}
              >
                Add Festival
              </Button>
            </div>
          </div>
          
          {/* Festivals List */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-saffron">Upcoming Festivals</h2>
            
            {festivals.length === 0 ? (
              <div className="bg-white shadow-neuro rounded-lg p-6 text-center">
                <p className="text-charcoal/70">No festivals added yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {festivals
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .map((festival) => (
                    <div 
                      key={festival.id}
                      className="bg-white shadow-neuro rounded-lg p-4 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-medium text-charcoal">{festival.name}</h3>
                        <p className="text-sm text-charcoal/70">
                          {format(new Date(festival.date), "PPP")}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(festival.id, festival.name)}
                        className="text-crimson hover:text-crimson/80 hover:bg-crimson/10"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminFestivalPage;
