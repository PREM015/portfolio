"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";
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
  FaDownload,
  FaLinkedin,
  FaTwitter,
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
    icon: <FaCode className="text-cyan-400 text-2xl sm:text-3xl drop-shadow-glow" />,
  },
  {
    title: "Open Source Contributions",
    description:
      "Improved GitHub repos by fixing bugs, optimizing performance, and collaborating with global teams.",
    icon: <FaGithub className="text-white text-2xl sm:text-3xl drop-shadow-glow" />,
  },
  {
    title: "Exploring & Learning",
    description:
      "Diving into Firebase, Docker, TypeScript, motion UI & AI to create futuristic solutions.",
    icon: <FaReact className="text-blue-500 text-2xl sm:text-3xl drop-shadow-glow" />,
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
    icon: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />,
  },
  {
    title: "Backend Development",
    description:
      "Building secure and efficient APIs with Node.js, Prisma, and PostgreSQL.",
    icon: <FaNodeJs className="text-green-500 text-2xl sm:text-3xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly experiences with Figma, prototypes, and modern interaction flows.",
    icon: <FaFigma className="text-pink-500 text-2xl sm:text-3xl" />,
  },
];

// Soft Skills
const softSkills = [
  { name: "Teamwork", icon: <FaUsers className="text-yellow-400 text-xl sm:text-2xl" /> },
  { name: "Creativity", icon: <FaLightbulb className="text-purple-400 text-xl sm:text-2xl" /> },
  { name: "Collaboration", icon: <FaHandshake className="text-cyan-400 text-xl sm:text-2xl" /> },
];

// Testimonials
const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    feedback:
      "Prem is a fast learner and a dedicated developer. Always impressed with his clean UI designs!",
    icon: <FaStar className="text-yellow-400 text-xl sm:text-2xl" />,
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    feedback:
      "Collaborating with Prem was smooth and productive. He brings creativity and precision to every project.",
    icon: <FaStar className="text-yellow-400 text-xl sm:text-2xl" />,
  },
];

// Certifications / Learning
const certifications = [
  { title: "JavaScript Mastery", provider: "Udemy", icon: <FaCertificate className="text-cyan-400 text-xl sm:text-2xl" /> },
  { title: "React & Next.js Bootcamp", provider: "Scrimba", icon: <FaCertificate className="text-fuchsia-400 text-xl sm:text-2xl" /> },
  { title: "UI/UX Design Basics", provider: "Coursera", icon: <FaCertificate className="text-yellow-400 text-xl sm:text-2xl" /> },
];

// Fun Facts
const funFacts = [
  { fact: "I can debug code faster with lo-fi music 🎧", icon: <FaSmile className="text-pink-400 text-xl sm:text-2xl" /> },
  { fact: "Love experimenting with futuristic AI tools 🤖", icon: <FaRocket className="text-cyan-400 text-xl sm:text-2xl" /> },
  { fact: "My design inspo often comes from sci-fi movies 🎬", icon: <FaLightbulb className="text-green-400 text-xl sm:text-2xl" /> },
];

export default function OpenToWorkPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  // Memoized animation variants
  const fadeInUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
      visible: { opacity: 1, y: 0 },
    }),
    [prefersReducedMotion]
  );

  const cardHoverVariants = useMemo(
    () => ({
      scale: prefersReducedMotion ? 1 : 1.05,
      rotateY: prefersReducedMotion ? 0 : 5,
    }),
    [prefersReducedMotion]
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Background blobs */}
      {!prefersReducedMotion ? (
        <>
          <motion.div
            className="absolute top-[-100px] sm:top-[-200px] left-[-75px] sm:left-[-150px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-600 opacity-20 sm:opacity-30 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-100px] sm:bottom-[-200px] right-[-75px] sm:right-[-150px] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 opacity-20 sm:opacity-30 blur-3xl pointer-events-none"
            animate={{ scale: [1, 0.7, 1], rotate: [0, -120, 0] }}
            transition={{ repeat: Infinity, duration: 45, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <div className="absolute top-[-100px] sm:top-[-200px] left-[-75px] sm:left-[-150px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-600 opacity-20 sm:opacity-30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-100px] sm:bottom-[-200px] right-[-75px] sm:right-[-150px] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500 opacity-20 sm:opacity-30 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 sm:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 px-4 leading-tight"
      >
        🚀 Open to Work & Collaboration
      </motion.h1>

      {/* Highlights */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-24 max-w-7xl mx-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={cardHoverVariants}
            className="relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-400 transition-all duration-500 shadow-lg will-change-transform"
          >
            <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
              <div className="p-4 sm:p-5 bg-black/70 border border-neutral-700 rounded-full shadow-lg flex-shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">{item.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* What I Offer */}
      <div className="mb-16 sm:mb-24 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-fuchsia-400 mb-8 sm:mb-12 px-4"
        >
          🌟 What I Offer
        </motion.h2>
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-3">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:border-fuchsia-400 transition-all duration-300 will-change-transform"
            >
              <div className="flex justify-center mb-3 sm:mb-4">{srv.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{srv.title}</h3>
              <p className="text-sm sm:text-base text-neutral-300">{srv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16 sm:mb-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-8 sm:mb-12 px-4">
          💻 Skills & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.3,
                  rotate: prefersReducedMotion ? 0 : [0, 10, -10, 0],
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setActiveSkill(index)}
                onHoverEnd={() => setActiveSkill(null)}
                className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-3 sm:p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xl shadow-md hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 will-change-transform cursor-pointer"
              >
                <Icon
                  className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 drop-shadow-glow transition-transform duration-300"
                  style={{ color: skill.color }}
                />
                <span className="text-xs sm:text-sm font-semibold text-neutral-200 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
