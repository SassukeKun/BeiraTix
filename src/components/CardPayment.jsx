// components/CardPayment.jsx
import { useState } from "react";
import { CreditCard, Calendar, Lock } from "lucide-react";

const CardPayment = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });
  
  // Formatar número do cartão durante a digitação
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/\D/g, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  // Formatar data de expiração durante a digitação
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/\D/g, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };
  
  // Manipuladores de eventos para os campos do formulário
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardInfo({ ...cardInfo, cardNumber: formattedValue });
  };
  
  const handleCardNameChange = (e) => {
    setCardInfo({ ...cardInfo, cardName: e.target.value.toUpperCase() });
  };
  
  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setCardInfo({ ...cardInfo, expiryDate: formattedValue });
  };
  
  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardInfo({ ...cardInfo, cvv: value });
  };
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
          <CreditCard size={20} className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Cartão de Crédito</h3>
          <p className="text-sm text-gray-600">Pagamento seguro com cartão de crédito</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
            Número do Cartão
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-number"
              value={cardInfo.cardNumber}
              onChange={handleCardNumberChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CreditCard size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome no Cartão
          </label>
          <input
            type="text"
            id="card-name"
            value={cardInfo.cardName}
            onChange={handleCardNameChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition"
            placeholder="NOME COMO ESTÁ NO CARTÃO"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 mb-1">
              Data de Expiração
            </label>
            <div className="relative">
              <input
                type="text"
                id="expiry-date"
                value={cardInfo.expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition"
                placeholder="MM/AA"
                maxLength={5}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <div className="relative">
              <input
                type="text"
                id="cvv"
                value={cardInfo.cvv}
                onChange={handleCvvChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent outline-none transition"
                placeholder="123"
                maxLength={4}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm pt-4">
          <div className="flex space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
          </div>
          <div className="flex items-center text-gray-600">
            <Lock size={14} className="mr-1" />
            <span>Pagamento seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;