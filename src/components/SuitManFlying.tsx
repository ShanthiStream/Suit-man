'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SuitManFlying() {
  const characterRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);
  const trail3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!characterRef.current) return;

    const character = characterRef.current;
    const isMobile = window.innerWidth < 768;

    // Sync GSAP ScrollTrigger with Lenis
    const syncLenis = () => {
      ScrollTrigger.refresh();
    };

    // Wait a tick for Lenis to be set up
    const timeout = setTimeout(() => {
      const lenisInstance = (window as unknown as Record<string, unknown>).lenis;
      if (lenisInstance && typeof (lenisInstance as Record<string, unknown>).on === 'function') {
        (lenisInstance as { on: (event: string, cb: () => void) => void }).on('scroll', ScrollTrigger.update);
      }
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop() {
          return lenisInstance ? (lenisInstance as { scroll: number }).scroll : window.scrollY;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed',
      });
      syncLenis();
    }, 300);

    // Character size
    const charSize = isMobile ? 130 : 200;
    gsap.set(character, {
      width: charSize,
      height: charSize,
      position: 'fixed',
      zIndex: 100,
      x: -charSize,
      y: window.innerHeight * 0.3,
      scaleX: 1,
    });

    // ---- Build the scroll-linked timeline ----
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    const W = window.innerWidth;
    const H = window.innerHeight;
    const cw = charSize;

    // Entry: fly in from left
    tl.to(character, { x: W * 0.5, y: H * 0.15, duration: 3, ease: 'power2.out' })
      // Fly up and across hero section
      .to(character, { x: W * 0.8, y: H * 0.05, duration: 2, ease: 'sine.inOut' })
      // Exit right, reappear left (flip)
      .to(character, { x: W + cw, y: H * 0.2, duration: 1, ease: 'power2.in' })
      .set(character, { x: -cw, y: H * 0.5, scaleX: 1 })
      // Fly through section 2
      .to(character, { x: W * 0.6, y: H * 0.4, duration: 3, ease: 'sine.inOut' })
      // Barrel roll
      .to(character, { rotate: 360, duration: 1, ease: 'power1.inOut' }, '<+=1')
      .to(character, { rotate: 0, duration: 0.1 }, '>')
      // Section 3 - transformation scene, orbit around center
      .to(character, { x: W * 0.2, y: H * 0.6, duration: 2, ease: 'sine.inOut' })
      .to(character, { x: W * 0.8, y: H * 0.3, duration: 2, ease: 'sine.inOut' })
      // Exit right
      .to(character, { x: W + cw, y: H * 0.2, duration: 1.5, ease: 'power2.in' })
      // Section 4 - reappear from top
      .set(character, { x: W * 0.1, y: -200 })
      .to(character, { x: W * 0.5, y: H * 0.25, duration: 2, ease: 'bounce.out' })
      // Hover above powers section
      .to(character, { x: W * 0.7, y: H * 0.3, duration: 3, ease: 'sine.inOut' })
      // Section 5 - fast dash across
      .to(character, { x: -cw, y: H * 0.15, duration: 1.5, ease: 'power3.in' })
      .set(character, { x: W + cw, y: H * 0.4, scaleX: -1 })
      .to(character, { x: W * 0.4, y: H * 0.2, duration: 2, ease: 'power2.out' })
      .to(character, { x: W * 0.5, y: H * 0.1, duration: 1, ease: 'sine.inOut' })
      // Section 6 - villains - dramatic descent
      .to(character, { x: W * 0.5, y: H * 0.5, duration: 2, rotate: -20, ease: 'power2.inOut' })
      .to(character, { rotate: 0, duration: 0.5 })
      // Battle barrel rolls
      .to(character, { rotate: -360, duration: 0.8, ease: 'power2.inOut' })
      .to(character, { rotate: 0, duration: 0.2 })
      // Section 7 - adventures, fly calmly
      .set(character, { scaleX: 1, x: -cw, y: H * 0.3 })
      .to(character, { x: W * 0.8, y: H * 0.2, duration: 4, ease: 'sine.inOut' })
      // Section 8 - timeline, hover slowly
      .to(character, { x: W * 0.1, y: H * 0.35, duration: 3, ease: 'sine.inOut' })
      // Section 9 - kids section, playful bounce
      .to(character, { x: W * 0.6, y: H * 0.2, duration: 2, ease: 'bounce.out' })
      .to(character, { y: H * 0.35, duration: 1, ease: 'sine.inOut' })
      // Section 10 - legacy
      .to(character, { x: W * 0.8, y: H * 0.4, duration: 2, ease: 'sine.inOut' })
      // Final CTA - fly toward viewer (scale up dramatically)
      .to(character, { x: W * 0.5 - charSize / 2, y: H * 0.5 - charSize * 0.5, scale: isMobile ? 2 : 2.5, duration: 3, ease: 'power2.in' })
      .to(character, { scale: isMobile ? 3 : 4, opacity: 0, duration: 1, ease: 'power2.out' });

    // Speed trail effect
    const trailTl = gsap.timeline({ repeat: -1 });
    if (trailRef.current && trail2Ref.current && trail3Ref.current) {
      // trails follow character with delay
      gsap.to(trailRef.current, { opacity: 0.6, duration: 0.1 });
      gsap.to(trail2Ref.current, { opacity: 0.4, duration: 0.1 });
      gsap.to(trail3Ref.current, { opacity: 0.2, duration: 0.1 });
    }
    void trailTl;

    return () => {
      clearTimeout(timeout);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Speed trail elements */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[99]"
        style={{
          width: 80,
          height: 4,
          background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6))',
          borderRadius: 2,
          opacity: 0,
          filter: 'blur(2px)',
        }}
      />
      <div
        ref={trail2Ref}
        className="pointer-events-none fixed z-[99]"
        style={{
          width: 120,
          height: 3,
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5))',
          borderRadius: 2,
          opacity: 0,
          filter: 'blur(3px)',
        }}
      />
      <div
        ref={trail3Ref}
        className="pointer-events-none fixed z-[99]"
        style={{
          width: 60,
          height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.4))',
          borderRadius: 2,
          opacity: 0,
          filter: 'blur(4px)',
        }}
      />

      {/* Suit-Man character */}
      <div
        ref={characterRef}
        className="pointer-events-none"
        style={{
          position: 'fixed',
          zIndex: 100,
          willChange: 'transform',
          filter: 'drop-shadow(0 8px 24px rgba(59,130,246,0.5)) drop-shadow(0 0 40px rgba(239,68,68,0.3))',
        }}
      >
        <Image
          src="/images/suitman_flying.png"
          alt="Suit-Man flying"
          width={200}
          height={200}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </>
  );
}
