import { useState } from "react";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Camera, Calendar, Menu, X, Ticket, User, Info, Phone, Mail, MapPin } from "lucide-react";

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg">
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
          </div>
        </div>
      )}
    </header>
  );
};

// Componente Footer
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

// Componente principal da aplicação
export default function AuthScreens() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Função para alternar entre login e registro
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setShowSuccess(false);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // Simulação de autenticação bem-sucedida
    setShowSuccess(true);
    
    // Resetar formulário após o envio
    if (!isLogin) {
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-24">
        <div className="w-full max-w-md">
          {/* Formas decorativas */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Logo e cabeçalho */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gray-800 text-white mb-4 shadow-lg transform transition-transform hover:scale-105">
              <Ticket size={28} className="transform -rotate-12" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Beira<span className="text-gray-500">Tix</span></h1>
            <p className="text-gray-600 mt-2 max-w-xs mx-auto">
              {isLogin ? "Acesse sua conta para comprar ingressos" : "Crie sua conta para começar"}
            </p>
          </div>
          
          {/* Cartão principal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 border border-gray-100 relative z-10 backdrop-blur-sm bg-opacity-80">
            {/* Título do formulário */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <User size={20} className="mr-2 text-gray-500" />
              {isLogin ? "Entrar" : "Criar conta"}
            </h2>
            
            {/* Alerta de sucesso */}
            {showSuccess && (
              <Alert className="mb-4 bg-gray-50 border-gray-200 text-gray-800">
                <AlertDescription>
                  {isLogin 
                    ? "Login realizado com sucesso! Redirecionando..." 
                    : "Conta criada com sucesso! Você já pode fazer login."}
                </AlertDescription>
              </Alert>
            )}
            
            {/* Formulário */}
            <div className="space-y-5">
              {/* Campo Nome (apenas no registro) */}
              {!isLogin && (
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition bg-gray-50"
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>
                </div>
              )}
              
              {/* Campo Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition bg-gray-50"
                    placeholder="Digite seu email"
                    required
                  />
                </div>
              </div>
              
              {/* Campo Senha */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition bg-gray-50"
                    placeholder={isLogin ? "Digite sua senha" : "Crie uma senha forte"}
                    required
                  />
                </div>
              </div>
              
              {/* Link para recuperação de senha (apenas no login) */}
              {isLogin && (
                <div className="text-right">
                  <button type="button" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                    Esqueceu sua senha?
                  </button>
                </div>
              )}
              
              {/* Botão de envio */}
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                {isLogin ? "Entrar" : "Criar conta"}
              </button>
            </div>
            
            {/* Separador */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">ou continue com</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            {/* Botões de autenticação social */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
            
            {/* Link para alternar entre login e registro */}
            <div className="text-center mt-6">
              <button 
                type="button" 
                onClick={toggleAuthMode}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {isLogin 
                  ? "Não tem uma conta? Registre-se" 
                  : "Já tem uma conta? Faça login"}
              </button>
            </div>
            
            {/* Mensagem de segurança */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Info size={14} className="mr-1" />
                <span>Seus dados estão protegidos e seguros</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
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
}