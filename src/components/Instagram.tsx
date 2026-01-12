import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaInstagram } from 'react-icons/fa';

export default function Instagram() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    fr: {
      title: 'Suivez-Nous',
      subtitle: '@izgara_restaurant',
      cta: 'Voir Plus Sur Instagram',
    },
    en: {
      title: 'Follow Us',
      subtitle: '@izgara_restaurant',
      cta: 'View More On Instagram',
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

  // Placeholder images (replace with real Instagram feed later)
  const posts = [
    { id: 1, image: '/images/dishes/kebab-chef.jpeg' },
    { id: 2, image: '/images/dishes/adana-kebab.jpeg' },
    { id: 3, image: '/images/dishes/lahmacun.jpeg' },
    { id: 4, image: '/images/ingredients/meat.jpeg' },
    { id: 5, image: '/images/story/modern-restaurant.jpeg' },
    { id: 6, image: '/images/dishes/Bakalava.jpeg' },
  ];

  return (
    <section 
      id="instagram" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-warm-beige"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center">
              <FaInstagram className="text-4xl text-white" />
            </div>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-4">
            {t.title}
          </h2>
          <p className="font-pacifico text-2xl text-flame-red">
            {t.subtitle}
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/izgara_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-5xl text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/izgara_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-flame-red to-golden-yellow hover:from-golden-yellow hover:to-flame-red text-white px-10 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <FaInstagram className="text-2xl" />
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
