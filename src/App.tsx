// App.tsx
import { useState } from 'react';
import React from 'react';
import Homepage from './pages/home-page';
import EventDetails from './pages/event-details';
import CheckoutPage from './pages/CheckoutPage';
import TransactionHistory from './pages/TransactionHistory';

function App() {
  // Sistema de roteamento simplificado
  const [currentPage, setCurrentPage] = useState('home');
  const [eventId, setEventId] = useState<number | null>(null);
  const [selectedTickets, setSelectedTickets] = useState<any[]>([]);

  // Função para navegar para a página inicial
  const goToHome = () => {
    setCurrentPage('home');
    setEventId(null);
    setSelectedTickets([]);
  };

  // Função para navegar para a página de detalhes do evento
  const goToEventDetails = (id: number) => {
    setCurrentPage('eventDetails');
    setEventId(id);
  };

  // Função para navegar para o checkout com os ingressos selecionados
  const goToCheckout = (id: number, tickets: any[]) => {
    console.log("Navegando para checkout com:", { id, tickets });
    setCurrentPage('checkout');
    setEventId(id);
    setSelectedTickets(tickets);
  };

  // Função para navegar para o histórico de transações
  const goToTransactionHistory = () => {
    console.log("Navegando para histórico de transações");
    setCurrentPage('transactionHistory');
  };

  // Renderizar o componente adequado com base na página atual
  const renderPage = () => {
    switch (currentPage) {
      case 'transactionHistory':
        return (
          <TransactionHistory 
            goToHome={goToHome} 
            goToEventDetails={goToEventDetails}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage 
            eventId={eventId as number}
            selectedTickets={selectedTickets}
            goToEventDetails={goToEventDetails}
            goToHome={goToHome}
            // Removida a propriedade goToTransactionHistory
          />
        );
      case 'eventDetails':
        return (
          <EventDetails 
            eventId={eventId} 
            goToHome={goToHome} 
            goToEventDetails={goToEventDetails}
            goToCheckout={goToCheckout}
            goToTransactionHistory={goToTransactionHistory}
          />
        );
      case 'home':
      default:
        return (
          <Homepage 
            goToHome={goToHome} 
            goToEventDetails={goToEventDetails}
            goToTransactionHistory={goToTransactionHistory}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;