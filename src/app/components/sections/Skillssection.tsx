"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  level: number;
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

const skillLevelsLabels: Record<number, string> = {
  95: "Expert",
  90: "Advanced",
  88: "Advanced",
  85: "Proficient",
  82: "Proficient",
  80: "Intermediate",
  78: "Intermediate",
  77: "Intermediate",
  75: "Intermediate",
  72: "Learning",
  70: "Learning",
  68: "Learning",
  65: "Learning",
};

const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = Math.max(15, Math.floor(duration / target));
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
    <section
      className="relative py-20 px-6 md:px-16 w-full bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white"
      aria-label="Technical Skills"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text select-none"
      >
        Technical Skills
      </motion.h2>

      {/* Tabs */}
      <nav
        className="flex flex-wrap justify-center gap-3 mb-12"
        aria-label="Skill Categories"
      >
        {skillCategories.map((cat, i) => {
          const active = activeCategory === i;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              tabIndex={active ? 0 : -1}
              className={`relative px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none ${
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

      {/* Skills List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 10px 25px rgba(14,203,255,0.25), 0 0 20px rgba(59,130,246,0.25)",
              }}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10"
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
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                />
              </div>

              {/* Proficiency Label */}
              <p className="text-sm text-gray-400 mt-1">
                {skillLevelsLabels[skill.level] ?? `${skill.level}%`}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
