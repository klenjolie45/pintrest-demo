/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import heroScarfWoman from '@/src/assets/images/hero_scarf_woman_1790609747189.jpg';
import earthyHomeDecor from '@/src/assets/images/earthy_home_decor_1790609653677.jpg';

interface HeroSectionProps {
  onJoinFree: () => void;
  onAlreadyHaveAccount: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinFree,
  onAlreadyHaveAccount,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 sm:space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111111] leading-[1.12] tracking-tight">
                Create the life you love <br className="hidden sm:inline" />
                <span className="text-[#111111]">on pintrest</span>
              </h1>
            </motion.div>

            {/* Buttons matching the exact screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary Red CTA: "Join pintrest for free" */}
              <button
                onClick={onJoinFree}
                className="px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-[#E60023] hover:bg-[#ad081b] active:scale-95 transition-all rounded-full shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                Join pintrest for free
              </button>

              {/* Secondary Gray CTA: "I already have an account" */}
              <button
                onClick={onAlreadyHaveAccount}
                className="px-5 py-3.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-neutral-800 bg-[#E2E8F0] hover:bg-[#cbd5e1] active:scale-95 transition-all rounded-full cursor-pointer whitespace-nowrap"
              >
                I already have an account
              </button>
            </motion.div>
          </div>

          {/* Right Column: Floating Aesthetic Pin Collage */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full max-w-[620px] mx-auto h-[440px] sm:h-[500px]">
              
              {/* Center Main Pin: Woman in Headscarf */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={heroScarfWoman}
                  alt="Aesthetic lifestyle inspiration with headscarf fashion"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold">Artistic headscarf styling</span>
                </div>
              </motion.div>

              {/* Top Left Pin: Yellow Flowers in Vase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="absolute left-4 sm:left-8 top-4 w-32 sm:w-40 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white z-10 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-80 mix-blend-multiply bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="text-center z-10">
                    <span className="text-3xl filter drop-shadow">🌻</span>
                    <p className="text-[11px] font-bold text-amber-900 mt-1">Sunlit blooms</p>
                  </div>
                </div>
              </motion.div>

              {/* Top Right Pin: Botanical Greens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ y: -4 }}
                className="absolute right-4 sm:right-10 top-2 w-28 sm:w-34 aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white z-10 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-emerald-200 to-teal-100 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-2xl">🌿</span>
                  <span className="text-[10px] font-bold text-emerald-900 mt-1">Foliage garden</span>
                </div>
              </motion.div>

              {/* Middle Right Pin: Morning Avocado Toast / Food */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="absolute right-0 sm:right-4 top-36 sm:top-40 w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white z-10 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-tr from-lime-100 to-emerald-100 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-2xl">🥑</span>
                  <span className="text-[11px] font-bold text-emerald-950 mt-0.5">Sourdough brunch</span>
                </div>
              </motion.div>

              {/* Bottom Right Pin: Terracotta Interior Ceramics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ y: -4 }}
                className="absolute right-6 sm:right-14 bottom-2 w-36 sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-10 transition-all duration-300"
              >
                <img
                  src={earthyHomeDecor}
                  alt="Terracotta ceramics & home decor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Left Pin: Green Hoodie Urban Lifestyle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="absolute left-6 sm:left-12 bottom-6 w-32 sm:w-40 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white z-10 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-b from-lime-700 via-lime-800 to-emerald-900 flex flex-col items-center justify-between p-3.5 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-lime-200">Streetwear</span>
                  <div className="text-center my-auto">
                    <span className="text-3xl">🧥</span>
                    <p className="text-xs font-bold text-lime-100 mt-1">Oversized knit & hoodie</p>
                  </div>
                  <span className="text-[10px] text-lime-300/80">34 Pins</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
