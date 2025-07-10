// components/MPesaPayment.jsx
import { Phone, AlertCircle } from "lucide-react";

const MPesaPayment = ({ mpesaNumber, setMpesaNumber, isValid }) => {
  // Formatar o número do MPesa durante a digitação
  const handleMPesaNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    setMpesaNumber(value);
  };
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
          <Phone size={20} className="text-green-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Pagamento por M-Pesa</h3>
          <p className="text-sm text-gray-600">Rápido, seguro e sem taxas adicionais</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="mpesa-number" className="block text-sm font-medium text-gray-700 mb-1">
            Número M-Pesa
          </label>
          <div className="relative">
            <input
              type="tel"
              id="mpesa-number"
              value={mpesaNumber}
              onChange={handleMPesaNumberChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition ${
                mpesaNumber && !isValid 
                  ? 'border-red-300 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-gray-200'
              }`}
              placeholder="Ex: 84 123 4567"
              maxLength={9}
            />
            {mpesaNumber && !isValid && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <AlertCircle size={18} className="text-red-500" />
              </div>
            )}
          </div>
          {mpesaNumber && !isValid && (
            <p className="mt-1 text-sm text-red-600">
              Por favor, insira um número M-Pesa válido (começa com 84, 85, 86 ou 87 seguido de 7 dígitos)
            </p>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Como funciona?</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 ml-2">
            <li>Insira seu número M-Pesa registrado</li>
            <li>Confirme o pagamento clicando em "Confirmar Pagamento"</li>
            <li>Você receberá uma notificação no seu celular para autorizar o pagamento</li>
            <li>Digite seu PIN M-Pesa para completar a transação</li>
          </ol>
        </div>
        
        <div className="flex items-start text-sm text-gray-600">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M-PESA_LOGO-01.svg/320px-M-PESA_LOGO-01.svg.png" 
            alt="M-Pesa Logo" 
            className="h-6 mr-2"
          />
          <p>
            M-Pesa é um serviço de pagamento móvel seguro e rápido da Vodacom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MPesaPayment;