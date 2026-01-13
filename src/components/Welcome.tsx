import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';

export const Welcome = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const content: {
    fr: {
      overline: string;
      title: string;
      subtitle: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      cta: string;
    };
    en: {
      overline: string;
      title: string;
      subtitle: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      cta: string;
    };
  } = {
    fr: {
      overline: 'Bienvenue',
      title: 'Bienvenue Chez Izgara',
      subtitle: 'L\'Authenticité Turque au Cœur de Paris',
      paragraph1: 'Depuis trois générations, notre famille perpétue la tradition culinaire turque authentique dans le quartier latin de Paris.',
      paragraph2: 'Notre grill horizontal unique permet une cuisson lente et homogène, garantissant une viande tendre et savoureuse à chaque fois.',
      paragraph3: 'Chaque plat est préparé avec des ingrédients frais et des recettes transmises de père en fils depuis 1990.',
      cta: 'Découvrez Notre Histoire',
    },
    en: {
      overline: 'Welcome',
      title: 'Welcome to Izgara',
      subtitle: 'Turkish Authenticity in the Heart of Paris',
      paragraph1: 'For three generations, our family has been perpetuating authentic Turkish culinary tradition in the Latin Quarter of Paris.',
      paragraph2: 'Our unique horizontal grill allows for slow and even cooking, guaranteeing tender and flavorful meat every time.',
      paragraph3: 'Every dish is prepared with fresh ingredients and recipes passed down from father to son since 1990.',
      cta: 'Discover Our Story',
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

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
              {t.overline}
            </p>
            
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              {t.title}
            </h2>
            
            <h3 className="font-inter text-xl md:text-2xl text-flame-red font-semibold">
              {t.subtitle}
            </h3>
            
            <div className="space-y-4 text-charcoal/80 font-inter text-base md:text-lg leading-relaxed">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
              <p>{t.paragraph3}</p>
            </div>
            
            <a
              href="#story"
              className="inline-flex items-center gap-2 font-inter font-semibold text-flame-red hover:text-golden-yellow transition-colors duration-300 group"
            >
              {t.cta}
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Right: Image - Mobile First */}
          <div className="relative order-first md:order-last">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-cream">
              <LazyImage
                src="/images/welcome/owner.jpeg"
                alt="Izgara Restaurant Owner"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-golden-yellow rounded-full opacity-20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};