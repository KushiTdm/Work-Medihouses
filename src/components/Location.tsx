import { useEffect, useRef, useState } from 'react';
import { MapPin, Train, Bus, ShoppingBag, Coffee, Utensils, Building2 } from 'lucide-react';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const attractions = [
    {
      icon: <Building2 className="h-5 w-5" />,
      text: "Plaza principal de la ciudad",
      distance: "5 minutos caminando"
    },
    {
      icon: <Utensils className="h-5 w-5" />,
      text: "Zona comercial y gastronómica",
      distance: "3 minutos caminando"
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      text: "Costanera / paseo costero",
      distance: "10 minutos caminando"
    },
    {
      icon: <Train className="h-5 w-5" />,
      text: "Metro República",
      distance: "2 minutos caminando"
    }
  ];

  const transport = [
    {
      icon: <Train className="h-6 w-6" />,
      title: "Estación de Metro",
      description: "Eje principal de transporte a 5 minutos caminando"
    },
    {
      icon: <Bus className="h-6 w-6" />,
      title: "Transporte Público",
      description: "Paradas de locomoción colectiva a 2 minutos"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Cultura y Ocio",
      description: "Museos y puntos históricos a 5-10 minutos"
    }
  ];

  return (
    <section ref={sectionRef} id="location" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ubicación Perfecta
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro hostal se encuentra en un sector tranquilo y de fácil acceso, con excelente conectividad
          </p>
        </div>

        {/* Address Card */}
        <div 
          className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-xl p-8 md:p-10 border border-red-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-red-600 rounded-full p-4 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Hostal República</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-lg">Abdón Cifuentes 73</p>
                  <p className="text-gray-600">Santiago, Chile</p>
                  <p className="text-gray-600">Código postal: 8320200</p>
                </div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                <p className="text-sm text-gray-500">Zona segura</p>
                <p className="text-lg font-bold text-red-600">★ 4.8/5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div 
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sobre la Zona</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              La ubicación permite un rápido desplazamiento hacia el centro de la ciudad, servicios
              esenciales, comercio local, restaurantes y transporte público, lo que facilita recorrer los
              principales puntos de interés sin complicaciones.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Es una zona segura y agradable, perfecta tanto para viajeros que desean descansar como para
              quienes necesitan movilizarse con rapidez por motivos de trabajo o turismo.
            </p>
          </div>
        </div>

        {/* Attractions */}
        <div 
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Atracciones Cercanas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-lg p-3 text-red-600 flex-shrink-0">
                    {attraction.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">{attraction.text}</p>
                    <p className="text-sm text-gray-500">{attraction.distance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Options */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Transporte y Movilidad
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {transport.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1400 + index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 mb-6 shadow-lg transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100'
                }`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder with CTA */}
        <div 
          className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '1800ms' }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 text-center text-white">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">¿Necesitas indicaciones?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Estamos ubicados en el corazón de Santiago, con fácil acceso desde cualquier punto de la ciudad
            </p>
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Abdón+Cifuentes+73,+Santiago,+Chile', '_blank')}
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Ver en Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}