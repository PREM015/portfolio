"use client";

import React from "react";
import { LampContainer } from "@/app/components/ui/lamp";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// -------------------------------
// Types
// -------------------------------
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

// -------------------------------
// Projects Data
// -------------------------------
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, Tailwind CSS and Framer Motion.",
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

// -------------------------------
// Motion Variants
// -------------------------------
const containerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: {
    scale: 1.05,
    rotateX: -3,
    rotateY: 3,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

const tagVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

// -------------------------------
// Project Card Component
// -------------------------------
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.article
    variants={cardVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    role="region"
    aria-labelledby={`${project.title}-title`}
    tabIndex={0}
    className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-xl p-4 sm:p-5 hover:shadow-cyan-500/40 hover:border-cyan-400 transition-transform duration-300 focus-within:ring-2 focus-within:ring-cyan-400 focus:outline-none"
  >
    {/* Project Image */}
    <div className="relative w-full h-48 sm:h-52 mb-3 rounded-xl overflow-hidden border border-neutral-700 shadow-inner">
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>

    {/* Project Title */}
    <h3
      id={`${project.title}-title`}
      className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-lg"
    >
      {project.title}
    </h3>

    {/* Project Description */}
    <p className="text-gray-300 text-sm sm:text-base mb-3">{project.description}</p>

    {/* Tech Tags */}
    <motion.div
      className="flex flex-wrap gap-2 mb-3"
      aria-label={`Technologies used in ${project.title}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {project.tech.map((tech) => (
        <motion.span
          key={tech}
          variants={tagVariants}
          className="text-[10px] sm:text-xs px-2 py-1 rounded-full font-semibold cursor-default 
                     bg-cyan-800/40 text-cyan-300 hover:bg-cyan-700/50 hover:text-white transition"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>

    {/* View Project Link */}
    <Link
      href={project.link}
      className="inline-block mt-1 text-sm font-medium text-cyan-400 hover:text-cyan-200 transition focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
      aria-label={`View the ${project.title} project`}
      tabIndex={0}
    >
      View Project →
    </Link>
  </motion.article>
);

// -------------------------------
// Projects Page
// -------------------------------
const ProjectsPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-b from-black via-slate-950 to-black w-full min-h-screen">
      {/* Header with Neon Glow */}
      <LampContainer className="px-4 md:px-10 pt-20 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-center drop-shadow-lg"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-3 text-neutral-400 max-w-md mx-auto text-sm sm:text-base text-center"
        >
          A showcase of modern apps, UI experiments, and open-source tools I’ve built using
          cutting-edge technologies.
        </motion.p>
      </LampContainer>

      {/* Projects Grid */}
      <section
        aria-label="Project portfolio"
        className="relative w-full px-4 md:px-10 -mt-6 pb-14"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default ProjectsPage;
