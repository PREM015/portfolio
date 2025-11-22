'use client';
import { useState } from 'react';

export default function FontSizeController() {
  const [size, setSize] = useState(100);

  const changeSize = (delta: number) => {
    const newSize = Math.min(150, Math.max(80, size + delta));
    setSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <div className="fixed left-4 bottom-4 bg-white/10 backdrop-blur-md p-3 rounded-lg z-50 flex items-center gap-2">
      <button
        onClick={() => changeSize(-10)}
        className="w-8 h-8 bg-white/20 rounded hover:bg-white/30"
        aria-label="Decrease font size"
      >
        A-
      </button>
      <span className="text-sm">{size}%</span>
      <button
        onClick={() => changeSize(10)}
        className="w-8 h-8 bg-white/20 rounded hover:bg-white/30"
        aria-label="Increase font size"
      >
        A+
      </button>
    </div>
  );
}
