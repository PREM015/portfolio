"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  level: number; // percentage
};

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "Redux", level: 82 },
      { name: "Zustand", level: 78 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Prisma ORM", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 78 },
      { name: "FastAPI", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git & GitHub", level: 95 },
      { name: "GitHub Actions", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "AWS Basics", level: 70 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Jest & Testing", level: 70 },
      { name: "Cypress", level: 68 },
      { name: "Playwright", level: 65 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 72 },
      { name: "WebSockets", level: 77 },
      { name: "Python", level: 82 },
    ],
  },
];

// Map levels to labels
const getLevelLabel = (level: number): string => {
  if (level >= 90) return "Master";
  if (level >= 80) return "Advanced";
  return "Intermediate";
};

// Animated counter
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(15, Math.floor(1000 / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}%</>;
};

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative py-20 px-6 md:px-16 w-full bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text select-none"
      >
        My Technical Skills
      </motion.h2>

      {/* Tabs */}
      <nav className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((cat, i) => {
          const active = activeCategory === i;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </nav>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59,130,246,0.08)",
              }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-md backdrop-blur-md flex flex-col gap-3"
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-cyan-300">
                  {skill.name}
                </h4>
                <span className="text-cyan-400 font-bold text-sm">
                  <Counter target={skill.level} />
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>

              {/* Label */}
              <p className="text-sm text-gray-400 mt-1">
                {getLevelLabel(skill.level)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
