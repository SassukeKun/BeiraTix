// components/RelatedEvents.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard";
import { eventsMock } from "../data/mockData";

const RelatedEvents = ({ category, currentEventId, goToEventDetails }) => {
  // Filtrar eventos da mesma categoria, excluindo o evento atual
  const relatedEvents = eventsMock
    .filter(event => event.category === category && event.id !== currentEventId)
    .slice(0, 3); // Limitar a 3 eventos relacionados
  
  // Se não houver eventos relacionados suficientes, adicione eventos de outras categorias
  if (relatedEvents.length < 3) {
    const otherEvents = eventsMock
      .filter(event => event.category !== category && event.id !== currentEventId)
      .slice(0, 3 - relatedEvents.length);
    
    relatedEvents.push(...otherEvents);
  }
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Eventos Relacionados</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedEvents.map((event) => (
          <EventCard 
            key={event.id} 
            event={event}
            goToEventDetails={goToEventDetails}
          />
        ))}
      </div>
      
      {relatedEvents.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-xl">
          <p className="text-gray-500">Nenhum evento relacionado encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default RelatedEvents;