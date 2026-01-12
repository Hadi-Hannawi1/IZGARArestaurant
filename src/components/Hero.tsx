import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const splashRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Splash sequence
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowContent(true);
    }, 3000);

    // Animate splash if visible
    if (showSplash && splashRef.current) {
      gsap.fromTo(
        splashRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }

    // Animate video when splash ends
    if (!showSplash && videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 0.5 }
      );
    }

    // Animate logo
    if (showContent && logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 1 }
      );
    }

    return () => clearTimeout(splashTimer);
  }, [showSplash, showContent]);

  return (
    <>
      {/* SPLASH SCREEN */}
      {showSplash && (
        <div
          ref={splashRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: '#212121',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {/* Logo */}
            <div
              style={{
                width: '150px',
                height: '150px',
                margin: '0 auto 3rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D32F2F 0%, #FFA726 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 70px rgba(211,47,47,0.7)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <span
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 900,
                  fontSize: '80px',
                  color: '#FFFFFF',
                }}
              >
                I
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 900,
                fontSize: 'clamp(60px, 10vw, 120px)',
                color: '#FFFFFF',
                letterSpacing: '0.25em',
                marginBottom: '1rem',
                textShadow:
                  '0 10px 50px rgba(211,47,47,0.8), 0 0 100px rgba(255,167,38,0.4)',
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              IZGARA
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '28px',
                color: '#FFA726',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                animation: 'fadeIn 1.5s ease-out',
              }}
            >
              PARIS
            </p>
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); box-shadow: 0 25px 70px rgba(211,47,47,0.7); }
              50% { transform: scale(1.05); box-shadow: 0 30px 90px rgba(255,167,38,0.9); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* HERO VIDEO SECTION */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#212121',
        }}
      >
        {/* Video */}
        {showContent && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0,
            }}
          >
            <source src="/videos/hero-kebab.mp4" type="video/mp4" />
          </video>
        )}

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(to bottom, rgba(33,33,33,0.3) 0%, rgba(33,33,33,0.1) 50%, rgba(33,33,33,0.4) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Logo Watermark */}
        {showContent && (
          <div
            ref={logoRef}
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              zIndex: 10,
              opacity: 0,
            }}
          >
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 900,
                fontSize: '36px',
                color: '#FFFFFF',
                letterSpacing: '0.15em',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              }}
            >
              IZGARA
            </h2>
          </div>
        )}
      </section>
    </>
  );
}
