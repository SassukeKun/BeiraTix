// components/CategoryButton.jsx

const CategoryButton = ({ icon: Icon, label, active, onClick }) => {
    return (
      <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center space-y-2 px-4 py-3 rounded-xl transition-colors ${
          active 
            ? 'bg-gray-800 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
        } shadow-sm`}
      >
        <Icon size={20} />
        <span className="text-xs font-medium">{label}</span>
      </button>
    );
  };
  
  export default CategoryButton;