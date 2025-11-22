"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/app/data/constants";

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity
  }
};

const FloatingParticle = ({ emoji, delay }: { emoji: string; delay: number }) => (
  <motion.div
    initial={{ y: 0, x: 0, opacity: 0.4 }}
    animate={{
      y: [0, -80, 0],
      x: [0, 40, 0],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    className="absolute text-3xl pointer-events-none"
  >
    {emoji}
  </motion.div>
);

export default function PageHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center max-w-5xl mx-auto mb-32 relative z-10 px-4"
    >
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingParticle emoji="✨" delay={0} />
        <FloatingParticle emoji="🚀" delay={1} />
        <FloatingParticle emoji="💻" delay={2} />
        <FloatingParticle emoji="⚡" delay={3} />
      </div>

      {/* Animated Avatar */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="relative w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 p-1.5 shadow-2xl shadow-cyan-400/50">
          <div className="w-full h-full rounded-full bg-[#0d0d1a] flex items-center justify-center text-6xl backdrop-blur-sm">
          <motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  {personalInfo.avatar}
</motion.div>


          </div>
        </div>
        {/* Glowing Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 blur-2xl opacity-30"
        />
      </motion.div>

      {/* Name & Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400">
          {personalInfo.name}
        </span>
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="space-y-4"
      >
        <p className="text-2xl md:text-3xl text-gray-300 font-light">
          {personalInfo.title}
          <span className="text-cyan-400 font-semibold"> & </span>
          {personalInfo.subtitle}
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-6 mt-10"
      >
        {socialLinks.map(({ Icon, href, label, color }, idx) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.1, type: "spring", stiffness: 400 }}
            className={`text-3xl text-gray-400 ${color} transition-all p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 hover:shadow-lg hover:shadow-cyan-400/30`}
            aria-label={label}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}