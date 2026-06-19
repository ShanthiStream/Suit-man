'use client';

import { motion } from 'framer-motion';

const socials = [
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@the_real_suitman',
    url: 'https://www.youtube.com/@the_real_suitman/shorts',
    description: 'Watch Suit-Man in action! Short-form adventures, origin stories, and heroic moments.',
    cta: 'Watch Shorts',
    color: '#FF0000',
    gradientFrom: '#FF0000',
    gradientTo: '#CC0000',
    glowColor: 'rgba(255, 0, 0, 0.4)',
    bgColor: 'rgba(255, 0, 0, 0.08)',
    borderColor: 'rgba(255, 0, 0, 0.25)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    stats: [
      { label: 'Shorts', value: '🎬' },
      { label: 'Adventures', value: '🦸' },
      { label: 'Subscribe', value: '🔔' },
    ],
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@the_real_suitman',
    url: 'https://www.instagram.com/the_real_suitman/',
    description: 'Behind the cape! Reels, photos, and the daily life of a data engineer turned superhero.',
    cta: 'Follow on Instagram',
    color: '#E1306C',
    gradientFrom: '#F58529',
    gradientTo: '#DD2A7B',
    glowColor: 'rgba(225, 48, 108, 0.4)',
    bgColor: 'rgba(225, 48, 108, 0.08)',
    borderColor: 'rgba(225, 48, 108, 0.25)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    stats: [
      { label: 'Reels', value: '🎥' },
      { label: 'Stories', value: '📸' },
      { label: 'Follow', value: '💜' },
    ],
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'The.Real.Suitman',
    url: 'https://www.facebook.com/The.Real.Suitman/',
    description: 'Join the community! Updates, fan interactions, and exclusive Suit-Man content.',
    cta: 'Like on Facebook',
    color: '#1877F2',
    gradientFrom: '#1877F2',
    gradientTo: '#0C5DC7',
    glowColor: 'rgba(24, 119, 242, 0.4)',
    bgColor: 'rgba(24, 119, 242, 0.08)',
    borderColor: 'rgba(24, 119, 242, 0.25)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    stats: [
      { label: 'Community', value: '👥' },
      { label: 'Updates', value: '📢' },
      { label: 'Like', value: '👍' },
    ],
  },
];

function SocialCard({ social, index }: { social: typeof socials[0]; index: number }) {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`social-${social.id}`}
      className="group relative block rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: social.bgColor,
        border: `1px solid ${social.borderColor}`,
      }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: `0 25px 60px ${social.glowColor}, 0 0 0 1px ${social.borderColor}`,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle, ${social.color}33 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Card content */}
      <div className="relative z-10 p-6 sm:p-8">
        {/* Platform icon + name */}
        <div className="flex items-center gap-4 mb-5">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
              boxShadow: `0 8px 25px ${social.glowColor}`,
              color: 'white',
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {social.icon}
          </motion.div>
          <div>
            <h3
              className="font-heading font-bold text-xl"
              style={{ color: social.color }}
            >
              {social.platform}
            </h3>
            <p className="font-mono text-sm text-white/50">
              {social.handle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
          {social.description}
        </p>

        {/* Stats row */}
        <div className="flex gap-3 mb-6">
          {social.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 text-center py-2.5 rounded-xl"
              style={{
                background: `${social.color}10`,
                border: `1px solid ${social.color}20`,
              }}
            >
              <div className="text-xl mb-0.5">{stat.value}</div>
              <div className="font-body text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div
          className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-heading font-bold text-sm text-white transition-all duration-300 group-hover:gap-3"
          style={{
            background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
            boxShadow: `0 4px 15px ${social.glowColor}`,
          }}
        >
          {social.icon && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176H1v3.992h15.354l-6.176 6.176L13.025 23l10.975-11z" />
            </svg>
          )}
          {social.cta}
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1"
        style={{ background: `linear-gradient(90deg, ${social.gradientFrom}, ${social.gradientTo}, transparent)` }}
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
      />
    </motion.a>
  );
}

export default function SocialSection() {
  return (
    <section
      id="socials"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0a0f1e 50%, #0F172A 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating social icons background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {['📱', '💬', '🎥', '📸', '🔔', '❤️', '🎬', '👥'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${(i * 13 + 5) % 90}%`,
              top: `${(i * 17 + 8) % 85}%`,
              opacity: 0.06,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
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
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
            }}
          >
            <span>📱</span>
            <span className="font-body text-sm font-semibold text-red-300 uppercase tracking-widest">
              Chapter 6 — Follow The Hero
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Join Suit-Man{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCA5A5, #EF4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Everywhere
            </span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Follow Suit-Man across all platforms for adventures, behind-the-scenes, and heroic content.
          </p>
        </motion.div>

        {/* Social cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <SocialCard key={social.id} social={social} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p
            className="font-heading font-black text-2xl sm:text-3xl"
            style={{
              background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Every follow makes Suit-Man stronger! 🦸
          </p>
          <p className="font-body text-white/40 mt-2 text-sm">
            Join the community and never miss an adventure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
