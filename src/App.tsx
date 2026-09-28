/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '@/src/components/Navbar.tsx';
import { HeroSection } from '@/src/components/HeroSection.tsx';
import { SoccerSeasonSection } from '@/src/components/SoccerSeasonSection.tsx';
import { FeaturesShowcase } from '@/src/components/FeaturesShowcase.tsx';
import { SignUpHeroSection } from '@/src/components/SignUpHeroSection.tsx';
import { Footer } from '@/src/components/Footer.tsx';
import { AuthModal } from '@/src/components/AuthModal.tsx';
import { PinDetailModal, PinItem } from '@/src/components/PinDetailModal.tsx';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [selectedPin, setSelectedPin] = useState<PinItem | null>(null);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handlePinClick = (pin: PinItem) => {
    setSelectedPin(pin);
  };

  const handleSearchQuery = (query: string) => {
    // Scroll smoothly to the relevant section or open discovery
    const lower = query.toLowerCase();
    const soccerSection = document.getElementById('soccer-season');
    if (soccerSection && (lower.includes('soccer') || lower.includes('food') || lower.includes('blokette'))) {
      soccerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-red-100 selection:text-red-900">
      
      {/* Top Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onSearchQuery={handleSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section: "Create the life you love on pintrest" */}
        <HeroSection
          onJoinFree={() => handleOpenAuth('signup')}
          onAlreadyHaveAccount={() => handleOpenAuth('login')}
        />

        {/* Section 2: "Step into soccer season" */}
        <div id="soccer-season">
          <SoccerSeasonSection
            onPinClick={handlePinClick}
            onOpenAuth={() => handleOpenAuth('signup')}
          />
        </div>

        {/* Section 3: Feature Callouts */}
        <FeaturesShowcase
          onJoinPinterest={() => handleOpenAuth('signup')}
        />

        {/* Section 4: "Sign up to get your ideas" with collage & form */}
        <div id="signup">
          <SignUpHeroSection
            onSwitchToLogin={() => handleOpenAuth('login')}
            onOpenBusiness={() => handleOpenAuth('signup')}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Pin Detail Preview Modal */}
      <PinDetailModal
        pin={selectedPin}
        onClose={() => setSelectedPin(null)}
        onOpenAuth={() => handleOpenAuth('signup')}
      />

    </div>
  );
}
