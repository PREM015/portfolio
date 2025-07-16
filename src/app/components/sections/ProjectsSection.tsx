"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Built with Next.js, Tailwind CSS and Framer Motion.",
    image: "/image/portfolio.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "/projects",
  },
  {
    title: "Music App",
    description: "Spotify-like streaming app with playlists.",
    image: "/image/musicapp.png",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "/projects",
  },
  {
    title: "E-Commerce UI",
    description: "Responsive shopping UI with animations.",
    image: "/image/ecommerce.png",
    tech: ["React", "Framer Motion", "CSS Modules"],
    link: "/projects",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 md:px-10 w-full bg-black">
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-4 shadow hover:shadow-cyan-500/10"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={240}
              className="w-full h-36 object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold text-white">{project.title}</h3>
            <p className="text-xs text-gray-400">{project.description}</p>
            <Link
              href={project.link}
              className="text-xs text-cyan-400 mt-2 inline-block"
            >
              View All →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
