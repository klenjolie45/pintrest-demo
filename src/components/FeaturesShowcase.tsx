/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Heart, Plus, Users, Sparkles, Check, ChevronLeft } from 'lucide-react';
import skintoneDeep from '@/src/assets/images/skintone_deep_1790609694348.jpg';
import skintoneTan from '@/src/assets/images/skintone_tan_1790609706243.jpg';
import skintoneMedium from '@/src/assets/images/skintone_medium_1790609718135.jpg';
import skintoneFair from '@/src/assets/images/skintone_fair_1790609731034.jpg';
import earthyHomeDecor from '@/src/assets/images/earthy_home_decor_1790609653677.jpg';
import visualSearchFashion from '@/src/assets/images/visual_search_fashion_1790609676246.jpg';

interface FeaturesShowcaseProps {
  onJoinPinterest: () => void;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ onJoinPinterest }) => {
  // State for Feature 1: Skin Tone Picker
  const skinTones = [
    { id: 'deep', color: '#3B2219', label: 'Deep', image: skintoneDeep, tag: 'Radiant Braids & Glow' },
    { id: 'rich', color: '#683B2B', label: 'Rich', image: skintoneDeep, tag: 'Warm Bronze Highlights' },
    { id: 'tan', color: '#9E6B55', label: 'Tan', image: skintoneTan, tag: 'Sunkissed Golden Dew' },
    { id: 'warm', color: '#C89377', label: 'Warm', image: skintoneMedium, tag: 'Terracotta Lip & Liner' },
    { id: 'medium', color: '#E1B899', label: 'Medium', image: skintoneMedium, tag: 'Soft Nude Glam' },
    { id: 'fair', color: '#F7D6BF', label: 'Fair', image: skintoneFair, tag: 'Peachy Flush & Freckles' },
  ];
  const [selectedTone, setSelectedTone] = useState(skinTones[0]);

  // State for Feature 2: Group Board Collaboration
  const [boardLikes, setBoardLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  const handleToggleLike = () => {
    setHasLiked(!hasLiked);
    setBoardLikes((prev) => (hasLiked ? prev - 1 : prev + 1));
  };

  // State for Feature 3: Visual Search Tags
  const visualTags = [
    { id: 'cherry', label: '🍒 Cherry red', x: '58%', y: '16%', query: 'Red knit textures' },
    { id: 'knit', label: '🧶 Knit sweater', x: '24%', y: '42%', query: 'Oversized cozy knitwear' },
    { id: 'preppy', label: '✨ Preppy look', x: '46%', y: '78%', query: 'Pleated skirts & preppy basics' },
  ];
  const [activeVisualTag, setActiveVisualTag] = useState(visualTags[0]);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] tracking-tight leading-tight">
            Bring your favorite ideas to life
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            With Pinterest, you can unlock tools that spark your creativity and help you find more inspiration.
          </p>
        </div>

        {/* ========================================================
            FEATURE 1: Search by skin tone (Left: Mockup, Right: Copy)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 sm:mb-36">
          
          {/* Left: Interactive Skin Tone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-5 shadow-xl border border-neutral-200/80 transition-all">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4 text-neutral-500" />
                  <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                    bold lips
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#E60023]" />
                  <span>Filters</span>
                </div>
              </div>

              {/* Skin Tone Filter Range Bar */}
              <div className="my-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-neutral-800">Search by skin tone</span>
                  <span className="text-[11px] font-semibold text-red-600">{selectedTone.label} tone</span>
                </div>
                
                {/* Clickable Swatches */}
                <div className="flex items-center justify-between bg-neutral-50 p-2 rounded-2xl border border-neutral-100">
                  {skinTones.map((tone) => {
                    const isSelected = selectedTone.id === tone.id;
                    return (
                      <button
                        key={tone.id}
                        onClick={() => setSelectedTone(tone)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all flex items-center justify-center cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-black scale-110 shadow-sm'
                            : 'hover:scale-105 opacity-90'
                        }`}
                        style={{ backgroundColor: tone.color }}
                        title={tone.label}
                        aria-label={`Select ${tone.label} skin tone`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic 4-Photo Result Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {/* Main Selected Tone Portrait */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-neutral-100 group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedTone.id}
                      src={selectedTone.image}
                      alt={`${selectedTone.label} skin tone beauty idea`}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-white text-xs font-semibold leading-tight">
                      {selectedTone.tag}
                    </span>
                  </div>
                </div>

                {/* Companion Beauty Items */}
                <div className="flex flex-col gap-3">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 p-3 flex flex-col justify-between">
                    <span className="text-xs font-bold text-rose-900">Shade Match</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full border border-white shadow-sm" style={{ backgroundColor: selectedTone.color }} />
                      <span className="text-xs font-medium text-neutral-800">Tone #{selectedTone.id}</span>
                    </div>
                  </div>

                  <div className="relative flex-1 rounded-2xl overflow-hidden bg-neutral-900 text-white p-3 flex flex-col justify-center text-center">
                    <Sparkles className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                    <span className="text-xs font-bold">120K+ Ideas</span>
                    <span className="text-[10px] text-neutral-300">tailored to your shade</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Text & Join CTA */}
          <div className="lg:col-span-5 text-left space-y-5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Search by skin tone
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
              Search with skin tone ranges for beauty ideas that represent you
            </p>
            <div className="pt-2">
              <button
                onClick={onJoinPinterest}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#E60023] hover:bg-[#ad081b] active:scale-95 transition-all rounded-full shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                Join Pinterest
              </button>
            </div>
          </div>

        </div>


        {/* ========================================================
            FEATURE 2: Collaborate with group boards (Left: Copy, Right: Mockup)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 sm:mb-36">
          
          {/* Left: Text & Join CTA */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-left space-y-5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Collaborate with group boards
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
              Visualize your ideas with others, using a Pinterest account
            </p>
            <div className="pt-2">
              <button
                onClick={onJoinPinterest}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#E60023] hover:bg-[#ad081b] active:scale-95 transition-all rounded-full shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                Join Pinterest
              </button>
            </div>
          </div>

          {/* Right: Interactive Board Mockup */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md bg-stone-50 rounded-3xl p-5 shadow-xl border border-stone-200/90 transition-all">
              
              {/* Board Collage Preview */}
              <div className="grid grid-cols-3 gap-2.5 rounded-2xl overflow-hidden bg-white p-2 shadow-inner">
                {/* Main Large Board Photo */}
                <div className="col-span-2 aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={earthyHomeDecor}
                    alt="Earthy space home interior credenza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Two Stacked Pins */}
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="flex-1 rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center p-2 text-center">
                    <span className="text-xs font-bold text-amber-900">🏺 Ceramics</span>
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden bg-stone-200 flex items-center justify-center p-2 text-center">
                    <span className="text-xs font-bold text-stone-800">🪴 Olive tree</span>
                  </div>
                </div>
              </div>

              {/* Board Details & Collaboration Row */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#111111]">
                    Earthy space inspo
                  </h4>
                  <p className="text-xs text-neutral-500 font-medium">50 Pins</p>
                </div>

                {/* Overlapping Collaborator Avatars */}
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-rose-400 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                    S
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                    M
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                    J
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                    +3
                  </div>
                </div>
              </div>

              {/* Interactive Engagement Bar */}
              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={handleToggleLike}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    hasLiked ? 'bg-red-50 text-red-600' : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
                  <span>{boardLikes}</span>
                </button>

                <button
                  onClick={() => setInviteSent(!inviteSent)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-neutral-100 text-neutral-800 transition-colors shadow-xs"
                >
                  <Users className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{inviteSent ? 'Invite sent ✓' : 'Invite friends'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>


        {/* ========================================================
            FEATURE 3: Search visually with images (Left: Mockup, Right: Copy)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Interactive Visual Search Reticles on Fashion Portrait */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 group">
              <img
                src={visualSearchFashion}
                alt="Visual search outfit analysis on red sweater"
                referrerPolicy="no-referrer"
                className="w-full aspect-[3/4] object-cover"
              />

              {/* Interactive Visual Search Tags / Reticles */}
              {visualTags.map((tag) => {
                const isActive = activeVisualTag.id === tag.id;

                return (
                  <div
                    key={tag.id}
                    className="absolute cursor-pointer z-20"
                    style={{ left: tag.x, top: tag.y }}
                    onClick={() => setActiveVisualTag(tag)}
                  >
                    {/* Pulsing White/Red Ring Dot */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white ring-4 ring-[#E60023] animate-pulse-ring" />
                      
                      {/* Attached Tag Label Pill */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`absolute left-5 -top-3.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg transition-all ${
                          isActive
                            ? 'bg-[#E60023] text-white ring-2 ring-white scale-105'
                            : 'bg-white/95 text-neutral-900 hover:bg-white'
                        }`}
                      >
                        {tag.label}
                      </motion.div>
                    </div>
                  </div>
                );
              })}

              {/* Active Search Lens Match Preview Bar at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-[#E60023]" />
                    Visual Lens match:
                  </span>
                  <span className="font-bold text-[#E60023] bg-white/10 px-2 py-0.5 rounded-full">
                    {activeVisualTag.label}
                  </span>
                </div>
                <p className="text-xs text-neutral-200">
                  Showing 48 similar styles: <span className="underline decoration-red-500 font-medium">{activeVisualTag.query}</span>
                </p>
              </div>

            </div>
          </div>

          {/* Right: Text & Join CTA */}
          <div className="lg:col-span-5 text-left space-y-5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Search visually with images
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
              Search objects within an image to find more styles you’ll love
            </p>
            <div className="pt-2">
              <button
                onClick={onJoinPinterest}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#E60023] hover:bg-[#ad081b] active:scale-95 transition-all rounded-full shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                Join Pinterest
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
