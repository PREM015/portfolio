'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LiveGitHubStats() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/PREM015')
      .then((res) => res.json())
      .then((data) => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          gists: data.public_gists,
        });
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-xl h-20" />
        ))}
      </div>
    );

  if (error || !stats) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(stats).map(([key, value]: [string, any], idx) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-gradient-to-br from-white/5 to-white/3 p-4 rounded-xl border border-white/10 text-center hover:border-cyan-400/50 transition-all"
        >
          <div className="text-2xl font-bold text-cyan-300">{value}</div>
          <div className="text-xs text-gray-400 capitalize">{key}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
