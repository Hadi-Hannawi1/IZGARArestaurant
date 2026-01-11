import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', labelFr: 'Tout', labelEn: 'All' },
    { id: 'dishes', labelFr: 'Plats', labelEn: 'Dishes' },
    { id: 'interior', labelFr: 'Intérieur', labelEn: 'Interior' },
    { id: 'team', labelFr: 'Équipe', labelEn: 'Team' },
  ];

  const images = [
    { id: 1, category: 'dishes', query: 'turkish,kebab,food,delicious' },
    { id: 2, category: 'interior', query: 'restaurant,interior,cozy,modern' },
    { id: 3, category: 'dishes', query: 'turkish,baklava,dessert,honey' },
    { id: 4, category: 'team', query: 'chef,cooking,professional,kitchen' },
    { id: 5, category: 'dishes', query: 'turkish,pizza,lahmacun,traditional' },
    { id: 6, category: 'interior', query: 'restaurant,dining,elegant,atmosphere' },
    { id: 7, category: 'dishes', query: 'turkish,meze,appetizer,colorful' },
    { id: 8, category: 'team', query: 'restaurant,staff,service,professional' },
    { id: 9, category: 'dishes', query: 'turkish,tea,traditional,glass' },
    { id: 10, category: 'interior', query: 'restaurant,bar,counter,modern' },
    { id: 11, category: 'dishes', query: 'turkish,breakfast,spread,traditional' },
    { id: 12, category: 'dishes', query: 'kebab,grill,meat,cooking' },
  ];

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="gallery-page bg-cream min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6">
            {language === 'fr' ? 'Galerie' : 'Gallery'}
          </h1>
          <p className="text-xl font-body text-charcoal/70 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez notre restaurant en images'
              : 'Discover our restaurant in pictures'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-lg font-body font-semibold uppercase tracking-wide transition-all ${
                activeFilter === cat.id
                  ? 'bg-primary text-white shadow-medium'
                  : 'bg-white text-charcoal hover:bg-primary/10'
              }`}
            >
              {language === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-light hover:shadow-heavy transition-all cursor-pointer"
            >
              <img
                src={`https://source.unsplash.com/800x${
                  600 + (img.id % 3) * 100
                }/?${img.query}`}
                alt={`Gallery ${img.id}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
