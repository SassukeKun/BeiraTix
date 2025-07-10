// components/ContactForm.jsx

const ContactForm = ({ contactInfo, setContactInfo, isAgreedToTerms, setIsAgreedToTerms }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h2>
        <p className="text-gray-600 mb-6">
          Precisamos de seus dados para enviar os ingressos e informações importantes sobre o evento.
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              value={contactInfo.name}
              onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition"
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition"
              placeholder="Digite seu email"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Enviaremos seus ingressos e confirmação para este email.
            </p>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition"
              placeholder="Digite seu número de telefone"
              required
            />
          </div>
          
          <div className="pt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAgreedToTerms}
                onChange={(e) => setIsAgreedToTerms(e.target.checked)}
                className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Concordo com os <a href="#" className="text-gray-800 underline">Termos de Serviço</a> e <a href="#" className="text-gray-800 underline">Política de Privacidade</a>.
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;