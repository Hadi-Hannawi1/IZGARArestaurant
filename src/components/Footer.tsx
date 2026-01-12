import { useLanguage } from '../contexts/LanguageContext';
import { FaInstagram, FaFacebookF, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    fr: {
      about: 'À Propos',
      aboutText: 'Cuisine turque authentique depuis trois générations',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
      address: '34 Rue Mouffetard, 75005 Paris',
      phone: '+33 1 43 31 08 11',
      email: 'contact@izgara-paris.com',
      hours: 'Horaires',
      hoursText: 'Ouvert 7j/7 : 11h00 - 01h00',
      followUs: 'Suivez-Nous',
      rights: 'Tous droits réservés',
      links: {
        home: 'Accueil',
        menu: 'Menu',
        story: 'Notre Histoire',
        gallery: 'Galerie',
        contact: 'Contact',
      },
    },
    en: {
      about: 'About',
      aboutText: 'Authentic Turkish cuisine for three generations',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      address: '34 Rue Mouffetard, 75005 Paris',
      phone: '+33 1 43 31 08 11',
      email: 'contact@izgara-paris.com',
      hours: 'Hours',
      hoursText: 'Open 7 days: 11:00 AM - 1:00 AM',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
      links: {
        home: 'Home',
        menu: 'Menu',
        story: 'Our Story',
        gallery: 'Gallery',
        contact: 'Contact',
      },
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-playfair text-3xl text-golden-yellow mb-4">
              IZGARA
            </h3>
            <p className="font-inter text-white/70 mb-6">
              {t.aboutText}
            </p>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full font-inter text-sm transition-colors duration-300"
            >
              {language === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-golden-yellow mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.links.home}
                </a>
              </li>
              <li>
                <a href="/menu" className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.links.menu}
                </a>
              </li>
              <li>
                <a href="/story" className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.links.story}
                </a>
              </li>
              <li>
                <a href="/gallery" className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.links.gallery}
                </a>
              </li>
              <li>
                <a href="/contact" className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl text-golden-yellow mb-4">
              {t.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-golden-yellow mt-1">📍</span>
                <span className="font-inter text-white/70">{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-golden-yellow" />
                <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-golden-yellow" />
                <a href={`mailto:${t.email}`} className="font-inter text-white/70 hover:text-golden-yellow transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-playfair text-xl text-golden-yellow mb-4">
              {t.hours}
            </h4>
            <p className="font-inter text-white/70 mb-6">
              {t.hoursText}
            </p>
            <h4 className="font-playfair text-xl text-golden-yellow mb-4">
              {t.followUs}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/izgara_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-flame-red hover:to-golden-yellow flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-flame-red hover:to-golden-yellow flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-inter text-white/50 text-sm">
            © {new Date().getFullYear()} Izgara Paris. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
