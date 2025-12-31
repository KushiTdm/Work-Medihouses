import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.location': 'Ubicación',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',

    // Hero
    'hero.title': 'Bienvenido a Hostal República',
    'hero.subtitle': 'Tu hogar en Santiago de Chile',
    'hero.cta': 'Descubrir nuestras habitaciones',

    // Presentation
    'presentation.title': 'Una Experiencia Única',
    'presentation.description': 'Hostal República te ofrece mucho más que un simple alojamiento. Disfruta de una atmósfera cálida y acogedora, donde cada detalle ha sido pensado para tu comodidad y bienestar.',
    'presentation.warmth.title': 'Acogida Cálida',
    'presentation.warmth.description': 'Nuestro equipo dedicado te recibe con una sonrisa y te acompaña durante toda tu estadía.',
    'presentation.location.title': 'Ubicación Ideal',
    'presentation.location.description': 'Ubicado en Abdón Cifuentes 73, en un sector tranquilo y de fácil acceso con excelente conectividad.',
    'presentation.atmosphere.title': 'Ambiente Acogedor',
    'presentation.atmosphere.description': 'Perfecto tanto para viajeros que buscan descansar como para quienes necesitan movilizarse por trabajo o turismo.',

    // Rooms
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.subtitle': 'Descubre nuestras habitaciones confortables y acogedoras, adaptadas a todas tus necesidades',
    'rooms.perNight': 'por noche',
    'rooms.viewDetails': 'Ver los detalles',
    'rooms.previous': 'Anterior',
    'rooms.next': 'Siguiente',

    // Room Detail
    'roomDetail.back': 'Volver a las habitaciones',
    'roomDetail.description': 'Descripción',
    'roomDetail.amenities': 'Servicios Incluidos',
    'roomDetail.ready': '¿Listo para reservar esta habitación?',
    'roomDetail.contact': 'Contáctanos directamente vía WhatsApp para verificar disponibilidad',
    'roomDetail.bookNow': 'Reservar ahora vía WhatsApp',
    'roomDetail.notFound': 'Habitación no encontrada',
    'roomDetail.backHome': 'Volver al inicio',

    // Gallery
    'gallery.title': 'Galería de Fotos',
    'gallery.subtitle': 'Descubre nuestras instalaciones y habitaciones',

    // Location
    'location.title': 'Ubicación Perfecta',
    'location.subtitle': 'Nuestro hostal se encuentra en un sector tranquilo y de fácil acceso, con excelente conectividad',
    'location.hostalName': 'Hostal República',
    'location.address': 'Abdón Cifuentes 73',
    'location.city': 'Santiago, Chile',
    'location.postalCode': 'Código postal: 8320200',
    'location.safeZone': 'Zona segura',
    'location.aboutZone': 'Sobre la Zona',
    'location.description1': 'La ubicación permite un rápido desplazamiento hacia el centro de la ciudad, servicios esenciales, comercio local, restaurantes y transporte público, lo que facilita recorrer los principales puntos de interés sin complicaciones.',
    'location.description2': 'Es una zona segura y agradable, perfecta tanto para viajeros que desean descansar como para quienes necesitan movilizarse con rapidez por motivos de trabajo o turismo.',
    'location.nearbyAttractions': 'Atracciones Cercanas',
    'location.mainSquare': 'Plaza principal de la ciudad',
    'location.commercial': 'Zona comercial y gastronómica',
    'location.coastal': 'Costanera / paseo costero',
    'location.metro': 'Metro República',
    'location.walking5': '5 minutos caminando',
    'location.walking3': '3 minutos caminando',
    'location.walking10': '10 minutos caminando',
    'location.walking2': '2 minutos caminando',
    'location.transport': 'Transporte y Movilidad',
    'location.metroStation': 'Estación de Metro',
    'location.metroDesc': 'Eje principal de transporte a 5 minutos caminando',
    'location.publicTransport': 'Transporte Público',
    'location.publicTransportDesc': 'Paradas de locomoción colectiva a 2 minutos',
    'location.culture': 'Cultura y Ocio',
    'location.cultureDesc': 'Museos y puntos históricos a 5-10 minutos',
    'location.needDirections': '¿Necesitas indicaciones?',
    'location.directionsDesc': 'Estamos ubicados en el corazón de Santiago, con fácil acceso desde cualquier punto de la ciudad',
    'location.viewOnMaps': 'Ver en Google Maps',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Huéspedes',
    'testimonials.subtitle': 'La satisfacción de nuestros visitantes es nuestra mejor carta de presentación',

    // CTA
    'cta.title': '¿Listo para tu estadía en Santiago?',
    'cta.subtitle': 'Reserva ahora y disfruta de nuestras habitaciones confortables en el corazón de Santiago. ¡Te esperamos con la mejor atención!',
    'cta.whatsapp': 'Reservar por WhatsApp',
    'cta.call': 'Llamar Ahora',
    'cta.whatsapp247': 'WhatsApp 24/7',
    'cta.immediateResponse': 'Respuesta inmediata',
    'cta.phoneService': 'Atención Telefónica',
    'cta.email': 'Email',

    // WhatsApp Button
    'whatsapp.tooltip': '¡Reserva por WhatsApp!',

    // Footer
    'footer.specialists': 'Especialistas en departamentos amoblados',
    'footer.tagline': 'Hostal República - Tu hogar en Santiago',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',

    // Amenities
    'amenity.wifi': 'Wifi gratuito',
    'amenity.tv': 'Televisión con cable',
    'amenity.bedding': 'Ropa de cama',
    'amenity.towels': 'Toallas',
    'amenity.toiletries': 'Elementos de aseo',
    'amenity.cleaning': 'Limpieza diaria',

    // Room Names
    'room.doubleStandard': 'Habitación Doble Estándar',
    'room.singleEconomic': 'Habitación Individual Económica',
    'room.doubleSeparate': 'Habitación Doble con Camas Separadas',
    'room.tripleStandard': 'Habitación Triple Estándar',
    'room.triple': 'Habitación Triple',
    'room.quadruple': 'Habitación Cuádruple',
    'room.suite': 'Suite del Hostal',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    // Hero
    'hero.title': 'Welcome to Hostal República',
    'hero.subtitle': 'Your home in Santiago de Chile',
    'hero.cta': 'Discover our rooms',

    // Presentation
    'presentation.title': 'A Unique Experience',
    'presentation.description': 'Hostal República offers you much more than simple accommodation. Enjoy a warm and welcoming atmosphere, where every detail has been designed for your comfort and well-being.',
    'presentation.warmth.title': 'Warm Welcome',
    'presentation.warmth.description': 'Our dedicated team welcomes you with a smile and accompanies you throughout your stay.',
    'presentation.location.title': 'Ideal Location',
    'presentation.location.description': 'Located at Abdón Cifuentes 73, in a quiet and easily accessible area with excellent connectivity.',
    'presentation.atmosphere.title': 'Cozy Atmosphere',
    'presentation.atmosphere.description': 'Perfect for travelers looking to rest or those who need to move around for work or tourism.',

    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Discover our comfortable and cozy rooms, adapted to all your needs',
    'rooms.perNight': 'per night',
    'rooms.viewDetails': 'View details',
    'rooms.previous': 'Previous',
    'rooms.next': 'Next',

    // Room Detail
    'roomDetail.back': 'Back to rooms',
    'roomDetail.description': 'Description',
    'roomDetail.amenities': 'Included Services',
    'roomDetail.ready': 'Ready to book this room?',
    'roomDetail.contact': 'Contact us directly via WhatsApp to check availability',
    'roomDetail.bookNow': 'Book now via WhatsApp',
    'roomDetail.notFound': 'Room not found',
    'roomDetail.backHome': 'Back to home',

    // Gallery
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Discover our facilities and rooms',

    // Location
    'location.title': 'Perfect Location',
    'location.subtitle': 'Our hostel is located in a quiet and easily accessible area, with excellent connectivity',
    'location.hostalName': 'Hostal República',
    'location.address': 'Abdón Cifuentes 73',
    'location.city': 'Santiago, Chile',
    'location.postalCode': 'Postal code: 8320200',
    'location.safeZone': 'Safe area',
    'location.aboutZone': 'About the Area',
    'location.description1': 'The location allows quick access to the city center, essential services, local shops, restaurants and public transport, making it easy to visit the main points of interest without complications.',
    'location.description2': 'It is a safe and pleasant area, perfect for travelers who want to rest or those who need to move quickly for work or tourism.',
    'location.nearbyAttractions': 'Nearby Attractions',
    'location.mainSquare': 'Main city square',
    'location.commercial': 'Shopping and dining area',
    'location.coastal': 'Waterfront promenade',
    'location.metro': 'República Metro',
    'location.walking5': '5 minutes walk',
    'location.walking3': '3 minutes walk',
    'location.walking10': '10 minutes walk',
    'location.walking2': '2 minutes walk',
    'location.transport': 'Transport and Mobility',
    'location.metroStation': 'Metro Station',
    'location.metroDesc': 'Main transport hub 5 minutes walk away',
    'location.publicTransport': 'Public Transport',
    'location.publicTransportDesc': 'Bus stops 2 minutes away',
    'location.culture': 'Culture and Leisure',
    'location.cultureDesc': 'Museums and historical sites 5-10 minutes away',
    'location.needDirections': 'Need directions?',
    'location.directionsDesc': 'We are located in the heart of Santiago, with easy access from anywhere in the city',
    'location.viewOnMaps': 'View on Google Maps',

    // Testimonials
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'The satisfaction of our visitors is our best recommendation',

    // CTA
    'cta.title': 'Ready for your stay in Santiago?',
    'cta.subtitle': 'Book now and enjoy our comfortable rooms in the heart of Santiago. We look forward to welcoming you with the best service!',
    'cta.whatsapp': 'Book via WhatsApp',
    'cta.call': 'Call Now',
    'cta.whatsapp247': 'WhatsApp 24/7',
    'cta.immediateResponse': 'Immediate response',
    'cta.phoneService': 'Phone Service',
    'cta.email': 'Email',

    // WhatsApp Button
    'whatsapp.tooltip': 'Book via WhatsApp!',

    // Footer
    'footer.specialists': 'Specialists in furnished apartments',
    'footer.tagline': 'Hostal República - Your home in Santiago',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',

    // Amenities
    'amenity.wifi': 'Free WiFi',
    'amenity.tv': 'Cable TV',
    'amenity.bedding': 'Bed linen',
    'amenity.towels': 'Towels',
    'amenity.toiletries': 'Toiletries',
    'amenity.cleaning': 'Daily cleaning',

    // Room Names
    'room.doubleStandard': 'Standard Double Room',
    'room.singleEconomic': 'Budget Single Room',
    'room.doubleSeparate': 'Double Room with Twin Beds',
    'room.tripleStandard': 'Standard Triple Room',
    'room.triple': 'Triple Room',
    'room.quadruple': 'Quadruple Room',
    'room.suite': 'Hostel Suite',
  }
};