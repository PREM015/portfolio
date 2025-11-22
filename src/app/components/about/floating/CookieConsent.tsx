'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white text-black p-4 rounded-lg shadow-lg max-w-md z-50">
      <p className="mb-2">We use cookies to improve your experience.</p>
      <button 
        onClick={accept}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Accept
      </button>
    </div>
  );
}
