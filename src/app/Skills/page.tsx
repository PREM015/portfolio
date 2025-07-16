"use client";

import { motion } from "framer-motion";
import React from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "JWT Authentication",
    ],
  },
  {
    category: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Prisma ORM",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Vercel",
      "Netlify",
      "Postman",
    ],
  },
  {
    category: "Other Essentials",
    skills: [
      "TypeScript",
      "Responsive Design",
      "Testing (Jest, Cypress)",
      "Agile/Scrum",
      "Linux/Bash",
    ],
  },
];

const SkillCard = ({ category, skills }: { category: string; skills: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl p-6 shadow-lg border border-neutral-700 backdrop-blur-sm hover:shadow-blue-500/20 transition-all"
  >
    <h3 className="text-xl font-bold text-white mb-4 border-b border-blue-600 pb-2">
      {category}
    </h3>
    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
      {skills.map((skill) => (
        <li
          key={skill}
          className="bg-blue-900/30 text-blue-300 rounded-md px-3 py-1 font-medium shadow-sm hover:bg-blue-800/60 transition"
        >
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-900 to-black px-4 md:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          🚀 My Full Stack Skills
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((section) => (
            <SkillCard
              key={section.category}
              category={section.category}
              skills={section.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
