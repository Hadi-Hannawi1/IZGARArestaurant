import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KebabShowcase = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const grillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the grill on scroll
      if (grillRef.current) {
        gsap.to(grillRef.current, {
          rotation: 360,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="kebab-showcase" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-charcoal text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-playfair text-5xl md:text-6xl mb-6">
          {t('kebabShowcase.title')}
        </h2>
        <p className="font-inter text-xl text-white/80 mb-16 max-w-2xl mx-auto">
          {t('kebabShowcase.subtitle')}
        </p>

        {/* Rotating Grill */}
        <div className="mb-16">
          <div 
            ref={grillRef}
            className="w-full max-w-3xl mx-auto"
          >
            <LazyImage
              src="/images/kebab-showcase/horizontal-grill.png"
              alt="Horizontal Turkish Kebab Grill"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: '🔥',
              titleKey: 'kebabShowcase.benefit1.title',
              descKey: 'kebabShowcase.benefit1.description',
            },
            {
              icon: '👨‍🍳',
              titleKey: 'kebabShowcase.benefit2.title',
              descKey: 'kebabShowcase.benefit2.description',
            },
            {
              icon: '⏰',
              titleKey: 'kebabShowcase.benefit3.title',
              descKey: 'kebabShowcase.benefit3.description',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="font-playfair text-2xl mb-3 text-golden-yellow">
                {t(benefit.titleKey)}
              </h3>
              <p className="font-inter text-white/70">
                {t(benefit.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
