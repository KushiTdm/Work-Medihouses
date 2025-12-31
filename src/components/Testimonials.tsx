import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos R.",
    text: "Muy buena ubicación y fácil acceso. El sistema de entrada con código es práctico y seguro. Todo funcionaba perfecto durante la estadía.",
    rating: 5
  },
  {
    name: "Andrea L.",
    text: "El lugar es acogedor y está bien equipado. La cama es muy cómoda y la limpieza impecable. La atención fue rápida y cordial.",
    rating: 5
  },
  {
    name: "Javier M.",
    text: "Una muy buena experiencia. Espacios amplios, buena iluminación y un ambiente silencioso. Relación precio–calidad excelente.",
    rating: 5
  },
  {
    name: "Paula S.",
    text: "Me sentí muy cómoda y segura durante mi estadía. Todo estaba tal como se describe, limpio y bien cuidado. Recomendado 100%",
    rating: 5
  }
];

export default function Testimonials() {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Huéspedes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros visitantes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-gray-800 font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}