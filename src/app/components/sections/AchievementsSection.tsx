"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, ReactNode, memo } from "react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { createPortal } from "react-dom";
import {
  FaProjectDiagram,
  FaUsers,
  FaMobileAlt,
  FaCode,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

// Floating animated glowing stars background (memoized for performance)
const GlowingStarsBackground = memo(() => {
  const [stars, setStars] = useState<{ top: number; left: number }[]>([]);
  useEffect(() => {
    const generatedStars = Array.from({ length: 8 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80"
          style={{ top: `${s.top}%`, left: `${s.left}%` }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }}
        />
      ))}
    </div>
  );
});
GlowingStarsBackground.displayName = "GlowingStarsBackground";

interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
  stats?: { label: string; value: number }[];
  tech?: string[];
  details?: string;
}

const achievements: Achievement[] = [
  {
    icon: <FaProjectDiagram className="text-cyan-400 text-5xl mb-4" aria-hidden="true" />,
    title: "10+ Projects Completed",
    description: "Delivered full-stack web applications with React, Next.js, and Tailwind CSS.",
    stats: [{ label: "Projects", value: 10 }],
    tech: ["React", "Next.js", "Tailwind CSS", "Prisma"],
    details:
      "Developed diverse apps including eCommerce, dashboards, and SaaS platforms with scalable architectures.",
  },
  {
    icon: <FaUsers className="text-green-400 text-5xl mb-4" aria-hidden="true" />,
    title: "5+ Happy Clients",
    description: "Worked with clients across eCommerce, dashboards, and SaaS projects.",
    stats: [{ label: "Clients", value: 5 }],
    tech: ["Communication", "Agile", "Teamwork"],
    details: "Collaborated effectively with clients from requirement gathering to product delivery.",
  },
  {
    icon: <FaMobileAlt className="text-pink-400 text-5xl mb-4" aria-hidden="true" />,
    title: "100% Responsive Designs",
    description: "Ensured seamless user experiences across desktop, tablet, and mobile.",
    details:
      "Expertise in creating responsive, adaptive layouts prioritized for usability across devices.",
  },
  {
    icon: <FaCode className="text-yellow-400 text-5xl mb-4" aria-hidden="true" />,
    title: "TypeScript & Prisma",
    description: "Built scalable and type-safe applications with modern backend tooling.",
    tech: ["TypeScript", "Prisma", "Node.js"],
    details: "Implemented robust backend APIs and database schemas using Prisma ORM and TypeScript safety.",
  },
  {
    icon: <FaBrain className="text-purple-400 text-5xl mb-4" aria-hidden="true" />,
    title: "AI Integrations",
    description:
      "Implemented AI-powered features using APIs like OpenAI, Gemini, and Perplexity.",
    tech: ["OpenAI", "Gemini", "Perplexity"],
    details:
      "Integrated AI for chatbots, recommendations, and automated insights improving user engagement.",
  },
  {
    icon: <FaLaptopCode className="text-blue-400 text-5xl mb-4" aria-hidden="true" />,
    title: "Continuous Learning",
    description: "Exploring NestJS, Redis, and cloud deployment to stay ahead in development.",
    tech: ["NestJS", "Redis", "Cloud Deployment"],
    details: "Always learning new tools and practices to maintain cutting-edge project solutions.",
  },
];

