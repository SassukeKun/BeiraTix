// components/HeroSection.jsx
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Beira City" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/60 to-gray-900/90"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Descubra os melhores eventos na <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">Beira</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Compre ingressos para shows, teatro, esportes, workshops e muito mais na maior plataforma de eventos da região.
          </p>
          
          {/* Search Form */}
          <div className="bg-white p-1 rounded-xl shadow-xl flex flex-col md:flex-row">
            <div className="flex-grow flex items-center px-4 py-3">
              <Search className="text-gray-400 mr-2" size={20} />
              <input 
                type="text" 
                placeholder="Procurar eventos, artistas ou locais..." 
                className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
            <div className="md:w-36 p-1">
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg py-3 px-4 transition-colors duration-300">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1440,37.3L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;