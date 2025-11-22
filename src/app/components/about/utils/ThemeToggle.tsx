'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 transition-all"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-purple-400" />}
    </motion.button>
  );
}
