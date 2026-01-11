import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';

export const Welcome = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="welcome" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-golden-yellow font-inter text-sm uppercase tracking-widest">
              {t('welcome.overline')}
            </p>
            
            <h2 className="font-playfair text-5xl md:text-6xl text-charcoal leading-tight">
              {t('welcome.title')}
            </h2>
            
            <h3 className="font-inter text-2xl text-flame-red font-semibold">
              {t('welcome.subtitle')}
            </h3>
            
            <div className="space-y-4 text-charcoal/80 font-inter text-lg leading-relaxed">
              <p>{t('welcome.paragraph1')}</p>
              <p>{t('welcome.paragraph2')}</p>
              <p>{t('welcome.paragraph3')}</p>
            </div>
            
            <a
              href="#story"
              className="inline-flex items-center gap-2 font-inter font-semibold text-flame-red hover:text-golden-yellow transition-colors duration-300 group"
            >
              {t('welcome.cta')}
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-cream">
              <LazyImage
                src="/images/welcome/owner.jpeg"
                alt="Izgara Restaurant Owner"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden-yellow rounded-full opacity-20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
