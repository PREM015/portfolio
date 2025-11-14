"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaFigma, FaDocker, FaPython, FaCode, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiFirebase } from "react-icons/si";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import type { IconType } from "react-icons";

// ---------- Data ----------
const storySections = [
  { title: "Who I Am", description: "I'm Prem Raj, a passionate full-stack developer building interactive and modern web experiences.", icon: FaReact },
  { title: "What I Build", description: "From dynamic frontends with React/Next.js to robust backends with Node.js, Prisma, and Firebase.", icon: FaNodeJs },
  { title: "What I Love", description: "I thrive on learning new tech, contributing to open source, and designing immersive UI/UX experiences.", icon: FaFigma },
];

const skills = [
  { id: 1, name: "React", icon: FaReact, color: "#61dafb" },
  { id: 2, name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { id: 3, name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { id: 4, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { id: 5, name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { id: 6, name: "Prisma", icon: SiPrisma, color: "#a855f7" },
  { id: 7, name: "Firebase", icon: SiFirebase, color: "#ffcb2b" },
  { id: 8, name: "Docker", icon: FaDocker, color: "#2496ed" },
  { id: 9, name: "Python", icon: FaPython, color: "#FFD43B" },
  { id: 10, name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { id: 11, name: "UI/UX", icon: FaFigma, color: "#f24e1e" },
  { id: 12, name: "Algorithms", icon: FaCode, color: "#8b5cf6" },
];

const education = [
  { id: 1, year: "2021", title: "10th Grade", description: "Completed 10th with strong foundation in science & maths." },
  { id: 2, year: "2021-2024", title: "Diploma in Computer Science", description: "Focused on web development, algorithms, and software fundamentals." },
  { id: 3, year: "2024-2027", title: "B.Tech in Computer Science", description: "Specializing in full-stack development and modern web technologies." },
];

const developerJourney = [
  { id: 1, year: "2021", title: "Frontend Basics" },
  { id: 2, year: "2022", title: "Modern Frontend" },
  { id: 3, year: "2023", title: "Backend & APIs" },
  { id: 4, year: "2024", title: "Databases & Storage" },
  { id: 5, year: "2025", title: "Advanced Tools" },
];

const achievements = [
  { label: "Projects Completed", value: 10 },
  { label: "GitHub Repos", value: 15 },
  { label: "Clients Worked With", value: 5 },
  { label: "Years Experience", value: 2 },
];

const funFacts = [
  "Active in FOSS & tech communities",
  "Learning Ruby & ML",
  "Love UI/UX design experiments",
  "Passionate about side projects",
];

// ---------- Component ----------
export default function AboutPage() {
  const [counters, setCounters] = useState(achievements.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      achievements.forEach((a, idx) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          if (count >= a.value) {
            count = a.value;
            clearInterval(interval);
          }
          setCounters((prev) => {
            const updated = [...prev];
            updated[idx] = count;
            return updated;
          });
        }, 50);
      });
    }
  }, [inView]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0d0d1a] via-[#111122] to-[#0f0f1c] text-white px-4 sm:px-8 lg:px-16 py-16">

      {/* Background animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-700 via-cyan-500 to-green-400 opacity-20 blur-3xl animate-pulse rounded-full -z-10"
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400"
        >
          👋 Hello, I’m Prem Raj
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Full-stack developer crafting interactive, modern, and scalable web experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-center gap-6 text-2xl text-gray-300"
        >
          <a href="mailto:rprem3096@gmail.com" className="hover:text-cyan-400 transition-colors"><FaEnvelope /></a>
          <a href="https://github.com/PREM015" target="_blank" className="hover:text-cyan-400 transition-colors"><FaGithub /></a>
        </motion.div>
      </div>

      {/* Story Sections */}
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {storySections.map((section, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
          >
            <div className="text-6xl md:text-7xl text-cyan-400 hover:scale-110 transition-transform duration-300">
              <section.icon />
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-2 text-green-400">{section.title}</h2>
              <p className="text-gray-300">{section.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto mt-32 text-center relative z-10">
        <h2 className="text-3xl font-bold text-green-400 mb-8">🛠️ My Skills</h2>
        <InfiniteMovingCards
          items={skills}
          speed="normal"
          renderItem={(skill: typeof skills[0]) => {
            const Icon: IconType = skill.icon;
            return (
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 5 }}
                className="flex flex-col items-center justify-center gap-2 bg-gray-900/70 p-5 rounded-3xl shadow-xl border border-gray-700 cursor-pointer transition-transform duration-300"
              >
                <Icon className="text-4xl" style={{ color: skill.color }} />
                <span className="text-white font-semibold">{skill.name}</span>
              </motion.div>
            );
          }}
        />
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto mt-32 relative z-10">
        <h2 className="text-3xl font-bold text-green-400 mb-12 text-center">🎓 Education</h2>
        <div className="relative border-l-4 border-cyan-400 pl-6 space-y-12">
          {education.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-5 top-1 w-6 h-6 rounded-full bg-green-400 shadow-lg flex items-center justify-center animate-pulse">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">{item.year} — {item.title}</h3>
              <p className="text-gray-300 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Developer Journey */}
      <div className="max-w-6xl mx-auto mt-32 text-center relative z-10">
        <h2 className="text-3xl font-bold text-green-400 mb-8">🚀 Developer Journey</h2>
        <InfiniteMovingCards
          items={developerJourney}
          speed="normal"
          renderItem={(item: typeof developerJourney[0]) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/70 p-6 rounded-3xl shadow-xl border border-gray-700 min-w-[200px] mx-2 cursor-pointer transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-1">{item.year}</h3>
              <p className="text-gray-300 text-sm">{item.title}</p>
            </motion.div>
          )}
        />
      </div>

      {/* Achievements */}
      <div className="max-w-6xl mx-auto mt-32 text-center relative z-10" ref={ref}>
        <h2 className="text-3xl font-bold text-green-400 mb-8">🏆 Achievements</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              className="bg-gray-900/70 p-6 rounded-3xl shadow-xl border border-gray-700 w-40 cursor-pointer transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{counters[i]}</h3>
              <p className="text-gray-300 font-medium">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="max-w-6xl mx-auto mt-32 text-center relative z-10">
        <h2 className="text-3xl font-bold text-green-400 mb-8">🎉 Fun Facts</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {funFacts.map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-gray-900/70 p-6 rounded-3xl shadow-xl border border-gray-700 w-60 text-center cursor-pointer transition-transform duration-300"
            >
              <p className="text-gray-300">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-32 text-center relative z-10">
        <motion.a
          href="contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-green-400 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-3xl shadow-xl transition-colors"
        >
          📬 Contact Me
        </motion.a>
      </div>

    </section>
  );
}
