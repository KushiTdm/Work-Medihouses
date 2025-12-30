import { Heart, MapPin, Users } from 'lucide-react';

export default function Presentation() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Une Expérience Unique</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            L'Hostal Paradis vous offre bien plus qu'un simple hébergement. Profitez d'une atmosphère chaleureuse
            et conviviale, où chaque détail a été pensé pour votre confort et votre bien-être.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accueil Chaleureux</h3>
            <p className="text-gray-600">
              Notre équipe dévouée vous accueille avec le sourire et vous accompagne tout au long de votre séjour.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emplacement Idéal</h3>
            <p className="text-gray-600">
              Situé au cœur de la ville, à proximité des attractions principales et des transports en commun.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambiance Conviviale</h3>
            <p className="text-gray-600">
              Rencontrez d'autres voyageurs et créez des souvenirs inoubliables dans nos espaces communs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
