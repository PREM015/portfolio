"use client";

import { motion, Variants } from "framer-motion";
import { insights } from "@/app/data/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function PersonalInsights() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {insights.map((insight, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -10 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

          <div className="relative bg-gray-900/90 backdrop-blur-md p-8 rounded-3xl border border-gray-700 hover:border-green-400 text-center transition-all duration-300 h-full">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              className="text-5xl mb-4"
            >
              {insight.emoji}
            </motion.div>
            <h3 className="text-white text-xl font-bold mb-2">{insight.title}</h3>
            <p className="text-gray-400 text-sm">{insight.detail}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
