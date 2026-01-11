import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';

const dishes = [
  {
    id: 1,
    name: 'Kebab Chef',
    nameEn: 'Chef Kebab',
    description: 'Notre signature : feta, carottes râpées, grenades',
    descriptionEn: 'Our signature: feta, grated carrots, pomegranates',
    price: '€12.90',
    image: '/images/dishes/kebab-chef.jpeg',
    signature: true,
  },
  {
    id: 2,
    name: 'Kebab Classique',
    nameEn: 'Classic Kebab',
    description: 'Le classique revisité avec nos ingrédients maison',
    descriptionEn: 'The classic revisited with our homemade ingredients',
    price: '€9.90',
    image: '/images/dishes/kebab-classic.jpeg',
    signature: false,
  },
  {
    id: 3,
    name: 'Adana Kebab',
    nameEn: 'Adana Kebab',
    description: 'Brochettes épicées grillées sur notre grill horizontal',
    descriptionEn: 'Spicy skewers grilled on our horizontal grill',
    price: '€13.90',
    image: '/images/dishes/adana-kebab.jpeg',
    signature: true,
  },
  {
    id: 4,
    name: 'Lahmacun',
    nameEn: 'Lahmacun',
    description: 'Pizza turque fine et croustillante',
    descriptionEn: 'Thin and crispy Turkish pizza',
    price: '€8.90',
    image: '/images/dishes/lahmacun.jpeg',
    signature: false,
  },
  {
    id: 5,
    name: 'Durum Poulet',
    nameEn: 'Chicken Durum',
    description: 'Wrap généreux avec poulet mariné maison',
    descriptionEn: 'Generous wrap with homemade marinated chicken',
    price: '€10.90',
    image: '/images/dishes/chicken-durum.jpeg',
    signature: false,
  },
  {
    id: 6,
    name: 'Baklava',
    nameEn: 'Baklava',
    description: 'Dessert traditionnel turc au miel et pistaches',
    descriptionEn: 'Traditional Turkish dessert with honey and pistachios',
    price: '€5.90',
    image: '/images/dishes/Bakalava.jpeg',
    signature: false,
  },
];

export const SignatureDishes = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="dishes" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            {t('dishes.title')}
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t('dishes.subtitle')}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <LazyImage
                  src={dish.image}
                  alt={language === 'fr' ? dish.name : dish.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Signature Badge */}
                {dish.signature && (
                  <div className="absolute top-4 right-4 bg-flame-red text-white px-4 py-2 rounded-full text-sm font-inter font-bold shadow-lg">
                    {t('dishes.signature')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-charcoal mb-2">
                  {language === 'fr' ? dish.name : dish.nameEn}
                </h3>
                <p className="font-inter text-charcoal/70 mb-4">
                  {language === 'fr' ? dish.description : dish.descriptionEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-3xl text-flame-red font-bold">
                    {dish.price}
                  </span>
                  <button className="bg-golden-yellow hover:bg-flame-red text-white px-6 py-2 rounded-full font-inter font-semibold transition-colors duration-300">
                    {t('dishes.order')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Menu CTA */}
        <div className="text-center mt-16">
          <a
            href="/menu"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-flame-red text-white px-10 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            {t('dishes.viewMenu')}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
