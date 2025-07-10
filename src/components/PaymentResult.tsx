// components/PaymentResult.jsx
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

const PaymentResult = ({ status, contactInfo, total, goToHome, onRetry, onChangeMethod }) => {
  // Renderizar o conteúdo com base no status do pagamento
  switch (status) {
    case "success":
      return (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-lg mx-auto">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h2>
          <p className="text-gray-600 mb-6">
            Seu pagamento foi processado com sucesso e seus ingressos foram reservados.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Detalhes da Transação</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Número da Transação: MP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p>Data: {new Date().toLocaleDateString()}</p>
              <p>Total: {total.toLocaleString()} MZN</p>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Enviamos uma confirmação e seus ingressos para <strong>{contactInfo.email}</strong>. Você também receberá um SMS de confirmação.
          </p>
          <div className="space-y-3">
            <button 
              onClick={goToHome}
              className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
            >
              Voltar para a Página Inicial
            </button>
            <button className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg border border-gray-300 transition-colors">
              Ver Meus Ingressos
            </button>
          </div>
        </div>
      );
    
    case "pending":
      return (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-lg mx-auto">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Info size={32} className="text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento em Processamento</h2>
          <p className="text-gray-600 mb-6">
            Seu pagamento está sendo processado. Isso pode levar alguns minutos.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Próximos Passos</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 ml-2">
              <li>Aguarde a confirmação do pagamento</li>
              <li>Você receberá um email quando o pagamento for confirmado</li>
              <li>Seus ingressos serão enviados automaticamente</li>
            </ol>
          </div>
          <p className="text-gray-600 mb-8">
            Não se preocupe, seus ingressos estão reservados. Em caso de problemas, entre em contato com nosso suporte.
          </p>
          <div className="space-y-3">
            <button 
              onClick={goToHome}
              className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
            >
              Voltar para a Página Inicial
            </button>
            <button className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg border border-gray-300 transition-colors">
              Verificar Status do Pagamento
            </button>
          </div>
        </div>
      );
    
    case "failed":
      return (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-lg mx-auto">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle size={32} className="text-red-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Falha no Pagamento</h2>
          <p className="text-gray-600 mb-6">
            Não foi possível processar seu pagamento. Por favor, verifique os dados e tente novamente.
          </p>
          <div className="bg-red-50 rounded-lg p-4 text-left mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Possíveis Motivos</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
              <li>Número de M-Pesa incorreto ou inválido</li>
              <li>Saldo insuficiente na conta</li>
              <li>Problemas temporários com o serviço de pagamento</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">
            Seus ingressos continuam reservados por um tempo limitado. Tente novamente antes que o tempo acabe.
          </p>
          <div className="space-y-3">
            <button 
              onClick={onRetry}
              className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
            >
              Tentar Novamente
            </button>
            <button 
              onClick={onChangeMethod}
              className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg border border-gray-300 transition-colors"
            >
              Mudar Método de Pagamento
            </button>
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default PaymentResult;