import { useEffect, useRef, useState } from 'react';
import { Heart, MapPin, Users } from 'lucide-react';

export default function Presentation() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Una Experiencia Única</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hostal República te ofrece mucho más que un simple alojamiento. Disfruta de una atmósfera cálida
            y acogedora, donde cada detalle ha sido pensado para tu comodidad y bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className={`text-center p-6 rounded-lg hover:shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Acogida Cálida</h3>
            <p className="text-gray-600">
              Nuestro equipo dedicado te recibe con una sonrisa y te acompaña durante toda tu estadía.
            </p>
          </div>

          <div 
            className={`text-center p-6 rounded-lg hover:shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ubicación Ideal</h3>
            <p className="text-gray-600">
              Ubicado en Abdón Cifuentes 73, en un sector tranquilo y de fácil acceso con excelente conectividad.
            </p>
          </div>

          <div 
            className={`text-center p-6 rounded-lg hover:shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambiente Acogedor</h3>
            <p className="text-gray-600">
              Perfecto tanto para viajeros que buscan descansar como para quienes necesitan movilizarse por trabajo o turismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}