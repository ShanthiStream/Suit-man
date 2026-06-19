'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FloatingParticles from '../FloatingParticles';

// Pre-computed deterministic window light pattern (no Math.random() in render)
// Alternating pattern that looks natural but is stable across SSR + hydration
const WINDOW_OPACITIES = [
  '0.8','0.2','0.8','0.8','0.2','0.8','0.2','0.8','0.8','0.2',
  '0.8','0.8','0.2','0.8','0.2','0.2','0.8','0.8','0.2','0.8',
  '0.2','0.8','0.8','0.2','0.8','0.8','0.2','0.8','0.2','0.8',
];

// Animated city skyline SVG
function CitySkyline() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 right-0 w-full"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {/* Far buildings - dark navy */}
      <rect x="0" y="180" width="60" height="140" fill="#0F172A" opacity="0.7" />
      <rect x="55" y="150" width="40" height="170" fill="#1E293B" opacity="0.7" />
      <rect x="90" y="120" width="50" height="200" fill="#0F172A" opacity="0.8" />
      <rect x="135" y="160" width="35" height="160" fill="#1E293B" opacity="0.7" />
      <rect x="165" y="100" width="70" height="220" fill="#0F172A" opacity="0.9" />
      <rect x="230" y="130" width="45" height="190" fill="#1E293B" opacity="0.8" />
      <rect x="270" y="170" width="55" height="150" fill="#0F172A" opacity="0.7" />
      <rect x="320" y="90" width="80" height="230" fill="#1E293B" opacity="0.9" />
      <rect x="395" y="140" width="50" height="180" fill="#0F172A" opacity="0.8" />
      <rect x="440" y="110" width="65" height="210" fill="#1E293B" opacity="0.9" />
      <rect x="500" y="160" width="40" height="160" fill="#0F172A" opacity="0.7" />
      <rect x="535" y="80" width="90" height="240" fill="#1E293B" opacity="0.9" />
      {/* Antenna on tallest */}
      <rect x="577" y="50" width="5" height="30" fill="#3B82F6" opacity="0.8" />
      <rect x="620" y="130" width="55" height="190" fill="#0F172A" opacity="0.8" />
      <rect x="670" y="100" width="75" height="220" fill="#1E293B" opacity="0.9" />
      <rect x="740" y="150" width="45" height="170" fill="#0F172A" opacity="0.7" />
      <rect x="780" y="85" width="85" height="235" fill="#1E293B" opacity="0.95" />
      <rect x="820" y="55" width="5" height="30" fill="#EF4444" opacity="0.8" />
      <rect x="860" y="120" width="60" height="200" fill="#0F172A" opacity="0.8" />
      <rect x="915" y="145" width="50" height="175" fill="#1E293B" opacity="0.7" />
      <rect x="960" y="95" width="70" height="225" fill="#0F172A" opacity="0.9" />
      <rect x="1025" y="135" width="55" height="185" fill="#1E293B" opacity="0.8" />
      <rect x="1075" y="165" width="40" height="155" fill="#0F172A" opacity="0.7" />
      <rect x="1110" y="105" width="80" height="215" fill="#1E293B" opacity="0.9" />
      <rect x="1185" y="125" width="65" height="195" fill="#0F172A" opacity="0.8" />
      <rect x="1245" y="155" width="45" height="165" fill="#1E293B" opacity="0.7" />
      <rect x="1285" y="90" width="75" height="230" fill="#0F172A" opacity="0.9" />
      <rect x="1355" y="140" width="85" height="180" fill="#1E293B" opacity="0.8" />

      {/* Building windows - deterministic pattern, no Math.random() in render */}
      {WINDOW_OPACITIES.map((opacity, i) => (
        <rect
          key={i}
          x={Math.floor(i * 47 + 10)}
          y={Math.floor(100 + (i % 5) * 30)}
          width="6"
          height="8"
          fill="#F59E0B"
          opacity={opacity}
        />
      ))}

      {/* Ground */}
      <rect x="0" y="310" width="1440" height="10" fill="#0F172A" />
    </svg>
  );
}

