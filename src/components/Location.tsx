import { useEffect, useRef, useState } from 'react';
import { MapPin, Train, Utensils, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nearbyAttractions = [
    {
      icon: <Train className="h-6 w-6" />,
      name: t('location.metro'),
      distance: t('location.walking2')
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      name: t('location.commercial').split(' ')[0] + ' ' + t('location.commercial').split(' ')[1],
      distance: t('location.walking3')
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      name: t('location.commercial'),
      distance: t('location.walking5')
    }
  ];

  return (
    <section ref={sectionRef} id="location" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('location.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('location.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Map Section */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] bg-gray-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5!2d-70.6693!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwNDAnMDkuNSJX!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Hostal República"
                ></iframe>
              </div>
              <div className="p-6 text-center bg-gradient-to-br from-red-50 to-white">
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Abdón+Cifuentes+73,+Santiago,+Chile', '_blank')}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  <MapPin className="h-5 w-5" />
                  {t('location.viewOnMaps')}
                </button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('location.hostalName')}</h3>
                  <p className="text-gray-700 font-semibold">{t('location.address')}</p>
                  <p className="text-gray-600">{t('location.city')}</p>
                  <p className="text-gray-600">{t('location.postalCode')}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 leading-relaxed">
                  {t('location.description1')}
                </p>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t('location.nearbyAttractions')}</h3>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    <div className="bg-white rounded-lg p-3 text-red-600 shadow-sm">
                      {attraction.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{attraction.name}</p>
                      <p className="text-sm text-gray-600">{attraction.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}