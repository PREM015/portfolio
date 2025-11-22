'use client';
import { motion } from 'framer-motion';

export default function CheatSheets() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-16 p-8 bg-gradient-to-br from-white/5 to-white/3 rounded-2xl backdrop-blur-sm border border-white/10"
      id="cheatsheets"
    >
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          Cheat Sheets
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Explore cheat sheets with detailed insights and interactive elements.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
          >
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold text-cyan-300 mb-2 text-lg">Key Point 1</h3>
            <p className="text-sm text-gray-400">
              Highlighting an important aspect of this section.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all"
          >
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-semibold text-purple-300 mb-2 text-lg">Key Point 2</h3>
            <p className="text-sm text-gray-400">
              Another significant feature or benefit.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/50 transition-all"
          >
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-semibold text-green-300 mb-2 text-lg">Key Point 3</h3>
            <p className="text-sm text-gray-400">
              Additional value proposition.
            </p>
          </motion.div>

        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Take Action
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
          >
            Learn More
          </motion.button>

        </div>
      </div>
    </motion.section>
  );
}
