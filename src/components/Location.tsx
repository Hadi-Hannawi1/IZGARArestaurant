import { useEffect, useRef } from 'react';
import { IoLocationSharp, IoTimeOutline, IoCall, IoMail } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const { t } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="location-section bg-charcoal py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div ref={mapRef} className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8267847856903!2d2.348897676740806!3d48.842331871329996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e8d0f0f58b%3A0x7f0b9e0b0b0b0b0b!2s34%20Rue%20Mouffetard%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="600"
              style={{ border: 0, borderRadius: '1rem' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div ref={infoRef} className="location-info bg-cream/5 backdrop-blur-md border border-cream/10 rounded-2xl p-12">
            <h2 className="text-4xl font-display font-bold text-cream mb-8">
              {t('location.headline')}
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <IoLocationSharp className="text-2xl text-secondary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-lg font-body text-cream/90 leading-relaxed">
                    34 Rue Mouffetard<br />
                    75005 Paris, France
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <IoTimeOutline className="text-2xl text-secondary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-lg font-body text-cream/90">{t('location.hours')}</div>
                  <div className="text-lg font-body text-cream/90">{t('location.time')}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <IoCall className="text-2xl text-secondary flex-shrink-0 mt-1" />
                <a
                  href="tel:+33143310811"
                  className="text-lg font-body text-cream/90 hover:text-secondary transition-colors"
                >
                  +33 1 43 31 08 11
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <IoMail className="text-2xl text-secondary flex-shrink-0 mt-1" />
                <a
                  href="mailto:contact@izgara-paris.com"
                  className="text-lg font-body text-cream/90 hover:text-secondary transition-colors"
                >
                  contact@izgara-paris.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=34+Rue+Mouffetard,75005+Paris,France"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-12 px-8 py-4 fire-gradient text-white text-base font-semibold uppercase tracking-wide rounded-lg shadow-glow hover:scale-102 transition-transform text-center"
            >
              {t('location.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
