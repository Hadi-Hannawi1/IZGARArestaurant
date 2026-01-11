import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { dishes, getUnsplashImage } from '../data/dishes';

gsap.registerPlugin(ScrollTrigger);

const SignatureDishes = () => {
  const { language, t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll tied to vertical scroll
      const cards = gsap.utils.toArray<HTMLElement>('.dish-card');

      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'left 90%',
            end: 'left 10%',
            horizontal: true,
          },
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="dishes-section bg-cream py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal mb-4">
            {t('dishes.headline')}
          </h2>
          <p className="text-lg sm:text-xl font-body text-charcoal/70">
            {t('dishes.subheadline')}
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div
          ref={carouselRef}
          className="dishes-carousel flex gap-8 overflow-x-auto pb-8 px-4 scroll-smooth"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#D32F2F rgba(33,33,33,0.1)',
          }}
        >
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="dish-card flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] bg-white rounded-2xl shadow-medium hover:shadow-heavy hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="h-80 overflow-hidden">
                <img
                  src={getUnsplashImage(dish.imageQuery, 800, 600)}
                  alt={language === 'fr' ? dish.nameFr : dish.nameEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Signature Badge */}
                {dish.isSignature && (
                  <div className="inline-block bg-primary text-white text-xs font-body font-semibold px-3 py-1.5 rounded-lg uppercase mb-4">
                    {t('dishes.signature')}
                  </div>
                )}

                {/* Dish Name */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-charcoal mb-3">
                  {language === 'fr' ? dish.nameFr : dish.nameEn}
                </h3>

                {/* Description */}
                <p className="text-base font-body text-charcoal/70 line-clamp-2 mb-6 leading-relaxed">
                  {language === 'fr' ? dish.descriptionFr : dish.descriptionEn}
                </p>

                {/* Price */}
                <div className="text-2xl font-body font-bold text-primary mb-4">
                  {dish.price}
                </div>

                {/* Dietary Icons */}
                <div className="flex gap-2">
                  {dish.isVegetarian && <span className="text-xl">🌱</span>}
                  {dish.isGlutenFree && <span className="text-xl">🌾</span>}
                  {dish.isSpicy && <span className="text-xl">🌶️</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .dishes-carousel::-webkit-scrollbar {
          height: 8px;
        }
        .dishes-carousel::-webkit-scrollbar-track {
          background: rgba(33, 33, 33, 0.1);
          border-radius: 4px;
        }
        .dishes-carousel::-webkit-scrollbar-thumb {
          background: #D32F2F;
          border-radius: 4px;
        }
        .dishes-carousel::-webkit-scrollbar-thumb:hover {
          background: #B71C1C;
        }
      `}</style>
    </section>
  );
};

export default SignatureDishes;
