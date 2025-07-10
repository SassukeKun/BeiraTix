// components/PaymentMethod.jsx
import { Check } from "lucide-react";

const PaymentMethod = ({ id, name, description, icon: Icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-start p-4 border rounded-lg transition-all cursor-pointer ${
        selected
          ? 'border-gray-800 bg-gray-50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex-shrink-0 mr-4">
        <div className={`h-6 w-6 rounded-full border flex items-center justify-center ${
          selected ? 'border-gray-800' : 'border-gray-300'
        }`}>
          {selected && <Check size={14} className="text-gray-800" />}
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <Icon size={20} className={`mr-2 ${selected ? 'text-gray-800' : 'text-gray-500'}`} />
          <h3 className={`font-medium ${selected ? 'text-gray-900' : 'text-gray-700'}`}>
            {name}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default PaymentMethod;