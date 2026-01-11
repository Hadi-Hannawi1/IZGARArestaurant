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

        // Animate letters with stagger
        gsap.from(titleElement.querySelectorAll('span'), {
          y: 120,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // Animate tagline
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.9,
        delay: 1.8,
        ease: 'power2.out',
      });

      // Animate CTA button
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        delay: 2.2,
        ease: 'power2.out',
      });

      // Subtle pulse on CTA (FIXED - TypeScript safe)
      const ctaButton = ctaRef.current?.querySelector('a');
      if (ctaButton) {
        gsap.to(ctaButton, {
          scale: 1.03,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 15,
        duration: 1.2,
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

      {/* Dark Overlay with Enhanced Gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center">
        
        {/* Title - Enhanced Typography */}
        <div
          ref={titleRef}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] font-playfair font-black text-cream mb-8 leading-none"
          style={{
            letterSpacing: '0.18em',
            textShadow: '0 10px 30px rgba(0,0,0,0.9), 0 5px 15px rgba(0,0,0,0.7)',
          }}
        >
          {t('hero.title')}
        </div>

        {/* Tagline - Enhanced */}
        <div
          ref={taglineRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-light text-golden-yellow mb-6 uppercase"
          style={{
            letterSpacing: '0.3em',
            textShadow: '0 4px 12px rgba(0,0,0,0.8)',
          }}
        >
          {t('hero.tagline')}
        </div>

        {/* Subtitle - Enhanced */}
        <div
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-cream/95 mb-16"
          style={{
            letterSpacing: '0.05em',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          {t('hero.subtitle')}
        </div>

        {/* Single CTA Button - No Reservation */}
        <div ref={ctaRef}>
          <Link
            to="/menu"
            className="inline-block px-14 py-6 bg-gradient-to-r from-flame-red to-golden-yellow text-white text-base sm:text-lg font-inter font-semibold uppercase tracking-widest rounded-lg transition-all duration-500 hover:scale-105"
            style={{
              letterSpacing: '0.15em',
              boxShadow: '0 10px 40px rgba(211, 47, 47, 0.6)',
            }}
          >
            {t('hero.cta.menu')}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-[2] cursor-pointer"
      >
        <IoChevronDown className="text-5xl text-golden-yellow/90" />
      </div>
    </section>
  );
};

export default Hero;