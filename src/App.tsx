// App.tsx
import { useState } from 'react';
import React from 'react';
import Homepage from './pages/home-page';
import EventDetails from './pages/event-details';
import CheckoutPage from './pages/CheckoutPage';

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
    console.log("Função goToCheckout chamada com:", { id, tickets }); // Adicionar log para debug
    setCurrentPage('checkout');
    setEventId(id);
    setSelectedTickets(tickets);
  };

  // Criar um objeto com todas as funções de navegação
  const navigationProps = {
    goToHome,
    goToEventDetails,
    goToCheckout
  };

  // Renderizar o componente adequado com base na página atual
  const renderPage = () => {
    switch (currentPage) {
      case 'checkout':
        return (
          <CheckoutPage 
            eventId={eventId as number}
            selectedTickets={selectedTickets}
            goToEventDetails={goToEventDetails}
            goToHome={goToHome}
          />
        );
      case 'eventDetails':
        // Passando explicitamente todas as funções de navegação
        return (
          <EventDetails 
            eventId={eventId} 
            goToHome={goToHome} 
            goToEventDetails={goToEventDetails}
            goToCheckout={goToCheckout}
          />
        );
      case 'home':
      default:
        return <Homepage {...navigationProps} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;