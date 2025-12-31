import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '56933903744';
    const message = encodeURIComponent(
      '¡Hola! 👋 Vi su página web y me interesa reservar una habitación en Hostal República.\n\n¿Podrían ayudarme? ¡Gracias! 😊'
    );
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
            ¿Listo para tu estadía en Santiago?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserva ahora y disfruta de nuestras habitaciones confortables en el corazón de Santiago
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">WhatsApp 24/7</h3>
            <p className="text-gray-600 text-center mb-6">
              Respuesta inmediata y atención personalizada
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Reservar por WhatsApp
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Llamar Ahora</h3>
            <p className="text-gray-600 text-center mb-6">
              Atención telefónica directa
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
            <span className="font-medium">Email:</span>
            <a 
              href="mailto:stokcerpropiedades@hotmail.com" 
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              stokcerpropiedades@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}