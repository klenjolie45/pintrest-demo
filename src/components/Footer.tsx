/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-14 sm:py-16 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Brand & Copyright */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E60023] flex items-center justify-center text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.48.03-3.55.14-.97.94-6.42.94-6.42s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.74 0-1.95-1.4-3.32-3.41-3.32-2.49 0-3.95 1.87-3.95 3.8 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.29-.23.95-.26 1.08-.04.18-.14.22-.33.13-1.24-.58-2.02-2.39-2.02-3.85 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.23.86-.84 1.94-1.26 2.61A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight font-serif italic">
                Pinterest
              </span>
            </div>
            
            <p className="text-xs text-neutral-400">
              © 2026 Pinterest
            </p>
          </div>

          {/* 3 Nav Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Get the app */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Get the app
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>
                  <a href="#ios" className="hover:text-white transition-colors">
                    iOS
                  </a>
                </li>
                <li>
                  <a href="#android" className="hover:text-white transition-colors">
                    Android
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Quick links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>
                  <a href="#explore" className="hover:text-white transition-colors">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#help" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Policies
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>
                  <a href="#terms" className="hover:text-white transition-colors">
                    Terms of services
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#non-user" className="hover:text-white transition-colors">
                    Non-user notice
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};
