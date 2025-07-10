// pages/TransactionHistory.jsx
import { useState, useEffect } from "react";
import React from "react";
import { 
  Calendar, 
  Clock, 
  Download, 
  Filter, 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock3, 
  Ticket, 
  ArrowLeft 
} from "lucide-react";

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dados mockados para transações
const transactionsMock = [
  {
    id: "TX-12345",
    eventId: 1,
    eventName: "Festival de Jazz na Praia",
    date: "2025-07-15",
    transactionDate: "2025-06-10T14:32:00",
    amount: 3700,
    currency: "MZN",
    status: "completed",
    paymentMethod: "mpesa",
    tickets: [
      { name: "Ingresso Padrão", quantity: 2, price: 1200 },
      { name: "Ingresso VIP", quantity: 1, price: 1300 }
    ]
  },
  {
    id: "TX-12346",
    eventId: 3,
    eventName: "Teatro Nacional: O Pescador",
    date: "2025-07-18",
    transactionDate: "2025-06-11T09:45:00",
    amount: 1600,
    currency: "MZN",
    status: "completed",
    paymentMethod: "card",
    tickets: [
      { name: "Ingresso Padrão", quantity: 2, price: 800 }
    ]
  },
  {
    id: "TX-12347",
    eventId: 5,
    eventName: "Festival de Cinema Moçambicano",
    date: "2025-08-01",
    transactionDate: "2025-06-15T16:20:00",
    amount: 700,
    currency: "MZN",
    status: "pending",
    paymentMethod: "bank",
    tickets: [
      { name: "Ingresso Diário", quantity: 2, price: 350 }
    ]
  },
  {
    id: "TX-12348",
    eventId: 4,
    eventName: "Concerto: Noites de Marrabenta",
    date: "2025-07-29",
    transactionDate: "2025-06-18T11:15:00",
    amount: 1400,
    currency: "MZN",
    status: "failed",
    paymentMethod: "mpesa",
    tickets: [
      { name: "Ingresso Padrão", quantity: 2, price: 700 }
    ]
  }
];

