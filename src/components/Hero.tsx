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
      {/* Full-Screen Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-kebab.mp4" type="video/mp4" />
      </video>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/20 pointer-events-none" />
    </section>
  );
}
