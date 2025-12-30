import { Home } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Home className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Hostal Paradis</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Chambres
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-amber-600">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
