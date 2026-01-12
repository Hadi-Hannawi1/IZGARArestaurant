import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

export default function Location() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    fr: {
      title: 'Où Nous Trouver',
      subtitle: 'Au cœur du Quartier Latin',
      address: '34 Rue Mouffetard',
      city: '75005 Paris, France',
      phone: '+33 1 43 31 08 11',
      hours: 'Ouvert 7j/7 : 11h00 - 01h00',
      directions: 'Obtenir l\'itinéraire',
    },
    en: {
      title: 'Find Us',
      subtitle: 'In the heart of the Latin Quarter',
      address: '34 Rue Mouffetard',
      city: '75005 Paris, France',
      phone: '+33 1 43 31 08 11',
      hours: 'Open 7 days: 11:00 AM - 1:00 AM',
      directions: 'Get Directions',
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

  return (
    <section 
      id="location" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-charcoal text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl mb-6">
            {t.title}
          </h2>
          <p className="font-inter text-xl text-white/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8241486187647!2d2.3494967!3d48.8426157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e7c2e7f7af%3A0x3e1f2e1234567890!2s34%20Rue%20Mouffetard%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Izgara Location"
            />
          </div>

          {/* Info Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl text-golden-yellow mb-2">
                  {currentLanguage === 'fr' ? 'Adresse' : 'Address'}
                </h3>
                <p className="font-inter text-white/90">{t.address}</p>
                <p className="font-inter text-white/90">{t.city}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl text-golden-yellow mb-2">
                  {currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}
                </h3>
                <a
                  href={`tel:${t.phone.replace(/\s/g, '')}`}
                  className="font-inter text-white/90 hover:text-golden-yellow transition-colors"
                >
                  {t.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center flex-shrink-0">
                <FaClock className="text-xl text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl text-golden-yellow mb-2">
                  {currentLanguage === 'fr' ? 'Horaires' : 'Hours'}
                </h3>
                <p className="font-inter text-white/90">{t.hours}</p>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=34+Rue+Mouffetard,75005+Paris,France"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-flame-red to-golden-yellow hover:from-golden-yellow hover:to-flame-red text-white font-inter font-bold text-center py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {t.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
