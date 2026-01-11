import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoArrowForward } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-column', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/story', label: t('nav.story') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer ref={footerRef} className="bg-charcoal pt-20 pb-8 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="footer-column">
            <Link to="/" className="text-3xl font-display font-bold text-cream mb-4 block">
              IZGARA
            </Link>
            <p className="text-sm font-body text-cream/70 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-column">
            <h4 className="text-sm font-body font-semibold text-secondary uppercase tracking-wider mb-4">
              {t('footer.nav')}
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base font-body text-cream/80 hover:text-secondary hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-column">
            <h4 className="text-sm font-body font-semibold text-secondary uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <div className="flex flex-col gap-3 text-base font-body text-cream/80">
              <div>34 Rue Mouffetard</div>
              <div>75005 Paris, France</div>
              <a href="tel:+33143310811" className="hover:text-secondary transition-colors">
                +33 1 43 31 08 11
              </a>
              <a href="mailto:contact@izgara-paris.com" className="hover:text-secondary transition-colors">
                contact@izgara-paris.com
              </a>
              <div>11:00 - 01:00 (7j/7)</div>
            </div>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div className="footer-column">
            <h4 className="text-sm font-body font-semibold text-secondary uppercase tracking-wider mb-4">
              {t('footer.social')}
            </h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/izgara_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-cream/80 hover:text-secondary hover:rotate-[360deg] transition-all duration-500"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-cream/80 hover:text-secondary hover:rotate-[360deg] transition-all duration-500"
              >
                <IoLogoFacebook />
              </a>
            </div>

            {/* Newsletter */}
            <h4 className="text-sm font-body font-semibold text-cream/90 uppercase tracking-wider mb-2">
              {t('footer.newsletter')}
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 h-12 px-4 bg-cream/5 border border-cream/20 rounded-l-lg text-sm font-body text-cream/90 placeholder-cream/50 focus:outline-none focus:border-secondary"
                required
              />
              <button
                type="submit"
                className="w-15 h-12 bg-primary hover:bg-primary/80 rounded-r-lg flex items-center justify-center transition-colors"
              >
                <IoArrowForward className="text-xl text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-body text-cream/50">
          <div>{t('footer.copyright')}</div>

          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="font-semibold">
              <span className={language === 'fr' ? 'text-secondary' : ''}>FR</span>
              <span className="mx-2">|</span>
              <span className={language === 'en' ? 'text-secondary' : ''}>EN</span>
            </button>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link to="/legal" className="hover:text-cream/80 transition-colors">
                {t('footer.legal')}
              </Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-cream/80 transition-colors">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
