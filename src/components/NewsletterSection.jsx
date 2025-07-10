// components/NewsletterSection.jsx
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900">
        {/* Formas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-6">
            <Mail size={28} />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Fique por dentro dos melhores eventos</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Receba novidades sobre eventos, promoções exclusivas e ofertas especiais diretamente no seu email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Seu email" 
              className="flex-grow px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors">
              Inscrever-se
            </button>
          </div>
          
          <p className="text-gray-400 mt-4 text-sm">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;