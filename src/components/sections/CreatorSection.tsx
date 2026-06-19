'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const journeyMilestones = [
  { emoji: '💡', text: 'An idea born during late-night coding sessions' },
  { emoji: '🎬', text: 'First short filmed with a phone and a red tie' },
  { emoji: '📱', text: 'YouTube, Instagram, Facebook — one hero, three platforms' },
  { emoji: '🚀', text: 'A side project turned into a universe of positivity' },
];

export default function CreatorSection() {
  return (
    <section
      id="creator"
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #111827 50%, #0F172A 100%)',
      }}
    >
      {/* Subtle top/bottom dividers */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small label */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            }}
          >
            <span className="text-sm">🎭</span>
            <span className="font-body text-xs font-semibold text-purple-400/80 uppercase tracking-widest">
              Behind The Mask
            </span>
          </div>

          <h2
            className="font-heading font-bold text-white/90 mb-2"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
          >
            The{' '}
            <span style={{ color: '#A78BFA' }}>Creator</span>
          </h2>
        </motion.div>

        {/* Compact card layout */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left — Compact profile strip */}
            <div
              className="md:w-64 flex-shrink-0 p-6 flex flex-col items-center text-center"
              style={{
                background: 'rgba(139, 92, 246, 0.04)',
                borderRight: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {/* Small profile image */}
              <div
                className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0"
                style={{
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)',
                }}
              >
                <Image
                  src="/images/dinesh_creator.webp"
                  alt="Dinesh"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="font-heading font-bold text-lg text-white mb-0.5">
                Dinesh
              </h3>
              <p className="font-body text-xs text-purple-400/70 mb-4">
                Data &amp; AI Lead
              </p>

              {/* Links — compact */}
              <div className="flex flex-col gap-2 w-full">
                <a
                  href="https://dinesh-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="creator-portfolio-link"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-body text-xs font-medium text-white/70 hover:text-white transition-colors"
                  style={{
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  Portfolio →
                </a>
                <a
                  href="mailto:therealsuitman@gmail.com"
                  id="creator-email-link"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-body text-xs font-medium text-white/50 hover:text-white/70 transition-colors"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                  Email
                </a>
              </div>
            </div>

            {/* Right — Story + milestones */}
            <div className="flex-1 p-6 sm:p-8">
              {/* Story text */}
              <p className="font-body text-white/65 text-sm leading-relaxed mb-2">
                Dinesh never planned to create a superhero. As a Data &amp; AI Lead, his days were filled with
                pipelines, models, and production deploys. But somewhere between
                a <code className="font-mono text-xs px-1 py-0.5 rounded" style={{ background: 'rgba(59,130,246,0.15)', color: '#93C5FD' }}>git commit</code> and
                a coffee refill, an idea took shape.
              </p>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
                What if a regular tech guy became the world&apos;s most unlikely superhero? Armed with
                nothing but a phone, a red tie, and weekends — Suit-Man was born.
              </p>

              {/* Milestones — compact inline */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {journeyMilestones.map((m, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <span className="text-base flex-shrink-0">{m.emoji}</span>
                    <span className="font-body text-white/50 text-xs leading-relaxed">{m.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Closing line */}
              <p className="font-body text-white/40 text-xs italic">
                &quot;Suit-Man started as a joke between me and my phone camera. Now it&apos;s a universe
                where young people learn that every person has a hidden superpower.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
