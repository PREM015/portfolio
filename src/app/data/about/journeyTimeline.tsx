"use client";

import { motion } from "framer-motion";
import { journey } from "@/app/data/constants";

export default function JourneyTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Animated Center Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400 transform -translate-x-1/2"
        style={{ transformOrigin: "top" }}
      />

      <div className="space-y-16">
        {journey.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`flex items-center gap-8 ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Content Card */}
            <div className="flex-1">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-900/70 backdrop-blur-md p-6 rounded-3xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-400/20"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</h3>
                <p className="text-white font-semibold text-lg mb-1">{item.title}</p>
                <p className="text-gray-400 text-sm">🎯 {item.milestone}</p>
              </motion.div>
            </div>

            {/* Center Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-3xl shadow-2xl shadow-cyan-400/50 border-4 border-[#0d0d1a] z-10"
            >
              {item.emoji}
            </motion.div>

            {/* Empty space for alternating layout */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}