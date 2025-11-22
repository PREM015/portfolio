'use client';
import { motion } from 'framer-motion';

export default function DailyStreak() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-16 p-8 bg-gradient-to-br from-white/5 to-white/3 rounded-2xl backdrop-blur-sm border border-white/10"
      id="dailystreak"
    >
      <div className="max-w-5xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent"
        >
          Daily Streak
        </motion.h2>

        <p className="text-gray-300 mb-8 text-lg">
          Discover more about daily streak and how it enhances your experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
          >
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-semibold text-cyan-300 mb-2">Maintain Streak</h3>
            <p className="text-sm text-gray-400">
              Keep your motivation alive by maintaining your daily progress.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all"
          >
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-purple-300 mb-2">Boost Productivity</h3>
            <p className="text-sm text-gray-400">
              Win rewards and stay consistent with daily achievements.
            </p>
          </motion.div>

        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
          >
            Learn More
          </motion.button>
        </div>

      </div>
    </motion.section>
  );
}
