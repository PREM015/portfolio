'use client';
import { useState } from 'react';

export default function DyslexiaMode() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    document.documentElement.classList.toggle('dyslexia-font');
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed left-4 top-20 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 z-50"
        aria-label="Toggle dyslexia-friendly mode"
      >
        📖
      </button>

      <style jsx global>{`
        .dyslexia-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
          letter-spacing: 0.05em !important;
          line-height: 1.8 !important;
        }
      `}</style>
    </>
  );
}
