import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RoomDetail from './components/RoomDetail';
import { rooms } from './data/rooms';

type View = 'home' | 'room-detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  // Función para actualizar los meta tags SEO
  const updateMetaTags = (roomId: number | null) => {
    if (roomId) {
      const room = rooms.find((r) => r.id === roomId);
      if (room) {
        // Título de la página
        document.title = `${room.name} - $${room.price.toLocaleString('es-CL')}/noche | Medihouses Hostal República`;
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', `${room.descriptionLong.substring(0, 155)}...`);
        }
        
        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', `${room.name} | Medihouses Hostal República`);
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', room.descriptionShort);
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://medihouses.netlify.app/room/${room.id}`);
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', room.imageUrl);
        
        // Twitter Card
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', `${room.name} | Medihouses`);
        
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute('content', room.descriptionShort);
        
        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (twitterImage) twitterImage.setAttribute('content', room.imageUrl);
        
        // Canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `https://medihouses.netlify.app/room/${room.id}`);
      }
    } else {
      // Reiniciar a los valores por defecto de la página de inicio
      document.title = 'Medihouses - Especialistas en Departamentos Amoblados | Hostal República Santiago';
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Descubre Medihouses Hostal República en Santiago, Chile. Habitaciones confortables, wifi gratuito, excelente ubicación. Reserva tu estadía desde $35.000 por noche.');
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Medihouses - Hostal República Santiago');
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://medihouses.netlify.app/');
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', 'https://medihouses.netlify.app/');
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/room/')) {
        const id = parseInt(path.split('/')[2]);
        if (!isNaN(id)) {
          setSelectedRoomId(id);
          setCurrentView('room-detail');
          updateMetaTags(id);
        }
      } else {
        setCurrentView('home');
        setSelectedRoomId(null);
        updateMetaTags(null);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRoomClick = (roomId: number) => {
    setSelectedRoomId(roomId);
    setCurrentView('room-detail');
    updateMetaTags(roomId);
    window.history.pushState({}, '', `/room/${roomId}`);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedRoomId(null);
    updateMetaTags(null);
    window.history.pushState({}, '', '/');
  };

  const handleNavigate = (view: string) => {
    if (view === 'home') {
      handleBackToHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} />
      {currentView === 'home' && <HomePage onRoomClick={handleRoomClick} />}
      {currentView === 'room-detail' && selectedRoomId && (
        <RoomDetail roomId={selectedRoomId} onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;