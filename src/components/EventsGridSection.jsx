// components/EventsGridSection.jsx
import EventCard from "./EventCard";
import { ArrowRight } from "lucide-react";

const EventsGridSection = ({ events, title = "Próximos Eventos", filterCategory = "all", setActiveCategory, goToEventDetails }) => {
  // Mapeamento de categorias (para facilitar a filtragem)
  const categoryMap = {
    'music': 'Música',
    'cinema': 'Cinema',
    'theater': 'Teatro',
    'sports': 'Esportes',
    'workshop': 'Workshop',
    'art': 'Arte',
    'gastronomy': 'Gastronomia'
  };
  
  // Filtrar eventos pela categoria selecionada
  const filteredEvents = filterCategory === 'all' 
    ? events 
    : events.filter(event => {
        // Verifica se a categoria do evento corresponde à categoria selecionada
        // Considera tanto o valor em inglês (id da categoria) quanto o valor em português (nome exibido)
        return event.category.toLowerCase() === filterCategory || 
               event.category === categoryMap[filterCategory];
      });
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
        <a 
          href="#" 
          className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
        >
          <span>Ver todos do nesta categoria.</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              goToEventDetails={goToEventDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-lg">Nenhum evento encontrado nesta categoria.</p>
          <button 
            onClick={() => setActiveCategory && setActiveCategory('all')}
            className="mt-4 inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
          >
            Ver todos os eventos
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      )}
    </section>
  );
};

export default EventsGridSection;