"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import { useState, useEffect, useRef, memo, ReactNode } from "react";
import { createPortal } from "react-dom";
import UpDown from "../ui/UpDown";
import CountUp from "react-countup";

interface Experience {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  details?: string;
  stats?: { label: string; value: string | number }[];
}

// Analytics as a normal function
function trackAnalytics(cardTitle: string) {
  console.log(`Analytics Track: ${cardTitle} clicked`);
  // Integrate Google Analytics or other tracking here
}

const experiences: Experience[] = [
  {
    title: "Open to Projects",
    description:
      "Eager to take on full-stack projects: Web Apps, Dashboards, eCommerce sites. Ready to apply modern frameworks and tools to deliver clean, scalable solutions.",
    icon: <FaCode className="text-cyan-400 text-4xl drop-shadow-glow" />,
    link: "/projects",
    details: "React, Next.js, Tailwind CSS, TypeScript, Prisma, Node.js",
    stats: [
      { label: "Projects Built", value: 8 },
      { label: "Users Reached", value: 1200 },
    ],
  },
  {
    title: "Learning & Exploring",
    description:
      "Continuously exploring new frameworks, deployment methods, and AI integrations to stay ahead in web development.",
    icon: <FaLightbulb className="text-yellow-400 text-4xl drop-shadow-glow" />,
    link: "#",
    details: "NestJS, Redis, Railway, AI APIs like Gemini & Perplexity",
  },
  {
    title: "Building Impact",
    description:
      "Focused on creating personal projects like Codetracter, improving user experiences, and building clean, maintainable applications.",
    icon: <FaRocket className="text-blue-400 text-4xl drop-shadow-glow" />,
    link: "/projects",
    stats: [{ label: "Projects Deployed", value: 5 }],
  },
  {
    title: "Teamwork & Collaboration",
    description:
      "Strong communicator and team player, experienced in code reviews, pair programming, and agile workflow for delivering quality projects.",
    icon: <FaUsers className="text-green-400 text-4xl drop-shadow-glow" />,
    link: "#",
  },
];

// Hydration-safe glowing stars
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
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80 pointer-events-none"
          style={{ top: `${s.top}%`, left: `${s.left}%` }}
        />
      ))}
    </div>
  );
});
GlowingStarsBackground.displayName = "GlowingStarsBackground";

export default function ExperienceSection() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const patternConfigs = [
    { y: 10, x: 0, speed: 4, delay: 0 },
    { y: 15, x: 5, speed: 3.5, delay: 0.2 },
    { y: 12, x: -5, speed: 4.5, delay: 0.1 },
    { y: 18, x: 3, speed: 3.8, delay: 0.3 },
  ];

  const closeModal = () => setModalIndex(null);

  // Analytics tracking when modal opens
  useEffect(() => {
    if (modalIndex !== null) {
      trackAnalytics(experiences[modalIndex].title);
    }
  }, [modalIndex]);

  // Accessibility: trap focus inside modal
  useEffect(() => {
    if (modalIndex !== null) {
      const focusableEls = modalRef.current?.querySelectorAll<HTMLElement>(
        'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls?.[0];
      const lastEl = focusableEls?.[focusableEls.length - 1];

      const keyListener = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
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

  const showNext = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % experiences.length);
  };
  const showPrev = () => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + experiences.length) % experiences.length);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white relative overflow-hidden">
      <GlowingStarsBackground />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text select-none"
      >
        Experience & Readiness
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <UpDown key={i} {...patternConfigs[i]}>
            <motion.div
              className="relative flex flex-col items-center justify-center p-8 sm:p-10 bg-gradient-to-br from-gray-800/50 to-gray-900/60 border border-white/20 rounded-3xl shadow-xl backdrop-blur-lg transition-transform duration-500 overflow-hidden group cursor-pointer hover:scale-105"
              onClick={() => setModalIndex(i)}
            >
              <span
                className="absolute -z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-50"
                style={{
                  background:
                    i === 0
                      ? "#06b6d4"
                      : i === 1
                      ? "#facc15"
                      : i === 2
                      ? "#3b82f6"
                      : "#22c55e",
                }}
              />
              <div className="mb-4 sm:mb-6">{exp.icon}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3">
                {exp.title}
              </h3>
              <p className="text-neutral-200 text-center text-sm sm:text-base leading-relaxed mb-4">
                {exp.description}
              </p>
            </motion.div>
          </UpDown>
        ))}
      </div>

      {modalIndex !== null &&
        createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-8"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900/95 p-6 sm:p-8 rounded-3xl max-w-md w-full text-white relative shadow-2xl backdrop-blur-lg"
            >
              <motion.button
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-4 right-4 text-white text-xl font-bold"
                aria-label="Close modal"
                onClick={closeModal}
              >
                &times;
              </motion.button>

              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl mb-2">
                  {experiences[modalIndex].icon}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 text-center"
                  id="modal-title"
                >
                  {experiences[modalIndex].title}
                </h3>
                <p className="text-white/80 text-center mb-3">
                  {experiences[modalIndex].details ||
                    experiences[modalIndex].description}
                </p>

                {experiences[modalIndex].stats && (
                  <div className="flex gap-4 flex-wrap justify-center mb-3">
                    {experiences[modalIndex].stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center text-sm sm:text-base"
                      >
                        <CountUp
                          end={
                            typeof stat.value === "string"
                              ? parseInt(stat.value) || 0
                              : stat.value
                          }
                          duration={1.5}
                        />
                        <br />
                        {stat.label}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-4">
                  <button
                    className="px-4 py-2 bg-gray-700/50 rounded-full hover:bg-gray-700/70"
                    onClick={showPrev}
                  >
                    Previous
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-700/50 rounded-full hover:bg-gray-700/70"
                    onClick={showNext}
                  >
                    Next
                  </button>
                </div>

                <a
                  href={experiences[modalIndex].link}
                  className="mt-4 px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300"
                >
                  Go to Project
                </a>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
    </section>
  );
}
