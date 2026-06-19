'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Origin', href: '#origin' },
    { label: 'Powers', href: '#powers' },
    { label: 'Villains', href: '#villains' },
    { label: 'Socials', href: '#socials' },
    { label: 'Timeline', href: '#timeline' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(15, 23, 42, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-red-500/40 relative"
              style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)' }}
            >
              <Image
                src="/images/Suitman_face.webp"
                alt="Suit-Man logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span
              className="font-heading font-bold text-xl text-white hidden sm:block"
              style={{ letterSpacing: '-0.02em' }}
            >
              Suit<span style={{ color: '#EF4444' }}>-Man</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: '#EF4444' }}
                />
              </a>
            ))}
            <a
              href="#socials"
              className="btn-hero btn-primary text-sm px-5 py-2.5"
              id="nav-cta"
            >
              📱 Follow Suit-Man
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                }}
              />
              <span
                className="h-0.5 bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#socials"
            className="btn-hero btn-primary text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            📱 Follow Suit-Man
          </a>
        </div>
      </div>
    </nav>
  );
}
