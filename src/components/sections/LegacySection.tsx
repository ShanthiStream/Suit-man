'use client';

import { motion } from 'framer-motion';

const legacyPillars = [
  {
    icon: '🧩',
    title: 'Every Challenge Is an Opportunity',
    body: 'What looks like a broken pipeline is really a chance to build something better.',
    color: '#3B82F6',
  },
  {
    icon: '🔮',
    title: 'Every Problem Has a Solution',
    body: 'Even the most cryptic bug eventually yields to curiosity and persistence.',
    color: '#8B5CF6',
  },
  {
    icon: '💎',
    title: 'Hidden Potential in Everyone',
    body: 'The superhero was always inside Dinesh. The tie just helped it come out.',
    color: '#F59E0B',
  },
];

export default function LegacySection() {
  return (
    <section
      id="legacy"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #0a0a1e 50%, #0F172A 100%)',
      }}
    >
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.p
          className="font-heading font-black text-white/[0.03] select-none whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', letterSpacing: '-0.05em' }}
          animate={{ x: ['-2%', '2%', '-2%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        >
          SUIT-MAN
        </motion.p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>🌟</span>
            <span className="font-body text-sm font-semibold text-purple-300 uppercase tracking-widest">
              Chapter 9 — Legacy
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            More Than{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C084FC, #8B5CF6, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Superhero
            </span>
          </h2>
        </motion.div>

        {/* Main quote */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div
            className="inline-block p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.08), rgba(239,68,68,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="text-5xl mb-6">💭</div>
            <p
              className="font-heading font-black text-white mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.3 }}
            >
              Behind every great hero is an ordinary person who decided to do something{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                extraordinary.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Legacy pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {legacyPillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl"
              style={{
                background: `${pillar.color}0D`,
                border: `1px solid ${pillar.color}25`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                {pillar.icon}
              </motion.div>
              <h3
                className="font-heading font-bold text-base mb-2"
                style={{ color: pillar.color }}
              >
                {pillar.title}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Final inspirational paragraphs */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {[
            'Suit-Man reminds us that every challenge is an opportunity.',
            'Whether you\'re writing code, building reports, fixing bugs, or chasing dreams...',
          ].map((text, i) => (
            <motion.p
              key={i}
              className="font-body text-white/70 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 + 0.5 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="font-heading font-black text-2xl sm:text-3xl"
            style={{ color: '#FCD34D' }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The hero inside you is closer than you think. 🦸
          </motion.p>
        </div>
      </div>
    </section>
  );
}
