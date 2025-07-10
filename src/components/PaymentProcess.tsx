// components/PaymentProcess.jsx
import { useState } from "react";
import React from "react";
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  ChevronRight, 
  ArrowLeft, 
  Shield,
  CheckCircle
} from "lucide-react";

// Components UI
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Componente principal
const PaymentProcess = ({ 
  selectedTickets, 
  onBack, 
  onComplete,
  eventDetails 
}) => {
  // Estados
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });
  const [bankDetails, setBankDetails] = useState({
    bank: "BIM",
    reference: Math.random().toString(36).substr(2, 9).toUpperCase()
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  // Calcular total
  const calculateTotal = () => {
    return selectedTickets.reduce((total, ticket) => {
      return total + (ticket.price * ticket.quantity);
    }, 0);
  };

  // Função para avançar para o próximo passo
  const goToNextStep = () => {
    setError("");
    
    // Validar dados do passo atual
    if (step === 1) {
      if (!paymentMethod) {
        setError("Por favor, selecione um método de pagamento.");
        return;
      }
    } else if (step === 2) {
      if (paymentMethod === "mpesa" && !validateMpesaNumber(mpesaNumber)) {
        setError("Por favor, insira um número M-Pesa válido.");
        return;
      } else if (paymentMethod === "card" && !validateCardDetails()) {
        setError("Por favor, preencha todos os dados do cartão corretamente.");
        return;
      }
    } else if (step === 3 && !validateContactInfo()) {
      setError("Por favor, preencha todos os campos de contato corretamente.");
      return;
    }
    
    setStep(step + 1);
  };

  // Função para voltar ao passo anterior
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  // Função para simular o processamento do pagamento
  const processPayment = () => {
    setIsProcessing(true);
    setError("");
    
    // Simulação de processamento
    setTimeout(() => {
      setIsProcessing(false);
      
      // Sucesso (poderia ter lógica de falha também em uma app real)
      const paymentData = {
        method: paymentMethod,
        contactInfo,
        total: calculateTotal(),
        status: "success",
        transactionId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        timestamp: new Date().toISOString()
      };
      
      onComplete(paymentData);
    }, 2000);
  };

  // Validações
  const validateMpesaNumber = (number) => {
    return number.length >= 9 && /^\d+$/.test(number);
  };

  const validateCardDetails = () => {
    return (
      cardDetails.number.length >= 16 && 
      cardDetails.name.length > 3 &&
      cardDetails.expiry.length >= 5 &&
      cardDetails.cvv.length >= 3
    );
  };

  const validateContactInfo = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      contactInfo.name.length > 3 && 
      emailRegex.test(contactInfo.email) && 
      contactInfo.phone.length >= 9
    );
  };

  // Renderização dos passos
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderPaymentMethodStep();
      case 2:
        return renderPaymentDetailsStep();
      case 3:
        return renderContactInfoStep();
      case 4:
        return renderReviewStep();
      default:
        return null;
    }
  };

  // Passo 1: Seleção do método de pagamento
  const renderPaymentMethodStep = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Método de Pagamento</h2>
        <p className="text-gray-600 mb-6">
          Selecione como você deseja pagar pelos seus ingressos
        </p>
        
        {/* Opções de pagamento */}
        <div className="space-y-3">
          {/* M-Pesa */}
          <div 
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
              paymentMethod === "mpesa" 
                ? "border-gray-800 bg-gray-50" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("mpesa")}
          >
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <Smartphone size={20} className="text-orange-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">M-Pesa</h3>
              <p className="text-sm text-gray-500">Pagamento via celular</p>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          {/* Cartão de Crédito */}
          {/* <div 
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
              paymentMethod === "card" 
                ? "border-gray-800 bg-gray-50" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <CreditCard size={20} className="text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">Cartão de Crédito/Débito</h3>
              <p className="text-sm text-gray-500">Visa, Mastercard, etc.</p>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div> */}
          
          {/* Transferência Bancária */}
          {/* <div 
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
              paymentMethod === "bank" 
                ? "border-gray-800 bg-gray-50" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setPaymentMethod("bank")}
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Building size={20} className="text-green-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">Transferência Bancária</h3>
              <p className="text-sm text-gray-500">BIM, BCI, Standard Bank</p>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div> */}
        </div>
      </div>
    );
  };

  // Passo 2: Detalhes do pagamento conforme método selecionado
  const renderPaymentDetailsStep = () => {
    if (paymentMethod === "mpesa") {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Pagamento com M-Pesa</h2>
          <p className="text-gray-600 mb-6">
            Digite o número de telefone associado à sua conta M-Pesa
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="mpesaNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Número M-Pesa
              </label>
              <input
                id="mpesaNumber"
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                placeholder="84 XXX XXXX"
                value={mpesaNumber}
                onChange={(e) => setMpesaNumber(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Você receberá um código de confirmação neste número
              </p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg text-sm">
              <p className="text-gray-700">
                Após clicar em "Continuar", você receberá um prompt no seu celular para confirmar o pagamento com o código PIN do M-Pesa.
              </p>
            </div>
          </div>
        </div>
      );
    } else if (paymentMethod === "card") {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Dados do Cartão</h2>
          <p className="text-gray-600 mb-6">
            Insira os dados do seu cartão de crédito ou débito
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Número do Cartão
              </label>
              <input
                id="cardNumber"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                Nome no Cartão
              </label>
              <input
                id="cardName"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                placeholder="Como aparece no cartão"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Validade
                </label>
                <input
                  id="cardExpiry"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="MM/AA"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  id="cardCVV"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex items-center pt-2">
              <Shield size={16} className="text-gray-500 mr-2" />
              <p className="text-xs text-gray-500">
                Seus dados são protegidos por criptografia de ponta a ponta
              </p>
            </div>
          </div>
        </div>
      );
    } else if (paymentMethod === "bank") {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Transferência Bancária</h2>
          <p className="text-gray-600 mb-6">
            Instruções para transferência bancária
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div>
              <p className="text-sm text-gray-700 font-medium">Banco:</p>
              <p className="text-gray-900">BIM - Banco Internacional de Moçambique</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">Conta:</p>
              <p className="text-gray-900">BeiraTix Eventos</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">Número da Conta:</p>
              <p className="text-gray-900">12345678910</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">NIB:</p>
              <p className="text-gray-900">000100000012345678910</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">Valor:</p>
              <p className="text-gray-900">{calculateTotal().toLocaleString()} MZN</p>
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">Referência (importante):</p>
              <p className="text-gray-900 font-bold">{bankDetails.reference}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Importante:</strong> Após realizar a transferência, você precisará inserir seus dados de contato e prosseguir. A confirmação do pagamento pode levar até 24 horas.
            </p>
          </div>
        </div>
      );
    } else {
      return <div>Por favor, selecione um método de pagamento.</div>;
    }
  };

  // Passo 3: Informações de contato
  const renderContactInfoStep = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Informações de Contato</h2>
        <p className="text-gray-600 mb-6">
          Insira seus dados para receber a confirmação e os ingressos
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input
              id="contactName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Seu nome completo"
              value={contactInfo.name}
              onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
            />
          </div>
          
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="contactEmail"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="seu@email.com"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
            />
            <p className="text-xs text-gray-500 mt-1">
              Enviaremos a confirmação e os ingressos para este email
            </p>
          </div>
          
          <div>
            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              id="contactPhone"
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="84 XXX XXXX"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
            />
          </div>
        </div>
      </div>
    );
  };

  // Passo 4: Revisão e confirmação
  const renderReviewStep = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Revisão e Confirmação</h2>
        <p className="text-gray-600 mb-6">
          Verifique se todas as informações estão corretas
        </p>
        
        {/* Resumo do Evento */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium text-gray-900 mb-2">{eventDetails.title}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{eventDetails.date} • {eventDetails.time}</p>
            <p>{eventDetails.venue}</p>
          </div>
        </div>
        
        {/* Ingressos */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Ingressos Selecionados</h3>
          <div className="space-y-2">
            {selectedTickets.map((ticket, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{ticket.name} x {ticket.quantity}</span>
                <span>{(ticket.price * ticket.quantity).toLocaleString()} MZN</span>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="flex justify-between font-semibold text-gray-900 py-3 border-t border-b border-gray-200 my-3">
            <span>Total</span>
            <span>{calculateTotal().toLocaleString()} MZN</span>
          </div>
        </div>
        
        {/* Método de Pagamento */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Método de Pagamento</h3>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            {paymentMethod === "mpesa" && (
              <>
                <Smartphone size={18} className="text-orange-600 mr-2" />
                <div>
                  <p className="font-medium text-gray-900">M-Pesa</p>
                  <p className="text-sm text-gray-600">Número: {mpesaNumber}</p>
                </div>
              </>
            )}
            
            {paymentMethod === "card" && (
              <>
                <CreditCard size={18} className="text-blue-600 mr-2" />
                <div>
                  <p className="font-medium text-gray-900">Cartão de Crédito</p>
                  <p className="text-sm text-gray-600">**** {cardDetails.number.slice(-4)}</p>
                </div>
              </>
            )}
            
            {paymentMethod === "bank" && (
              <>
                <Building size={18} className="text-green-600 mr-2" />
                <div>
                  <p className="font-medium text-gray-900">Transferência Bancária</p>
                  <p className="text-sm text-gray-600">Ref: {bankDetails.reference}</p>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Informações de Contato */}
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Informações de Contato</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{contactInfo.name}</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
          </div>
        </div>
        
        {/* Termos e Condições */}
        <div className="pt-3">
          <label className="flex items-start cursor-pointer">
            <input 
              type="checkbox" 
              className="mr-2 mt-1" 
            />
            <span className="text-sm text-gray-600">
              Eu concordo com os <a href="#" className="text-gray-800 underline">Termos e Condições</a> e com a <a href="#" className="text-gray-800 underline">Política de Privacidade</a>
            </span>
          </label>
        </div>
      </div>
    );
  };

  // Renderização do botão de ação com base no passo atual
  const renderActionButton = () => {
    if (step === 4) {
      return (
        <Button
          onClick={processPayment}
          disabled={isProcessing}
          className="w-full py-3"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              <span>Processando...</span>
            </div>
          ) : (
            <span>Confirmar e Pagar</span>
          )}
        </Button>
      );
    } else {
      return (
        <Button
          onClick={goToNextStep}
          className="w-full py-3"
          disabled={
            (step === 1 && !paymentMethod) ||
            (step === 2 && paymentMethod === "mpesa" && !validateMpesaNumber(mpesaNumber)) ||
            (step === 2 && paymentMethod === "card" && !validateCardDetails()) ||
            (step === 3 && !validateContactInfo())
          }
        >
          Continuar
        </Button>
      );
    }
  };

  // Indicador de progresso
  const renderProgressIndicator = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === i 
                  ? "bg-gray-800 text-white" 
                  : step > i 
                    ? "bg-gray-200 text-gray-700" 
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {step > i ? <CheckCircle size={16} /> : i}
            </div>
            {i < 4 && (
              <div 
                className={`h-1 w-12 ${
                  step > i ? "bg-gray-400" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Cabeçalho */}
      <div className="flex items-center mb-6">
        <button 
          onClick={goToPreviousStep}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-2"
        >
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">
          {step === 1 && "Selecionar Pagamento"}
          {step === 2 && "Detalhes do Pagamento"}
          {step === 3 && "Informações de Contato"}
          {step === 4 && "Revisar e Confirmar"}
        </h1>
      </div>
      
      {/* Indicador de progresso */}
      {renderProgressIndicator()}
      
      {/* Mensagem de erro se houver */}
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {/* Conteúdo do passo atual */}
      {renderStepContent()}
      
      {/* Botões de ação */}
      <div className="mt-8 space-y-3">
        {renderActionButton()}
        
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          className="w-full"
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default PaymentProcess;