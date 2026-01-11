import { useEffect, useRef } from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Instagram = () => {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.instagram-post', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const instagramImages = [
    'turkish,food,kebab,closeup',
    'turkish,restaurant,interior,cozy',
    'baklava,dessert,turkish,honey',
    'turkish,tea,traditional,glass',
    'chef,cooking,turkish,kitchen',
    'turkish,breakfast,spread,table',
  ];

  return (
    <section className="bg-beige py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal mb-4">
            {t('instagram.headline')}
          </h2>
          <a
            href="https://www.instagram.com/izgara_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-body font-semibold text-primary hover:text-secondary transition-colors"
          >
            <IoLogoInstagram className="text-2xl" />
            {t('instagram.handle')}
          </a>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
        >
          {instagramImages.map((query, index) => (
            <a
              key={index}
              href="https://www.instagram.com/izgara_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post relative aspect-square rounded-lg overflow-hidden shadow-light hover:shadow-medium transition-all group"
            >
              <img
                src={`https://source.unsplash.com/800x800/?${query}`}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <IoLogoInstagram className="text-6xl text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/izgara_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-transparent border-2 border-charcoal text-charcoal text-base font-semibold uppercase rounded-lg hover:bg-charcoal hover:text-white transition-all"
          >
            {t('instagram.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
