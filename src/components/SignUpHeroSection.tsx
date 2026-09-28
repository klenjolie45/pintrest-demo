/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Eye, EyeOff, Sparkles } from 'lucide-react';

interface SignUpHeroSectionProps {
  onSwitchToLogin: () => void;
  onOpenBusiness?: () => void;
}

export const SignUpHeroSection: React.FC<SignUpHeroSectionProps> = ({
  onSwitchToLogin,
  onOpenBusiness,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (password.length < 8) {
      setErrorMsg('Password must be 8 or more letters, numbers, and symbols');
      return;
    }
    if (!birthday) {
      setErrorMsg('Please enter your birthday');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  // Curated mosaic pin mock items for background collage
  const mosaicPins = [
    { title: 'Pasta with fresh basil', emoji: '🍝', bg: 'from-amber-600 to-red-800' },
    { title: 'Matcha latte art', emoji: '🍵', bg: 'from-emerald-700 to-teal-900' },
    { title: 'Golden hour ceramics', emoji: '🏺', bg: 'from-stone-700 to-amber-900' },
    { title: 'French bulldog puppy', emoji: '🐶', bg: 'from-yellow-700 to-amber-950' },
    { title: 'Retro 35mm film camera', emoji: '📷', bg: 'from-slate-700 to-neutral-900' },
    { title: 'Sourdough stack & berries', emoji: '🥞', bg: 'from-orange-700 to-amber-900' },
    { title: 'Mid-century interior lounge', emoji: '🛋️', bg: 'from-stone-800 to-neutral-900' },
    { title: 'Fresh eucalyptus branch', emoji: '🌿', bg: 'from-teal-800 to-emerald-950' },
    { title: 'Glazed cinnamon pastries', emoji: '🥐', bg: 'from-amber-800 to-yellow-950' },
    { title: 'Tokyo neon architecture', emoji: '🏙️', bg: 'from-indigo-900 to-violet-950' },
    { title: 'Sunset flower bouquet', emoji: '💐', bg: 'from-rose-800 to-pink-950' },
    { title: 'Minimalist sneakers', emoji: '👟', bg: 'from-neutral-700 to-stone-900' },
    { title: 'Iced espresso tonic', emoji: '☕', bg: 'from-amber-900 to-stone-950' },
    { title: 'Abstract oil canvas', emoji: '🎨', bg: 'from-violet-800 to-fuchsia-950' },
    { title: 'Velvet reading nook', emoji: '📖', bg: 'from-emerald-900 to-neutral-950' },
    { title: 'Linen wardrobe capsule', emoji: '👗', bg: 'from-stone-600 to-amber-950' },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-neutral-950">
      
      {/* Background Masonry Mosaic with Dark Tint */}
      <div className="absolute inset-0 opacity-35 pointer-events-none select-none overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 -mt-10 -ml-10 -mr-10 scale-105">
          {mosaicPins.concat(mosaicPins).map((pin, i) => (
            <div
              key={i}
              className={`rounded-2xl aspect-[3/4] bg-gradient-to-br ${pin.bg} flex flex-col justify-end p-3 shadow-lg transform ${
                i % 2 === 0 ? 'translate-y-4' : '-translate-y-2'
              }`}
            >
              <span className="text-3xl filter drop-shadow">{pin.emoji}</span>
              <p className="text-[11px] font-semibold text-white/90 truncate mt-1">{pin.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Scrim Overlay to ensure 4.5:1 text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/75 backdrop-blur-[2px]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Bold Typography */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight max-w-lg">
              Sign up to get <br />
              <span className="text-white">your ideas</span>
            </h2>
            <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-md font-medium leading-relaxed">
              Find inspiration for dinners, soccer matches, beauty routines, home spaces, and your next big adventure.
            </p>
          </div>

          {/* Right Column: Pinterest Signup Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[430px] bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Pinterest Circular Red Icon */}
              <div className="w-11 h-11 rounded-full bg-[#E60023] flex items-center justify-center text-white mx-auto shadow-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.48.03-3.55.14-.97.94-6.42.94-6.42s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.74 0-1.95-1.4-3.32-3.41-3.32-2.49 0-3.95 1.87-3.95 3.8 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.29-.23.95-.26 1.08-.04.18-.14.22-.33.13-1.24-.58-2.02-2.39-2.02-3.85 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.23.86-.84 1.94-1.26 2.61A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
              </div>

              {/* Headings */}
              <div className="text-center mt-3 mb-5">
                <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
                  Welcome to Pinterest
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  Join Pinterest for free to discover more ideas
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-neutral-900">Welcome to your inspiration feed!</h4>
                  <p className="text-sm text-neutral-600">
                    We’ve set up your Pinterest account for <span className="font-semibold text-neutral-900">{email}</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full"
                  >
                    Reset form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {errorMsg && (
                    <div className="p-2.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Email Input */}
                  <div>
                    <label className="sr-only" htmlFor="email-signup">Email</label>
                    <input
                      id="email-signup"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <label className="sr-only" htmlFor="password-signup">Password</label>
                    <input
                      id="password-signup"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      required
                      className="w-full px-4 py-3 pr-10 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <p className="text-[11px] text-neutral-500 mt-1 pl-1">
                      Use 8 or more letters, numbers and symbols
                    </p>
                  </div>

                  {/* Birthday Input */}
                  <div>
                    <label className="sr-only" htmlFor="birthday-signup">Birthday</label>
                    <input
                      id="birthday-signup"
                      type="text"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="Enter your birthday (dd/mm/yyyy)"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all"
                    />
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#E60023] hover:bg-[#ad081b] active:scale-[0.98] text-white text-sm font-bold rounded-full transition-all shadow-md cursor-pointer mt-2"
                  >
                    Continue
                  </button>

                  {/* OR Divider */}
                  <div className="flex items-center my-3">
                    <div className="flex-1 border-t border-neutral-200" />
                    <span className="px-3 text-xs font-bold text-neutral-400">OR</span>
                    <div className="flex-1 border-t border-neutral-200" />
                  </div>

                  {/* Continue with Google */}
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('olubukolafadaiya@gmail.com');
                      setIsSubmitted(true);
                    }}
                    className="w-full py-3 px-4 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-700 hover:text-black text-sm font-semibold rounded-full flex items-center justify-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  {/* Footnote Links */}
                  <div className="text-center pt-2 space-y-1">
                    <p className="text-xs text-neutral-600">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={onSwitchToLogin}
                        className="font-bold text-neutral-900 hover:underline cursor-pointer"
                      >
                        Log in
                      </button>
                    </p>
                    <p className="text-xs text-neutral-600">
                      Are you a business?{' '}
                      <button
                        type="button"
                        onClick={onOpenBusiness}
                        className="font-bold text-neutral-900 hover:underline cursor-pointer"
                      >
                        Get started here
                      </button>
                    </p>
                  </div>

                  {/* Terms & Privacy */}
                  <p className="text-[10px] text-neutral-400 text-center leading-normal pt-2 border-t border-neutral-100">
                    By continuing, you agree to Pinterest's{' '}
                    <a href="#terms" className="underline hover:text-neutral-700">Terms of Service</a> and acknowledge you've read our{' '}
                    <a href="#privacy" className="underline hover:text-neutral-700">Privacy Policy</a>. Notice at collection.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
