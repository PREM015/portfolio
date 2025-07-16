"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp"; // ✅ Your lamp file

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
    description: "Fully responsive e-commerce UI with animations and product filtering.",
    image: "/image/ecommerce.png",
    tech: ["React", "Framer Motion", "CSS Modules"],
    link: "/",
  },
  {
    title: "Open Source CLI",
    description: "A simple, modern CLI tool with zero dependencies and high performance.",
    image: "/image/cli.png",
    tech: ["Node.js", "TypeScript"],
    link: "/",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl p-5 transition duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500"
  >
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={300}
      className="w-full h-52 object-cover rounded-lg mb-4 border border-neutral-700"
    />
    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tag) => (
        <span
          key={tag}
          className="text-xs px-3 py-1 bg-cyan-800/40 text-cyan-300 rounded-full font-medium tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>
    <Link
      href={project.link}
      className="inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
    >
      View Project →
    </Link>
  </motion.div>
);

const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-slate-950 to-black w-full">
      {/* 🛸 Glowing Lamp Header Section */}
      <LampContainer className="px-6 md:px-12 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-center"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base text-center"
        >
          A collection of recent apps, UI experiments, and open-source tools I've built.
        </motion.p>
      </LampContainer>

      {/* 🧱 Project Cards Grid */}
      <section className="relative w-full px-6 md:px-12 -mt-8 pb-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
