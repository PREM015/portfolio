'use client';
import { useState } from 'react';

export default function ShareWidget() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const shareData = {
      title: 'Portfolio',
      text: 'Check out this amazing portfolio!',
      url: window.location.href,
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
    <button
      onClick={share}
      className="fixed right-4 top-36 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-indigo-600 z-50"
      aria-label="Share this page"
    >
      {copied ? '✓' : '📤'}
    </button>
  );
}
