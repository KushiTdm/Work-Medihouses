// src/components/HomePage.tsx
import Hero from './Hero';
import Presentation from './Presentation';
import RoomsOverview from './RoomsOverview';
import Location from './Location';
import Testimonials from './Testimonials';
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
      <Location />
      <Testimonials />
      <Footer />
    </div>
  );
}