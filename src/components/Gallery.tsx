import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: '/between-doors.png',
    title: 'Habitación Doble Estándar',
    description: 'Ambiente acogedor y confortable'
  },
  {
    url: '/common-area.png',
    title: 'Common area',
    description: 'Perfecta para viajeros solos'
  },
  {
    url: '/entrance.png',
    title: 'Entrance',
    description: 'Ideal para amigos'
  },
   {
    url: '/kitchen.jpeg',
    title: 'Kitchen',
    description: 'Vista exterior del Hostal República'
  }
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section ref={sectionRef} id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Fotos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras instalaciones y habitaciones
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-6xl max-h-[90vh] mx-auto px-4">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="text-center text-white mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {galleryImages[selectedImage].description}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}