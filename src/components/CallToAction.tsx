import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '56933903744';
    const message = encodeURIComponent(
      '¡Hola! Me gustaría reservar una habitación en Hostal República. ¿Podrían ayudarme con la disponibilidad?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tu estadía en Santiago?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Reserva ahora y disfruta de nuestras habitaciones confortables en el corazón de Santiago. 
            ¡Te esperamos con la mejor atención!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Reservar por WhatsApp
            </button>

            
            <a href="tel:+56933903744"
              className="bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 text-lg"
            >
              <Phone className="h-6 w-6" />
              Llamar Ahora
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <MessageCircle className="h-10 w-10 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp 24/7</h3>
              <p className="text-red-100 text-sm">Respuesta inmediata</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-10 w-10 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Atención Telefónica</h3>
              <p className="text-red-100 text-sm">+56 9 3390 3744</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-10 w-10 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-red-100 text-sm">stokcerpropiedades@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}