"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "TechNova Inc.",
    duration: "2023 - Present",
    description:
      "Led the development of interactive UIs using React, Tailwind CSS, and Framer Motion. Collaborated with designers and backend engineers to deliver scalable web apps.",
    icon: <FaCode className="text-blue-500 text-xl" />,
  },
  {
    title: "Full Stack Developer Intern",
    company: "InnoWorks",
    duration: "2022 - 2023",
    description:
      "Worked across the MERN stack to build internal dashboards and improve user experience. Deployed features using CI/CD pipelines and Docker.",
    icon: <FaRocket className="text-purple-500 text-xl" />,
  },
  {
    title: "Freelance Web Developer",
    company: "Remote",
    duration: "2020 - 2022",
    description:
      "Built custom portfolio websites and eCommerce solutions for clients globally. Delivered projects with high satisfaction and performance optimizations.",
    icon: <FaBriefcase className="text-green-500 text-xl" />,
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white py-16 px-4 sm:px-8 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold font-orbitron text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8"
      >
        Experience
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-6 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-black border border-neutral-700 rounded-full">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-cyan-400">{exp.company}</p>
              </div>
            </div>
            <p className="text-sm text-neutral-300 mb-4">{exp.description}</p>
            <p className="text-xs text-neutral-500 italic">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
