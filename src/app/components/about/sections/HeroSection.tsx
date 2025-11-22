'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-green-300">
          Full Stack Developer
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        I build fast, accessible, and maintainable web applications with modern technologies.
        Passionate about creating delightful user experiences.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500" />
          <span className="relative text-black z-10">Let's Talk</span>
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-white/10 px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all backdrop-blur-sm font-semibold"
        >
          View Projects
        </motion.a>
      </div>
    </motion.div>
  );
}
