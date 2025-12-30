import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hostal Paradis</h3>
            <p className="text-gray-300 text-sm">
              Votre refuge de confort et d'authenticité au cœur de la ville.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Nos Chambres
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">123 Rue du Paradis, 75001 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <a href="tel:+33612345678" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@hostalparadis.fr" className="text-gray-300 hover:text-amber-400 transition-colors">
                  contact@hostalparadis.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hostal Paradis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
