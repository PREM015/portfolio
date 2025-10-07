/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState,  useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Next.js + Tailwind + Framer Motion portfolio website with modern UI.",
    image: "/image/portfilo.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://rajprem.vercel.app/",
  },
  {
    id: "music-app",
    title: "Music App",
    description: "Spotify-like music streaming app with playlists & search feature.",
    image: "/image/musicapp.png",
    tech: ["React", "Tailwind", "Shadcn UI"],
    link: "/projects",
  },
  {
    id: "ecommerce-ui",
    title: "E-Commerce UI",
    description: "Interactive responsive shopping UI with smooth animations.",
    image: "/image/ecommerce.png",
    tech: ["React", "Framer Motion", "CSS Modules"],
    link: "https://bharatcart-ten.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techTagHover = {
  rest: { backgroundColor: "rgba(14,116,144,0.3)", color: "#38bdf8" },
  hover: { backgroundColor: "rgba(14,116,144,0.8)", color: "#e0f2fe", scale: 1.1 },
};

// Memoized ProjectTile component with accessibility and optimized
const ProjectTile: React.FC<{ project: typeof projects[0] }> = React.memo(({ project }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isMobile = useMemo(() => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return; // No tilt on touch devices
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
      setPos({ x, y });
    },
    [isMobile]
  );
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    setPos({ x: 0, y: 0 });
  }, [isMobile]);

  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.04 }}
      tabIndex={0}
      role="group"
      aria-label={`${project.title}: ${project.description}. Technologies used: ${project.tech.join(", ")}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => !isMobile && setPos({ x: 0, y: 0 })}
      className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl p-6 cursor-pointer transition-transform focus:outline-none focus:ring-4 focus:ring-cyan-500"
      style={{
        transform: `rotateX(${-pos.y}deg) rotateY(${pos.x}deg)`,
        perspective: 800,
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          const linkEl = e.currentTarget.querySelector("a");
          linkEl?.click();
        }
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-indigo-500/40 rounded-3xl filter blur-3xl opacity-70 pointer-events-none"
        style={{
          transform: `translateX(${pos.x * 1.5}px) translateY(${pos.y * 1.5}px)`,
        }}
        aria-hidden="true"
      />

      {/* Image */}
      <div className="relative rounded-xl overflow-hidden border border-neutral-700 shadow-inner mb-4">
        <Image
          src={project.image}
          alt={`${project.title} screenshot showcasing ${project.description}`}
          width={400}
          height={240}
          className="object-cover w-full h-[240px] rounded-xl transition-transform duration-500"
          style={{
            transform: pos.x || pos.y ? "scale(1.05)" : "scale(1)",
          }}
          placeholder="blur"
          blurDataURL="/image/placeholder.png" // you should add a tiny placeholder image for production
          loading="lazy"
          priority={false}
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-white mb-2">{project.title}</h3>

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
            title={tag}
            aria-label={`Technology: ${tag}`}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* View project button */}
      <Link
        href={project.link}
        target={project.link.startsWith("http") ? "_blank" : undefined}
        rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-block px-5 py-2 text-sm font-bold text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-500/20 transition-shadow backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-cyan-500"
        aria-label={`View project: ${project.title}`}
        onClick={() => {
          // Add analytics tracking here if needed
          console.log(`Project clicked: ${project.title}`);
        }}
      >
        View Project →
      </Link>
    </motion.div>
  );
});
ProjectTile.displayName = "ProjectTile";

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers for mobile horizontal nav
  const handlers = useSwipeable({
  onSwipedLeft: () => setCurrentIndex((i) => (i + 1) % projects.length),
  onSwipedRight: () => setCurrentIndex((i) => (i - 1 + projects.length) % projects.length),
  preventScrollOnSwipe: true, // ✅ correct
  trackMouse: true,
});
  return (
    <section
      {...handlers}
      className="relative py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute -top-32 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-slowPulse pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-slowPulse pointer-events-none z-0" />

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text select-none relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
