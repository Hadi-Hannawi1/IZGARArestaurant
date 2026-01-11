import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/story', label: t('nav.story') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const scrollToReservation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const reservationSection = document.getElementById('reservation');
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#reservation';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-medium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-display font-bold text-cream tracking-wider hover:text-secondary transition-colors"
          >
            IZGARA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-body font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-cream/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-body font-semibold text-cream/80 hover:text-secondary transition-colors"
            >
              <span className={language === 'fr' ? 'text-secondary' : ''}>FR</span>
              <span className="mx-2">|</span>
              <span className={language === 'en' ? 'text-secondary' : ''}>EN</span>
            </button>

            {/* Reserve Button */}
            <button
              onClick={scrollToReservation}
              className="px-6 py-3 fire-gradient text-white text-sm font-semibold uppercase tracking-wide rounded-lg shadow-glow hover:scale-105 transition-transform"
            >
              {t('nav.reserve')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream text-3xl"
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-cream/10">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-body font-medium transition-colors hover:text-secondary py-2 ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-cream/80'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-body font-semibold text-cream/80 hover:text-secondary transition-colors py-2"
            >
              <span className={language === 'fr' ? 'text-secondary' : ''}>FR</span>
              <span className="mx-2">|</span>
              <span className={language === 'en' ? 'text-secondary' : ''}>EN</span>
            </button>

            {/* Mobile Reserve Button */}
            <button
              onClick={scrollToReservation}
              className="w-full mt-4 px-6 py-4 fire-gradient text-white text-sm font-semibold uppercase tracking-wide rounded-lg shadow-glow"
            >
              {t('nav.reserve')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
