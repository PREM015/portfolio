"use client";

import { motion } from "framer-motion";

interface Props {
  emoji: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ emoji, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-6xl mb-4"
      >
        {emoji}
      </motion.div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}