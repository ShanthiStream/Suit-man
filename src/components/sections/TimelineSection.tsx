'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Pre-computed starfield data — no Math.random() in render (prevents SSR hydration mismatch)
const STARS = [
  { w: 2.1, h: 1.8, l: 12.3, t: 45.7, dur: 3.2, delay: 0.5 },
  { w: 1.4, h: 2.3, l: 27.8, t: 72.1, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.5, l: 41.2, t: 18.9, dur: 2.7, delay: 0.8 },
  { w: 1.7, h: 2.6, l: 58.4, t: 63.3, dur: 3.9, delay: 2.1 },
  { w: 2.4, h: 1.2, l: 73.6, t: 31.5, dur: 2.4, delay: 0.3 },
  { w: 1.1, h: 2.9, l: 88.1, t: 84.2, dur: 4.5, delay: 3.7 },
  { w: 2.7, h: 1.6, l: 5.9,  t: 92.8, dur: 3.1, delay: 1.5 },
  { w: 1.9, h: 2.1, l: 19.5, t: 7.4,  dur: 4.8, delay: 0.9 },
  { w: 2.3, h: 1.4, l: 34.7, t: 51.6, dur: 2.9, delay: 2.4 },
  { w: 1.6, h: 2.5, l: 49.2, t: 88.3, dur: 3.6, delay: 4.1 },
  { w: 2.9, h: 1.1, l: 63.8, t: 24.7, dur: 2.2, delay: 1.8 },
  { w: 1.3, h: 2.8, l: 78.4, t: 67.9, dur: 4.3, delay: 0.6 },
  { w: 2.5, h: 1.7, l: 93.1, t: 42.5, dur: 3.7, delay: 3.2 },
  { w: 1.8, h: 2.2, l: 8.7,  t: 15.8, dur: 2.6, delay: 2.9 },
  { w: 2.2, h: 1.9, l: 22.3, t: 79.4, dur: 4.0, delay: 1.4 },
  { w: 1.5, h: 2.7, l: 37.6, t: 36.2, dur: 3.4, delay: 0.2 },
  { w: 2.6, h: 1.3, l: 52.9, t: 59.7, dur: 2.8, delay: 4.6 },
  { w: 1.2, h: 2.4, l: 67.5, t: 8.1,  dur: 4.7, delay: 1.1 },
  { w: 2.8, h: 1.8, l: 82.2, t: 95.3, dur: 3.3, delay: 2.7 },
  { w: 1.7, h: 2.0, l: 96.8, t: 53.9, dur: 2.5, delay: 0.7 },
  { w: 2.0, h: 1.6, l: 14.4, t: 29.6, dur: 4.2, delay: 3.5 },
  { w: 1.4, h: 2.9, l: 29.1, t: 71.8, dur: 3.8, delay: 1.9 },
  { w: 2.7, h: 1.2, l: 43.7, t: 12.4, dur: 2.3, delay: 4.4 },
  { w: 1.9, h: 2.5, l: 58.3, t: 47.1, dur: 4.6, delay: 0.4 },
  { w: 2.3, h: 1.7, l: 72.9, t: 83.7, dur: 3.0, delay: 2.2 },
  { w: 1.6, h: 2.2, l: 87.5, t: 20.5, dur: 2.1, delay: 4.8 },
  { w: 2.9, h: 1.5, l: 3.2,  t: 65.2, dur: 4.4, delay: 1.6 },
  { w: 1.1, h: 2.8, l: 17.8, t: 39.8, dur: 3.5, delay: 3.0 },
  { w: 2.5, h: 1.3, l: 32.4, t: 97.4, dur: 2.7, delay: 0.1 },
  { w: 1.8, h: 2.6, l: 47.1, t: 6.3,  dur: 4.9, delay: 2.5 },
  { w: 2.2, h: 1.9, l: 61.7, t: 78.9, dur: 3.1, delay: 1.3 },
  { w: 1.5, h: 2.3, l: 76.3, t: 33.5, dur: 2.9, delay: 3.8 },
  { w: 2.6, h: 1.6, l: 90.9, t: 57.1, dur: 4.1, delay: 0.9 },
  { w: 1.3, h: 2.1, l: 6.5,  t: 18.7, dur: 3.6, delay: 2.0 },
  { w: 2.8, h: 1.4, l: 21.1, t: 91.3, dur: 2.4, delay: 4.3 },
  { w: 1.7, h: 2.7, l: 35.8, t: 44.9, dur: 4.7, delay: 1.7 },
  { w: 2.4, h: 1.1, l: 50.4, t: 22.6, dur: 3.3, delay: 3.4 },
  { w: 1.2, h: 2.5, l: 65.0, t: 69.2, dur: 2.6, delay: 0.5 },
  { w: 2.7, h: 1.8, l: 79.6, t: 4.8,  dur: 4.5, delay: 2.8 },
  { w: 1.9, h: 2.2, l: 94.2, t: 48.5, dur: 3.8, delay: 1.0 },
  { w: 2.1, h: 1.5, l: 11.9, t: 76.1, dur: 2.2, delay: 4.0 },
  { w: 1.6, h: 2.8, l: 26.5, t: 25.4, dur: 3.9, delay: 0.6 },
  { w: 2.9, h: 1.3, l: 41.2, t: 55.7, dur: 4.3, delay: 3.1 },
  { w: 1.4, h: 2.4, l: 55.8, t: 87.3, dur: 3.0, delay: 1.8 },
  { w: 2.5, h: 1.7, l: 70.4, t: 13.9, dur: 2.8, delay: 4.7 },
  { w: 1.1, h: 2.6, l: 84.9, t: 40.6, dur: 4.2, delay: 0.3 },
  { w: 2.3, h: 1.2, l: 99.5, t: 61.2, dur: 3.4, delay: 2.6 },
  { w: 1.8, h: 2.9, l: 16.2, t: 34.8, dur: 2.5, delay: 1.2 },
  { w: 2.7, h: 1.6, l: 30.8, t: 80.4, dur: 4.0, delay: 3.9 },
  { w: 1.5, h: 2.1, l: 45.4, t: 9.1,  dur: 3.7, delay: 0.8 },
];

