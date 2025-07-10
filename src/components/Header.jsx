// components/Header.jsx
import React, { useState } from "react";
import { Ticket, Menu, X, User, ClipboardList } from "lucide-react";

const Header = ({ goToHome, goToTransactionHistory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goToHome}>
            <div className="flex items-center justify-center h-10 w-10 rounded bg-gray-700 text-gray-100">
              <Ticket size={20} />
            </div>
            <span className="ml-2 font-bold text-xl tracking-tight">Beira<span className="text-gray-400">Tix</span></span>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={goToHome}>Eventos</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendário</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Locais</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
          </nav>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {goToTransactionHistory && (
              <button 
                onClick={goToTransactionHistory}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <ClipboardList size={16} className="mr-1" />
                <span>Minhas Compras</span>
              </button>
            )}
            <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full">
              <User size={20} />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={goToHome} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Eventos</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Calendário</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Locais</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            {goToTransactionHistory && (
              <a 
                href="#" 
                onClick={goToTransactionHistory}
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
              >
                <ClipboardList size={16} className="mr-1" />
                <span>Minhas Compras</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;