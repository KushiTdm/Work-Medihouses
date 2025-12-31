import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/Logo2.png" 
                alt="Medihouses Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.specialists')}
            </p>
            <p className="text-gray-300 text-sm mt-2">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-red-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-300 hover:text-red-400 transition-colors">
                  {t('nav.rooms')}
                </a>
              </li>
              <li>
                <a href="#cta" className="text-gray-300 hover:text-red-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">{t('location.address')}, {t('location.city')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <a href="tel:+56933903744" className="text-gray-300 hover:text-red-400 transition-colors">
                  +56 9 3390 3744
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-400 flex-shrink-0" />
                <button 
                  onClick={() => {
                    const email = 'stokcerpropiedades@hotmail.com';
                    const subject = language === 'es' 
                      ? 'Consulta sobre habitaciones - Hostal República'
                      : 'Room inquiry - Hostal República';
                    const body = language === 'es'
                      ? `Hola,

Vi su página web y me interesa reservar una habitación en Hostal República.

¡Muchas gracias!`
                      : `Hello,

I saw your website and I'm interested in booking a room at Hostal República.

Thank you!`;
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                  className="text-gray-300 hover:text-red-400 transition-colors text-left"
                >
                  stokcerpropiedades@hotmail.com
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
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
          <p>&copy; {new Date().getFullYear()} Medihouses - Hostal República. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}