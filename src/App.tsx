import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RoomDetail from './components/RoomDetail';
import { rooms } from './data/rooms';

type View = 'home' | 'room-detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  // Fonction pour mettre à jour les meta tags SEO
  const updateMetaTags = (roomId: number | null) => {
    if (roomId) {
      const room = rooms.find((r) => r.id === roomId);
      if (room) {
        // Titre de la page
        document.title = `${room.name} - ${room.price}€/nuit | Hostel Paradis`;
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', `${room.descriptionLong.substring(0, 155)}...`);
        }
        
        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', `${room.name} | Hostel Paradis`);
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', room.descriptionShort);
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://hostal-paradis.netlify.app/room/${room.id}`);
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', room.imageUrl);
        
        // Twitter Card
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', `${room.name} | Hostel Paradis`);
        
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute('content', room.descriptionShort);
        
        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (twitterImage) twitterImage.setAttribute('content', room.imageUrl);
        
        // Canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `https://hostal-paradis.netlify.app/room/${room.id}`);
      }
    } else {
      // Réinitialiser aux valeurs par défaut de la page d'accueil
      document.title = 'Hostel Paradis - Hébergement de Charme | Chambres Confortables';
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Découvrez Hostel Paradis, votre havre de paix. Chambres confortables, vue sur jardin, climatisation et Wi-Fi gratuit. Réservez votre séjour dès maintenant à partir de 55€/nuit.');
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Hostel Paradis - Hébergement de Charme');
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://hostal-paradis.netlify.app/');
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', 'https://hostal-paradis.netlify.app/');
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