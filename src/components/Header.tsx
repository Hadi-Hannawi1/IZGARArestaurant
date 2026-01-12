import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    FR: [
      { name: 'Accueil', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'Notre Histoire', path: '/story' },
      { name: 'Galerie', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
    EN: [
      { name: 'Home', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'Our Story', path: '/story' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo - ONLY ONE INSTANCE */}
        <Link
          to="/"
          className="font-playfair text-2xl md:text-3xl font-bold text-cream hover:text-golden-yellow transition-colors duration-300 relative group"
          style={{ letterSpacing: '0.1em' }}
        >
          IZGARA
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-yellow group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems[language].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-inter text-sm font-medium transition-colors duration-300 uppercase tracking-wider relative group ${
                  location.pathname === item.path
                    ? 'text-golden-yellow'
                    : 'text-cream/90 hover:text-golden-yellow'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-yellow group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
            className="font-inter text-sm font-semibold text-cream/80 hover:text-golden-yellow transition-colors duration-300"
          >
            <span className={language === 'FR' ? 'text-golden-yellow' : ''}>FR</span>
            {' | '}
            <span className={language === 'EN' ? 'text-golden-yellow' : ''}>EN</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream p-2 hover:text-golden-yellow transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-lg border-t border-cream/10">
          <ul className="px-6 py-8 space-y-6">
            {navItems[language].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-inter text-lg font-medium transition-colors duration-300 uppercase tracking-wide ${
                    location.pathname === item.path
                      ? 'text-golden-yellow'
                      : 'text-cream/90 hover:text-golden-yellow'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
