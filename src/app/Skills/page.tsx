"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { FaCircle } from "react-icons/fa";

/* ================================
   CONFIG
================================= */
const skillsWithTimeline = [
  {
    phase: "2021 - Core Frontend Basics",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Sass", "Bootstrap"],
    color: "from-indigo-500 to-indigo-700",
  },
  {
    phase: "2022 - Modern Frontend Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Redux",
      "TypeScript (Frontend)",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    phase: "2023 - Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT Auth",
      "TypeScript (Backend)",
    ],
    color: "from-pink-500 to-pink-700",
  },
  {
    phase: "2024 - Databases & Storage",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Prisma ORM",
      "Redis",
      "Elasticsearch",
    ],
    color: "from-cyan-500 to-cyan-700",
  },
  {
    phase: "2025 - DevOps, Testing & Advanced Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Postman",
      "Jest",
      "Cypress",
      "Agile/Scrum",
      "Linux/Bash",
      "WebSockets",
      "Serverless (AWS, Firebase)",
    ],
    color: "from-blue-500 to-blue-700",
  },
];

const TRANSITIONS: { spring: Transition; softSpring: Transition } = {
  spring: { type: "spring", stiffness: 280, damping: 26 },
  softSpring: { type: "spring", stiffness: 170, damping: 26 },
};

/* ================================
   COMPONENTS
================================= */
const SkillBadge = memo(function SkillBadge({
  skill,
  colorClass,
}: {
  skill: string;
  colorClass: string;
}) {
  return (
    <motion.div
      className={`relative rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 font-medium text-white 
        bg-gradient-to-r ${colorClass} shadow-md 
        flex items-center gap-2 sm:gap-3 max-w-[12rem] sm:max-w-[14rem] cursor-default overflow-hidden`}
      whileHover={{
        scale: 1.05,
        rotate: -2,
        boxShadow: "0 0 30px rgba(255,255,255,0.25)",
      }}
      transition={TRANSITIONS.spring}
      aria-label={`Skill: ${skill}`}
    >
      <FaCircle className="text-white/90 text-[0.6rem] sm:text-sm" />
      <span className="relative z-10 text-xs sm:text-sm">{skill}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
});

const TimelineItem = memo(function TimelineItem({
  phase,
  isActive,
  onClick,
  colorClass,
}: {
  phase: string;
  isActive: boolean;
  onClick: () => void;
  colorClass: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      tabIndex={0}
      aria-pressed={isActive}
      aria-current={isActive ? "step" : undefined}
      className={`flex flex-col items-center px-2 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl min-w-[8rem] sm:min-w-[10rem] snap-center
        transition focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600
        ${
          isActive
            ? `bg-gradient-to-r ${colorClass} text-white shadow-lg`
            : "bg-white/5 text-gray-400 hover:text-white backdrop-blur-md border border-white/10"
        }`}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
    >
      <motion.div
        className="rounded-full w-6 h-6 sm:w-9 sm:h-9 bg-white mb-1 sm:mb-3 border border-white/40"
        animate={{
          scale: isActive ? 1.5 : 1,
          boxShadow: isActive ? "0 0 25px rgba(255,255,255,0.7)" : "none",
        }}
        transition={TRANSITIONS.spring}
      />
      <span className="text-[0.65rem] sm:text-sm font-semibold text-center">
        {phase}
      </span>
    </motion.button>
  );
});

/* ================================
   MAIN
================================= */
export default function SkillsTimelineMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // auto-center active item
  useEffect(() => {
    const timeline = timelineRef.current;
    const activeButton = timeline?.querySelector(
      "[aria-pressed='true']"
    ) as HTMLElement | null;
    if (timeline && activeButton) {
      const scrollPos =
        activeButton.offsetLeft -
        timeline.offsetWidth / 2 +
        activeButton.offsetWidth / 2;
      timeline.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  }, [activeIndex]);

  // keyboard nav
  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" && activeIndex < skillsWithTimeline.length - 1) {
      setActiveIndex((i) => i + 1);
    }
    if (e.key === "ArrowLeft" && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-3 sm:p-12 flex flex-col items-center"
      aria-label="Skill evolution timeline"
      onKeyDown={handleKeyNav}
    >
      {/* Title */}
      <h1
        className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center 
        mb-6 sm:mb-10 md:mb-16
        bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500
        drop-shadow-lg leading-snug max-w-xl sm:max-w-3xl"
      >
        🚀 My Skill Evolution — Full Stack Expertise
      </h1>

      {/* Timeline */}
      <motion.div
        ref={timelineRef}
        className="flex gap-2 sm:gap-6 overflow-x-scroll w-full max-w-7xl px-1 sm:px-3 pb-3 sm:pb-4 snap-x scrollbar-none flex-nowrap touch-pan-x"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        role="tablist"
      >
        {skillsWithTimeline.map(({ phase, color }, idx) => (
          <TimelineItem
            key={phase}
            phase={phase}
            isActive={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
            colorClass={color}
          />
        ))}
      </motion.div>

      {/* Progress bar */}
      <div className="relative w-full max-w-7xl h-2 bg-gray-800 rounded-full mb-8 sm:mb-16 overflow-hidden">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${skillsWithTimeline[activeIndex].color}`}
          layout
          transition={TRANSITIONS.softSpring}
          style={{
            width: `${(activeIndex / (skillsWithTimeline.length - 1)) * 100}%`,
          }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 rounded-full w-4 sm:w-6 h-4 sm:h-6 bg-white shadow-md"
          animate={{
            left: `${(activeIndex / (skillsWithTimeline.length - 1)) * 100}%`,
            boxShadow: "0 0 15px rgba(255,255,255,0.8)",
          }}
          transition={TRANSITIONS.spring}
        />
      </div>

      {/* Skills grid */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl 
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-2 sm:gap-4 md:gap-6 px-1 sm:px-4 place-items-center"
        role="tabpanel"
        aria-labelledby={`phase-${activeIndex}`}
        aria-live="polite"
      >
        {skillsWithTimeline[activeIndex].skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
            colorClass={skillsWithTimeline[activeIndex].color}
          />
        ))}
      </motion.div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`desc-${activeIndex}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className={`w-full sm:max-w-3xl mt-6 sm:mt-12 p-3 sm:p-6 rounded-2xl sm:rounded-3xl text-center shadow-md tracking-wide 
          text-xs sm:text-base md:text-lg leading-relaxed border
          bg-gradient-to-r ${skillsWithTimeline[activeIndex].color} bg-opacity-20 border-white/20 text-white/90`}
        >
          <p>
            In <strong>{skillsWithTimeline[activeIndex].phase}</strong>, I
            mastered{" "}
            <strong>
              {skillsWithTimeline[activeIndex].skills.length}
            </strong>{" "}
            key technologies, sharpening my full stack expertise to build
            modern, scalable applications.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
