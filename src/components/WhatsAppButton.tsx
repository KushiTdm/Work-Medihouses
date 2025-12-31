import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { t, language } = useLanguage();

  const handleClick = () => {
    const phoneNumber = '56933903744';
    const messageEs = '¡Hola! Me gustaría obtener más información sobre las habitaciones disponibles en Hostal República.';
    const messageEn = 'Hello! I would like to get more information about the available rooms at Hostal República.';
    const message = encodeURIComponent(language === 'es' ? messageEs : messageEn);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      {isHovered && (
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg">
          {t('whatsapp.tooltip')}
        </span>
      )}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
        1
      </span>
    </button>
  );
}