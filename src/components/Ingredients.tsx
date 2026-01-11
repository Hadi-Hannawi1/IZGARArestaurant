import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';

const ingredients = [
  {
    id: 1,
    titleKey: 'ingredients.item1.title',
    descKey: 'ingredients.item1.description',
    image: '/images/ingredients/meat.jpeg',
  },
  {
    id: 2,
    titleKey: 'ingredients.item2.title',
    descKey: 'ingredients.item2.description',
    image: '/images/ingredients/vegetables.jpeg',
  },
  {
    id: 3,
    titleKey: 'ingredients.item3.title',
    descKey: 'ingredients.item3.description',
    image: '/images/ingredients/sauces.jpeg',
  },
  {
    id: 4,
    titleKey: 'ingredients.item4.title',
    descKey: 'ingredients.item4.description',
    image: '/images/ingredients/bread.jpeg',
  },
];

export const Ingredients = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="ingredients" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            {t('ingredients.title')}
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t('ingredients.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-playfair text-2xl text-charcoal mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="font-inter text-charcoal/70">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};