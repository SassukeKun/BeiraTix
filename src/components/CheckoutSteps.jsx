// components/CheckoutSteps.jsx
import { Check } from "lucide-react";

const CheckoutSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Informações" },
    { id: 2, name: "Pagamento" },
    { id: 3, name: "Confirmação" }
  ];
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            {/* Linha conectora */}
            {index > 0 && (
              <div 
                className={`absolute left-0 right-0 h-1 -translate-y-4 mx-auto ${
                  currentStep > index ? 'bg-gray-800' : 'bg-gray-200'
                }`}
                style={{ width: `${100 / (steps.length - 1)}%`, transform: `translateX(${-50 + 100 * (index - 0.5) / (steps.length - 1)}%)` }}
              ></div>
            )}
            
            {/* Círculo do passo */}
            <div 
              className={`relative z-10 flex items-center justify-center h-10 w-10 rounded-full border-2 ${
                currentStep > step.id
                  ? 'bg-gray-800 border-gray-800 text-white'
                  : currentStep === step.id
                    ? 'bg-white border-gray-800 text-gray-800'
                    : 'bg-white border-gray-200 text-gray-400'
              }`}
            >
              {currentStep > step.id ? (
                <Check size={18} />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>
            
            {/* Nome do passo */}
            <div className="mt-2 text-sm font-medium text-gray-900">
              {step.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;