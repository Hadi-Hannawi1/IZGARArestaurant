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

  // Direct link to IZGARA restaurant on Google Maps
  const googleMapsLink = 'https://www.google.com/maps/place/IZGARA/@48.8439342,2.3489604,21z/data=!3m1!5s0x47e671ef2c448ccb:0x1bacae8b4611a763!4m15!1m8!3m7!1s0x47e671e8d36a3863:0x291f5d8d9cd6df!2s34+Rue+Mouffetard,+75005+Paris,+France!3b1!8m2!3d48.8439337!4d2.3489491!16s%2Fg%2F11bw4chmb8!3m5!1s0x47e671944ed38d2d:0xd58b7f4e661bedd9!8m2!3d48.843948!4d2.3493291!16s%2Fg%2F11k4l9j4sb?hl=en&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D';

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
          {/* Map - Clickable to open Google Maps */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl block group cursor-pointer"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.4560397677668!2d2.3489604!3d48.8439342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671944ed38d2d%3A0xd58b7f4e661bedd9!2sIZGARA!5e0!3m2!1sen!2sfr!4v1705156800000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Izgara Location"
              className="pointer-events-none"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-white text-charcoal px-6 py-3 rounded-full font-inter font-bold shadow-xl transition-all duration-300 transform scale-90 group-hover:scale-100">
                {currentLanguage === 'fr' ? 'Ouvrir dans Google Maps' : 'Open in Google Maps'}
              </span>
            </div>
          </a>

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

            {/* Directions Button - Direct link to IZGARA */}
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-flame-red to-golden-yellow hover:from-golden-yellow hover:to-flame-red text-white font-inter font-bold text-center py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              {t.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
