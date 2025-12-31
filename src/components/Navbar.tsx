import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src="/medihouses-logo.png" 
              alt="Medihouses Logo" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.rooms')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.gallery')}
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.location')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-red-600 text-white text-sm"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-red-600">
              {t('nav.menu')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}