// Componente principal
const TransactionHistory = ({ goToHome, goToEventDetails }) => {
  // Estados
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedTransaction, setExpandedTransaction] = useState(null);

  // Simulação de carregamento de dados
  useEffect(() => {
    // Em uma aplicação real, buscaríamos os dados do backend
    const timer = setTimeout(() => {
      setTransactions(transactionsMock);
      setFilteredTransactions(transactionsMock);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Efeito para filtrar transações quando filtros ou pesquisa mudam
  useEffect(() => {
    let results = transactions;
    
    // Filtrar por termo de pesquisa
    if (searchTerm) {
      results = results.filter(
        transaction => 
          transaction.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por status
    if (statusFilter !== "all") {
      results = results.filter(transaction => transaction.status === statusFilter);
    }
    
    setFilteredTransactions(results);
  }, [searchTerm, statusFilter, transactions]);

  // Função para formatar data
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  // Função para formatar data e hora
  const formatDateTime = (dateTimeString) => {
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(dateTimeString).toLocaleDateString('pt-BR', options);
  };

  // Função para renderizar o ícone de status
  const renderStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={20} className="text-green-500" />;
      case "pending":
        return <Clock3 size={20} className="text-amber-500" />;
      case "failed":
        return <XCircle size={20} className="text-red-500" />;
      default:
        return null;
    }
  };

  // Função para obter o texto do status
  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "pending":
        return "Pendente";
      case "failed":
        return "Falhou";
      default:
        return status;
    }
  };

  // Função para obter a classe de cor com base no status
  const getStatusColorClass = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-amber-600 bg-amber-50";
      case "failed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  // Função para obter o texto do método de pagamento
  const getPaymentMethodText = (method) => {
    switch (method) {
      case "mpesa":
        return "M-Pesa";
      case "card":
        return "Cartão de Crédito";
      case "bank":
        return "Transferência Bancária";
      default:
        return method;
    }
  };

  // Função para expandir/colapsar detalhes da transação
  const toggleTransactionDetails = (id) => {
    if (expandedTransaction === id) {
      setExpandedTransaction(null);
    } else {
      setExpandedTransaction(id);
    }
  };

  // Função para baixar ingresso
  const handleDownloadTicket = (transaction) => {
    // Em uma aplicação real, aqui iríamos gerar ou baixar o PDF do ingresso
    console.log("Baixando ingressos para", transaction.id);
    alert(`Os ingressos para "${transaction.eventName}" seriam baixados aqui.`);
  };

  // Função para ir para os detalhes do evento
  const handleViewEvent = (eventId) => {
    goToEventDetails(eventId);
  };

  // Renderizar conteúdo principal
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
        </div>
      );
    }

    if (filteredTransactions.length === 0) {
      return (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Ticket size={28} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma transação encontrada</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter !== "all" 
              ? "Tente ajustar seus filtros para ver mais resultados." 
              : "Você ainda não realizou nenhuma compra. Explore eventos disponíveis para começar!"}
          </p>
          <button
            onClick={goToHome}
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Explorar Eventos
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Cabeçalho da transação */}
            <div 
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => toggleTransactionDetails(transaction.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {renderStatusIcon(transaction.status)}
                    <h3 className="text-lg font-semibold text-gray-900">{transaction.eventName}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>Evento: {formatDate(transaction.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>Compra: {formatDateTime(transaction.transactionDate)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-lg font-semibold text-gray-900">
                    {transaction.amount.toLocaleString()} {transaction.currency}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColorClass(transaction.status)}`}>
                    {getStatusText(transaction.status)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Detalhes expandidos */}
            {expandedTransaction === transaction.id && (
              <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100">
                <div className="space-y-4">
                  {/* Informações de pagamento */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Informações de Pagamento</h4>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">ID da Transação:</span>
                        <span className="text-gray-900 font-medium">{transaction.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Método de Pagamento:</span>
                        <span className="text-gray-900 font-medium">{getPaymentMethodText(transaction.paymentMethod)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Data:</span>
                        <span className="text-gray-900 font-medium">{formatDateTime(transaction.transactionDate)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detalhes dos ingressos */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Detalhes dos Ingressos</h4>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2">
                        {transaction.tickets.map((ticket, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{ticket.name} x {ticket.quantity}</span>
                            <span className="text-gray-900 font-medium">{(ticket.price * ticket.quantity).toLocaleString()} {transaction.currency}</span>
                          </div>
                        ))}
                        <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-medium">
                          <span>Total</span>
                          <span>{transaction.amount.toLocaleString()} {transaction.currency}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ações */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {transaction.status === "completed" && (
                      <button
                        onClick={() => handleDownloadTicket(transaction)}
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Download size={16} className="mr-2" />
                        Baixar Ingressos
                      </button>
                    )}
                    
                    <button
                      onClick={() => handleViewEvent(transaction.eventId)}
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Ver Evento
                    </button>
                    
                    {transaction.status === "failed" && (
                      <button
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Tentar Novamente
                      </button>
                    )}
                    
                    {transaction.status === "pending" && (
                      <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-800 rounded-lg">
                        <Clock3 size={16} className="mr-2" />
                        Aguardando confirmação
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header goToHome={goToHome} goToTransactionHistory={() => {}} />
      
      {/* Breadcrumb e título */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <button 
              onClick={goToHome}
              className="flex items-center hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={14} className="mr-1" />
              <span>Voltar</span>
            </button>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-900">Histórico de Transações</span>
          </div>
        </div>
      </div>
      
      {/* Conteúdo principal */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Histórico de Transações</h1>
            
            {/* Filtros e pesquisa */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent w-full"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent appearance-none w-full"
                >
                  <option value="all">Todos os status</option>
                  <option value="completed">Concluído</option>
                  <option value="pending">Pendente</option>
                  <option value="failed">Falhou</option>
                </select>
                <Filter size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Lista de transações */}
          {renderContent()}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TransactionHistory;