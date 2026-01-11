import { useLanguage } from '../contexts/LanguageContext';
import { dishes, getUnsplashImage } from '../data/dishes';

const Menu = () => {
  const { language } = useLanguage();

  const categories = ['Kebabs', 'Grillades', 'Spécialités', 'Desserts'];

  return (
    <div className="menu-page bg-cream min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6">
            {language === 'fr' ? 'Notre Menu' : 'Our Menu'}
          </h1>
          <p className="text-xl font-body text-charcoal/70 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez nos spécialités turques authentiques, préparées avec passion'
              : 'Discover our authentic Turkish specialties, prepared with passion'}
          </p>
        </div>

        {/* Menu Items by Category */}
        {categories.map((category) => {
          const categoryDishes = dishes.filter((dish) => dish.category === category);
          if (categoryDishes.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal mb-8 pb-4 border-b-2 border-primary/20">
                {category}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categoryDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="bg-white rounded-2xl shadow-light hover:shadow-medium transition-all overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="sm:w-1/3 h-48 sm:h-auto">
                        <img
                          src={getUnsplashImage(dish.imageQuery, 400, 300)}
                          alt={language === 'fr' ? dish.nameFr : dish.nameEn}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="sm:w-2/3 p-6">
                        {/* Badge */}
                        {dish.isSignature && (
                          <div className="inline-block bg-primary text-white text-xs font-body font-semibold px-2 py-1 rounded mb-2">
                            ⭐ SIGNATURE
                          </div>
                        )}

                        <h3 className="text-2xl font-display font-bold text-charcoal mb-2">
                          {language === 'fr' ? dish.nameFr : dish.nameEn}
                        </h3>

                        <p className="text-base font-body text-charcoal/70 mb-4 leading-relaxed">
                          {language === 'fr' ? dish.descriptionFr : dish.descriptionEn}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-body font-bold text-primary">
                            {dish.price}
                          </div>

                          <div className="flex gap-2">
                            {dish.isVegetarian && <span className="text-xl">🌱</span>}
                            {dish.isGlutenFree && <span className="text-xl">🌾</span>}
                            {dish.isSpicy && <span className="text-xl">🌶️</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
