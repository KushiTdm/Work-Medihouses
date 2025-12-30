// src/components/HomePage.tsx
import Hero from './Hero';
import Presentation from './Presentation';
import RoomsOverview from './RoomsOverview';
import About from './About';
import Footer from './Footer';

interface HomePageProps {
  onRoomClick: (roomId: number) => void;
}

export default function HomePage({ onRoomClick }: HomePageProps) {
  return (
    <div className="pt-16">
      <Hero />
      <Presentation />
      <RoomsOverview onRoomClick={onRoomClick} />
      <About />
      <Footer />
    </div>
  );
}
