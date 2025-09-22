"use client";

import { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaGithub, FaCode, FaFigma, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiFirebase } from "react-icons/si";

const tags = [
  "Problem Solver",
  "Curious Learner",
  "UI/UX Thinker",
  "Open Source Enthusiast",
  "Full-Stack Developer",
  "Agile Practitioner",
];

const journey = [
  { year: "2021", title: "Frontend Basics", text: "Started learning HTML, CSS, JavaScript, and Bootstrap." },
  { year: "2022", title: "Modern Frontend Frameworks", text: "Dove into React.js, Next.js, Tailwind CSS, Redux, TypeScript." },
  { year: "2023", title: "Backend & APIs", text: "Built full-stack apps with Node.js, Express, REST & GraphQL APIs." },
  { year: "2024", title: "Databases & Storage", text: "Explored MongoDB, PostgreSQL, Firebase, Prisma ORM, and Redis." },
  { year: "2025", title: "Advanced Tools & DevOps", text: "Working on Docker, Kubernetes, CI/CD, Testing, Serverless & ML integration." },
];

const skills = [
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "Prisma", icon: SiPrisma, color: "#a855f7" },
  { name: "Firebase", icon: SiFirebase, color: "#ffcb2b" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "UI/UX", icon: FaFigma, color: "#f24e1e" },
  { name: "Algorithms", icon: FaCode, color: "#8b5cf6" },
];

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <section
      className={`relative min-h-screen w-full px-4 sm:px-8 lg:px-16 py-16 transition-colors duration-300
        ${darkMode ? "bg-gradient-to-br from-[#1a1932] via-[#181a29] to-[#23253d] text-white" : "bg-gradient-to-br from-[#fff1f2] via-[#e2eafc] to-[#fffbe7] text-gray-900"}`}
    >
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-8 right-8 z-50 p-3 rounded-full bg-black/50 dark:bg-white/50 text-white dark:text-black shadow-lg"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Profile Card */}
        <div className="relative bg-gray-900/80 dark:bg-gray-200/70 p-8 rounded-3xl shadow-lg flex flex-col items-center w-full md:w-1/2">
          <div className="relative w-44 h-44">
            <Image
              src="/profile3.png"
              alt="Prem Raj"
              fill
              className="rounded-full border-4 border-fuchsia-400 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4 text-fuchsia-300">Prem Raj</h1>
          <p className="text-cyan-200 mt-2 text-lg">Full-Stack Developer</p>

          {/* Skill Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-2xl">
            {skills.slice(0, 6).map((skill, i) => {
              const Icon = skill.icon;
              return <Icon key={i} style={{ color: skill.color }} />;
            })}
          </div>
        </div>

        {/* Introduction */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-pink-400">
            👋 Hello, I’m Prem
          </h2>

          <p className="leading-relaxed text-lg text-fuchsia-100">
            Passionate full-stack developer building modern, scalable, and visually appealing apps. Skilled in{" "}
            <span className="text-cyan-300 font-semibold">React</span>,{" "}
            <span className="text-fuchsia-300 font-semibold">Next.js</span>,{" "}
            <span className="text-sky-300 font-semibold">TypeScript</span>,{" "}
            <span className="text-violet-400 font-semibold">Tailwind CSS</span>. Strong backend experience in{" "}
            <span className="text-lime-300 font-semibold">Node.js</span>,{" "}
            <span className="text-yellow-200 font-semibold">Firebase</span>, and{" "}
            <span className="text-purple-300 font-semibold">Prisma</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-fuchsia-700 via-cyan-800 to-purple-700/80 text-white rounded-full text-sm font-semibold shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="bg-gray-800/80 dark:bg-gray-200/70 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700"
            >
              <Icon className="text-4xl mb-2" style={{ color: skill.color }} />
              <span className="font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>

      {/* Developer Journey */}
      <div className="max-w-5xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center text-fuchsia-300 mb-12">🚀 My Developer Journey</h2>
        <div className="relative border-l-4 border-gray-700 pl-6 space-y-10">
          {journey.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-5 top-2 w-6 h-6 rounded-full bg-fuchsia-400 shadow-lg"></div>
              <h3 className="text-xl font-semibold text-violet-400">
                {item.year} — {item.title}
              </h3>
              <p className="text-gray-300 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Goals & Fun Facts */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/80 dark:bg-gray-200/70 p-6 rounded-3xl shadow-lg border border-gray-700 text-white dark:text-black">
          <h3 className="text-2xl font-semibold mb-4">🎯 Goals</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Build innovative web apps with modern stacks</li>
            <li>Contribute actively to open-source projects</li>
            <li>Explore motion UI, 3D, and immersive experiences</li>
            <li>Collaborate with top-tier product teams</li>
          </ul>
        </div>
        <div className="bg-gray-800/80 dark:bg-gray-200/70 p-6 rounded-3xl shadow-lg border border-gray-700 text-white dark:text-black">
          <h3 className="text-2xl font-semibold mb-4">🎉 Fun Facts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Learner of Ruby and Machine Learning integration</li>
            <li>Active in FOSS club & tech communities</li>
            <li>Love exploring new design systems and UI experiments</li>
            <li>Enjoy side projects and learning cutting-edge tech</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
