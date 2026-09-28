/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Bookmark, Heart, Share2 } from 'lucide-react';
import soccerStadiumAction from '@/src/assets/images/soccer_stadium_action_1790609569416.jpg';
import gamedayWingsSliders from '@/src/assets/images/gameday_wings_sliders_1790609586687.jpg';
import bloketteSoccerFashion from '@/src/assets/images/blokette_soccer_fashion_1790609599348.jpg';
import manicureNailArt from '@/src/assets/images/manicure_nail_art_1790609616077.jpg';
import summerFoodDips from '@/src/assets/images/summer_food_dips_1790609627564.jpg';
import jerseyStylingMens from '@/src/assets/images/jersey_styling_mens_1790609640428.jpg';

interface SoccerCard {
  id: string;
  image: string;
  title: string;
  category: string;
  hasExtraTag?: boolean;
  pins: string;
  age: string;
}

interface SoccerSeasonSectionProps {
  onPinClick: (pin: { title: string; image: string; category: string; pins: string }) => void;
  onOpenAuth: () => void;
}

export const SoccerSeasonSection: React.FC<SoccerSeasonSectionProps> = ({
  onPinClick,
  onOpenAuth,
}) => {
  const [savedPins, setSavedPins] = useState<Record<string, boolean>>({});

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPins((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const winningIdeas: SoccerCard[] = [
    {
      id: 'blokette',
      image: bloketteSoccerFashion,
      title: 'Elevated blokette: stylish at the stadium',
      category: 'Fashion',
      hasExtraTag: true,
      pins: '79 Pins',
      age: '2mo',
    },
    {
      id: 'manicures',
      image: manicureNailArt,
      title: 'Team spirit manicures',
      category: 'Beauty',
      hasExtraTag: true,
      pins: '59 Pins',
      age: '2mo',
    },
    {
      id: 'dips',
      image: summerFoodDips,
      title: 'Delicious dips for summer gatherings',
      category: 'Food',
      hasExtraTag: false,
      pins: '70 Pins',
      age: '1y',
    },
    {
      id: 'mens-jerseys',
      image: jerseyStylingMens,
      title: 'Styling soccer jerseys',
      category: 'Pinterest man',
      hasExtraTag: true,
      pins: '101 Pins',
      age: '2mo',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-neutral-50/50 border-t border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Step into soccer season
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-neutral-600 font-medium">
            Flex your fandom and score fresh inspiration for every match.
          </p>
        </div>

        {/* Hero Stadium Banner with Game Day Food Floating Pin */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-14 sm:mb-18 aspect-[16/9] sm:aspect-[21/9] max-h-[460px] bg-neutral-900 group">
          <img
            src={soccerStadiumAction}
            alt="Soccer stadium floodlights celebration"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Floating Pin Card Badge at Center-Bottom */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                onPinClick({
                  title: 'Game day food',
                  image: gamedayWingsSliders,
                  category: 'Food',
                  pins: '25 Pins',
                })
              }
              className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 pr-5 sm:pr-6 shadow-2xl border border-white/40 flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-white transition-all max-w-[280px] sm:max-w-xs"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-neutral-100">
                <img
                  src={gamedayWingsSliders}
                  alt="Game day food wings and sliders"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#111111] truncate">
                  Game day food
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  25 Pins
                </p>
              </div>
              <button
                onClick={(e) => toggleSave('gameday-main', e)}
                className={`p-2 rounded-full transition-colors ${
                  savedPins['gameday-main']
                    ? 'bg-[#E60023] text-white'
                    : 'bg-neutral-100 hover:bg-[#E60023] hover:text-white text-neutral-700'
                }`}
                title="Save Pin"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* "More winning ideas" Sub-Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
            More winning ideas
          </h3>
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-neutral-800 hover:text-black bg-neutral-100 hover:bg-neutral-200/80 rounded-full transition-all cursor-pointer"
          >
            <span>See all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {winningIdeas.map((card) => {
            const isSaved = !!savedPins[card.id];

            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() =>
                  onPinClick({
                    title: card.title,
                    image: card.image,
                    category: card.category,
                    pins: card.pins,
                  })
                }
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-200/70 transition-all duration-300 cursor-pointer"
              >
                {/* Pin Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay with Save Button */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between items-end">
                    <button
                      onClick={(e) => toggleSave(card.id, e)}
                      className={`px-4 py-2 rounded-full font-bold text-xs tracking-wide transition-all shadow-md ${
                        isSaved
                          ? 'bg-black text-white'
                          : 'bg-[#E60023] text-white hover:bg-[#ad081b] active:scale-95'
                      }`}
                    >
                      {isSaved ? 'Saved' : 'Save'}
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="p-2 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-bold text-base text-[#111111] line-clamp-2 leading-snug group-hover:text-[#E60023] transition-colors">
                      {card.title}
                    </h4>

                    {/* Category with Verified Badge */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                      <span>{card.category}</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      {card.hasExtraTag && <span>+ 1</span>}
                    </div>
                  </div>

                  {/* Clean unboxed metadata separator */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span>{card.pins}</span>
                    <span aria-hidden="true">·</span>
                    <span>{card.age}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
