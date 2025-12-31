import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

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

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-100">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg sm:text-xl mb-6 italic text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-gray-800 font-semibold text-center text-lg">
                      — {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}