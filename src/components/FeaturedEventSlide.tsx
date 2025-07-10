// components/FeaturedEventSlide.jsx
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const FeaturedEventSlide = ({ event, goToEventDetails }) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className="max-w-lg">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
            Evento em Destaque
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{event.title}</h3>
          <p className="text-gray-200 mb-4">{event.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-white/80">
              <Calendar size={16} className="mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-white/80">
              <MapPin size={16} className="mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 px-5 py-2.5 rounded-lg font-medium transition-colors group"
            onClick={() => goToEventDetails && goToEventDetails(event.id)}
          >
            <span>Ver detalhes</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventSlide;