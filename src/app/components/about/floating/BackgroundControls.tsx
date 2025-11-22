"use client";

import React from "react";

interface BackgroundControlsProps {
  current: string;
  onChange: (variant: string) => void;
  section: string;
}

export default function BackgroundControls({
  current,
  onChange,
  section
}: BackgroundControlsProps) {
  return (
    <div className="fixed bottom-5 right-5 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg z-50">
      <p className="text-sm text-gray-200 mb-2">
        Current Section: <span className="font-semibold">{section}</span>
      </p>

      <p className="text-sm text-gray-200 mb-2">
        Background: <span className="font-semibold">{current}</span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onChange("default")}
          className="px-3 py-1 bg-gray-700 text-white text-sm rounded hover:bg-gray-600"
        >
          Default
        </button>

        <button
          onClick={() => onChange("dark")}
          className="px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-900"
        >
          Dark
        </button>

        <button
          onClick={() => onChange("gradient")}
          className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-500"
        >
          Gradient
        </button>
      </div>
    </div>
  );
}
