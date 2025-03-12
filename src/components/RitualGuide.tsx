
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RitualStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface RitualGuideProps {
  festivalName: string;
  steps: RitualStep[];
}

const RitualGuide: React.FC<RitualGuideProps> = ({ festivalName, steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('ritual-guide');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Update active step based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      // Divide scroll progress by number of steps to get current step
      const newStep = Math.min(
        steps.length - 1,
        Math.floor(value * steps.length)
      );
      setActiveStep(newStep);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);
  
  return (
    <section id="ritual-guide" className="py-20 bg-beige/30" ref={containerRef}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-3">{festivalName} Ritual Guide</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Follow these sacred steps to conduct your pooja with devotion and authenticity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white shadow-neuro rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Ritual Steps</h3>
              
              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`flex items-start ${index === activeStep ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
                  >
                    <div className="mr-4 flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === activeStep 
                          ? 'bg-saffron text-white' 
                          : index < activeStep 
                            ? 'bg-gold/30 text-charcoal' 
                            : 'bg-white border-2 border-gray-200 text-charcoal/50'
                      }`}>
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-0.5 h-16 ${
                          index < activeStep 
                            ? 'bg-gold' 
                            : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                    <div className={`pt-1 ${index === activeStep ? 'font-medium text-charcoal' : 'text-charcoal/70'}`}>
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="#"
                  className="block text-center py-3 bg-gold/10 hover:bg-gold/20 text-charcoal font-medium rounded-lg transition-colors"
                >
                  Download Full Guide
                </a>
              </div>
            </div>
          </div>
          
          {/* Detailed Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-32">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  className="scroll-mt-24"
                  id={`step-${step.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="glass-card overflow-hidden">
                    <div className="aspect-video">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold/20 text-charcoal mb-3">
                        Step {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-charcoal/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualGuide;
