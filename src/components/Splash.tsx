import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Call onComplete after fade animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800); // 3s hold + 0.8s fade

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
      }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-flame-red blur-sm animate-pulse"
          style={{ animationDelay: '0s', opacity: 0.3 }}
        />
        <div 
          className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-golden-yellow blur-sm animate-pulse"
          style={{ animationDelay: '0.2s', opacity: 0.2 }}
        />
        <div 
          className="absolute bottom-[30%] left-[25%] w-2 h-2 rounded-full bg-flame-red blur-sm animate-pulse"
          style={{ animationDelay: '0.4s', opacity: 0.4 }}
        />
        <div 
          className="absolute bottom-[15%] right-[30%] w-4 h-4 rounded-full bg-golden-yellow blur-sm animate-pulse"
          style={{ animationDelay: '0.6s', opacity: 0.3 }}
        />
        <div 
          className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full bg-flame-red blur-sm animate-pulse"
          style={{ animationDelay: '0.8s', opacity: 0.25 }}
        />
        <div 
          className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-golden-yellow blur-sm animate-pulse"
          style={{ animationDelay: '1s', opacity: 0.35 }}
        />
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main Content - CENTERED */}
      <div className="relative z-10 text-center px-8 splash-content">
        {/* Main Title - IZGARA */}
        <h1
          className="font-playfair font-black mb-8 select-none animate-fade-in-up"
          style={{
            fontSize: 'clamp(4rem, 15vw, 10rem)',
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #FFFAF0 0%, #FFA726 50%, #D32F2F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(211, 47, 47, 0.5)) drop-shadow(0 10px 40px rgba(255, 167, 38, 0.3))',
            animationDelay: '0.2s',
          }}
        >
          IZGARA
        </h1>

        {/* Decorative Line */}
        <div
          className="w-64 h-1 mx-auto mb-6 rounded-full relative overflow-hidden animate-scale-in"
          style={{
            background: 'linear-gradient(90deg, transparent, #FFA726, #D32F2F, #FFA726, transparent)',
            boxShadow: '0 0 20px rgba(255, 167, 38, 0.6)',
            animationDelay: '0.6s',
          }}
        >
          <div 
            className="absolute inset-0 animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            }}
          />
        </div>

        {/* Subtitle - PARIS */}
        <p
          className="font-inter font-light tracking-[0.4em] uppercase animate-fade-in mb-4"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            color: '#FFA726',
            textShadow: '0 0 30px rgba(255, 167, 38, 0.8)',
            animationDelay: '0.8s',
          }}
        >
          Paris
        </p>

        {/* Accent text */}
        <p 
          className="font-inter text-cream/60 text-sm tracking-widest animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          Authentic Turkish Cuisine
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-1 h-12 bg-gradient-to-b from-transparent via-golden-yellow/50 to-transparent animate-pulse" />
      </div>
    </div>
  );
}