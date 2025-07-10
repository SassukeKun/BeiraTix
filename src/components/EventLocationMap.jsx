// components/EventLocationMap.jsx
import { MapPin } from "lucide-react";

const EventLocationMap = ({ lat, lng, venueName }) => {
  // Normalmente, aqui usaríamos uma biblioteca como Google Maps, Mapbox ou Leaflet
  // Para este exemplo, vamos simular um mapa com um placeholder
  
  return (
    <div className="relative w-full h-full">
      {/* Placeholder de imagem do mapa - em uma aplicação real, seria substituído pelo mapa real */}
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <img 
          src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+555(${lng},${lat})/${lng},${lat},13,0/600x400?access_token=YOUR_MAPBOX_TOKEN`}
          alt={`Mapa para ${venueName}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay de informações */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
        <div className="flex items-start">
          <div className="bg-gray-800 rounded-full p-2 mr-3">
            <MapPin size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{venueName}</h3>
            <div className="flex mt-1">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Ver no Google Maps
              </a>
              <span className="mx-2 text-gray-300">•</span>
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocationMap;