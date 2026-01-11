import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import gsap from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title into individual letters
      const titleElement = titleRef.current;
      if (titleElement) {
        const text = titleElement.textContent || '';
        titleElement.innerHTML = text
          .split('')
          .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        // Animate letters
        gsap.from(titleElement.querySelectorAll('span'), {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Animate tagline
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.out',
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.8,
        ease: 'power2.out',
      });

      // Animate CTAs
      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        delay: 2.1,
        ease: 'power2.out',
      });

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReservation = (e: React.MouseEvent) => {
    e.preventDefault();
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-kebab.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[2] h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center"
      >
        {/* Title */}
        <div
          ref={titleRef}
          className="text-6xl sm:text-7xl lg:text-[96px] font-display font-black text-cream mb-6"
          style={{
            letterSpacing: '0.5rem',
            textShadow: '0 4px 8px rgba(0,0,0,0.5)',
          }}
        >
          {t('hero.title')}
        </div>

        {/* Tagline */}
        <div
          ref={taglineRef}
          className="text-xl sm:text-2xl lg:text-3xl font-body font-light text-secondary mb-4 uppercase"
          style={{ letterSpacing: '0.125rem' }}
        >
          {t('hero.tagline')}
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-sm sm:text-base lg:text-lg font-body text-cream/80 mb-12"
        >
          {t('hero.subtitle')}
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={scrollToReservation}
            className="w-60 h-14 fire-gradient text-white text-base font-semibold uppercase tracking-wide rounded-lg shadow-glow hover:scale-105 transition-transform"
          >
            {t('hero.cta.reserve')}
          </button>

          <Link
            to="/menu"
            className="w-52 h-14 flex items-center justify-center bg-transparent border-2 border-cream/50 text-cream text-base font-semibold uppercase tracking-wide rounded-lg hover:bg-cream/10 hover:border-cream transition-all"
          >
            {t('hero.cta.menu')}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[2] cursor-pointer"
      >
        <IoChevronDown className="text-4xl text-secondary/80" />
      </div>
    </section>
  );
};

export default Hero;
