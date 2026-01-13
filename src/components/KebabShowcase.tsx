import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GiFlame, GiCook, GiAlarmClock } from 'react-icons/gi';

export const KebabShowcase = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: GiFlame,
      title: { fr: 'Grillé à la Perfection', en: 'Grilled to Perfection' },
      description: { 
        fr: 'Cuisson lente sur flamme ouverte pour une saveur authentique', 
        en: 'Slow-cooked over open flame for authentic flavor' 
      },
    },
    {
      icon: GiCook,
      title: { fr: 'Recettes Familiales', en: 'Family Recipes' },
      description: { 
        fr: 'Transmises de génération en génération depuis 1990', 
        en: 'Passed down through generations since 1990' 
      },
    },
    {
      icon: GiAlarmClock,
      title: { fr: 'Préparation Maison', en: 'Homemade Preparation' },
      description: { 
        fr: 'Viande marinée chaque jour avec nos épices secrètes', 
        en: 'Meat marinated daily with our secret spices' 
      },
    },
  ];

  const currentLanguage = language as 'fr' | 'en';

  return (
    <section 
      id="kebab-showcase" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-charcoal text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
          {currentLanguage === 'fr' ? 'Notre Grill Horizontal' : 'Our Horizontal Grill'}
        </h2>
        <p className="font-inter text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto">
          {currentLanguage === 'fr' 
            ? 'La tradition turque authentique avec notre grill horizontal unique' 
            : 'Authentic Turkish tradition with our unique horizontal grill'}
        </p>

        {/* Static Grill Image - MOBILE RESPONSIVE */}
        <div className="relative mb-16">
          {/* Outer container with solid background */}
          <div 
            className="w-full max-w-4xl mx-auto relative z-10 rounded-2xl overflow-hidden"
            style={{ 
              backgroundColor: '#212121',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Static Image - No rotation */}
            <img
              src="/images/kebab-showcase/horizontal-grill.png"
              alt="Horizontal Turkish Kebab Grill"
              className="w-full h-auto drop-shadow-2xl rounded-xl"
              style={{
                backgroundColor: '#212121',
                display: 'block',
                maxWidth: '100%',
              }}
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-flame-red/20 via-transparent to-transparent blur-3xl -z-10" />
        </div>

        {/* Benefits Grid - MOBILE RESPONSIVE */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16"
          style={{
            opacity: 1,
            visibility: 'visible',
            display: 'grid',
            pointerEvents: 'all'
          }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-golden-yellow/50 transition-all duration-300 hover:scale-105"
                style={{
                  opacity: 1,
                  visibility: 'visible',
                  display: 'block'
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-3xl md:text-4xl text-white" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl md:text-2xl mb-3 text-golden-yellow">
                  {benefit.title[currentLanguage]}
                </h3>
                <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed">
                  {benefit.description[currentLanguage]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};