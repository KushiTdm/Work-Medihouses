import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CallToAction() {
  const { t, language } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '56933903744';
    const messageEs = '¡Hola! Me gustaría obtener más información sobre las habitaciones disponibles en Hostal República.';
    const messageEn = 'Hello! I would like to get more information about the available rooms at Hostal República.';
    const message = encodeURIComponent(language === 'es' ? messageEs : messageEn);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('cta.whatsapp247')}</h3>
            <p className="text-gray-600 text-center mb-6">
              {t('cta.immediateResponse')}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              {t('cta.whatsapp')}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('cta.call')}</h3>
            <p className="text-gray-600 text-center mb-6">
              {t('cta.phoneService')}
            </p>
            <a 
              href="tel:+56933903744"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              +56 9 3390 3744
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Email contact */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Mail className="h-5 w-5 text-red-600" />
            <span className="font-medium">{t('cta.email')}:</span>
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
              className="text-red-600 hover:text-red-700 transition-colors underline"
            >
              stokcerpropiedades@hotmail.com
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}