export default function AchievementsSection() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => setModalIndex(null);

  // Accessibility: trap focus inside modal, keyboard carousel, close with Escape
  useEffect(() => {
    if (modalIndex !== null) {
      const focusableEls = modalRef.current?.querySelectorAll<HTMLElement>(
        'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls?.[0];
      const lastEl = focusableEls?.[focusableEls.length - 1];

      const keyListener = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();

        // Keyboard carousel - left/right arrows
        if (e.key === "ArrowRight") {
          setModalIndex((prev) => (prev === null ? null : (prev + 1) % achievements.length));
        }
        if (e.key === "ArrowLeft") {
          setModalIndex((prev) =>
            prev === null ? null : (prev - 1 + achievements.length) % achievements.length
          );
        }

        // Focus trap logic
        if (e.key === "Tab" && focusableEls) {
          if (document.activeElement === lastEl && !e.shiftKey) {
            e.preventDefault();
            firstEl?.focus();
          }
          if (document.activeElement === firstEl && e.shiftKey) {
            e.preventDefault();
            lastEl?.focus();
          }
        }
      };

      document.addEventListener("keydown", keyListener);
      firstEl?.focus();
      return () => document.removeEventListener("keydown", keyListener);
    }
  }, [modalIndex]);

  return (
    <section
      aria-labelledby="achievements-title"
      className="relative py-20 px-4 sm:px-8 md:px-16 w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      <GlowingStarsBackground />

      <motion.h2
        id="achievements-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text select-none"
      >
        Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((ach, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#0ff"
            glareBorderRadius="1.5rem"
            className="rounded-3xl"
          >
            <motion.div
              role="button"
              tabIndex={0}
              aria-pressed="false"
              aria-label={`View details of achievement: ${ach.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={
                "relative flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/60 " +
                "border border-white/20 rounded-3xl shadow-xl backdrop-blur-lg transition-transform duration-500 " +
                "hover:scale-105 hover:shadow-cyan-500/50 hover:-rotate-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-500"
              }
              onClick={() => setModalIndex(idx)}
              onKeyDown={(e) => e.key === "Enter" && setModalIndex(idx)}
            >
              {ach.icon}

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text">
                {ach.title}
              </h3>

              <p className="text-neutral-200 text-center text-sm sm:text-base leading-relaxed mb-4 max-w-xs">
                {ach.description}
              </p>

              {ach.stats && (
                <div className="flex gap-4 flex-wrap justify-center mb-4">
                  {ach.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-xs sm:text-sm text-white/80 text-center font-mono"
                    >
                      <CountUp end={stat.value} duration={2} enableScrollSpy suffix="+" /> <br />
                      {stat.label}
                    </div>
                  ))}
                </div>
              )}

              {ach.tech && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {ach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-600 bg-opacity-30 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full select-none hover-glow"
                      title={tech}
                      aria-label={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Modal Detail */}
      {modalIndex !== null &&
        createPortal(
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-8"
            aria-modal="true"
            role="dialog"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900/95 p-6 sm:p-8 rounded-3xl max-w-md w-full text-white relative shadow-2xl backdrop-blur-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-4xl font-bold focus:outline-none"
                aria-label="Close modal"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="flex flex-col items-center gap-4">
                {achievements[modalIndex].icon}
                <h3 className="text-2xl font-bold text-center">
                  {achievements[modalIndex].title}
                </h3>
                <p className="text-white/80 text-center max-w-sm px-4">
                  {achievements[modalIndex].details || achievements[modalIndex].description}
                </p>

                {achievements[modalIndex].stats && (
                  <div className="flex gap-6 flex-wrap justify-center mt-4">
                    {achievements[modalIndex].stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="font-bold text-2xl">
                          <CountUp end={stat.value} duration={2} suffix="+" />
                        </span>
                        <br />
                        {stat.label}
                      </div>
                    ))}
                  </div>
                )}

                {achievements[modalIndex].tech && (
                  <div className="flex flex-wrap gap-3 justify-center mt-4">
                    {achievements[modalIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-600 bg-opacity-30 text-cyan-200 text-sm font-semibold px-4 py-1 rounded-full hover-glow"
                        title={tech}
                        aria-label={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Mobile friendly close button */}
                <button
                  onClick={closeModal}
                  className="mt-6 px-6 py-2 bg-cyan-600 rounded-full font-semibold text-white focus:outline-none focus:ring-4 focus:ring-cyan-400 sm:hidden"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      <style>{`
        .hover-glow:hover {
          box-shadow: 0 0 10px #0ff;
          transform: scale(1.05);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
