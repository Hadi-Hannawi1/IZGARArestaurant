import { useEffect } from 'react';
import gsap from 'gsap';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in
    tl.from('.splash-content', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Hold for 2.5 seconds
    tl.to({}, { duration: 2.5 });

    // Fade out
    tl.to('.splash-screen', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: onComplete,
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="splash-screen fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal to-charcoal">
      <div className="splash-content text-center">
        {/* Logo Circle */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center shadow-2xl">
          <span className="text-white text-6xl font-playfair font-black">I</span>
        </div>

        {/* Restaurant Name */}
        <h1 
          className="font-playfair font-black text-white text-7xl md:text-8xl tracking-[0.2em] mb-4"
          style={{
            textShadow: '0 10px 40px rgba(211,47,47,0.6), 0 0 80px rgba(255,167,38,0.3)',
          }}
        >
          IZGARA
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-golden-yellow text-xl tracking-[0.3em] uppercase">
          Paris
        </p>
      </div>
    </div>
  );
}
