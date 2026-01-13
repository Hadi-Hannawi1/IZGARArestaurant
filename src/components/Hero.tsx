import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section 
      id="hero"
      className="hero-section relative w-full overflow-hidden"
      style={{ 
        backgroundColor: '#000',
        height: '100vh',
        minHeight: '100dvh',
        width: '100vw',
        position: 'relative',
      }}
    >
      {/* Full-Screen Video - FIXED ASPECT RATIO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          filter: 'brightness(1.1) contrast(1.05) saturate(1.05)',
          opacity: 1,
        }}
      >
        <source src="/videos/hero-kebab.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
