// components/PaymentSelection.jsx
import { Phone, CreditCard, Calendar } from "lucide-react";
import PaymentMethod from "./PaymentMethod";
import MPesaPayment from "./MPesaPayment";
import CardPayment from "./CardPayment";
import BankTransferPayment from "./BankTransferPayment";

const PaymentSelection = ({ 
  paymentMethod, 
  setPaymentMethod, 
  mpesaNumber, 
  setMpesaNumber,
  isMPesaPaymentValid 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Método de Pagamento</h2>
      <p className="text-gray-600 mb-6">
        Escolha como deseja pagar pelos seus ingressos.
      </p>
      
      <div className="space-y-4">
        <PaymentMethod
          id="mpesa"
          name="M-Pesa"
          description="Pagamento rápido via M-Pesa"
          icon={Phone}
          selected={paymentMethod === "mpesa"}
          onClick={() => setPaymentMethod("mpesa")}
        />
        
        <PaymentMethod
          id="card"
          name="Cartão de Crédito"
          description="Visa, Mastercard, American Express"
          icon={CreditCard}
          selected={paymentMethod === "card"}
          onClick={() => setPaymentMethod("card")}
        />
        
        <PaymentMethod
          id="bank"
          name="Transferência Bancária"
          description="Transferência bancária direta"
          icon={Calendar}
          selected={paymentMethod === "bank"}
          onClick={() => setPaymentMethod("bank")}
        />
      </div>
      
      {/* Formulário específico para o método de pagamento selecionado */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        {paymentMethod === "mpesa" && (
          <MPesaPayment 
            mpesaNumber={mpesaNumber}
            setMpesaNumber={setMpesaNumber}
            isValid={isMPesaPaymentValid()}
          />
        )}
        
        {paymentMethod === "card" && (
          <CardPayment />
        )}
        
        {paymentMethod === "bank" && (
          <BankTransferPayment />
        )}
      </div>
    </div>
  );
};

export default PaymentSelection;