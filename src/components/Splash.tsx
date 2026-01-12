import { useEffect, useState } from 'react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });

    // Fallback in case fonts take too long
    const fontTimeout = setTimeout(() => {
      setFontsLoaded(true);
    }, 500);

    // Start fade out after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Call onComplete after fade animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(fontTimeout);
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Don't render until fonts are ready
  if (!fontsLoaded) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '4px solid rgba(255,255,255,0.1)',
          borderTop: '4px solid #FFA726',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {[
          { top: '10%', left: '15%', size: 8, color: '#D32F2F', opacity: 0.3, delay: '0s' },
          { top: '20%', right: '20%', size: 12, color: '#FFA726', opacity: 0.2, delay: '0.2s' },
          { bottom: '30%', left: '25%', size: 8, color: '#D32F2F', opacity: 0.4, delay: '0.4s' },
          { bottom: '15%', right: '30%', size: 16, color: '#FFA726', opacity: 0.3, delay: '0.6s' },
          { top: '40%', left: '10%', size: 8, color: '#D32F2F', opacity: 0.25, delay: '0.8s' },
          { top: '60%', right: '15%', size: 12, color: '#FFA726', opacity: 0.35, delay: '1s' },
        ].map((particle, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              [particle.top ? 'top' : 'bottom']: particle.top || particle.bottom,
              [particle.left ? 'left' : 'right']: particle.left || particle.right,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: particle.color,
              opacity: particle.opacity,
              filter: 'blur(2px)',
              animation: `pulse 2s ease-in-out infinite ${particle.delay}`,
            }}
          />
        ))}
      </div>

      {/* Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(211, 47, 47, 0.15) 0%, transparent 70%)',
          opacity: 0.4,
          zIndex: 2,
        }}
      />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem' }}>
        {/* IZGARA Title - GUARANTEED VISIBLE */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            letterSpacing: '0.2em',
            margin: '0 0 2rem 0',
            padding: 0,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #FFFAF0 0%, #FFA726 50%, #D32F2F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(211, 47, 47, 0.6)) drop-shadow(0 10px 50px rgba(255, 167, 38, 0.4))',
            animation: 'fadeInScale 1.2s ease-out',
            animationFillMode: 'both',
          }}
        >
          IZGARA
        </h1>

        {/* Decorative Line */}
        <div
          style={{
            width: '16rem',
            height: '4px',
            margin: '0 auto 2rem auto',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, transparent, #FFA726, #D32F2F, #FFA726, transparent)',
            boxShadow: '0 0 20px rgba(255, 167, 38, 0.6)',
            animation: 'scaleInLine 1s ease-out 0.5s',
            animationFillMode: 'both',
            transformOrigin: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              animation: 'shimmerEffect 2s infinite linear',
            }}
          />
        </div>

        {/* PARIS Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', Arial, sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#FFA726',
            textShadow: '0 0 30px rgba(255, 167, 38, 0.8)',
            margin: '0 0 1rem 0',
            animation: 'fadeInSimple 0.8s ease-out 0.8s',
            animationFillMode: 'both',
          }}
        >
          PARIS
        </p>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Inter', Arial, sans-serif",
            fontSize: '0.9rem',
            letterSpacing: '0.3em',
            color: 'rgba(245, 245, 220, 0.6)',
            margin: 0,
            animation: 'fadeInSimple 0.8s ease-out 1.2s',
            animationFillMode: 'both',
          }}
        >
          Authentic Turkish Cuisine
        </p>
      </div>

      {/* Bottom Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '3rem',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 167, 38, 0.5), transparent)',
          animation: 'fadeInSimple 0.8s ease-out 1.5s, pulse 2s ease-in-out infinite 2s',
          animationFillMode: 'both',
          zIndex: 10,
        }}
      />

      {/* All Animations Inline */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInSimple {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleInLine {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes shimmerEffect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
