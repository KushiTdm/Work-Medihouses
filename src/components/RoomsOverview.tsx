import { rooms } from '../data/rooms';
import { ArrowRight } from 'lucide-react';

interface RoomsOverviewProps {
  onRoomClick: (roomId: number) => void;
}

export default function RoomsOverview({ onRoomClick }: RoomsOverviewProps) {
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Chambres</h2>
          <p className="text-lg text-gray-600">
            Découvrez nos chambres confortables et accueillantes, adaptées à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{room.descriptionShort}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-amber-600">{room.price}€</span>
                  <span className="text-gray-500 text-sm">par nuit</span>
                </div>

                <button
                  onClick={() => onRoomClick(room.id)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  Voir les détails
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
