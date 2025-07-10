//components/EventCard.jsx
import { Calendar, Clock, MapPin, Star } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Imagem do Evento */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {event.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">
            Destaque
          </div>
        )}
        {event.status === 'almost-sold' && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">
            Quase Esgotado
          </div>
        )}
      </div>
      
      {/* Conteúdo do Card */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between">
          <div className="bg-gray-100 rounded-lg px-3 py-1 text-xs font-medium text-gray-600">
            {event.category}
          </div>
          <div className="flex items-center space-x-1 text-amber-500">
            <Star size={14} className="fill-current" />
            <span className="text-xs font-semibold">{event.rating}</span>
          </div>
        </div>
        
        <h3 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">{event.title}</h3>
        
        <div className="mt-2 space-y-2 flex-grow">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={14} className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock size={14} className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={14} className="mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-gray-800 font-bold">{event.price}</span>
          <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-300">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;