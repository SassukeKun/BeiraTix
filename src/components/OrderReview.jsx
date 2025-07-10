// components/OrderReview.jsx
import { Calendar, Clock, MapPin, Phone, CreditCard, Shield } from "lucide-react";

const OrderReview = ({ 
  eventDetails, 
  selectedTickets, 
  contactInfo, 
  paymentMethod,
  mpesaNumber,
  calculateTotal
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Revisar e Confirmar</h2>
      
      {/* Detalhes do Evento */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Detalhes do Evento</h3>
        <div className="flex items-start">
          <img 
            src={eventDetails.image} 
            alt={eventDetails.title} 
            className="h-20 w-20 object-cover rounded-md mr-4"
          />
          <div>
            <h4 className="font-medium text-gray-900">{eventDetails.title}</h4>
            <div className="text-sm text-gray-600 mt-1 space-y-1">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{eventDetails.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>{eventDetails.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ingressos Selecionados */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Ingressos</h3>
        <div className="space-y-2">
          {selectedTickets.map((ticket) => (
            <div key={ticket.id} className="flex justify-between">
              <span className="text-gray-600">{ticket.name} x {ticket.quantity}</span>
              <span className="font-medium">{(ticket.price * ticket.quantity).toLocaleString()} {ticket.currency}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Informações de Contato */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Informações de Contato</h3>
        <div className="space-y-1 text-gray-600">
          <p>{contactInfo.name}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
      </div>
      
      {/* Método de Pagamento */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Método de Pagamento</h3>
        <div className="flex items-center">
          {paymentMethod === "mpesa" && (
            <>
              <Phone size={18} className="text-green-600 mr-2" />
              <div>
                <p className="font-medium text-gray-900">M-Pesa</p>
                <p className="text-sm text-gray-600">Número: {mpesaNumber}</p>
              </div>
            </>
          )}
          
          {paymentMethod === "card" && (
            <>
              <CreditCard size={18} className="text-gray-600 mr-2" />
              <div>
                <p className="font-medium text-gray-900">Cartão de Crédito</p>
                <p className="text-sm text-gray-600">**** **** **** 1234</p>
              </div>
            </>
          )}
          
          {paymentMethod === "bank" && (
            <>
              <Calendar size={18} className="text-gray-600 mr-2" />
              <div>
                <p className="font-medium text-gray-900">Transferência Bancária</p>
                <p className="text-sm text-gray-600">BIM - Banco Internacional de Moçambique</p>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Total */}
      <div className="flex justify-between font-semibold text-gray-900 py-4 border-t border-b border-gray-200 mb-6">
        <span>Total</span>
        <span>{calculateTotal().toLocaleString()} {selectedTickets[0].currency}</span>
      </div>
      
      {/* Segurança */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-start">
          <Shield size={20} className="text-gray-500 mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-gray-600">
              Todas as transações são seguras e criptografadas. As informações de pagamento nunca são armazenadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;