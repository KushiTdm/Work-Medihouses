import { useEffect, useState } from 'react';
import { rooms } from '../data/rooms';
import { ArrowLeft, Wifi, Snowflake, Tv, Eye, Check, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RoomDetailProps {
  roomId: number;
  onBack: () => void;
}

const amenityIcons: { [key: string]: JSX.Element } = {
  'Wifi gratuito': <Wifi className="h-5 w-5" />,
  'Free WiFi': <Wifi className="h-5 w-5" />,
  'Televisión con cable': <Tv className="h-5 w-5" />,
  'Cable TV': <Tv className="h-5 w-5" />,
  'Climatización': <Snowflake className="h-5 w-5" />,
  'Air conditioning': <Snowflake className="h-5 w-5" />,
  'Vista al jardín': <Eye className="h-5 w-5" />,
  'Garden view': <Eye className="h-5 w-5" />,
};

export default function RoomDetail({ roomId, onBack }: RoomDetailProps) {
  const room = rooms.find((r) => r.id === roomId);
  const { t, language } = useLanguage();
  
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Force la navbar à être en mode scrolled
    window.dispatchEvent(new Event('scroll'));
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">{t('roomDetail.notFound')}</p>
          <button
            onClick={onBack}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {t('roomDetail.backHome')}
          </button>
        </div>
      </div>
    );
  }

  // Calculer le nombre de nuits
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const nights = calculateNights();
  const totalPrice = nights * room.price;

  // Format date pour affichage
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-CL' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '56933903744';
    
    let message = '';
    
    // Si aucune date n'est sélectionnée, message basique
    if (!checkInDate || !checkOutDate || nights === 0) {
      if (language === 'es') {
        message = `Hola! Vengo desde su pagina web. Me interesa reservar la *${room.name}*`;
      } else {
        message = `Hello! I'm visiting from your website. I'm interested in booking the *${room.name}*`;
      }
    } else {
      // Message avec les dates
      if (language === 'es') {
        message = `Hola! Vengo desde su pagina web.

Me interesa reservar la *${room.name}*

FECHAS DE ESTADIA
- Check-in: ${formatDate(checkInDate)}
- Check-out: ${formatDate(checkOutDate)}
- Noches: ${nights}

PRECIO
- Precio por noche: ${room.price.toLocaleString('es-CL')}
- Total estadia: ${totalPrice.toLocaleString('es-CL')} (${nights} ${nights === 1 ? 'noche' : 'noches'})

Podrian confirmarme la disponibilidad para estas fechas?

Muchas gracias!`;
      } else {
        message = `Hello! I'm visiting from your website.

I'm interested in booking the *${room.name}*

STAY DATES
- Check-in: ${formatDate(checkInDate)}
- Check-out: ${formatDate(checkOutDate)}
- Nights: ${nights}

PRICE
- Price per night: ${room.price.toLocaleString('es-CL')}
- Total stay: ${totalPrice.toLocaleString('es-CL')} (${nights} ${nights === 1 ? 'night' : 'nights'})

Could you please confirm availability for these dates?

Thank you!`;
      }
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Date minimum = aujourd'hui
  const today = new Date().toISOString().split('T')[0];
  // Date minimum pour checkout = checkin + 1 jour
  const minCheckOut = checkInDate || today;

  // Translate amenities
  const translatedAmenities = room.amenities.map(amenity => {
    if (language === 'en') {
      const translations: { [key: string]: string } = {
        'Wifi gratuito': 'Free WiFi',
        'Televisión con cable': 'Cable TV',
        'Ropa de cama': 'Bed linen',
        'Toallas': 'Towels',
        'Elementos de aseo': 'Toiletries',
        'Limpieza diaria': 'Daily cleaning'
      };
      return translations[amenity] || amenity;
    }
    return amenity;
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('roomDetail.back')}
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image et description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={`${room.name} - Hostal República Santiago Chile`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">{room.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-3xl font-bold text-red-600">${room.price.toLocaleString('es-CL')}</span>
                    <span className="text-lg">/ {t('rooms.perNight')}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('roomDetail.description')}</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {language === 'es' ? room.descriptionLong : room.descriptionLongEn}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('roomDetail.amenities')}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {translatedAmenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="text-red-600 mr-3">
                          {amenityIcons[amenity] || <Check className="h-5 w-5" />}
                        </div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de réservation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-xl p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'es' ? 'Reserva tu estadía' : 'Book your stay'}
              </h3>

              {/* Sélection des dates */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={minCheckOut}
                    disabled={!checkInDate}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Résumé du prix */}
              {nights > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">
                      ${room.price.toLocaleString('es-CL')} × {nights} {nights === 1 ? (language === 'es' ? 'noche' : 'night') : (language === 'es' ? 'noches' : 'nights')}
                    </span>
                    <span className="font-semibold">${totalPrice.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-red-600">${totalPrice.toLocaleString('es-CL')}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bouton de réservation WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {language === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                {language === 'es' 
                  ? 'Te contactaremos para confirmar disponibilidad' 
                  : 'We will contact you to confirm availability'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}