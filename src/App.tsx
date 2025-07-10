// App.jsx
import { useState } from 'react';
import Homepage from './pages/home-page';
import EventDetails from './pages/event-details';

function App() {
  // Simples sistema de roteamento para o exemplo
  // Em uma aplicação real, usaríamos React Router ou similar
  const [currentPage, setCurrentPage] = useState('home');
  const [eventId, setEventId] = useState(null);

  // Função para navegar para a página inicial
  const goToHome = () => {
    setCurrentPage('home');
    setEventId(null);
  };

  // Função para navegar para a página de detalhes do evento
  const goToEventDetails = (id) => {
    setCurrentPage('eventDetails');
    setEventId(id);
  };

  // Injetar as funções de navegação nas props dos componentes
  const navigationProps = {
    goToHome,
    goToEventDetails
  };

  // Renderizar o componente adequado com base na página atual
  const renderPage = () => {
    switch (currentPage) {
      case 'eventDetails':
        return <EventDetails eventId={eventId} {...navigationProps} />;
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