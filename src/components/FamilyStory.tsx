import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';

export const FamilyStory = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="story" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-warm-beige"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            {t('story.title')}
          </h2>
          <p className="font-inter text-xl text-charcoal/70 max-w-2xl mx-auto">
            {t('story.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-golden-yellow/30" />

          {/* 1990s */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="md:text-right">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                <span className="font-playfair text-4xl text-flame-red font-bold">
                  {t('story.timeline.1990.year')}
                </span>
                <h3 className="font-playfair text-2xl text-charcoal mt-2 mb-4">
                  {t('story.timeline.1990.title')}
                </h3>
                <p className="font-inter text-charcoal/70">
                  {t('story.timeline.1990.description')}
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <LazyImage
                src="/images/story/1990s-restaurant.jpeg"
                alt="1990s Restaurant"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* 2024 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl md:order-1">
              <LazyImage
                src="/images/story/modern-restaurant.jpeg"
                alt="Modern Restaurant"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="md:order-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                <span className="font-playfair text-4xl text-flame-red font-bold">
                  {t('story.timeline.2024.year')}
                </span>
                <h3 className="font-playfair text-2xl text-charcoal mt-2 mb-4">
                  {t('story.timeline.2024.title')}
                </h3>
                <p className="font-inter text-charcoal/70">
                  {t('story.timeline.2024.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#story"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-flame-red text-white px-10 py-4 rounded-full font-inter font-bold text-lg transition-all duration-300 shadow-lg"
          >
            {t('story.cta')}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};