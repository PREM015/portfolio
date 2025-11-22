'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
  count?: number;
}

const STATS: Stat[] = [
  { label: 'Years Experience', value: '5+', icon: '💼', color: 'from-cyan-400 to-blue-500', count: 5 },
  { label: 'Projects Completed', value: '50+', icon: '✅', color: 'from-green-400 to-emerald-500', count: 50 },
  { label: 'Happy Clients', value: '30+', icon: '😊', color: 'from-pink-400 to-rose-500', count: 30 },
  { label: 'GitHub Stars', value: '156+', icon: '⭐', color: 'from-yellow-400 to-orange-500', count: 156 },
  { label: 'Coffee Consumed', value: '∞', icon: '☕', color: 'from-orange-400 to-amber-500', count: 9999 },
  { label: 'Code Hours', value: '5k+', icon: '⌨️', color: 'from-indigo-400 to-blue-500', count: 5000 },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const increment = end / (duration * 60);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={nodeRef}>
      {count === 9999 ? '∞' : count}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="my-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          By The Numbers
        </h2>
        <p className="text-gray-400">Metrics that matter</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`} />
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all text-center">
              <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1 text-white">
                {stat.count && stat.count !== 9999 ? (
                  <>
                    <AnimatedCounter end={stat.count} duration={2} />+
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
