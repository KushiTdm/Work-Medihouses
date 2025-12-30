// src/components/RoomDetail.tsx
import { useEffect } from 'react';
import { rooms } from '../data/rooms';
import { ArrowLeft, Wifi, Snowflake, Tv, Lock, Eye, Wind, Check } from 'lucide-react';

interface RoomDetailProps {
  roomId: number;
  onBack: () => void;
}

const amenityIcons: { [key: string]: JSX.Element } = {
  'Wi-Fi gratuit': <Wifi className="h-5 w-5" />,
  'Climatisation': <Snowflake className="h-5 w-5" />,
  'TV écran plat': <Tv className="h-5 w-5" />,
  'Coffre-fort': <Lock className="h-5 w-5" />,
  'Vue sur jardin': <Eye className="h-5 w-5" />,
  'Ventilateur': <Wind className="h-5 w-5" />,
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
          <p className="text-xl text-gray-600 mb-4">Chambre non trouvée</p>
          <button
            onClick={onBack}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '33612345678';
    const message = encodeURIComponent(
      `Bonjour, je souhaite réserver la chambre ${room.name} que j'ai vue sur votre site web. Quelle est la disponibilité ?`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-amber-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux chambres
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-96 overflow-hidden">
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">{room.name}</h1>
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-amber-600">{room.price}€</div>
                <div className="text-gray-500">par nuit</div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{room.descriptionLong}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Équipements</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <div className="text-amber-600 mr-3">
                      {amenityIcons[amenity] || <Check className="h-5 w-5" />}
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between bg-amber-50 p-6 rounded-lg">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Prêt à réserver cette chambre ?
                  </h3>
                  <p className="text-gray-600">
                    Contactez-nous directement via WhatsApp pour vérifier la disponibilité
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Réserver maintenant via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
