"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDocker,
  FaCode,
  FaGithub,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaCertificate,
  FaStar,
  FaSmile,
  FaRocket,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";

// Highlights
const highlights = [
  {
    title: "Full-Stack Projects",
    description:
      "Built full-stack apps with React, Next.js, Tailwind, Node.js & Prisma. Clean code, scalable architecture, and sleek UI/UX.",
    icon: <FaCode className="text-cyan-400 text-3xl drop-shadow-glow" />,
  },
  {
    title: "Open Source Contributions",
    description:
      "Improved GitHub repos by fixing bugs, optimizing performance, and collaborating with global teams.",
    icon: <FaGithub className="text-white text-3xl drop-shadow-glow" />,
  },
  {
    title: "Exploring & Learning",
    description:
      "Diving into Firebase, Docker, TypeScript, motion UI & AI to create futuristic solutions.",
    icon: <FaReact className="text-blue-500 text-3xl drop-shadow-glow" />,
  },
];

// Skills
const skills = [
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "Prisma", icon: SiPrisma, color: "#a855f7" },
  { name: "Firebase", icon: SiFirebase, color: "#ffcb2b" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "Figma", icon: FaFigma, color: "#f24e1e" },
];

// What I Offer
const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, responsive, and accessible interfaces with React, Next.js & Tailwind.",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Backend Development",
    description:
      "Building secure and efficient APIs with Node.js, Prisma, and PostgreSQL.",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly experiences with Figma, prototypes, and modern interaction flows.",
    icon: <FaFigma className="text-pink-500 text-3xl" />,
  },
];

// Soft Skills
const softSkills = [
  { name: "Teamwork", icon: <FaUsers className="text-yellow-400 text-2xl" /> },
  { name: "Creativity", icon: <FaLightbulb className="text-purple-400 text-2xl" /> },
  { name: "Collaboration", icon: <FaHandshake className="text-cyan-400 text-2xl" /> },
];

// Testimonials
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Prem is a fast learner and a dedicated developer. Always impressed with his clean UI designs!",
    icon: <FaStar className="text-yellow-400 text-2xl" />,
  },
  {
    name: "Jane Smith",
    feedback:
      "Collaborating with Prem was smooth and productive. He brings creativity and precision to every project.",
    icon: <FaStar className="text-yellow-400 text-2xl" />,
  },
];

// Certifications / Learning
const certifications = [
  { title: "JavaScript Mastery", provider: "Udemy", icon: <FaCertificate className="text-cyan-400 text-2xl" /> },
  { title: "React & Next.js Bootcamp", provider: "Scrimba", icon: <FaCertificate className="text-fuchsia-400 text-2xl" /> },
  { title: "UI/UX Design Basics", provider: "Coursera", icon: <FaCertificate className="text-yellow-400 text-2xl" /> },
];

// Fun Facts
const funFacts = [
  { fact: "I can debug code faster with lo-fi music 🎧", icon: <FaSmile className="text-pink-400 text-2xl" /> },
  { fact: "Love experimenting with futuristic AI tools 🤖", icon: <FaRocket className="text-cyan-400 text-2xl" /> },
  { fact: "My design inspo often comes from sci-fi movies 🎬", icon: <FaLightbulb className="text-green-400 text-2xl" /> },
];

export default function OpenToWorkPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden py-20 px-6 sm:px-12 md:px-20">
      {/* Background glow blobs */}
      <motion.div
        className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-600 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 opacity-30 blur-3xl"
        animate={{ scale: [1, 0.7, 1], rotate: [0, -120, 0] }}
        transition={{ repeat: Infinity, duration: 45, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl sm:text-7xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 animate-gradient-x"
      >
        🚀 Open to Work & Collaboration
      </motion.h1>

      {/* Highlights */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            whileHover={{ scale: 1.1, rotateY: 8 }}
            className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition-all duration-500 shadow-lg"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-5 bg-black/70 border border-neutral-700 rounded-full shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-neutral-300 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* What I Offer */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-fuchsia-400 mb-12">
          🌟 What I Offer
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-fuchsia-400"
            >
              <div className="flex justify-center mb-4">{srv.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
              <p className="text-neutral-300">{srv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mb-24"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-12">
          💻 Skills & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.4, rotate: [0, 10, -10, 0] }}
                className="flex flex-col items-center justify-center w-28 h-28 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-md hover:shadow-lg hover:shadow-cyan-400/40"
              >
                <Icon
                  className="text-5xl mb-2 drop-shadow-glow"
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-semibold text-neutral-200 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Soft Skills */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-yellow-400 mb-12">
          🤝 Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {softSkills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="p-6 bg-white/5 rounded-full border border-white/10 shadow-md mb-3">
                {s.icon}
              </div>
              <p className="text-lg font-semibold">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-400 mb-12">
          🌟 Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-6 rounded-2xl shadow-lg border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                {t.icon}
                <h3 className="font-semibold">{t.name}</h3>
              </div>
              <p className="text-neutral-300 italic">&quot;{t.feedback}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-400 mb-12">
          📜 Certifications & Learning
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="mb-3">{c.icon}</div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-neutral-400 text-sm">{c.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-pink-400 mb-12">
          🎉 Fun Facts About Me
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {funFacts.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg text-center max-w-xs"
            >
              <div className="mb-3">{f.icon}</div>
              <p className="text-neutral-300">{f.fact}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center border-t border-white/10 pt-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 mb-6">
          Let’s Build Something Epic Together
        </h2>
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
          Open to exciting opportunities — full-time, freelance, or
          collaborations. Let’s create impact with code & design.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-yellow-400 rounded-full font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-110 hover:shadow-[0_0_50px_rgba(34,211,238,0.8)] transition-all duration-500"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
