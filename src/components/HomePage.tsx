import Hero from './Hero';
import Presentation from './Presentation';
import RoomsOverview from './RoomsOverview';
import Gallery from './Gallery';
import Location from './Location';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface HomePageProps {
  onRoomClick: (roomId: number) => void;
}

export default function HomePage({ onRoomClick }: HomePageProps) {
  return (
    <div className="pt-16">
      <Hero />
      <Presentation />
      <RoomsOverview onRoomClick={onRoomClick} />
      <Gallery />
      <Location />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}