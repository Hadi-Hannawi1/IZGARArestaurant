import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const { t } = useLanguage();
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in from left (text)
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Slide in from right (image)
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="welcome"
      className="bg-beige py-32 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            {/* Overline */}
            <div className="text-sm font-body font-semibold text-primary uppercase tracking-wider">
              {t('welcome.overline')}
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal leading-tight">
              {t('welcome.headline')}
            </h2>

            {/* Subheadline */}
            <h3 className="text-xl sm:text-2xl font-body text-charcoal/70">
              {t('welcome.subheadline')}
            </h3>

            {/* Body Text */}
            <div className="space-y-6 text-lg font-body text-charcoal leading-relaxed">
              <p>{t('welcome.paragraph1')}</p>
              <p>{t('welcome.paragraph2')}</p>
              <p>{t('welcome.paragraph3')}</p>
            </div>

            {/* CTA Link */}
            <Link
              to="/story"
              className="inline-block text-base font-body font-semibold text-primary hover:underline transition-all"
            >
              {t('welcome.cta')}
            </Link>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-medium border-8 border-cream">
              <img
                src="https://source.unsplash.com/800x900/?turkish,restaurant,chef,kitchen"
                alt="Izgara restaurant owner"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
