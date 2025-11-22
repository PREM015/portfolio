"use client";

import { motion } from "framer-motion";
import { skillsCompact } from "@/app/data/constants";
import type { IconType } from "react-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function SkillsShowcase() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4"
    >
      {skillsCompact.map((skill) => {
        const Icon: IconType = skill.icon;
        return (
          <motion.div
            key={skill.name}
            variants={{itemVariants}}
            whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-400/30">
              <Icon
                className="text-5xl transition-transform group-hover:scale-110"
                style={{ color: skill.color }}
              />
              
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}22, transparent 70%)`,
                }}
              />
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap border border-gray-700 shadow-xl">
                {skill.name}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}