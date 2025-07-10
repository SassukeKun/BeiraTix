// components/EventImageGallery.jsx
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const EventImageGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  // Função para abrir o lightbox
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
    // Desabilitar o scroll quando o lightbox estiver aberto
    document.body.style.overflow = 'hidden';
  };
  
  // Função para fechar o lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    // Habilitar o scroll novamente
    document.body.style.overflow = 'auto';
  };
  
  // Navegar para a imagem anterior no lightbox
  const prevImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  // Navegar para a próxima imagem no lightbox
  const nextImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % images.length);
  };
  
  // Lidar com as teclas do teclado no lightbox
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };
  
  // Adicionar event listener para teclas quando o lightbox estiver aberto
  if (lightboxOpen) {
    window.addEventListener('keydown', handleKeyDown);
  } else {
    window.removeEventListener('keydown', handleKeyDown);
  }
  
  return (
    <div className="relative">
      {/* Grid de imagens */}
      <div className="grid grid-cols-12 gap-2 h-[400px]">
        {/* Imagem principal */}
        <div className="col-span-12 md:col-span-8 h-full">
          <div 
            className="relative h-full overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openLightbox(activeImage)}
          >
            <img 
              src={images[activeImage]} 
              alt="Imagem do evento" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-50 rounded-lg">
                Ver todas as fotos
              </span>
            </div>
          </div>
        </div>
        
        {/* Imagens secundárias (apenas em telas médias e grandes) */}
        <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-2 h-full">
          {images.slice(1, 3).map((image, index) => (
            <div 
              key={index + 1} 
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <img 
                src={image} 
                alt={`Imagem do evento ${index + 2}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Miniaturas */}
      <div className="flex space-x-2 mt-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`flex-shrink-0 h-16 w-16 rounded-md overflow-hidden transition-opacity ${
              activeImage === index ? 'ring-2 ring-gray-800' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img 
              src={image} 
              alt={`Miniatura ${index + 1}`} 
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="w-full max-w-5xl max-h-screen p-4">
            <img 
              src={images[lightboxImageIndex]} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            
            <div className="flex justify-center mt-4">
              <p className="text-white text-sm">
                {lightboxImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventImageGallery;