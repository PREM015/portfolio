'use client';
import { useState } from 'react';

export default function HighContrastMode() {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed left-4 top-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 z-50"
        aria-label="Toggle high contrast mode"
      >
        ◐
      </button>

      <style jsx global>{`
        .high-contrast {
          filter: contrast(1.5);
        }
      `}</style>
    </>
  );
}
