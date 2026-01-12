import { useLanguage } from '../contexts/LanguageContext';

export const SignatureDishes = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Nos Spécialités',
      subtitle: 'Découvrez nos plats signatures préparés avec passion',
      signature: 'SIGNATURE',
      viewMenu: 'Voir Notre Menu Complet',
    },
    en: {
      title: 'Our Specialties',
      subtitle: 'Discover our signature dishes prepared with passion',
      signature: 'SIGNATURE',
      viewMenu: 'View Our Full Menu',
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

  const dishes = [
    {
      id: 1,
      name: 'Kebab Chef',
      nameEn: 'Chef Kebab',
      description: 'Notre création signature avec viande marinée 24h, légumes frais et sauce maison',
      descriptionEn: 'Our signature creation with 24h marinated meat, fresh vegetables and homemade sauce',
      price: '€12.90',
      image: '/images/dishes/kebab-chef.jpeg',
      signature: true,
    },
    {
      id: 2,
      name: 'Kebab Classique',
      nameEn: 'Classic Kebab',
      description: 'Le traditionnel kebab turc avec notre recette familiale authentique',
      descriptionEn: 'Traditional Turkish kebab with our authentic family recipe',
      price: '€9.90',
      image: '/images/dishes/kebab-classic.jpeg',
      signature: false,
    },
    {
      id: 3,
      name: 'Adana Kebab',
      nameEn: 'Adana Kebab',
      description: 'Brochettes épicées grillées au feu de bois, spécialité d\'Adana',
      descriptionEn: 'Spicy skewers grilled over wood fire, Adana specialty',
      price: '€13.90',
      image: '/images/dishes/adana-kebab.jpeg',
      signature: true,
    },
    {
      id: 4,
      name: 'Lahmacun',
      nameEn: 'Lahmacun',
      description: 'Pizza turque fine garnie de viande hachée et légumes',
      descriptionEn: 'Thin Turkish pizza topped with minced meat and vegetables',
      price: '€8.90',
      image: '/images/dishes/lahmacun.jpeg',
      signature: false,
    },
    {
      id: 5,
      name: 'Durum Poulet',
      nameEn: 'Chicken Durum',
      description: 'Wrap généreusement garni de poulet grillé et crudités',
      descriptionEn: 'Wrap generously filled with grilled chicken and fresh vegetables',
      price: '€10.90',
      image: '/images/dishes/chicken-durum.jpeg',
      signature: false,
    },
    {
      id: 6,
      name: 'Baklava',
      nameEn: 'Baklava',
      description: 'Pâtisserie feuilletée au miel et aux pistaches, recette traditionnelle',
      descriptionEn: 'Flaky pastry with honey and pistachios, traditional recipe',
      price: '€5.90',
      image: '/images/dishes/Bakalava.jpeg',
      signature: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-4">
            {t.title}
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Signature Badge */}
              {dish.signature && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-flame-red to-golden-yellow text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t.signature}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={currentLanguage === 'fr' ? dish.name : dish.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-charcoal mb-2">
                  {currentLanguage === 'fr' ? dish.name : dish.nameEn}
                </h3>
                <p className="font-inter text-charcoal/70 mb-4 line-clamp-2">
                  {currentLanguage === 'fr' ? dish.description : dish.descriptionEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-2xl font-bold text-flame-red">
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <a
            href="/menu"
            className="inline-block bg-gradient-to-r from-flame-red to-golden-yellow text-white font-inter font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t.viewMenu}
          </a>
        </div>
      </div>
    </section>
  );
};
