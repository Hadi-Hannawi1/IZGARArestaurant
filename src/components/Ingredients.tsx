import { useEffect, useRef } from 'react';
import { GiMeat, GiSaucepan, GiTomato, GiBread } from 'react-icons/gi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Ingredients = () => {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ingredient-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.ingredient-icon', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
        rotation: -360,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const ingredients = [
    { icon: GiMeat, titleKey: 'ingredients.meat.title', descKey: 'ingredients.meat.desc' },
    { icon: GiSaucepan, titleKey: 'ingredients.sauces.title', descKey: 'ingredients.sauces.desc' },
    { icon: GiTomato, titleKey: 'ingredients.veggies.title', descKey: 'ingredients.veggies.desc' },
    { icon: GiBread, titleKey: 'ingredients.bread.title', descKey: 'ingredients.bread.desc' },
  ];

  return (
    <section className="bg-cream py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal mb-4">
            {t('ingredients.headline')}
          </h2>
          <h3 className="text-xl sm:text-2xl font-body text-charcoal/70">
            {t('ingredients.subheadline')}
          </h3>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="ingredient-card bg-white p-12 rounded-2xl border border-charcoal/10 shadow-light hover:shadow-medium hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <item.icon className="ingredient-icon text-6xl text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">
                {t(item.titleKey)}
              </h3>
              <p className="text-base font-body text-charcoal/70 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
