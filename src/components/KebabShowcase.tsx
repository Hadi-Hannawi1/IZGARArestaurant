import { useEffect, useRef } from 'react';
import { IoFlame, IoCheckmarkCircle, IoEye } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const KebabShowcase = () => {
  const { t } = useLanguage();
  const kebabImageRef = useRef<HTMLImageElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate kebab as user scrolls
      if (kebabImageRef.current) {
        gsap.to(kebabImageRef.current, {
          scrollTrigger: {
            trigger: '.kebab-showcase',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            onUpdate: (self) => {
              const rotation = self.progress * 360;
              const hueRotate = self.progress * 30;
              const brightness = 1 - self.progress * 0.2;

              gsap.set(kebabImageRef.current, {
                rotation: rotation,
                filter: `hue-rotate(${hueRotate}deg) brightness(${brightness}) contrast(1.1) saturate(1.2)`,
              });
            },
          },
        });
      }

      // Badges fade in with stagger
      gsap.from('.benefit-badge', {
        scrollTrigger: {
          trigger: badgesRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="kebab-showcase bg-charcoal py-40 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-cream text-center mb-6 max-w-4xl">
          {t('kebab.headline')}
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl font-body text-cream/70 text-center mb-20">
          {t('kebab.subheadline')}
        </p>

        {/* Kebab Visual */}
        <div className="kebab-visual w-full max-w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mb-16">
          <img
            ref={kebabImageRef}
            src="https://www.genspark.ai/api/files/s/htobWYwL"
            alt="Horizontal Kebab Grill"
            className="w-full h-full object-contain rounded-2xl shadow-[0_8px_24px_rgba(255,167,38,0.3)]"
            loading="lazy"
          />
        </div>

        {/* Three Benefit Badges */}
        <div
          ref={badgesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          {/* Badge 1 */}
          <div className="benefit-badge bg-cream/10 backdrop-blur-md border border-cream/20 rounded-2xl p-8 flex flex-col items-center text-center">
            <IoFlame className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-body font-semibold text-cream mb-3">
              {t('kebab.benefit1.title')}
            </h3>
            <p className="text-sm font-body text-cream/70">
              {t('kebab.benefit1.desc')}
            </p>
          </div>

          {/* Badge 2 */}
          <div className="benefit-badge bg-cream/10 backdrop-blur-md border border-cream/20 rounded-2xl p-8 flex flex-col items-center text-center">
            <IoCheckmarkCircle className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-body font-semibold text-cream mb-3">
              {t('kebab.benefit2.title')}
            </h3>
            <p className="text-sm font-body text-cream/70">
              {t('kebab.benefit2.desc')}
            </p>
          </div>

          {/* Badge 3 */}
          <div className="benefit-badge bg-cream/10 backdrop-blur-md border border-cream/20 rounded-2xl p-8 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <IoEye className="text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-body font-semibold text-cream mb-3">
              {t('kebab.benefit3.title')}
            </h3>
            <p className="text-sm font-body text-cream/70">
              {t('kebab.benefit3.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KebabShowcase;
