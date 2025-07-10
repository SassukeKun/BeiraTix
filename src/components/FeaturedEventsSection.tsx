// components/FeaturedEventsSection.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedEventSlide from "./FeaturedEventSlide";

const FeaturedEventsSection = ({ events, goToEventDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Efeito para rotação automática do slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [events.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Eventos em Destaque</h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <FeaturedEventSlide 
              event={event} 
              goToEventDetails={goToEventDetails}
            />
          </div>
        ))}
        
        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;