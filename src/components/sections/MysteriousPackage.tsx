'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import FloatingParticles from '../FloatingParticles';

// Lightning bolt SVG component
function LightningBolt({ delay = 0, x = 50, height = 200 }: { delay?: number; x?: number; height?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: 0, zIndex: 3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.3, 1, 0] }}
      transition={{ duration: 0.4, delay, repeat: Infinity, repeatDelay: 3 + delay }}
    >
      <svg width="20" height={height} viewBox={`0 0 20 ${height}`} aria-hidden="true">
        <polyline
          points={`10,0 4,${height * 0.4} 12,${height * 0.4} 2,${height}`}
          fill="none"
          stroke="url(#lightning-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="lightning-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Energy wave rings
function EnergyWave({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full border-2"
      style={{
        borderColor: 'rgba(239, 68, 68, 0.6)',
        left: '50%',
        top: '50%',
        translateX: '-50%',
        translateY: '-50%',
        width: 100,
        height: 100,
        zIndex: 2,
      }}
      animate={{
        scale: [1, 5, 8],
        opacity: [0.8, 0.3, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: 'easeOut',
      }}
    />
  );
}

// Story step
function StoryStep({
  step,
  text,
  highlighted,
  delay,
}: {
  step: number;
  text: string;
  highlighted?: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 mb-5"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5"
        style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)', color: 'white' }}
      >
        {step}
      </div>
      <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed">
        {highlighted
          ? text.split(highlighted).map((part, j, arr) => (
              <span key={j}>
                {part}
                {j < arr.length - 1 && (
                  <span
                    className="font-bold"
                    style={{ color: '#FCA5A5', textShadow: '0 0 10px rgba(239,68,68,0.5)' }}
                  >
                    {highlighted}
                  </span>
                )}
              </span>
            ))
          : text}
      </p>
    </motion.div>
  );
}

