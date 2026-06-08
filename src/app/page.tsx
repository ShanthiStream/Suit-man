'use client';

import dynamic from 'next/dynamic';
import LenisProvider from '@/components/LenisProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import BeforeTheCape from '@/components/sections/BeforeTheCape';
import MysteriousPackage from '@/components/sections/MysteriousPackage';
import PowersSection from '@/components/sections/PowersSection';
import SavesTheCity from '@/components/sections/SavesTheCity';
import VillainsSection from '@/components/sections/VillainsSection';
import AdventuresSection from '@/components/sections/AdventuresSection';
import TimelineSection from '@/components/sections/TimelineSection';
import KidsSection from '@/components/sections/KidsSection';
import LegacySection from '@/components/sections/LegacySection';
import FinalCTA from '@/components/sections/FinalCTA';

// Dynamically import GSAP-heavy component (SSR off)
const SuitManFlying = dynamic(() => import('@/components/SuitManFlying'), {
  ssr: false,
});

export default function Home() {
  return (
    <LenisProvider>
      {/* Global flying Suit-Man character */}
      <SuitManFlying />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Section 1 - Hero */}
        <HeroSection />

        {/* Section 2 - Before the Cape */}
        <BeforeTheCape />

        {/* Section 3 - Mysterious Package */}
        <MysteriousPackage />

        {/* Section 4 - Powers */}
        <PowersSection />

        {/* Section 5 - Saves the City */}
        <SavesTheCity />

        {/* Section 6 - Villains */}
        <VillainsSection />

        {/* Section 7 - Adventures */}
        <AdventuresSection />

        {/* Section 8 - Timeline */}
        <TimelineSection />

        {/* Section 9 - Kids */}
        <KidsSection />

        {/* Section 10 - Legacy */}
        <LegacySection />

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </LenisProvider>
  );
}
