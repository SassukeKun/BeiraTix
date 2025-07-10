// components/BankTransferPayment.jsx
import { Calendar, Copy, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const BankTransferPayment = () => {
  const [copied, setCopied] = useState(false);
  
  const bankDetails = {
    bank: "BIM - Banco Internacional de Moçambique",
    accountName: "BeiraTix Eventos, Lda",
    accountNumber: "12345678901234",
    nib: "000100000123456789101",
    iban: "MZ59000100000123456789101",
    reference: "BT" + Math.random().toString(36).substring(2, 10).toUpperCase(),
  };
  
  // Função para copiar texto para o clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
          <Calendar size={20} className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Transferência Bancária</h3>
          <p className="text-sm text-gray-600">Transferência direta para nossa conta</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start">
          <AlertCircle size={18} className="text-amber-500 mr-2 mt-0.5" />
          <div>
            <p className="text-sm text-amber-800">
              A transferência bancária pode levar até 48 horas para ser processada. Seus ingressos serão confirmados assim que recebermos o pagamento.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Detalhes da Conta</h4>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Banco</p>
              <p className="font-medium text-gray-900">{bankDetails.bank}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Nome da Conta</p>
              <p className="font-medium text-gray-900">{bankDetails.accountName}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Número da Conta</p>
              <div className="flex items-center">
                <p className="font-medium text-gray-900 mr-2">{bankDetails.accountNumber}</p>
                <button 
                  onClick={() => copyToClipboard(bankDetails.accountNumber)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Copy size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">NIB</p>
              <div className="flex items-center">
                <p className="font-medium text-gray-900 mr-2">{bankDetails.nib}</p>
                <button 
                  onClick={() => copyToClipboard(bankDetails.nib)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Copy size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">IBAN</p>
              <div className="flex items-center">
                <p className="font-medium text-gray-900 mr-2">{bankDetails.iban}</p>
                <button 
                  onClick={() => copyToClipboard(bankDetails.iban)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Copy size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm text-gray-500">Referência (importante)</p>
              <div className="flex items-center bg-white border border-gray-200 rounded px-3 py-2 mt-1">
                <p className="font-bold text-gray-900 mr-2">{bankDetails.reference}</p>
                <button 
                  onClick={() => copyToClipboard(bankDetails.reference)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Copy size={14} className="text-gray-500" />
                </button>
                {copied && (
                  <span className="text-xs text-green-600 ml-2">Copiado!</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Certifique-se de incluir esta referência ao fazer a transferência.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Próximos Passos</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 ml-2">
            <li>Faça a transferência para a conta indicada acima</li>
            <li>Inclua a referência na sua transferência</li>
            <li>Envie o comprovante de transferência para <span className="text-blue-600">pagamentos@beiratix.mz</span></li>
            <li>Aguarde a confirmação do pagamento (até 48 horas)</li>
          </ol>
        </div>
        
        <div className="flex items-start text-sm text-gray-600">
          <Clock size={16} className="text-gray-500 mr-2 mt-0.5" />
          <p>
            O prazo para realizar a transferência é de até 48 horas após a reserva dos ingressos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankTransferPayment;