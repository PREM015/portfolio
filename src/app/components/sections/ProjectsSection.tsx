"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Next.js + Tailwind + Framer Motion portfolio website with modern UI.",
    image: "/image/portfilo.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "/projects",
  },
  {
    title: "Music App",
    description: "Spotify-like music streaming app with playlists & search feature.",
    image: "/image/musicapp.png",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "/projects",
  },
  {
    title: "E-Commerce UI",
    description: "Interactive responsive shopping UI with smooth animations.",
    image: "/image/ecommerce.png",
    tech: ["React", "Framer Motion", "CSS Modules"],
    link: "/projects",
  },
];

// Container fade-in
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

// Tile fade-in only (no hover here)
const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Tech tag hover animation
const techTagHover = {
  rest: { backgroundColor: "rgba(14,116,144,0.3)", color: "#38bdf8" },
  hover: { backgroundColor: "rgba(14,116,144,0.8)", color: "#e0f2fe", scale: 1.1 },
};

const ProjectTile: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.article
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200, damping: 20 } }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={`Project: ${project.title}`}
      className="relative bg-neutral-900/50 backdrop-blur-lg rounded-3xl p-6 shadow-lg cursor-pointer ring-1 ring-transparent focus:outline-none focus:ring-cyan-400 transition"
      style={{
        transform: `rotateX(${-pos.y}deg) rotateY(${pos.x}deg)`,
        perspective: 800,
      }}
    >
      {/* Glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-600/40 rounded-3xl filter blur-3xl opacity-70 pointer-events-none"
        style={{
          transform: `translateX(${pos.x * 1.5}px) translateY(${pos.y * 1.5}px)`,
        }}
      />

      {/* Image */}
      <div
        className="relative rounded-xl overflow-hidden border border-neutral-700 shadow-inner mb-4"
        style={{
          transform: `translateX(${pos.x * 0.8}px) translateY(${pos.y * 0.8}px)`,
        }}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={400}
          height={240}
          className="object-cover w-full h-[240px] transition-transform duration-500 rounded-xl"
          style={{
            transform: pos.x || pos.y ? "scale(1.05)" : "scale(1)",
            willChange: "transform",
          }}
          priority
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-white mb-1">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tag) => (
          <motion.span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-800/30 text-cyan-300 cursor-default select-none"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={techTagHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Button */}
      <Link
        href={project.link}
        className="inline-block px-5 py-2 text-sm font-bold text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-500/20 transition-shadow backdrop-blur-md"
        tabIndex={0}
        aria-label={`View the ${project.title} project`}
      >
        View Project →
      </Link>
    </motion.article>
  );
};

const ProjectsSection: React.FC = () => (
  <section className="py-24 px-6 md:px-16 w-full bg-black relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-extrabold text-cyan-400 mb-16 text-center select-none"
    >
      My Projects
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {projects.map((project) => (
        <ProjectTile key={project.title} project={project} />
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
