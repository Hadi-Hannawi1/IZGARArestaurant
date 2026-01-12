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
    }, 3800);

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
          className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full blur-sm animate-pulse"
          style={{ background: '#D32F2F', opacity: 0.3, animationDelay: '0s' }}
        />
        <div 
          className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full blur-sm animate-pulse"
          style={{ background: '#FFA726', opacity: 0.2, animationDelay: '0.2s' }}
        />
        <div 
          className="absolute bottom-[30%] left-[25%] w-2 h-2 rounded-full blur-sm animate-pulse"
          style={{ background: '#D32F2F', opacity: 0.4, animationDelay: '0.4s' }}
        />
        <div 
          className="absolute bottom-[15%] right-[30%] w-4 h-4 rounded-full blur-sm animate-pulse"
          style={{ background: '#FFA726', opacity: 0.3, animationDelay: '0.6s' }}
        />
        <div 
          className="absolute top-[40%] left-[10%] w-2 h-2 rounded-full blur-sm animate-pulse"
          style={{ background: '#D32F2F', opacity: 0.25, animationDelay: '0.8s' }}
        />
        <div 
          className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full blur-sm animate-pulse"
          style={{ background: '#FFA726', opacity: 0.35, animationDelay: '1s' }}
        />
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />

      {/* Main Content - GUARANTEED VISIBLE */}
      <div className="relative z-10 text-center px-8" style={{ opacity: 1, visibility: 'visible' }}>
        {/* Main Title - IZGARA - ALWAYS VISIBLE */}
        <h1
          className="font-playfair font-black mb-8 select-none"
          style={{
            fontSize: 'clamp(4rem, 15vw, 10rem)',
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #FFFAF0 0%, #FFA726 50%, #D32F2F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(211, 47, 47, 0.5)) drop-shadow(0 10px 40px rgba(255, 167, 38, 0.3))',
            opacity: 1,
            visibility: 'visible',
            animation: 'fadeInUp 1s ease-out forwards',
            animationDelay: '0.2s',
          }}
        >
          IZGARA
        </h1>

        {/* Decorative Line */}
        <div
          className="mx-auto mb-6 rounded-full relative overflow-hidden"
          style={{
            width: '16rem',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #FFA726, #D32F2F, #FFA726, transparent)',
            boxShadow: '0 0 20px rgba(255, 167, 38, 0.6)',
            opacity: 1,
            visibility: 'visible',
            animation: 'scaleIn 1s ease-out forwards',
            animationDelay: '0.6s',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              animation: 'shimmer 2s infinite linear',
            }}
          />
        </div>

        {/* Subtitle - PARIS */}
        <p
          className="font-inter font-light tracking-[0.4em] uppercase mb-4"
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.75rem)',
            color: '#FFA726',
            textShadow: '0 0 30px rgba(255, 167, 38, 0.8)',
            opacity: 1,
            visibility: 'visible',
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '0.8s',
          }}
        >
          PARIS
        </p>

        {/* Accent text */}
        <p 
          className="font-inter text-sm tracking-widest"
          style={{ 
            color: 'rgba(245, 245, 220, 0.6)',
            opacity: 1,
            visibility: 'visible',
            animation: 'fadeIn 0.8s ease-out forwards',
            animationDelay: '1s',
          }}
        >
          Authentic Turkish Cuisine
        </p>
      </div>

      {/* Bottom accent */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2" 
        style={{ 
          opacity: 1,
          visibility: 'visible',
          animation: 'fadeIn 0.8s ease-out forwards',
          animationDelay: '1.2s',
        }}
      >
        <div 
          className="w-1 h-12 animate-pulse" 
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255, 167, 38, 0.5), transparent)',
          }}
        />
      </div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
