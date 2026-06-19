'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FloatingParticles from '../FloatingParticles';

const emergencyAlerts = [
  { emoji: '🚨', msg: 'CRITICAL: ETL pipeline failure — 1.2M records lost', color: '#EF4444', delay: 0 },
  { emoji: '💥', msg: 'ALERT: Dashboard down — Executive meeting in 5 mins', color: '#F97316', delay: 1.5 },
  { emoji: '⚠️', msg: 'WARNING: Production server at 98% CPU', color: '#F59E0B', delay: 3 },
  { emoji: '✅', msg: 'RESOLVED: Suit-Man restored all systems', color: '#22C55E', delay: 4.5 },
];

const heroActions = [
  { icon: '🔧', action: 'Rescued failing pipelines', count: '847' },
  { icon: '📊', action: 'Restored lost dashboards', count: '1,203' },
  { icon: '🐛', action: 'Defeated rogue bugs', count: '50,000+' },
  { icon: '💾', action: 'Recovered missing data', count: '∞ TB' },
];

function AlertSystem() {
  return (
    <div className="space-y-3">
      {emergencyAlerts.map((alert, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{
            background: `rgba(${alert.color === '#22C55E' ? '34, 197, 94' : alert.color === '#EF4444' ? '239, 68, 68' : alert.color === '#F97316' ? '249, 115, 22' : '245, 158, 11'}, 0.1)`,
            border: `1px solid ${alert.color}40`,
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: alert.delay }}
        >
          <span className="text-xl flex-shrink-0">{alert.emoji}</span>
          <span
            className="font-mono text-sm font-medium"
            style={{ color: alert.color }}
          >
            {alert.msg}
          </span>
          {alert.color !== '#22C55E' && (
            <motion.div
              className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: alert.color }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Data stream lines SVG
function DataStream() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            top: `${10 + i * 12}%`,
            left: 0,
            right: 0,
            background: `linear-gradient(90deg, transparent, ${
              i % 3 === 0 ? 'rgba(59,130,246,0.4)' : i % 3 === 1 ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'
            }, transparent)`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            x: ['-100%', '0%', '100%'],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function SavesTheCity() {
  return (
    <section
      id="saves-city"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #1a0a0a 40%, #0a1628 80%, #0F172A 100%)',
      }}
    >
      <DataStream />
      <FloatingParticles count={25} colors={['#EF4444', '#3B82F6', '#22C55E', '#F59E0B']} />

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
            <span>🦸</span>
            <span className="font-body text-sm font-semibold text-red-300 uppercase tracking-widest">
              Chapter 4 — Rising
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            A Hero{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCA5A5, #EF4444, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Takes Flight
            </span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Soon the city needed help. Systems crashed. Reports vanished. Servers failed. Businesses panicked.
            Suit-Man answered every call.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - emergency alert system */}
          <div>
            <motion.h3
              className="font-heading font-bold text-white/80 text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🚨 City Emergency System
            </motion.h3>
            <AlertSystem />

            {/* Hero stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {heroActions.map((action, i) => (
                <motion.div
                  key={i}
                  className="glass p-4 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{action.icon}</div>
                  <div
                    className="font-heading font-black text-2xl mb-1"
                    style={{ color: '#60A5FA' }}
                  >
                    {action.count}
                  </div>
                  <div className="font-body text-white/60 text-xs">{action.action}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - story + Suit-Man */}
          <div>
            {/* Story paragraphs */}
            {[
              { text: 'Suit-Man answered every call. He rescued failing pipelines and restored lost dashboards.' },
              { text: 'He defeated rogue bugs with a single glare. Recovered missing data from the void.' },
              { text: 'And brought order back to chaos. The city had found its protector.' },
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-body text-white/80 text-lg leading-relaxed mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {para.text}
              </motion.p>
            ))}

            {/* Children pointing quote */}
            <motion.div
              className="mt-8 p-6 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(239,68,68,0.08))',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-5xl mb-3">👧🏽👦🏻👧🏾</div>
              <p
                className="font-heading font-black text-2xl sm:text-3xl"
                style={{ color: '#FCD34D' }}
              >
                {"\"There goes Suit-Man!\""}
              </p>
              <p className="font-body text-white/50 mt-2 text-sm">
                — Children everywhere, pointing at the sky
              </p>
            </motion.div>

            {/* Suit-Man image */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(59,130,246,0.5)) drop-shadow(0 0 60px rgba(239,68,68,0.3))',
                }}
              >
                <Image
                  src="/images/suitman_flying.webp"
                  alt="Suit-Man saving the city"
                  width={200}
                  height={200}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
