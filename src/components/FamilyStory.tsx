import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FamilyStory = () => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-photo-left', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.5,
      });

      gsap.from('.timeline-photo-right', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-beige py-32 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal text-center mb-16">
          {t('story.headline')}
        </h2>

        <div ref={timelineRef} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16">
          {/* 1990 Photo */}
          <div className="timeline-photo-left relative w-full max-w-md">
            <div className="rounded-2xl overflow-hidden border-8 border-cream shadow-medium">
              <img
                src="https://source.unsplash.com/600x700/?vintage,restaurant,retro,1990s"
                alt="1990"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <div className="text-3xl font-display font-bold text-white">{t('story.year1')}</div>
                <div className="text-sm font-body text-white">{t('story.caption1')}</div>
              </div>
            </div>
          </div>

          {/* Timeline Arrow */}
          <div className="hidden lg:block">
            <svg width="100" height="4" viewBox="0 0 100 4" fill="none">
              <line x1="0" y1="2" x2="100" y2="2" stroke="url(#gradient)" strokeWidth="4"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D32F2F" />
                  <stop offset="100%" stopColor="#FFA726" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 2024 Photo */}
          <div className="timeline-photo-right relative w-full max-w-md">
            <div className="rounded-2xl overflow-hidden border-8 border-cream shadow-medium">
              <img
                src="https://source.unsplash.com/600x700/?modern,restaurant,kitchen,contemporary"
                alt="2024"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <div className="text-3xl font-display font-bold text-white">{t('story.year2')}</div>
                <div className="text-sm font-body text-white">{t('story.caption2')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-body text-charcoal/80 leading-relaxed mb-8">
            {t('story.body')}
          </p>
          <Link
            to="/story"
            className="inline-block text-base font-body font-semibold text-primary hover:underline"
          >
            {t('story.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FamilyStory;
