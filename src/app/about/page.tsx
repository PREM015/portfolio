"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4 sm:px-8 md:px-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-marker text-blue-400">
          About Me
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I&apos;m <span className="text-cyan-400 font-semibold">Prem Raj</span>, a passionate and curious full-stack developer
          with a deep love for building modern, responsive, and user-focused web applications.
          I specialize in technologies like{" "}
          <span className="text-purple-400">React</span>,{" "}
          <span className="text-purple-400">Next.js</span>,{" "}
          <span className="text-purple-400">TypeScript</span>, and{" "}
          <span className="text-purple-400">Tailwind CSS</span>, and enjoy creating immersive UI experiences that solve real-world problems.
        </p>

        <p className="text-gray-400 mt-6 text-sm sm:text-base">
          With a strong foundation in both frontend and backend, I focus on writing clean, maintainable code and constantly
          pushing my skills through side projects, collaboration, and learning. When I&apos;m not coding, you&apos;ll find me exploring new tools, reading about tech trends, or working on personal design systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base"
      >
        <div className="bg-neutral-800/60 border border-neutral-700 p-6 rounded-xl shadow-md backdrop-blur">
          <h2 className="text-xl text-blue-400 font-semibold mb-2">🧠 Skills & Strengths</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Modern frontend (React, Next.js, Tailwind)</li>
            <li>Backend APIs (Node.js, Express, MongoDB)</li>
            <li>UI/UX thinking & component design</li>
            <li>Clean code, Git & teamwork</li>
          </ul>
        </div>

        <div className="bg-neutral-800/60 border border-neutral-700 p-6 rounded-xl shadow-md backdrop-blur">
          <h2 className="text-xl text-blue-400 font-semibold mb-2">🎯 Goals</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Build visually stunning apps</li>
            <li>Contribute to open-source</li>
            <li>Explore 3D and motion UI</li>
            <li>Work with top-tier product teams</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
