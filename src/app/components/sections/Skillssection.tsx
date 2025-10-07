"use client";

import React from "react";
import { motion } from "framer-motion";

// Skills grouped by category with proper white GitHub and Vercel logos
const skillOverview = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38BDF8" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#0C344B" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", color: "#ffffff" }, // true GitHub logo in white
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg", color: "#ffffff" },   // true Vercel logo in white
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-16 w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white relative overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text select-none"
      >
        My Key Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {skillOverview.map((cat) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:block after:w-16 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-purple-400 after:to-pink-500">
              {cat.category}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.2, rotateY: 5, rotateX: 3 }}
                  className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full border border-white/10 shadow-xl backdrop-blur-sm transition-all duration-500 group overflow-visible bg-gray-800/30"
                >
                  {/* Glow Halo */}
                  <span
                    className="absolute -z-10 w-28 h-28 rounded-full opacity-20 blur-xl group-hover:opacity-50 transition-all duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  ></span>

                  {/* Logo with up-down floating animation */}
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + i * 0.1, ease: "easeInOut" }}
                  />

                  {/* Tech name with up-down animation */}
                  <motion.p
                    className="text-xs font-semibold text-gray-200 mt-2 text-center"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + i * 0.1, ease: "easeInOut" }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce"
      >
        Swipe to see more
      </motion.div>
    </section>
  );
};

export default SkillsSection;
