'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const villains = [
  {
    id: 'captain-deadline',
    name: 'Captain Deadline',
    image: '/images/captain_deadline.webp',
    subtitle: 'Master of Impossible Timelines',
    description: 'Appears from nowhere with "we need this by end of day" at 4:58 PM on a Friday.',
    power: 'Infinite Timeline Compression',
    weakness: 'Realistic project scoping',
    color: '#EF4444',
    bg: 'from-red-950 to-red-900',
    badge: 'DANGER LEVEL: EXTREME',
    badgeColor: '#EF4444',
  },
  {
    id: 'null-pointer',
    name: 'The Null Pointer',
    image: '/images/null_pointer.webp',
    subtitle: 'Creator of Mysterious Failures',
    description: 'Causes cryptic NullPointerExceptions with no stack trace. Delights in ambiguity and chaos.',
    power: 'Null Reference Injection',
    weakness: 'Null checks and defensive coding',
    color: '#8B5CF6',
    bg: 'from-purple-950 to-purple-900',
    badge: 'DANGER LEVEL: HIGH',
    badgeColor: '#8B5CF6',
  },
  {
    id: 'lord-missing-data',
    name: 'Lord Missing Data',
    image: '/images/lord_missing_data.webp',
    subtitle: 'Deleter of Critical Records',
    description: 'Makes entire dataset disappear right before quarterly reviews. Leaves no trace. No backups.',
    power: 'Data Erasure Field',
    weakness: 'Proper backup strategy',
    color: '#F59E0B',
    bg: 'from-amber-950 to-amber-900',
    badge: 'DANGER LEVEL: CRITICAL',
    badgeColor: '#F59E0B',
  },
  {
    id: 'dashboard-destroyer',
    name: 'The Dashboard Destroyer',
    image: '/images/dashboard_destroyer.webp',
    subtitle: 'Breaker of Executive Reports',
    description: 'Exclusively strikes 3 minutes before the CEO presentation. Never before. Never after.',
    power: 'Selective Report Corruption',
    weakness: 'Multiple dashboard backups',
    color: '#F97316',
    bg: 'from-orange-950 to-orange-900',
    badge: 'DANGER LEVEL: HIGH',
    badgeColor: '#F97316',
  },
  {
    id: 'dr-production-bug',
    name: 'Dr. Production Bug',
    image: '/images/dr_production_bug.webp',
    subtitle: 'Friday Evening Terror',
    description: 'Exclusively deploys catastrophic bugs at 5:01 PM on Fridays. Has never struck on a Tuesday.',
    power: 'Weekend Deployment Corruption',
    weakness: 'Feature flags and rollback plans',
    color: '#06B6D4',
    bg: 'from-cyan-950 to-cyan-900',
    badge: 'DANGER LEVEL: CATASTROPHIC',
    badgeColor: '#06B6D4',
  },
];

function VillainCard({ villain, index }: { villain: typeof villains[0]; index: number }) {
  return (
    <motion.div
      id={`villain-${villain.id}`}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))`,
        border: `2px solid ${villain.color}40`,
      }}
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.03,
        borderColor: villain.color + '80',
        boxShadow: `0 20px 60px ${villain.color}30, 0 0 0 1px ${villain.color}40`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Comic halftone background effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(${villain.color} 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
        }}
      />

      {/* Danger badge */}
      <div
        className="absolute top-3 right-3 px-2 py-1 rounded font-mono text-xs font-bold z-10"
        style={{
          background: `${villain.badgeColor}20`,
          border: `1px solid ${villain.badgeColor}50`,
          color: villain.badgeColor,
        }}
      >
        {villain.badge}
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Villain Image Card with Glow */}
        <motion.div
          className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden border"
          style={{
            borderColor: `${villain.color}30`,
            boxShadow: `0 0 25px ${villain.color}20`,
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={villain.image}
            alt={villain.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        <h3
          className="font-heading font-black text-xl mb-1"
          style={{ color: villain.color }}
        >
          {villain.name}
        </h3>

        <p className="font-body font-semibold text-white/60 text-sm mb-3 uppercase tracking-wider">
          {villain.subtitle}
        </p>

        <p className="font-body text-white/70 text-sm leading-relaxed mb-5">
          {villain.description}
        </p>

        {/* Power & Weakness */}
        <div className="space-y-2">
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
            style={{ background: `${villain.color}15`, border: `1px solid ${villain.color}30` }}
          >
            <span>⚡</span>
            <span className="font-mono text-white/60">Power:</span>
            <span className="font-mono font-bold" style={{ color: villain.color }}>
              {villain.power}
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
            style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
          >
            <span>🛡️</span>
            <span className="font-mono text-white/60">Weakness:</span>
            <span className="font-mono font-bold text-green-400">
              {villain.weakness}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom glow bar */}
      <motion.div
        className="h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${villain.color}, transparent)` }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default function VillainsSection() {
  return (
    <section
      id="villains"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1a0520 50%, #0F172A 100%)' }}
    >
      {/* Halftone dots bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#EF4444 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

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
            <span>💀</span>
            <span className="font-body text-sm font-semibold text-red-300 uppercase tracking-widest">
              Chapter 5 — Rogues Gallery
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            The Enemies{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCA5A5, #EF4444, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              of Data
            </span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Every hero has their rogues gallery. Suit-Man battles these five legendary adversaries across the data landscape.
          </p>
        </motion.div>

        {/* Villains grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villains.slice(0, 3).map((villain, i) => (
            <VillainCard key={villain.id} villain={villain} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {villains.slice(3).map((villain, i) => (
            <VillainCard key={villain.id} villain={villain} index={i + 3} />
          ))}
        </div>

        {/* Battle cry */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p
            className="font-heading font-black text-3xl sm:text-4xl"
            style={{
              background: 'linear-gradient(135deg, #FCA5A5, #EF4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Suit-Man battles them all.
          </p>
          <p className="font-body text-white/40 mt-2">One pipeline at a time.</p>
        </motion.div>
      </div>
    </section>
  );
}
