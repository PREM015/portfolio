// 📁 src/app/projects/page.tsx
"use client";

import React from "react";
import { LampContainer } from "@/app/components/ui/lamp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 🔧 Projects list
const projects = [
  {
    title: "Portfolio Website",
    description: "Modern developer portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    image: "/image/portfolio.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "/",
  },
  {
    title: "Music App",
    description: "Spotify-like app featuring audio streaming, search, and playlists.",
    image: "/image/musicapp.png",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "/",
  },
  {
    title: "E-Commerce UI",
    description: "Responsive UI with filtering, transitions and animations.",
    image: "/image/ecommerce.png",
    tech: ["React", "Framer Motion", "CSS Modules"],
    link: "/",
  },
  {
    title: "Open Source CLI",
    description: "CLI tool with zero dependencies and blazing speed.",
    image: "/image/cli.png",
    tech: ["Node.js", "TypeScript"],
    link: "/",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl shadow-lg p-3 transition duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500"
  >
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={240}
      className="w-full h-40 object-cover rounded-md mb-2 border border-neutral-700"
    />
    <h3 className="text-base font-semibold text-white mb-1">{project.title}</h3>
    <p className="text-gray-400 text-xs mb-2">{project.description}</p>
    <div className="flex flex-wrap gap-1 mb-2">
      {project.tech.map((tag) => (
        <span
          key={tag}
          className="text-[10px] px-2 py-0.5 bg-cyan-800/40 text-cyan-300 rounded-full font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
    <Link
      href={project.link}
      className="inline-block text-xs font-medium text-cyan-400 hover:text-cyan-300 transition"
    >
      View Project →
    </Link>
  </motion.div>
);

const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-slate-950 to-black w-full">
      {/* 🔮 Header Glow */}
      <LampContainer className="px-4 md:px-10 pt-20 pb-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-center"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-2 text-neutral-400 max-w-md mx-auto text-xs sm:text-sm text-center"
        >
          A collection of recent apps, UI experiments, and open-source tools I’ve built.
        </motion.p>
      </LampContainer>

      {/* 🧩 Project Grid */}
      <section className="relative w-full px-4 md:px-10 -mt-6 pb-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
