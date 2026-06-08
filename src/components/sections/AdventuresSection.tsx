'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder video data - user replaces with actual YouTube links
const featuredVideo = {
  id: 'cRpbhs7UuwA',
  title: 'Trading screen time for story time! 🦸‍♂️📖',
  description: 'Balance is a superpower! Suit-Man (Dinesh) helps kids and families trade screen time for story time, making reading the ultimate hero adventure.',
  duration: '0:42',
  views: '26 views',
  category: 'Special',
};

const playlist = [
  {
    id: '-nQ-JzcrUjs',
    title: 'Every drop counts! 💧🦸‍♂️',
    duration: '0:35',
    views: '1.9K',
    category: 'Adventure',
    thumbnail: null,
  },
  {
    id: 'zvYCVY0QAW8',
    title: 'How Real Heroes Handle Frustration 😡➡️😌',
    duration: '0:48',
    views: '1.5K',
    category: 'Comedy',
    thumbnail: null,
  },
  {
    id: '_wkTQN19Cek',
    title: 'No act of kindness is too small! 🦸‍♂️🐱',
    duration: '0:56',
    views: '77',
    category: 'Adventure',
    thumbnail: null,
  },
  {
    id: 'rl7BHrXo1lY',
    title: 'Catching bad habits at super speed! ⚡♻️',
    duration: '0:38',
    views: '45',
    category: 'Battle',
    thumbnail: null,
  },
  {
    id: 'cRpbhs7UuwA',
    title: 'Trading screen time for story time! 🦸‍♂️📖',
    duration: '0:42',
    views: '26',
    category: 'Special',
    thumbnail: null,
  },
  {
    id: 'youtube-link',
    title: 'Explore More on YouTube! 🚀',
    duration: 'Link',
    views: 'Visit Channel',
    category: 'Special',
    isLink: true,
    thumbnail: null,
  },
];

const categoryColors: Record<string, string> = {
  'Origin Story': '#3B82F6',
  Battle: '#EF4444',
  Adventure: '#F59E0B',
  Educational: '#22C55E',
  Comedy: '#F97316',
  Special: '#8B5CF6',
};

function VideoThumbnail({
  videoId,
  title,
  isLink,
}: {
  videoId: string;
  title: string;
  isLink?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  // Generate YouTube thumbnail URL
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  if (isLink) {
    return (
      <div
        className="relative overflow-hidden w-full"
        style={{ paddingBottom: '56.25%', background: 'linear-gradient(135deg, #1e1b4b, #311042)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <span className="text-4xl mb-1">🎬</span>
          <span className="font-heading font-black text-xs text-center text-blue-300 tracking-wider">
            @THE_REAL_DINESH
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden bg-gray-900 w-full"
      style={{ paddingBottom: '56.25%' }}
    >
      {!imageError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        // Placeholder thumbnail with gradient
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #1E293B, #0F172A)',
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-2">🎬</div>
            <div className="font-body text-white/40 text-xs px-4 text-center">{title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function PlayButton({ isLink }: { isLink?: boolean }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ zIndex: 2 }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: isLink ? 'rgba(59, 130, 246, 0.9)' : 'rgba(239, 68, 68, 0.9)' }}
      >
        {isLink ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Open Link">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-label="Play">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function AdventuresSection() {
  const [activeVideo, setActiveVideo] = useState(featuredVideo);
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <section
      id="adventures"
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
            <span>▶️</span>
            <span className="font-body text-sm font-semibold text-red-300 uppercase tracking-widest">
              Chapter 6 — Adventures
            </span>
          </div>

          <h2
            className="font-heading font-black text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Watch Suit-Man{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FCA5A5, #EF4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Adventures
            </span>
          </h2>

          <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Follow Suit-Man as he protects the city and helps people solve impossible problems.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(239, 68, 68, 0.3)',
              boxShadow: '0 20px 60px rgba(239, 68, 68, 0.15)',
            }}
          >
            {/* Video embed area */}
            <div className="relative group cursor-pointer" onClick={() => setShowEmbed(true)}>
              {showEmbed ? (
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative">
                  <VideoThumbnail videoId={activeVideo.id} title={activeVideo.title} />
                  <PlayButton />

                  {/* Featured badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full font-body text-xs font-bold uppercase tracking-wider"
                    style={{ background: '#EF4444', color: 'white' }}
                  >
                    ▶ Featured
                  </div>
                </div>
              )}
            </div>

            {/* Video info */}
            <div
              className="p-5 sm:p-6"
              style={{ background: 'rgba(15, 23, 42, 0.9)' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-2"
                    style={{
                      background: `${categoryColors[activeVideo.category]}20`,
                      color: categoryColors[activeVideo.category],
                      border: `1px solid ${categoryColors[activeVideo.category]}40`,
                    }}
                  >
                    {activeVideo.category}
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-1">{activeVideo.title}</h3>
                  <p className="font-body text-white/60 text-sm">{activeVideo.description}</p>
                </div>
                <div className="text-right text-sm text-white/40 flex-shrink-0">
                  <div>{activeVideo.duration}</div>
                  <div>{activeVideo.views}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Playlist */}
        <motion.h3
          className="font-heading font-bold text-white/70 text-lg mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📺 More Adventures
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {playlist.map((video, i) => (
            <motion.div
              key={i}
              id={`video-${i}`}
              className="rounded-xl overflow-hidden cursor-pointer group"
              style={{
                border: `1px solid ${activeVideo.id === video.id ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255,255,255,0.08)'}`,
                background: 'rgba(30, 41, 59, 0.5)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => {
                if ('isLink' in video && video.isLink) {
                  window.open("https://www.youtube.com/@the_real_dinesh", "_blank", "noopener,noreferrer");
                  return;
                }
                setActiveVideo({
                  ...video,
                  views: video.views + ' views',
                  description: `Watch Suit-Man in this action-packed episode: ${video.title}`,
                });
                setShowEmbed(false);
                const adventuresSection = document.getElementById('adventures');
                if (adventuresSection) {
                  adventuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Thumbnail */}
              <div className="relative">
                <VideoThumbnail videoId={video.id} title={video.title} isLink={'isLink' in video ? video.isLink : false} />
                <PlayButton isLink={'isLink' in video ? video.isLink : false} />
                {/* Duration badge */}
                {!('isLink' in video && video.isLink) && (
                  <div
                    className="absolute bottom-2 right-2 px-2 py-0.5 rounded font-mono text-xs font-bold"
                    style={{ background: 'rgba(0,0,0,0.8)', color: 'white' }}
                  >
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div
                  className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-2"
                  style={{
                    background: `${categoryColors[video.category]}15`,
                    color: categoryColors[video.category],
                  }}
                >
                  {video.category}
                </div>
                <h4 className="font-heading font-semibold text-white text-sm leading-tight mb-1">
                  {video.title}
                </h4>
                <p className="font-body text-white/40 text-xs">
                  {'isLink' in video && video.isLink ? video.views : `${video.views} views`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://www.youtube.com/@the_real_dinesh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero btn-primary inline-flex items-center gap-3"
            id="youtube-subscribe-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
