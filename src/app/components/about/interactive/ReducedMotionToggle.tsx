'use client';
import { useState, useEffect } from 'react';

export default function ReducedMotionToggle() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mediaQuery.matches);
  }, []);

  const toggle = () => {
    setReduced(!reduced);
    document.documentElement.classList.toggle('reduce-motion');
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed left-4 top-36 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 z-50"
        aria-label="Toggle reduced motion"
      >
        {reduced ? '▶️' : '⏸️'}
      </button>

      <style jsx global>{`
        .reduce-motion * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </>
  );
}