const timelineEvents = [
  {
    year: 'Year 1',
    label: 'First SQL Query',
    description: 'A young Dinesh writes his very first SELECT statement. The data world will never be the same.',
    icon: '💻',
    color: '#3B82F6',
    side: 'right',
  },
  {
    year: 'Year 3',
    label: 'Pipeline Master',
    description: 'Builds complex ETL pipelines that process millions of records daily. Colleagues are impressed.',
    icon: '🔧',
    color: '#8B5CF6',
    side: 'left',
  },
  {
    year: 'Year 5',
    label: 'Data Engineering Expert',
    description: 'Recognized as a leading data engineer. Dashboards, reports, and pipelines — he masters them all.',
    icon: '🏆',
    color: '#F59E0B',
    side: 'right',
  },
  {
    year: 'Year 6',
    label: 'Received Mysterious Package',
    description: 'A package with no sender arrives late one evening. Inside: a single, perfectly folded red tie.',
    icon: '📦',
    color: '#F97316',
    side: 'left',
  },
  {
    year: 'Year 6',
    label: 'Became Suit-Man',
    description: 'The tie glowed. Electric energy filled the room. A red cape materialized. Suit-Man was born.',
    icon: '⚡',
    color: '#EF4444',
    side: 'right',
    highlight: true,
  },
  {
    year: 'Year 7',
    label: 'Saved The City',
    description: 'From failing pipelines to crashing servers — Suit-Man answered every emergency call.',
    icon: '🦸',
    color: '#22C55E',
    side: 'left',
  },
  {
    year: 'Year 8',
    label: 'Global Hero',
    description: 'Children everywhere look up to Suit-Man. His legend spans continents and time zones.',
    icon: '🌍',
    color: '#06B6D4',
    side: 'right',
  },
];

function TimelineItem({
  event,
  index,
}: {
  event: typeof timelineEvents[0];
  index: number;
}) {
  const isRight = event.side === 'right';

  return (
    <div className={`relative flex items-start mb-12 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content card */}
      <motion.div
        className={`w-5/12 ${isRight ? 'pr-8 text-right' : 'pl-8 text-left'}`}
        initial={{ opacity: 0, x: isRight ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {/* Year badge */}
        <div
          className={`inline-block font-mono text-xs font-bold px-3 py-1 rounded-full mb-3 ${isRight ? 'float-right' : 'float-left'}`}
          style={{
            background: `${event.color}20`,
            color: event.color,
            border: `1px solid ${event.color}40`,
            clear: 'both',
          }}
        >
          {event.year}
        </div>

        <div className={`clear-both ${event.highlight ? 'p-4 rounded-xl' : ''}`}
          style={event.highlight ? {
            background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.1))',
            border: '1px solid rgba(239, 68, 68, 0.4)',
          } : {}}>
          <h3
            className="font-heading font-bold text-lg mb-2"
            style={{ color: event.highlight ? '#FCA5A5' : 'white' }}
          >
            {event.label}
          </h3>
          <p className="font-body text-white/60 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="w-2/12 flex flex-col items-center relative">
        <motion.div
          className="timeline-dot z-10 relative"
          style={{
            background: event.color,
            boxShadow: `0 0 0 3px rgba(15,23,42,1), 0 0 0 5px ${event.color}, 0 0 20px ${event.color}60`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          animate={event.highlight ? {
            boxShadow: [
              `0 0 0 3px rgba(15,23,42,1), 0 0 0 5px ${event.color}, 0 0 20px ${event.color}60`,
              `0 0 0 3px rgba(15,23,42,1), 0 0 0 5px ${event.color}, 0 0 40px ${event.color}80`,
              `0 0 0 3px rgba(15,23,42,1), 0 0 0 5px ${event.color}, 0 0 20px ${event.color}60`,
            ],
          } : undefined}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            duration: 0.4,
            delay: index * 0.1 + 0.2,
            type: 'spring',
            bounce: 0.5
          }}
        >
          <div
            className="text-lg flex items-center justify-center"
            style={{ width: 20, height: 20, fontSize: '10px' }}
          >
          </div>
        </motion.div>
      </div>

      {/* Emoji side */}
      <motion.div
        className="w-5/12 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
      >
        <motion.div
          className="text-4xl sm:text-5xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            filter: `drop-shadow(0 0 15px ${event.color}80)`,
          }}
        >
          {event.icon}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0a0a1e 50%, #0F172A 100%)' }}
    >
      {/* Starfield background — pre-computed positions, no Math.random() in render */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: star.w,
              height: star.h,
              left: `${star.l}%`,
              top: `${star.t}%`,
              background: 'white',
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: star.dur,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
            }}
          >
            <span>📅</span>
            <span className="font-body text-sm font-semibold text-amber-300 uppercase tracking-widest">
              Chapter 7 — Timeline
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            The Rise of{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCD34D, #F59E0B, #EF4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              a Hero
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10"
            style={{ zIndex: 1 }}
          />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5"
            style={{
              height: lineHeight,
              background: 'linear-gradient(180deg, #EF4444, #F59E0B, #3B82F6, #22C55E)',
              zIndex: 2,
            }}
          />

          {/* Events */}
          {timelineEvents.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
