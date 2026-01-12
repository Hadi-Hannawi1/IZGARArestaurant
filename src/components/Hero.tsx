import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simple fade in for video
    if (videoRef.current) {
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Full-Screen Video - SUPER BRIGHT & CLEAR */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(1.2) contrast(1.1) saturate(1.05)',
        }}
      >
        <source src="/videos/hero-kebab.mp4" type="video/mp4" />
      </video>

      {/* NO DARK OVERLAY - Video is fully visible and bright */}
    </section>
  );
}
