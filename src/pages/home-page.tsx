// pages/Homepage.jsx
import { useState } from "react";

// Importando componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedEventsSection from "../components/FeaturedEventsSection";
import EventsGridSection from "../components/EventsGridSection";
import NewsletterSection from "../components/NewsletterSection";

// Importando dados mockados
import { eventsMock, featuredEventsMock } from "../data/mockData";

const Homepage = ({ goToHome, goToEventDetails }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Categorias */}
      <CategoriesSection 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      {/* Eventos em Destaque */}
      <FeaturedEventsSection 
        events={featuredEventsMock}
        goToEventDetails={goToEventDetails} 
      />
      
      {/* Lista de Eventos */}
      <EventsGridSection 
        events={eventsMock} 
        title="Próximos Eventos" 
        filterCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        goToEventDetails={goToEventDetails}
      />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Elementos decorativos */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/2 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Linhas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Estilos adicionais para animações */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Homepage;