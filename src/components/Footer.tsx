// components/Footer.jsx
import { MapPin, Phone, Mail, Ticket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center h-8 w-8 rounded bg-gray-700 text-gray-100">
                <Ticket size={18} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Beira<span className="text-gray-400">Tix</span></span>
            </div>
            <p className="text-sm leading-relaxed">
              A sua plataforma de ingressos para os melhores eventos na cidade da Beira. Encontre shows, teatro, esportes e muito mais.
            </p>
          </div>
          
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calendário</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Locais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Coluna 3 - Ajuda */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reembolsos</a></li>
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Av. Principal, Beira, Moçambique</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} />
                <span>contato@beiratix.mz</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 BeiraTix. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195c-.897-.958-2.178-1.555-3.593-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.122-4.092-.207-7.72-2.165-10.149-5.145-.424.727-.666 1.573-.666 2.476 0 1.71.87 3.213 2.188 4.098a4.885 4.885 0 01-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.962 4.962 0 01-2.223.085c.627 1.953 2.445 3.377 4.6 3.417-1.685 1.321-3.808 2.105-6.114 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.767 2.212 7.548 2.212 9.057 0 14.01-7.503 14.01-14.01 0-.214-.005-.428-.014-.64.961-.693 1.797-1.558 2.457-2.549l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;