'use client';

import { motion } from 'framer-motion';
import FloatingParticles from '../FloatingParticles';

const sqlSnippets = [
  'SELECT * FROM pipelines WHERE status = "BROKEN"',
  'ERROR: NULL constraint violation',
  'INSERT INTO reports VALUES (...)',
  'JOIN deadlines ON panic = TRUE',
  'WHERE deadline < NOW()',
  'GROUP BY impossible_tasks',
  'HAVING coffee_count > 10',
  'UPDATE dashboards SET status = "FIXED"',
  'DROP TABLE sleep;',
  'CREATE INDEX ON urgency(always);',
];

const bugs = ['🐛', '🐞', '🦗', '🦟'];

function FloatingCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {sqlSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs sm:text-sm whitespace-nowrap px-3 py-1.5 rounded"
          style={{
            left: `${(i * 13 + 5) % 90}%`,
            top: `${(i * 17 + 10) % 80}%`,
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            color: '#93C5FD',
            backdropFilter: 'blur(10px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            y: [20, 0, 0, -30],
          }}
          transition={{
            duration: 6,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: sqlSnippets.length * 0.8 - 6,
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedBugs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bugs.map((bug, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 10, -5, 0],
            rotate: [0, 45, -30, 20, 0],
            opacity: [0.7, 1, 0.5, 1, 0.7],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        >
          {bug}
        </motion.div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      className="glass-dark rounded-2xl p-4 sm:p-6 w-full max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Dashboard header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="font-mono text-xs text-white/40">data_pipeline_v3.sql</span>
      </div>

      {/* Fake graph bars */}
      <div className="mb-4">
        <div className="text-xs text-white/50 mb-2 font-body">Pipeline Health</div>
        <div className="flex items-end gap-1 h-16">
          {[80, 45, 90, 30, 75, 95, 60, 85, 40, 70, 88, 55].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: h > 70
                  ? 'linear-gradient(to top, #3B82F6, #60A5FA)'
                  : h > 40
                  ? 'linear-gradient(to top, #F59E0B, #FCD34D)'
                  : 'linear-gradient(to top, #EF4444, #FCA5A5)',
                transformOrigin: 'bottom',
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Pipelines', value: '127', color: '#60A5FA' },
          { label: 'Errors', value: '14', color: '#FCA5A5' },
          { label: 'Reports', value: '89', color: '#86EFAC' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <div className="font-heading font-bold text-lg" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="font-body text-xs text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Alert */}
      <motion.div
        className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg"
        style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs">🚨</span>
        <span className="font-mono text-xs text-red-400">CRITICAL: ETL job failed at 03:47 AM</span>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BeforeTheCape() {
  return (
    <section
      id="origin"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' }}
    >
      <FloatingParticles count={20} colors={['#3B82F6', '#60A5FA', '#1D4ED8']} />
      <FloatingCode />
      <AnimatedBugs />

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
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            <span>💼</span>
            <span className="font-body text-sm font-semibold text-blue-300 uppercase tracking-widest">
              Chapter 1
            </span>
          </div>
          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Before He Could{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fly
            </span>
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            By day, Suit-Man fought a different kind of battle — one where the villains were broken data pipelines and the weapons were SQL queries.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { emoji: '🔧', text: 'He built pipelines that transformed raw chaos into meaningful insights.', highlight: 'pipelines' },
              { emoji: '📊', text: 'Generated reports that executives demanded by yesterday.', highlight: 'reports' },
              { emoji: '🚨', text: 'Solved production incidents at 3 AM — caffeinated and determined.', highlight: '3 AM' },
              { emoji: '📡', text: 'Monitored systems and answered impossible business questions.', highlight: 'impossible' },
              { emoji: '📧', text: 'And somehow survived meetings that could have been emails.', highlight: 'emails' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 mb-6"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.25)' }}
                >
                  {item.emoji}
                </div>
                <p className="font-body text-white/80 text-lg leading-relaxed pt-2">
                  {item.text.split(item.highlight).map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && (
                        <span className="font-semibold" style={{ color: '#60A5FA' }}>
                          {item.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
              }}
            >
              <p className="font-heading font-semibold text-amber-300 text-lg italic">
                {"\"Every broken data pipeline felt like a supervillain attack. Little did he know these challenges were preparing him for something much bigger.\""}
              </p>
            </motion.div>
          </motion.div>

          {/* Right - dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            <DashboardMockup />

            {/* Office glow effect */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
                zIndex: -1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
