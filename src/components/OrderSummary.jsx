// components/OrderSummary.jsx
import { Clock, Calendar, MapPin } from "lucide-react";

const OrderSummary = ({ eventDetails, selectedTickets, fees, timeLeft }) => {
  // Formatar o tempo restante
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  // Calcular o subtotal
  const calculateSubtotal = () => {
    return selectedTickets.reduce((total, ticket) => {
      return total + (ticket.price * ticket.quantity);
    }, 0);
  };
  
  // Calcular o total
  const calculateTotal = () => {
    return calculateSubtotal() + fees.service + fees.transaction;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      {/* Contador de reserva */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center mb-6">
        <Clock size={18} className="text-amber-500 mr-2" />
        <div className="flex-grow">
          <p className="text-sm text-amber-800">
            Seus ingressos estão reservados por <span className="font-semibold">{formatTimeLeft()}</span>
          </p>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumo do Pedido</h2>
      
      {/* Detalhes do Evento */}
      <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
        <img 
          src={eventDetails.image} 
          alt={eventDetails.title} 
          className="h-16 w-16 object-cover rounded-md mr-3"
        />
        <div>
          <h3 className="font-medium text-gray-900">{eventDetails.title}</h3>
          <div className="space-y-1 mt-1">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={14} className="mr-1" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={14} className="mr-1" />
              <span>{eventDetails.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-1" />
              <span>{eventDetails.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detalhes dos Ingressos */}
      <div className="space-y-2 mb-6">
        {selectedTickets.map((ticket) => (
          <div key={ticket.id} className="flex justify-between text-sm">
            <span className="text-gray-600">{ticket.name} x {ticket.quantity}</span>
            <span className="font-medium text-gray-900">{(ticket.price * ticket.quantity).toLocaleString()} {ticket.currency}</span>
          </div>
        ))}
      </div>
      
      {/* Taxas */}
      <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Taxa de serviço</span>
          <span className="font-medium text-gray-900">{fees.service.toLocaleString()} {selectedTickets[0].currency}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Taxa de transação</span>
          <span className="font-medium text-gray-900">{fees.transaction.toLocaleString()} {selectedTickets[0].currency}</span>
        </div>
      </div>
      
      {/* Total */}
      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>Total</span>
        <span>{calculateTotal().toLocaleString()} {selectedTickets[0].currency}</span>
      </div>
      
      {/* Política de reembolso */}
      <div className="flex items-start text-xs text-gray-500">
        <p>
          Cancelamentos devem ser feitos com pelo menos 48 horas de antecedência para reembolso total. Consulte nossa política de reembolso para mais detalhes.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;