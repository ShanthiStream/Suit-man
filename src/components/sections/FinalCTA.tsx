'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import FloatingParticles from '../FloatingParticles';

// Pre-computed sunset window opacities — no Math.random() in render (prevents SSR hydration mismatch)
const SUNSET_WINDOW_OPACITIES = [
  '0.9','0.2','0.9','0.9','0.2','0.9','0.2','0.9','0.2','0.9',
  '0.9','0.2','0.9','0.9','0.2','0.2','0.9','0.9','0.2','0.9',
  '0.2','0.9','0.9','0.2','0.9','0.9','0.2','0.9','0.2','0.9',
  '0.9','0.2','0.2','0.9','0.2','0.9','0.9','0.2','0.9','0.9',
];

// Sunset city skyline for final CTA
function SunsetCitySkyline() {
  return (
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 right-0 w-full"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {/* Sunset gradient buildings */}
      <rect x="0" y="150" width="60" height="150" fill="#1a0a2e" opacity="0.9" />
      <rect x="55" y="120" width="40" height="180" fill="#2d0a1a" opacity="0.9" />
      <rect x="90" y="80" width="55" height="220" fill="#1a0a2e" opacity="1" />
      <rect x="140" y="130" width="45" height="170" fill="#2d0a1a" opacity="0.9" />
      <rect x="180" y="70" width="70" height="230" fill="#1a0a2e" opacity="1" />
      <rect x="245" y="100" width="55" height="200" fill="#2d0a1a" opacity="0.9" />
      <rect x="295" y="140" width="45" height="160" fill="#1a0a2e" opacity="0.8" />
      <rect x="335" y="60" width="85" height="240" fill="#2d0a1a" opacity="1" />
      <rect x="415" y="110" width="55" height="190" fill="#1a0a2e" opacity="0.9" />
      <rect x="465" y="85" width="70" height="215" fill="#2d0a1a" opacity="1" />
      <rect x="530" y="135" width="45" height="165" fill="#1a0a2e" opacity="0.8" />
      <rect x="570" y="55" width="95" height="245" fill="#2d0a1a" opacity="1" />
      {/* Antenna */}
      <rect x="613" y="25" width="5" height="30" fill="#F97316" opacity="0.9" />
      <rect x="660" y="110" width="60" height="190" fill="#1a0a2e" opacity="0.9" />
      <rect x="715" y="75" width="80" height="225" fill="#2d0a1a" opacity="1" />
      <rect x="790" y="125" width="50" height="175" fill="#1a0a2e" opacity="0.8" />
      <rect x="835" y="65" width="90" height="235" fill="#2d0a1a" opacity="1" />
      <rect x="920" y="100" width="65" height="200" fill="#1a0a2e" opacity="0.9" />
      <rect x="980" y="130" width="55" height="170" fill="#2d0a1a" opacity="0.8" />
      <rect x="1030" y="80" width="75" height="220" fill="#1a0a2e" opacity="1" />
      <rect x="1100" y="115" width="60" height="185" fill="#2d0a1a" opacity="0.9" />
      <rect x="1155" y="145" width="45" height="155" fill="#1a0a2e" opacity="0.8" />
      <rect x="1195" y="90" width="80" height="210" fill="#2d0a1a" opacity="1" />
      <rect x="1270" y="120" width="65" height="180" fill="#1a0a2e" opacity="0.9" />
      <rect x="1330" y="70" width="110" height="230" fill="#2d0a1a" opacity="1" />

      {/* Window lights — deterministic pattern, no Math.random() in render */}
      {SUNSET_WINDOW_OPACITIES.map((opacity, i) => (
        <rect
          key={i}
          x={Math.floor(i * 35 + 5)}
          y={Math.floor(80 + (i % 6) * 30)}
          width="5"
          height="7"
          fill={i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#F97316' : '#FCD34D'}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const suitManScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1.2, 1.6]);
  const suitManY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -80]);
  const suitManOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1a0520 15%, #2d0a1a 30%, #4a1020 45%, #7C2D12 60%, #EA580C 75%, #F97316 85%, #FCD34D 100%)',
      }}
    >
      {/* Red particles */}
      <FloatingParticles
        count={60}
        colors={['#EF4444', '#F97316', '#FCD34D', '#F59E0B', '#FBBF24', '#FCA5A5']}
      />

      {/* Sunset city */}
      <SunsetCitySkyline />

      {/* Suit-Man flying toward viewer */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          scale: suitManScale,
          y: suitManY,
          opacity: suitManOpacity,
          zIndex: 5,
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
          filter: 'drop-shadow(0 0 60px rgba(239,68,68,0.8)) drop-shadow(0 0 100px rgba(245,158,11,0.4))',
        }}
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/suitman_flying.png"
            alt="Suit-Man flying toward you"
            width={250}
            height={350}
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Top space for Suit-Man to fly in from */}
        <div className="h-60 sm:h-80" />

        {/* Headline */}
        <motion.h2
          className="font-heading font-black text-white mb-4"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          The Adventure{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FCD34D, #F97316, #EF4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Continues
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="font-heading font-bold text-white/90 mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
          >
            The sky is not the limit.
          </p>
          <p
            className="font-body text-white/60 mb-10"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
          >
            {"It's just the beginning."}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#adventures" className="btn-hero btn-primary" id="final-watch-btn">
            <span>▶</span>
            Watch Adventures
          </a>
          <a
            href="#origin"
            className="btn-hero"
            id="final-mission-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            <span>🦸</span>
            Join The Mission
          </a>
          <a href="#hero" className="btn-hero btn-secondary" id="final-meet-btn">
            <span>⚡</span>
            Meet Suit-Man
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-black text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #EF4444, #3B82F6)' }}
            >
              SM
            </div>
            <span
              className="font-heading font-bold text-xl text-white"
              style={{ letterSpacing: '-0.02em' }}
            >
              Suit<span style={{ color: '#FCA5A5' }}>-Man</span>
            </span>
          </div>
          <p className="font-body text-white/30 text-sm">
            © 2026 Suit-Man Universe. Protecting the world, one pipeline at a time.
          </p>
          <p className="font-body text-white/20 text-xs mt-2">
            Made with ☕ and 💻 by a data engineer who dared to dream.
          </p>
        </motion.div>
      </div>

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0F172A, transparent)',
          zIndex: 3,
        }}
      />
    </section>
  );
}
