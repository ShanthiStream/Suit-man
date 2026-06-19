'use client';

import { motion } from 'framer-motion';

const powers = [
  {
    id: 'flight',
    icon: '✈️',
    title: 'Flight',
    subtitle: 'Travel faster than production incidents.',
    description: 'Zero to Mach 5 before your monitoring alerts even fire. No runway needed — just a deadline.',
    color: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.4)',
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Super Analytics',
    subtitle: 'Process billions of rows instantly.',
    description: 'No BigQuery slot limits. No timeout errors. Just pure data enlightenment at the speed of thought.',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 'bug-vision',
    icon: '🔍',
    title: 'Bug Vision',
    subtitle: 'Detect hidden bugs before deployment.',
    description: 'X-ray vision for code. He spots null pointer exceptions lurking three PRs into the future.',
    color: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.4)',
    bg: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.3)',
  },
  {
    id: 'deadline',
    icon: '⏰',
    title: 'Deadline Manipulation',
    subtitle: 'Deliver projects before they\'re due.',
    description: 'Time bends to his will. Projects are completed before the Jira ticket is even properly titled.',
    color: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.4)',
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.3)',
  },
  {
    id: 'dashboard',
    icon: '📈',
    title: 'Dashboard Sense',
    subtitle: 'Know exactly when executives need reports.',
    description: 'A sixth sense that tingles 5 minutes before a VP asks "can you pull this data real quick?"',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.4)',
    bg: 'rgba(6, 182, 212, 0.1)',
    border: 'rgba(6, 182, 212, 0.3)',
  },
  {
    id: 'coffee',
    icon: '☕',
    title: 'Infinite Coffee Resistance',
    subtitle: 'Marathon deployments at peak performance.',
    description: 'Immune to caffeine crashes. Can operate for 72-hour production incidents with perfect clarity.',
    color: '#D97706',
    glow: 'rgba(217, 119, 6, 0.4)',
    bg: 'rgba(217, 119, 6, 0.1)',
    border: 'rgba(217, 119, 6, 0.3)',
  },
];

function PowerCard({ power, index }: { power: typeof powers[0]; index: number }) {
  return (
    <motion.div
      id={`power-${power.id}`}
      className="power-card glass"
      style={{
        background: power.bg,
        border: `1px solid ${power.border}`,
      }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: `0 20px 60px ${power.glow}, 0 0 0 1px ${power.border}`,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${power.color}22 0%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
      />

      {/* Icon */}
      <motion.div
        className="text-4xl mb-4"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {power.icon}
      </motion.div>

      {/* Title */}
      <h3
        className="font-heading font-bold text-xl mb-1"
        style={{ color: power.color }}
      >
        {power.title}
      </h3>

      {/* Subtitle */}
      <p className="font-body font-semibold text-white/90 text-sm mb-3">
        {power.subtitle}
      </p>

      {/* Description */}
      <p className="font-body text-white/60 text-sm leading-relaxed">
        {power.description}
      </p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
        style={{ background: `linear-gradient(90deg, ${power.color}, transparent)` }}
        initial={{ width: '0%' }}
        whileInView={{ width: '60%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
      />
    </motion.div>
  );
}

export default function PowersSection() {
  return (
    <section
      id="powers"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0a1628 50%, #0F172A 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
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
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
            }}
          >
            <span>⚡</span>
            <span className="font-body text-sm font-semibold text-purple-300 uppercase tracking-widest">
              Chapter 3 — Powers
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Powers{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C084FC, #8B5CF6, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Beyond Data
            </span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            At first, Suit-Man thought he was dreaming. Then he accidentally flew through the office ceiling. Over the next few weeks, he discovered incredible abilities.
          </p>
        </motion.div>

        {/* Powers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {powers.map((power, i) => (
            <PowerCard key={power.id} power={power} index={i} />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="font-heading font-black text-3xl sm:text-4xl"
            style={{
              background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {"\"With great data comes great responsibility.\""}
          </p>
          <p className="font-body text-white/40 mt-2">— Suit-Man, probably</p>
        </motion.div>
      </div>
    </section>
  );
}
