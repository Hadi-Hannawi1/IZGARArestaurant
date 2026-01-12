import { useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      style={{ 
        backgroundColor: '#000',
      }}
    >
      {/* Full-Screen Video - Natural & Clear */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{
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
