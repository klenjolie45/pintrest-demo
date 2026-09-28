/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, TrendingUp, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onSearchQuery?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const popularSearches = [
    { text: 'Game day food & dips', tag: 'Trending' },
    { text: 'Blokette styling ideas', tag: 'Soccer Season' },
    { text: 'Earthy living room decor', tag: 'Home' },
    { text: 'Team spirit nail art', tag: 'Beauty' },
    { text: 'Cherry red knit sweaters', tag: 'Fashion' },
    { text: 'Quick 20-minute dinners', tag: 'Recipes' }
  ];

  // Close search suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSearch = (term: string) => {
    setSearchQuery(term);
    setIsSearchFocused(false);
    if (onSearchQuery) {
      onSearchQuery(term);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-3 md:gap-6">
        
        {/* Left: Brand Logo & Explore */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-full p-1"
            aria-label="Pinterest Home"
          >
            {/* Pinterest Red Circle Icon */}
            <div className="w-9 h-9 rounded-full bg-[#E60023] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.48.03-3.55.14-.97.94-6.42.94-6.42s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.74 0-1.95-1.4-3.32-3.41-3.32-2.49 0-3.95 1.87-3.95 3.8 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.29-.23.95-.26 1.08-.04.18-.14.22-.33.13-1.24-.58-2.02-2.39-2.02-3.85 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.23.86-.84 1.94-1.26 2.61A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </div>
            {/* Logo Text */}
            <span className="text-xl font-bold tracking-tight text-[#E60023] hidden sm:inline-block">
              Pinterest
            </span>
          </a>

          {/* Explore Button */}
          <a
            href="#explore"
            className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-neutral-800 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <Compass className="w-4 h-4 text-neutral-600" />
            <span>Explore</span>
          </a>
        </div>

        {/* Center: Search Bar with Live Suggestions Dropdown */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-3xl hidden md:block">
          <div
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all bg-[#e9e9e9]/80 hover:bg-[#e9e9e9] ${
              isSearchFocused ? 'bg-white ring-4 ring-neutral-200/70 shadow-sm border border-neutral-300' : ''
            }`}
          >
            <Search className={`w-4 h-4 shrink-0 transition-colors ${isSearchFocused ? 'text-neutral-900' : 'text-neutral-500'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search for easy dinners, fashion, etc."
              className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Dropdown / Autocomplete Panel */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-2 px-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                Popular on Pinterest
              </div>
              <div className="space-y-1">
                {popularSearches.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSearch(item.text)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-neutral-800 hover:bg-neutral-100 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Search className="w-4 h-4 text-neutral-400 group-hover:text-red-600 transition-colors" />
                      <span className="font-medium group-hover:text-neutral-950">{item.text}</span>
                    </div>
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-600">{item.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Nav Links & Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-neutral-900">
            <a href="#about" className="px-3 py-2 rounded-full hover:bg-neutral-100 transition-colors">
              About
            </a>
            <a href="#businesses" className="px-3 py-2 rounded-full hover:bg-neutral-100 transition-colors">
              Businesses
            </a>
            <a href="#create" className="px-3 py-2 rounded-full hover:bg-neutral-100 transition-colors">
              Create
            </a>
            <a href="#news" className="px-3 py-2 rounded-full hover:bg-neutral-100 transition-colors">
              News
            </a>
          </nav>

          {/* Log in Button: Red Pill */}
          <button
            onClick={() => onOpenAuth('login')}
            className="px-4 py-2 sm:px-4.5 sm:py-2 text-sm font-semibold text-white bg-[#E60023] hover:bg-[#ad081b] active:scale-95 transition-all rounded-full shadow-sm cursor-pointer whitespace-nowrap"
          >
            Log in
          </button>

          {/* Sign up Button: Soft Gray Pill */}
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-4 py-2 sm:px-4.5 sm:py-2 text-sm font-semibold text-neutral-800 bg-[#E2E8F0] hover:bg-[#cbd5e1] active:scale-95 transition-all rounded-full cursor-pointer whitespace-nowrap"
          >
            Sign up
          </button>
        </div>

      </div>

      {/* Mobile Search Bar Row */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#e9e9e9]/90">
          <Search className="w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ideas, dinners, fashion..."
            className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};
