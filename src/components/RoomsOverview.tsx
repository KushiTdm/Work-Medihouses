import { useEffect, useRef, useState } from 'react';
import { rooms } from '../data/rooms';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RoomsOverviewProps {
  onRoomClick: (roomId: number) => void;
}

export default function RoomsOverview({ onRoomClick }: RoomsOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
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

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, rooms.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section ref={sectionRef} id="rooms" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('rooms.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('rooms.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {rooms.length > itemsPerView && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                aria-label={t('rooms.previous')}
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all ${
                  currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                aria-label={t('rooms.next')}
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  className={`flex-shrink-0 px-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    width: `${100 / itemsPerView}%`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={room.imageUrl}
                        alt={`${room.name} - Hostal República Santiago - Habitación confortable y económica`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{room.descriptionShort}</p>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-red-600">${room.price.toLocaleString('es-CL')}</span>
                        <span className="text-gray-500 text-sm">{t('rooms.perNight')}</span>
                      </div>

                      <button
                        onClick={() => onRoomClick(room.id)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                      >
                        {t('rooms.viewDetails')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {rooms.length > itemsPerView && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-red-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`${t('rooms.next')} ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}