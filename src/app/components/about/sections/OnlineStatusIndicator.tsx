'use client';
import { motion } from 'framer-motion';

export default function OnlineStatusIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20  }}
      whileInView={{ opacity: 1, y: 0  }}
      viewport={{ once: true  }}
      transition={{ duration: 0.5  }}
      className="my-12 p-8 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Online Status Indicator
      </h2>
      <p className="text-gray-300 mb-4">
        This section showcases online status indicator with engaging content and interactive elements.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white/5 rounded-lg">
          <h3 className="font-semibold text-cyan-300 mb-2">Feature 1</h3>
          <p className="text-sm text-gray-400">Description of first key feature or benefit.</p>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <h3 className="font-semibold text-purple-300 mb-2">Feature 2</h3>
          <p className="text-sm text-gray-400">Description of second key feature or benefit.</p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Primary Action
        </button>
        <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
          Secondary Action
        </button>
      </div>
    </motion.div>
  );
}
