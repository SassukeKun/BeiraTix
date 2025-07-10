// pages/CheckoutPage.jsx
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentProcess from "../components/PaymentProcess";
import PaymentResult from "../components/PaymentResult";

// Componente principal
const CheckoutPage = ({ 
  eventId,
  selectedTickets,
  goToEventDetails,
  goToHome,
  goToTransactionHistory
}) => {
  // Estados
  const [eventDetails, setEventDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentStep, setPaymentStep] = useState('process');
  const [paymentResult, setPaymentResult] = useState(null);

  // Simulação de carregamento dos detalhes do evento
  useEffect(() => {
    // Em uma aplicação real, buscaríamos os dados do backend
    // Aqui simulamos com um timeout
    const timer = setTimeout(() => {
      // Dados mockados para o exemplo
      setEventDetails({
        id: eventId,
        title: "Festival de Jazz na Praia",
        category: "Música",
        date: "15 Julho, 2025",
        time: "19:00 - 23:00",
        location: "Praia do Macuti",
        venue: "Arena de Eventos Beira Mar",
        address: "Av. Marginal, Praia do Macuti, Beira",
        organizer: "Associação Cultural de Beira",
      });
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId]);

  // Função para lidar com a conclusão do pagamento
  const handlePaymentComplete = (paymentData) => {
    setPaymentResult({
      ...paymentData,
      // Em uma aplicação real, o status viria do backend
      // Aqui simulamos aleatoriamente para demonstração
      status: Math.random() > 0.2 ? 'success' : Math.random() > 0.5 ? 'pending' : 'failed'
    });
    
    setPaymentStep('result');
  };

  // Função para voltar à tela de detalhes do evento
  const handleBack = () => {
    goToEventDetails(eventId);
  };

  // Função para tentar o pagamento novamente
  const handleRetry = () => {
    setPaymentStep('process');
  };

  // Função para visualizar os ingressos
  const handleViewTickets = () => {
    // Em uma implementação real, aqui poderíamos abrir um modal
    // ou navegar para uma página de visualização de ingressos
    console.log("Visualizando ingressos...");
    // Por enquanto, apenas mostramos um alerta
    window.alert("Seus ingressos foram enviados para seu email!");
  };

  // Renderizar o conteúdo principal
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
        </div>
      );
    }

    if (paymentStep === 'process' && eventDetails) {
      return (
        <PaymentProcess
          selectedTickets={selectedTickets}
          onBack={handleBack}
          onComplete={handlePaymentComplete}
          eventDetails={eventDetails}
        />
      );
    }

    if (paymentStep === 'result' && paymentResult) {
      return (
        <PaymentResult
          status={paymentResult.status}
          paymentData={paymentResult}
          onGoHome={goToHome}
          onRetry={handleRetry}
          onViewTickets={handleViewTickets}
          goToTransactionHistory={goToTransactionHistory}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header goToHome={goToHome} goToTransactionHistory={goToTransactionHistory} />
      
      {/* Breadcrumb e título */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <button 
              onClick={handleBack}
              className="flex items-center hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={14} className="mr-1" />
              <span>Voltar ao Evento</span>
            </button>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Checkout</span>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CheckoutPage;