// Animated clouds
function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Cloud 1 */}
      <motion.div
        className="absolute"
        style={{ top: '12%', left: '-220px' }}
        animate={{ x: ['0px', '110vw'] }}
        transition={{ duration: 65, repeat: Infinity, ease: 'linear', delay: 0 }}
      >
        <Image
          src="/images/pixar_cloud1.webp"
          alt="Fluffy Cloud"
          width={220}
          height={220}
          style={{ opacity: 0.85, objectFit: 'contain' }}
        />
      </motion.div>

      {/* Cloud 2 */}
      <motion.div
        className="absolute"
        style={{ top: '6%', left: '-300px' }}
        animate={{ x: ['0px', '110vw'] }}
        transition={{ duration: 85, repeat: Infinity, ease: 'linear', delay: 25 }}
      >
        <Image
          src="/images/pixar_cloud2.webp"
          alt="Puffy Cloud"
          width={260}
          height={260}
          style={{ opacity: 0.8, objectFit: 'contain' }}
        />
      </motion.div>

      {/* Cloud 3 - small */}
      <motion.div
        className="absolute"
        style={{ top: '22%', left: '-150px' }}
        animate={{ x: ['0px', '110vw'] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear', delay: 12 }}
      >
        <Image
          src="/images/pixar_cloud1.webp"
          alt="Small Fluffy Cloud"
          width={130}
          height={130}
          style={{ opacity: 0.65, objectFit: 'contain' }}
        />
      </motion.div>
    </div>
  );
}

// Sun rays
function SunRays() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ top: '4%', right: '12%', zIndex: 1 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
        transition={{ 
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' }, 
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } 
        }}
        style={{ width: 240, height: 240, position: 'relative' }}
      >
        <Image
          src="/images/pixar_sun.webp"
          alt="Sun"
          fill
          sizes="240px"
          style={{
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 40px rgba(245,158,11,0.5))',
          }}
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0C1445 0%, #1a3a8f 20%, #2563eb 50%, #3b82f6 70%, #7dd3fc 90%, #bae6fd 100%)',
      }}
    >
      {/* Particles */}
      <FloatingParticles count={30} colors={['#60A5FA', '#93C5FD', '#BAE6FD', '#FCD34D', '#FCA5A5']} />

      {/* Sun */}
      <SunRays />

      {/* Clouds */}
      <Clouds />

      {/* City skyline */}
      <CitySkyline />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 pb-48">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="glass px-5 py-2.5 flex items-center gap-2"
            style={{ borderRadius: 50 }}
          >
            <span style={{ fontSize: '1.2rem' }}>🦸</span>
            <span
              className="font-body text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#FCD34D' }}
            >
              Origin Story
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-heading font-black text-white mb-6"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textShadow: '0 4px 40px rgba(0,0,0,0.4)',
          }}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Meet{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 30%, #EF4444 70%, #DC2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(239,68,68,0.6))',
            }}
          >
            Suit-Man
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="font-heading font-medium text-white/80 mb-10"
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', letterSpacing: '-0.01em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The Data Engineer Who Accidentally Became A Superhero
        </motion.h2>

        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div
            className="glass p-8 text-left"
            style={{ borderRadius: 24 }}
          >
            <p className="font-body text-white/80 leading-relaxed mb-4" style={{ fontSize: '1.05rem' }}>
              Suit-Man never dreamed of becoming a superhero. He was a data engineer. His world was filled with{' '}
              <code className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'rgba(59,130,246,0.3)', color: '#93C5FD' }}>
                SQL queries
              </code>
              , data pipelines, dashboards, incident tickets, and deadlines.
            </p>
            <p className="font-body text-white/70 leading-relaxed mb-4">
              Every day was a battle against broken ETL jobs and missing reports.
            </p>
            <p className="font-body text-white/90 font-medium">
              Then everything changed. One mysterious package. One glowing red tie. One magical cape.{' '}
              <span style={{ color: '#FCA5A5' }}>And suddenly, the world had a new hero.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#socials" className="btn-hero btn-primary" id="hero-watch-btn">
            <span>📱</span>
            Follow Suit-Man
          </a>
          <a href="#origin" className="btn-hero btn-secondary" id="hero-origin-btn">
            <span>⚡</span>
            Discover Origin Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-body text-xs text-white/40 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0F172A)',
          zIndex: 5,
        }}
      />
    </section>
  );
}
