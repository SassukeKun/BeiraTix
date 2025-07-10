import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  Heart, 
  Ticket, 
  Star, 
  ChevronDown, 
  Plus, 
  Minus,
  ArrowLeft
} from "lucide-react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventImageGallery from "../components/EventImageGallery";
import EventTicketSelector from "../components/EventTicketSelector";
import EventLocationMap from "../components/EventLocationMap";
import RelatedEvents from "../components/RelatedEvents";

// Dados de exemplo
const eventDetailsMock = {
  id: 1,
  title: "Festival de Jazz na Praia",
  category: "Música",
  date: "15 Julho, 2025",
  time: "19:00 - 23:00",
  location: "Praia do Macuti",
  venue: "Arena de Eventos Beira Mar",
  address: "Av. Marginal, Praia do Macuti, Beira",
  organizer: "Associação Cultural de Beira",
  rating: "4.8",
  reviewCount: 124,
  featured: true,
  status: "available",
  description: "O Festival de Jazz na Praia está de volta para sua 5ª edição! Uma noite mágica à beira-mar com os melhores músicos de jazz de Moçambique e convidados internacionais. Traga sua família e amigos para desfrutar de boa música, comida deliciosa e a brisa refrescante do oceano Índico.",
  longDescription: "O Festival de Jazz na Praia é um dos eventos mais aguardados do calendário cultural da Beira. Nesta 5ª edição, contaremos com a presença de artistas renomados do cenário do jazz moçambicano e internacional.\n\nO palco principal receberá nomes como João Domingos Quartet, Trio Maputo, Sarah Olsen e o renomado pianista sul-africano Themba Mkhize. Além das apresentações principais, teremos um palco secundário para artistas emergentes da região.\n\nO festival também contará com uma praça de alimentação com diversos restaurantes locais, área infantil supervisionada e estacionamento gratuito. Traga sua cadeira de praia ou alugue almofadas confortáveis no local para uma experiência ainda mais agradável.",
  highlights: [
    "Apresentações de artistas internacionais e nacionais",
    "Área gastronômica com especialidades locais",
    "Vista privilegiada para o pôr do sol na praia",
    "Área coberta em caso de chuva",
    "Estacionamento gratuito"
  ],
  images: [
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80"
  ],
  ticketTypes: [
    {
      id: 1,
      name: "Ingresso Padrão",
      description: "Acesso a todas as áreas do festival",
      price: 1200,
      currency: "MZN",
      available: 150,
      maxPerPurchase: 5
    },
    {
      id: 2,
      name: "Ingresso VIP",
      description: "Acesso a todas as áreas + área VIP com open bar e canapés",
      price: 2500,
      currency: "MZN",
      available: 50,
      maxPerPurchase: 3
    },
    {
      id: 3,
      name: "Pacote Família",
      description: "4 ingressos com desconto + área infantil gratuita",
      price: 4000,
      currency: "MZN",
      available: 30,
      maxPerPurchase: 2
    }
  ],
  faq: [
    {
      question: "Crianças podem participar do evento?",
      answer: "Sim, crianças são bem-vindas. Menores de 6 anos não pagam ingresso. Temos uma área infantil supervisionada."
    },
    {
      question: "O que devo levar para o evento?",
      answer: "Recomendamos trazer sua cadeira ou esteira de praia, protetor solar, repelente e uma jaqueta leve para a noite. Também é possível alugar almofadas e cadeiras no local."
    },
    {
      question: "É permitido levar comida e bebida?",
      answer: "Não é permitido entrar com alimentos e bebidas, mas teremos uma praça de alimentação com diversas opções gastronômicas e bebidas a preços acessíveis."
    },
    {
      question: "Como funciona o estacionamento?",
      answer: "Temos estacionamento gratuito no local, com capacidade para 300 veículos. Recomendamos chegar cedo para garantir vaga."
    }
  ],
  mapCoordinates: {
    lat: -19.8278,
    lng: 34.8578
  }
};