// The tie animation
function TieTransformation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const [phase, setPhase] = useState(0); // 0: package, 1: tie, 2: glow, 3: cape

  useEffect(() => {
    if (!inView) return;
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center py-12">
      {/* Package */}
      <motion.div
        animate={{
          scale: phase >= 1 ? 0 : 1,
          opacity: phase >= 1 ? 0 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <div
          className="w-32 h-28 rounded-xl flex items-center justify-center text-5xl"
          style={{
            background: 'linear-gradient(135deg, #92400E, #78350F)',
            border: '3px solid #D97706',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}
        >
          📦
        </div>
        <div className="text-center mt-2 font-body text-white/60 text-sm">Mysterious Package</div>
      </motion.div>

      {/* Tie - Phase 1 only (simple red tie) */}
      <motion.div
        animate={{
          scale: phase === 1 ? 1 : 0,
          opacity: phase === 1 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <div className="flex flex-col items-center">
          {/* Tie SVG */}
          <svg width="60" height="120" viewBox="0 0 60 120" aria-hidden="true">
            <polygon
              points="30,5 45,45 30,35 15,45"
              fill="#EF4444"
              stroke="#B91C1C"
              strokeWidth="1"
            />
            <polygon
              points="15,45 30,35 45,45 35,110 30,120 25,110"
              fill="#DC2626"
              stroke="#B91C1C"
              strokeWidth="1"
            />
          </svg>
          <div className="text-center mt-2 font-heading font-bold text-red-400">
            A Red Tie?
          </div>
        </div>
      </motion.div>

      {/* Glowing Power Tie - Phase 2 (Dramatic Image) */}
      <motion.div
        animate={{
          scale: phase === 2 ? 1 : 0,
          opacity: phase === 2 ? 1 : 0,
        }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
        className="absolute"
      >
        <div className="flex flex-col items-center">
          <div 
            className="w-48 h-48 rounded-2xl overflow-hidden border border-red-500/30 relative"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 0 60px rgba(245, 158, 11, 0.2)'
            }}
          >
            <Image
              src="/images/glowing_power_tie.webp"
              alt="Glowing Super Power Tie"
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-cover"
            />
          </div>
          <div className="text-center mt-3 font-heading font-black text-lg text-red-400 tracking-wider">
            ✨ GLOWING POWER TIE!
          </div>
        </div>
      </motion.div>

      {/* Cape / Transformation - Phase 3 (Suit-Man Image) */}
      <motion.div
        animate={{
          scale: phase >= 3 ? 1 : 0,
          opacity: phase >= 3 ? 1 : 0,
        }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="absolute text-center flex flex-col items-center"
      >
        <div className="relative mb-3 w-40 h-56">
          <Image
            src="/images/suitman_flying.webp"
            alt="Suit-Man Born"
            fill
            sizes="(max-width: 768px) 160px, 160px"
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(239,68,68,0.7)) drop-shadow(0 0 40px rgba(59,130,246,0.3))'
            }}
          />
        </div>
        <div
          className="font-heading font-black text-xl sm:text-2xl"
          style={{ color: '#FCA5A5', textShadow: '0 0 20px rgba(239,68,68,0.8)' }}
        >
          SUIT-MAN IS BORN!
        </div>
      </motion.div>

      {/* Energy waves (always visible when in view) */}
      {inView && phase >= 2 && (
        <>
          <EnergyWave delay={0} />
          <EnergyWave delay={0.8} />
          <EnergyWave delay={1.6} />
        </>
      )}
    </div>
  );
}

export default function MysteriousPackage() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1a0a2e 40%, #2d0a1a 70%, #0F172A 100%)',
      }}
    >
      {/* Background lightning flashes */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: ['rgba(239,68,68,0)', 'rgba(239,68,68,0.04)', 'rgba(239,68,68,0)'] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
        />
      </div>

      {/* Lightning bolts */}
      <LightningBolt delay={1} x={20} height={300} />
      <LightningBolt delay={2.5} x={75} height={250} />
      <LightningBolt delay={4} x={45} height={350} />

      {/* Red particles */}
      <FloatingParticles count={35} colors={['#EF4444', '#FCA5A5', '#DC2626', '#F59E0B', '#7C3AED']} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
            }}
          >
            <span>⚡</span>
            <span className="font-body text-sm font-semibold text-red-300 uppercase tracking-widest">
              Chapter 2 — Origin
            </span>
          </div>
          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            The Day{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCA5A5 0%, #EF4444 50%, #F97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Everything Changed
            </span>
          </h2>
        </motion.div>

        {/* Story grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - transformation visual */}
          <motion.div
            className="relative"
            style={{ minHeight: 350 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Glowing backdrop */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.15) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 70%)',
              }}
            />
            <TieTransformation />
          </motion.div>

          {/* Right - story text */}
          <div>
            <StoryStep step={1} text="It was late. The office was nearly empty. Only the glow of monitors lit the room." delay={0.1} />
            <StoryStep step={2} text="Then a package arrived. No sender. No label. No explanation." delay={0.2} />
            <StoryStep step={3} text='Inside was a perfectly folded red tie. He laughed. "A tie? Seriously?"' highlighted="red tie" delay={0.3} />
            <StoryStep step={4} text="But the moment he put it on... Something impossible happened." highlighted="impossible" delay={0.4} />
            <StoryStep step={5} text="The tie began to glow. Electric energy surged through the room. Screens flashed." highlighted="glow" delay={0.5} />
            <StoryStep step={6} text="Data streams spiraled around him. And a magnificent red cape materialized from thin air." highlighted="red cape" delay={0.6} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 p-6 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.1))',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                boxShadow: '0 0 40px rgba(239, 68, 68, 0.1)',
              }}
            >
              <p
                className="font-heading font-black text-2xl sm:text-3xl"
                style={{
                  background: 'linear-gradient(135deg, #FCA5A5, #EF4444, #F59E0B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                The transformation had begun.
              </p>
              <p className="font-body text-white/60 mt-2">And the world would never be the same.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
