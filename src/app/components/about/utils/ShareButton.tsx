'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShare } from 'react-icons/fa';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const shareData = {
      title: 'Portfolio - Full Stack Developer',
      text: 'Check out this amazing developer portfolio!',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  return (
    <motion.button
      onClick={share}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
    >
      <FaShare className="text-cyan-400" />
      <span>{copied ? 'Link Copied!' : 'Share Profile'}</span>
    </motion.button>
  );
}
