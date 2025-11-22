'use client';
import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <FaEye className="text-cyan-400" />
      <span className="text-gray-400">
        <AnimatedCounter end={visitors} duration={2} /> visitors
      </span>
    </div>
  );
}
