'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const lessons = [
  { icon: '🔍', text: 'Solve problems', color: '#3B82F6' },
  { icon: '🤝', text: 'Help others', color: '#22C55E' },
  { icon: '📚', text: 'Never stop learning', color: '#F59E0B' },
  { icon: '🌟', text: 'Be curious', color: '#8B5CF6' },
  { icon: '💛', text: 'Stay kind', color: '#F97316' },
  { icon: '💪', text: 'Believe in yourself', color: '#EF4444' },
];

export default function KidsSection() {
  return (
    <section
      id="kids"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A 0%, #0a1e2e 30%, #0e2040 60%, #0F172A 100%)',
      }}
    >
      {/* Colorful background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
            bottom: '20%',
            right: '-5%',
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

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
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
            }}
          >
            <span>👶</span>
            <span className="font-body text-sm font-semibold text-amber-300 uppercase tracking-widest">
              Chapter 8 — For Kids
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            The Hero Kids{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCD34D, #F59E0B, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Look Up To
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - story */}
          <div>
            <motion.p
              className="font-body text-white/80 text-xl leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Children love Suit-Man because he proves that heroes come from{' '}
              <span className="font-bold text-white">ordinary places.</span>
            </motion.p>

            <motion.p
              className="font-body text-white/60 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {"You don't need to be born with powers. You don't need a secret laboratory."}
            </motion.p>

            <motion.p
              className="font-body text-white/80 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Sometimes all it takes is{' '}
              <span className="text-blue-400 font-semibold">curiosity</span>,{' '}
              <span className="text-red-400 font-semibold">courage</span>, and a little bit of{' '}
              <span className="text-amber-400 font-semibold">magic</span>.
            </motion.p>

            {/* Lessons grid */}
            <div className="grid grid-cols-2 gap-3">
              {lessons.map((lesson, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-xl"
                  style={{
                    background: `${lesson.color}12`,
                    border: `1px solid ${lesson.color}30`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {lesson.icon}
                  </motion.span>
                  <span
                    className="font-heading font-semibold text-sm"
                    style={{ color: lesson.color }}
                  >
                    {lesson.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - visual */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Kids emoji section */}
            <div className="relative">
              {/* Kids waving */}
              <div className="flex items-end justify-center gap-4 mb-4">
                {['👧🏻', '👦🏽', '👧🏾', '👦🏻', '👧🏿'].map((kid, i) => (
                  <motion.div
                    key={i}
                    className="text-4xl sm:text-5xl"
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                    style={{ fontSize: '3rem' }}
                  >
                    {kid}
                  </motion.div>
                ))}
              </div>

              {/* Speech bubbles */}
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {['There goes Suit-Man!', 'He\'s so cool! 🤩', 'My hero! ❤️'].map((bubble, i) => (
                  <motion.div
                    key={i}
                    className="px-4 py-2 rounded-full font-body text-sm font-medium"
                    style={{
                      background: i === 0 ? 'rgba(59, 130, 246, 0.2)' : i === 1 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      border: `1px solid ${i === 0 ? 'rgba(59, 130, 246, 0.4)' : i === 1 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                      color: 'white',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.5 + 1 }}
                  >
                    {"\""}{bubble}{"\""}
                  </motion.div>
                ))}
              </div>

              {/* Suit-Man flying above kids */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(59,130,246,0.5)) drop-shadow(0 0 60px rgba(239,68,68,0.3))',
                  }}
                >
                  <Image
                    src="/images/suitman_flying.png"
                    alt="Suit-Man flying above children"
                    width={220}
                    height={308}
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Fun fact card */}
            <motion.div
              className="glass p-5 rounded-2xl text-center max-w-xs"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-3xl mb-2">🌟</div>
              <p className="font-heading font-bold text-white text-lg mb-1">Did You Know?</p>
              <p className="font-body text-white/60 text-sm">
                Over <span className="text-amber-400 font-bold">1 million children</span> want to become data engineers because of Suit-Man.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
