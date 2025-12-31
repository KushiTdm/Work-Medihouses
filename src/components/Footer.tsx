import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Medihouses</h3>
            <p className="text-gray-300 text-sm">
              Especialistas en departamentos amoblados
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Hostal República - Tu hogar en Santiago
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-red-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-red-400 transition-colors">
                  Nuestras Habitaciones
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-red-400 transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">Abdón Cifuentes 73, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <a href="tel:+56933903744" className="text-gray-300 hover:text-red-400 transition-colors">
                  +56 9 3390 3744
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <a href="mailto:stokcerpropiedades@hotmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
                  stokcerpropiedades@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100092710350126"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/medihouses.deptoamoblados/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Medihouses - Hostal República. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}