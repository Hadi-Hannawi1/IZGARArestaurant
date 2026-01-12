import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const splashRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure elements are visible first
    if (!splashRef.current || !titleRef.current || !subtitleRef.current || !decorLineRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(decorLineRef.current, {
        opacity: 0,
        scaleX: 0,
      });

      gsap.set('.splash-particle', {
        scale: 0,
        opacity: 0,
      });

      // Animate particles
      tl.to('.splash-particle', {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, 0);

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
      }, 0.3);

      // Animate individual letters
      const letters = titleRef.current?.querySelectorAll('.letter');
      if (letters && letters.length > 0) {
        tl.from(letters, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, 0.5);
      }

      // Animate decorative line
      tl.to(decorLineRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
      }, 1);

      // Animate subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, 1.2);

      // Hold
      tl.to({}, { duration: 1.5 });

      // Fade out
      tl.to(splashRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: 'power2.inOut',
      });

    }, splashRef);

    return () => ctx.revert();
  }, [onComplete]);

  const title = "IZGARA";
  const letters = title.split('');

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
      }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="splash-particle absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-flame-red opacity-30 blur-sm" />
        <div className="splash-particle absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-golden-yellow opacity-20 blur-sm" />
        <div className="splash-particle absolute bottom-[30%] left-[25%] w-2 h-2 rounded-full bg-flame-red opacity-40 blur-sm" />
        <div className="splash-particle absolute bottom-[15%] right-[30%] w-4 h-4 rounded-full bg-golden-yellow opacity-30 blur-sm" />
        <div className="splash-particle absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-flame-red opacity-25 blur-sm" />
        <div className="splash-particle absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-golden-yellow opacity-35 blur-sm" />
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-playfair font-black mb-8 select-none"
          style={{
            fontSize: 'clamp(4rem, 15vw, 10rem)',
            letterSpacing: '0.15em',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="letter inline-block"
              style={{
                background: 'linear-gradient(135deg, #FFFAF0 0%, #FFA726 50%, #D32F2F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(211, 47, 47, 0.5)) drop-shadow(0 10px 40px rgba(255, 167, 38, 0.3))',
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Decorative Line */}
        <div
          ref={decorLineRef}
          className="w-64 h-1 mx-auto mb-6 rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, transparent, #FFA726, #D32F2F, #FFA726, transparent)',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            boxShadow: '0 0 20px rgba(255, 167, 38, 0.6)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              animation: 'shimmer 2s infinite',
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-inter font-light tracking-[0.4em] uppercase"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            color: '#FFA726',
            textShadow: '0 0 30px rgba(255, 167, 38, 0.8)',
          }}
        >
          Paris
        </p>

        {/* Accent text */}
        <p 
          className="font-inter text-cream/60 text-sm mt-4 tracking-widest"
          style={{ opacity: 0.8 }}
        >
          Authentic Turkish Cuisine
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 bg-gradient-to-b from-transparent via-golden-yellow/50 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