// Componente principal da página de detalhes do evento
const EventDetails = ({ eventId, goToHome, goToEventDetails }) => {
  const [selectedTickets, setSelectedTickets] = useState({});
  const [expandedFAQs, setExpandedFAQs] = useState({});
  const [showAllDescription, setShowAllDescription] = useState(false);
  
  // Em uma aplicação real, buscaríamos os detalhes do evento pelo ID
  // Aqui, usamos os dados mockados diretamente
  const eventDetails = eventDetailsMock;
  
  // Função para alternar a expansão de uma pergunta do FAQ
  const toggleFAQ = (index) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Função para atualizar a quantidade de ingressos selecionados
  const updateTicketCount = (ticketId, action) => {
    setSelectedTickets((prev) => {
      const currentCount = prev[ticketId] || 0;
      const ticket = eventDetails.ticketTypes.find(t => t.id === ticketId);
      
      if (action === 'increase') {
        if (currentCount < ticket.maxPerPurchase && currentCount < ticket.available) {
          return { ...prev, [ticketId]: currentCount + 1 };
        }
      } else if (action === 'decrease') {
        if (currentCount > 0) {
          return { ...prev, [ticketId]: currentCount - 1 };
        }
      }
      
      return prev;
    });
  };
  
  // Calcular total da compra
  const calculateTotal = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = eventDetails.ticketTypes.find(t => t.id === parseInt(ticketId));
      return total + (ticket.price * quantity);
    }, 0);
  };
  
  // Verificar se algum ingresso foi selecionado
  const hasSelectedTickets = Object.values(selectedTickets).some(quantity => quantity > 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Breadcrumb e ações */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <button 
                onClick={goToHome}
                className="flex items-center hover:text-gray-700"
              >
                <ArrowLeft size={16} className="mr-1" />
                <span>Voltar</span>
              </button>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">{eventDetails.title}</span>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Share2 size={18} className="mr-1" />
                <span className="text-sm hidden sm:inline">Compartilhar</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Heart size={18} className="mr-1" />
                <span className="text-sm hidden sm:inline">Salvar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <main className="flex-grow pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid principal - Informações do evento e compra de ingressos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna de informações do evento */}
            <div className="lg:col-span-2 space-y-8">
              {/* Título e meta informações */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{eventDetails.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{eventDetails.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{eventDetails.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{eventDetails.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{eventDetails.organizer}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center text-amber-500">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1 font-semibold">{eventDetails.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{eventDetails.reviewCount} avaliações</span>
                </div>
              </div>
              
              {/* Galeria de imagens */}
              <EventImageGallery images={eventDetails.images} />
              
              {/* Descrição do evento */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Sobre este evento</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">{eventDetails.description}</p>
                  
                  {showAllDescription && (
                    <div className="mt-4 text-gray-600 whitespace-pre-line">
                      {eventDetails.longDescription}
                    </div>
                  )}
                  
                  <button 
                    onClick={() => setShowAllDescription(!showAllDescription)}
                    className="text-gray-800 font-medium flex items-center hover:text-gray-600 mt-2"
                  >
                    {showAllDescription ? 'Mostrar menos' : 'Ler mais'}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${showAllDescription ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
                {/* Destaques do evento */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Destaques</h3>
                  <ul className="space-y-2">
                    {eventDetails.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                        </div>
                        <span className="ml-3 text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Localização */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Localização</h2>
                <p className="text-gray-600 mb-4">{eventDetails.venue}</p>
                <p className="text-gray-600 mb-6">{eventDetails.address}</p>
                
                {/* Mapa */}
                <div className="h-72 bg-gray-100 rounded-lg overflow-hidden">
                  <EventLocationMap 
                    lat={eventDetails.mapCoordinates.lat} 
                    lng={eventDetails.mapCoordinates.lng} 
                    venueName={eventDetails.venue}
                  />
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Perguntas Frequentes</h2>
                <div className="divide-y divide-gray-200">
                  {eventDetails.faq.map((item, index) => (
                    <div key={index} className="py-4">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <span className="font-medium text-gray-900">{item.question}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-gray-500 transition-transform ${expandedFAQs[index] ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      {expandedFAQs[index] && (
                        <p className="mt-2 text-gray-600">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Coluna de compra de ingressos */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Ingressos</h2>
                
                {/* Tipos de ingressos */}
                <div className="space-y-4 mb-6">
                  {eventDetails.ticketTypes.map((ticket) => (
                    <EventTicketSelector 
                      key={ticket.id}
                      ticket={ticket}
                      quantity={selectedTickets[ticket.id] || 0}
                      onIncrease={() => updateTicketCount(ticket.id, 'increase')}
                      onDecrease={() => updateTicketCount(ticket.id, 'decrease')}
                    />
                  ))}
                </div>
                
                {/* Resumo da compra */}
                {hasSelectedTickets && (
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <div className="space-y-2 mb-4">
                      {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                        if (quantity <= 0) return null;
                        
                        const ticket = eventDetails.ticketTypes.find(t => t.id === parseInt(ticketId));
                        return (
                          <div key={ticketId} className="flex justify-between text-sm">
                            <span className="text-gray-600">{ticket.name} x {quantity}</span>
                            <span className="font-medium text-gray-900">{(ticket.price * quantity).toLocaleString()} {ticket.currency}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t border-gray-200">
                      <span>Total</span>
                      <span>{calculateTotal().toLocaleString()} MZN</span>
                    </div>
                  </div>
                )}
                
                {/* Botão de compra */}
                <button
                  disabled={!hasSelectedTickets}
                  className={`w-full py-3 px-4 rounded-lg font-medium mt-6 ${
                    hasSelectedTickets 
                      ? 'bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {hasSelectedTickets ? 'Comprar Ingressos' : 'Selecione um Ingresso'}
                </button>
                
                {/* Políticas */}
                <div className="mt-6 text-xs text-gray-500">
                  <p>Ao comprar, você concorda com os Termos de Serviço e Política de Privacidade do BeiraTix.</p>
                  <p className="mt-2">Os ingressos são válidos apenas para a data e horário especificados.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Eventos relacionados */}
          <div className="mt-12">
            <RelatedEvents 
              category={eventDetails.category} 
              currentEventId={eventDetails.id} 
              goToEventDetails={goToEventDetails}
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};


export default EventDetails;