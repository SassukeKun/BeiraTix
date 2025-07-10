// components/Header.jsx
import { useState, useEffect } from "react";
import { Ticket, User, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Efeito para detectar scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-8 w-8 rounded bg-gray-700 text-gray-100">
              <Ticket size={18} />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Beira<span className="text-gray-400">Tix</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Eventos</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Calendário</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Locais</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Sobre</a>
          </nav>
          
          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <button className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors">
              <User size={16} />
              <span className="text-sm">Entrar</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Eventos</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Calendário</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Locais</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="#" className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              <User size={16} className="mr-2" />
              <span>Entrar</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;