/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Keep mode in sync if changed by caller
  React.useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
    setError('');
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[420px] bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Pinterest circular logo */}
          <div className="w-10 h-10 rounded-full bg-[#E60023] flex items-center justify-center text-white mx-auto shadow-sm">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.48.03-3.55.14-.97.94-6.42.94-6.42s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.74 0-1.95-1.4-3.32-3.41-3.32-2.49 0-3.95 1.87-3.95 3.8 0 .75.29 1.56.65 2 .07.09.08.17.06.26-.07.29-.23.95-.26 1.08-.04.18-.14.22-.33.13-1.24-.58-2.02-2.39-2.02-3.85 0-3.13 2.28-6.01 6.57-6.01 3.45 0 6.13 2.46 6.13 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.23.86-.84 1.94-1.26 2.61A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
            </svg>
          </div>

          {/* Heading */}
          <div className="text-center mt-3 mb-5">
            <h3 className="text-2xl font-bold text-[#111111]">
              {mode === 'login' ? 'Welcome back' : 'Welcome to Pinterest'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
              {mode === 'login'
                ? 'Sign in to access your saved pins & boards'
                : 'Join Pinterest for free to discover more ideas'}
            </p>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-neutral-900">
                {mode === 'login' ? 'Logged in successfully!' : 'Account created!'}
              </h4>
              <p className="text-xs text-neutral-600">
                Welcome, <span className="font-semibold">{email}</span>. You can now save pins, browse ideas, and create boards.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 text-xs font-bold text-white bg-[#E60023] hover:bg-[#ad081b] rounded-full"
              >
                Start browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="p-2.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                  {error}
                </div>
              )}

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm outline-none"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
                  required
                  className="w-full px-4 py-2.5 pr-10 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {mode === 'signup' && (
                <div>
                  <input
                    type="text"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Enter your birthday (dd/mm/yyyy)"
                    required
                    className="w-full px-4 py-2.5 rounded-2xl border border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-200 text-sm outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#E60023] hover:bg-[#ad081b] active:scale-[0.98] text-white text-sm font-bold rounded-full transition-all shadow-sm cursor-pointer mt-1"
              >
                {mode === 'login' ? 'Log in' : 'Continue'}
              </button>

              <div className="flex items-center my-2">
                <div className="flex-1 border-t border-neutral-200" />
                <span className="px-3 text-xs font-bold text-neutral-400">OR</span>
                <div className="flex-1 border-t border-neutral-200" />
              </div>

              <button
                type="button"
                onClick={() => {
                  setEmail('olubukolafadaiya@gmail.com');
                  setSubmitted(true);
                }}
                className="w-full py-2.5 px-4 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-700 text-xs font-semibold rounded-full flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue with Google</span>
              </button>

              <div className="text-center pt-2">
                {mode === 'login' ? (
                  <p className="text-xs text-neutral-600">
                    Not on Pinterest yet?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="font-bold text-neutral-900 hover:underline cursor-pointer"
                    >
                      Sign up
                    </button>
                  </p>
                ) : (
                  <p className="text-xs text-neutral-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="font-bold text-neutral-900 hover:underline cursor-pointer"
                    >
                      Log in
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
