'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-20 p-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/30"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8">
          Get the latest updates on new projects, blog posts, and tech insights delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none disabled:opacity-50"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === 'loading'}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </form>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
          >
            <p className="text-green-300">✅ Successfully subscribed! Check your inbox.</p>
          </motion.div>
        )}

        <p className="text-xs text-gray-500 mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </motion.section>
  );
}
