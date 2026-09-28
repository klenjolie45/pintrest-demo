/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Bookmark, Share2, MoreHorizontal, MessageSquare, Send } from 'lucide-react';

export interface PinItem {
  title: string;
  image: string;
  category: string;
  pins: string;
}

interface PinDetailModalProps {
  pin: PinItem | null;
  onClose: () => void;
  onOpenAuth: () => void;
}

export const PinDetailModal: React.FC<PinDetailModalProps> = ({
  pin,
  onClose,
  onOpenAuth,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(148);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<{ id: number; author: string; text: string; time: string }>>([
    { id: 1, author: 'Maya Collins', text: 'Obsessed with this styling! Saving for the next game.', time: '2h ago' },
    { id: 2, author: 'Alex Rivera', text: 'The color combo is perfection.', time: '5h ago' }
  ]);

  if (!pin) return null;

  const handleToggleLike = () => {
    setHasLiked(!hasLiked);
    setLikes((prev) => (hasLiked ? prev - 1 : prev + 1));
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: 'You',
        text: commentText.trim(),
        time: 'Just now'
      }
    ]);
    setCommentText('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        
        {/* Backdrop */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2 text-white md:text-neutral-700 bg-black/40 md:bg-white/80 hover:bg-black/60 md:hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close pin preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Big Pin Image */}
          <div className="md:w-1/2 bg-neutral-900 flex items-center justify-center overflow-hidden">
            <img
              src={pin.image}
              alt={pin.title}
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[500px] md:max-h-[600px] object-cover"
            />
          </div>

          {/* Right: Details & Discussion */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[600px]">
            <div>
              {/* Header Actions */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleLike}
                    className={`p-2 rounded-full border transition-colors ${
                      hasLiked ? 'bg-red-50 border-red-200 text-red-600' : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                  </button>
                  <span className="text-xs font-semibold text-neutral-600">{likes}</span>

                  <button className="p-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 ml-1">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Save Button */}
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-sm ${
                    isSaved
                      ? 'bg-black text-white'
                      : 'bg-[#E60023] text-white hover:bg-[#ad081b] active:scale-95'
                  }`}
                >
                  {isSaved ? 'Saved ✓' : 'Save'}
                </button>
              </div>

              {/* Title & Metadata */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-bold text-[#E60023] uppercase tracking-wider">
                  {pin.category}
                </span>
                <h3 className="text-2xl font-bold text-[#111111] leading-tight">
                  {pin.title}
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  {pin.pins} in this collection
                </p>
              </div>

              {/* Comments Section */}
              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" />
                  Comments ({comments.length})
                </h4>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {comments.map((c) => (
                    <div key={c.id} className="text-xs bg-neutral-50 p-2.5 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-neutral-900">{c.author}</span>
                        <span className="text-neutral-400 text-[10px]">{c.time}</span>
                      </div>
                      <p className="text-neutral-700">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="mt-6 pt-4 border-t border-neutral-100 flex gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 text-xs rounded-full border border-neutral-300 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-[#E60023] text-white hover:bg-[#ad081b] shrink-0"
                aria-label="Post comment"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
