// src/components/RoomDetail.tsx
import { useEffect } from 'react';
import { rooms } from '../data/rooms';
import { ArrowLeft, Wifi, Snowflake, Tv, Eye, Check } from 'lucide-react';

interface RoomDetailProps {
  roomId: number;
  onBack: () => void;
}

const amenityIcons: { [key: string]: JSX.Element } = {
  'Wifi gratuito': <Wifi className="h-5 w-5" />,
  'Televisión con cable': <Tv className="h-5 w-5" />,
  'Climatización': <Snowflake className="h-5 w-5" />,
  'Vista al jardín': <Eye className="h-5 w-5" />,
};

export default function RoomDetail({ roomId, onBack }: RoomDetailProps) {
  const room = rooms.find((r) => r.id === roomId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Habitación no encontrada</p>
          <button
            onClick={onBack}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '56933903744';
    const message = encodeURIComponent(
      room.whatsappMessage || `Hola, me gustaría reservar la ${room.name}. ¿Podrían confirmarme disponibilidad?`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a las habitaciones
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-96 overflow-hidden">
            <img
              src={room.imageUrl}
              alt={`${room.name} - Hostal República Santiago Chile - Habitación confortable con servicios incluidos`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">{room.name}</h1>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-red-600">${room.price.toLocaleString('es-CL')}</div>
                <div className="text-gray-500">por noche</div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{room.descriptionLong}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servicios Incluidos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
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

            <div className="border-t pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between bg-red-50 p-6 rounded-lg">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    ¿Listo para reservar esta habitación?
                  </h3>
                  <p className="text-gray-600">
                    Contáctanos directamente vía WhatsApp para verificar disponibilidad
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Reservar ahora vía WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}