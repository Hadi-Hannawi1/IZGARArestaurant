import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';
import { GiMeat, GiTomato, GiChiliPepper, GiBread } from 'react-icons/gi';

export const Ingredients = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const ingredients = [
    {
      id: 1,
      icon: GiMeat,
      title: { fr: 'Viande Marinée', en: 'Marinated Meat' },
      description: { 
        fr: 'Marinée 24h avec nos épices secrètes', 
        en: 'Marinated for 24h with our secret spices' 
      },
      image: '/images/ingredients/meat.jpeg',
    },
    {
      id: 2,
      icon: GiTomato,
      title: { fr: 'Légumes Frais', en: 'Fresh Vegetables' },
      description: { 
        fr: 'Livrés chaque matin du marché local', 
        en: 'Delivered every morning from the local market' 
      },
      image: '/images/ingredients/vegetables.jpeg',
    },
    {
      id: 3,
      icon: GiChiliPepper,
      title: { fr: 'Sauces Maison', en: 'Homemade Sauces' },
      description: { 
        fr: 'Préparées quotidiennement selon nos recettes', 
        en: 'Prepared daily according to our recipes' 
      },
      image: '/images/ingredients/sauces.jpeg',
    },
    {
      id: 4,
      icon: GiBread,
      title: { fr: 'Pain Artisanal', en: 'Artisan Bread' },
      description: { 
        fr: 'Cuit au four plusieurs fois par jour', 
        en: 'Baked fresh multiple times a day' 
      },
      image: '/images/ingredients/bread.jpeg',
    },
  ];

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
            {language === 'fr' ? 'Ingrédients Maison' : 'Homemade Ingredients'}
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Frais, locaux et préparés chaque jour' 
              : 'Fresh, local, and prepared daily'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item) => {
            const IconComponent = item.icon;
            const currentLanguage = language as 'fr' | 'en';
            
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={item.title[currentLanguage]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end justify-center pb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center">
                      <IconComponent className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-2xl text-charcoal mb-3">
                    {item.title[currentLanguage]}
                  </h3>
                  <p className="font-inter text-charcoal/70">
                    {item.description[currentLanguage]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
