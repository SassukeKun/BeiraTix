// components/EventTicketSelector.jsx
import { Plus, Minus } from "lucide-react";

const EventTicketSelector = ({ ticket, quantity, onIncrease, onDecrease }) => {
  // Verifica se o ingresso está disponível
  const isAvailable = ticket.available > 0;
  
  // Verifica se o limite por compra foi atingido
  const isMaxReached = quantity >= ticket.maxPerPurchase || quantity >= ticket.available;
  
  // Calcular status do estoque
  const getStockStatus = () => {
    if (ticket.available <= 5) {
      return { message: `Apenas ${ticket.available} disponíveis!`, className: "text-amber-600" };
    } else if (ticket.available < 20) {
      return { message: "Poucos ingressos disponíveis", className: "text-gray-600" };
    }
    return { message: "Ingressos disponíveis", className: "text-green-600" };
  };
  
  const stockStatus = getStockStatus();
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{ticket.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
          <p className={`text-xs mt-2 ${stockStatus.className} font-medium`}>
            {stockStatus.message}
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">{ticket.price.toLocaleString()} {ticket.currency}</p>
          <p className="text-xs text-gray-500 mt-1">por ingresso</p>
        </div>
      </div>
      
      {/* Contador de ingressos */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={onDecrease}
            disabled={quantity === 0}
            className={`p-1.5 rounded-full ${
              quantity === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-medium text-gray-900">{quantity}</span>
          <button
            onClick={onIncrease}
            disabled={!isAvailable || isMaxReached}
            className={`p-1.5 rounded-full ${
              !isAvailable || isMaxReached
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Plus size={16} />
          </button>
        </div>
        
        {quantity > 0 && (
          <div className="text-right">
            <p className="font-semibold text-gray-900">
              {(ticket.price * quantity).toLocaleString()} {ticket.currency}
            </p>
          </div>
        )}
      </div>
      
      {/* Informações adicionais */}
      {isMaxReached && (
        <p className="text-xs text-amber-600 mt-2">
          Limite máximo de {ticket.maxPerPurchase} ingressos por compra.
        </p>
      )}
    </div>
  );
};

export default EventTicketSelector;