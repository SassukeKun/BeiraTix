// components/PaymentResult.jsx
import { useState } from "react";
import React from "react";
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Shield, 
  ArrowRight, 
  Download
} from "lucide-react";

// Components UI
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Componente principal
const PaymentResult = ({ 
  status, 
  paymentData, 
  onGoHome, 
  onRetry,
  onViewTickets 
}) => {
  // Renderizar conteúdo com base no status
  const renderContent = () => {
    switch (status) {
      case "success":
        return renderSuccessContent();
      case "pending":
        return renderPendingContent();
      case "failed":
        return renderFailedContent();
      default:
        return null;
    }
  };

  // Conteúdo para pagamento bem-sucedido
  const renderSuccessContent = () => {
    return (
      <>
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-green-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h2>
        <p className="text-gray-600 mb-6">
          Seu pagamento foi processado com sucesso e seus ingressos foram reservados.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Detalhes da Transação</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Número da Transação: {paymentData.transactionId}</p>
            <p>Data: {new Date(paymentData.timestamp).toLocaleDateString()}</p>
            <p>Total: {paymentData.total.toLocaleString()} MZN</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8">
          Enviamos uma confirmação e seus ingressos para <strong>{paymentData.contactInfo.email}</strong>. 
          Você também receberá um SMS de confirmação no número {paymentData.contactInfo.phone}.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={onGoHome}
            className="w-full py-3"
          >
            Voltar para a Página Inicial
          </Button>
          
          {onViewTickets && (
            <Button
              variant="outline"
              onClick={onViewTickets}
              className="w-full py-3"
            >
              <Download size={16} className="mr-2" />
              Ver Meus Ingressos
            </Button>
          )}
        </div>
      </>
    );
  };

  // Conteúdo para pagamento pendente
  const renderPendingContent = () => {
    return (
      <>
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <Info size={40} className="text-blue-600" />
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
          <Button 
            onClick={onGoHome}
            className="w-full py-3"
          >
            Voltar para a Página Inicial
          </Button>
          <Button
            variant="outline"
            className="w-full py-3"
          >
            Verificar Status do Pagamento
          </Button>
        </div>
      </>
    );
  };

  // Conteúdo para pagamento com falha
  const renderFailedContent = () => {
    return (
      <>
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle size={40} className="text-red-600" />
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
            <li>Dados do cartão inválidos ou expirados</li>
          </ul>
        </div>
        
        <p className="text-gray-600 mb-8">
          Seus ingressos continuam reservados por um tempo limitado. Tente novamente antes que o tempo acabe.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={onRetry}
            className="w-full py-3"
          >
            Tentar Novamente
          </Button>
          <Button
            variant="outline"
            onClick={onGoHome}
            className="w-full py-3"
          >
            Voltar para a Página Inicial
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-lg mx-auto">
      {renderContent()}
      
      {/* Segurança */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center text-xs text-gray-500">
          <Shield size={14} className="mr-1" />
          <span>Transação segura e criptografada</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;