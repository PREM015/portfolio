'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-md rounded-lg p-4 space-y-2"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white hover:bg-white/20 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
