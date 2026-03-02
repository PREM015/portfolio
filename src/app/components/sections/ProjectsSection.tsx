"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects as allProjects } from "../project/data";
import { Project } from "../project/types";

const featuredProjects = allProjects.filter((p) => p.featured).slice(0, 4);

// Enhanced Magnetic Effect Hook
const useMagnetic = (strength: number = 0.15) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { xSpring, ySpring, handleMouseMove, handleMouseLeave };
};

// Premium Badge Component
const PremiumBadge: React.FC<{ text: string; gradient: string }> = ({ text, gradient }) => (
  <motion.div
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} shadow-lg`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
    <span className="text-xs font-bold text-white uppercase tracking-wider">{text}</span>
  </motion.div>
);

// Hero Featured Card - Main Spotlight Card
const HeroFeaturedCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { xSpring, ySpring, handleMouseMove, handleMouseLeave } = useMagnetic(0.08);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    handleMouseMove(e);
  }, [handleMouseMove]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer Glow */}
      <motion.div
        className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-700"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Card Container */}
      <div className="relative h-[550px] md:h-[650px] bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/[0.08]">
        {/* Dynamic Spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(120, 119, 198, 0.12), transparent 40%)`,
          }}
        />

        {/* Background Visual */}
        <div className="absolute inset-0">
          <Image
            src="/image/portfilo.png"
            alt={project.title}
            fill
            className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-transparent to-violet-950/40" />
        </div>

        {/* Floating Badge */}
        <motion.div
          className="absolute top-6 left-6 z-30"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <PremiumBadge text="Featured" gradient="from-cyan-500 to-violet-500" />
        </motion.div>

        {/* Project Number */}
        <motion.div
          className="absolute top-6 right-6 z-30"
          animate={{ rotate: isHovered ? 12 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-black bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
              01
            </span>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-violet-500/10 blur-[80px] group-hover:bg-violet-500/20 transition-all duration-1000" />

        {/* Content Container */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
          {/* Tech Stack Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0.8, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.tech.slice(0, 5).map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-1.5 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] text-xs font-semibold text-white/80 uppercase tracking-wider"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Title with Animated Underline */}
          <motion.div
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[0.95] tracking-tight">
              <span className="relative inline-block">
                {project.title}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? "100%" : "30%" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-light"
            animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.description}
          </motion.p>

          {/* CTA Section */}
          <motion.div
            className="flex items-center gap-4"
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Link
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              className="group/btn relative"
            >
              <motion.div
                className="relative flex items-center gap-3 px-8 py-4 bg-white rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-bold text-black text-lg">
                  View Project
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 text-black"
                  animate={{ x: isHovered ? 4 : 0 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
                
                {/* Gradient Hover Fill */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </Link>

            {/* Secondary Action */}
            <motion.div
              className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 45, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-white/5 rounded-tl-[2rem]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-white/5 rounded-br-[2rem]" />
      </div>
    </motion.div>
  );
};

// Modern Compact Card with 3D Tilt Effect
const ModernCompactCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const gradientSets = [
    { bg: "from-amber-500 via-orange-500 to-red-500", accent: "amber" },
    { bg: "from-emerald-500 via-teal-500 to-cyan-500", accent: "emerald" },
    { bg: "from-violet-500 via-purple-500 to-fuchsia-500", accent: "violet" },
  ];

  const gradient = gradientSets[index % 3];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({ rotateX: -y * 15, rotateY: x * 15 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="relative h-full"
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow Effect */}
        <motion.div
          className={`absolute -inset-3 rounded-3xl bg-gradient-to-r ${gradient.bg} opacity-0 blur-2xl`}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Card Body */}
        <div className="relative h-full min-h-[380px] bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/[0.06] group-hover:border-white/20 transition-all duration-500">
          {/* Gradient Overlay on Hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient.bg} opacity-0`}
            animate={{ opacity: isHovered ? 0.08 : 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Mesh Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Large Background Number */}
          <motion.div
            className="absolute -top-8 -right-8 select-none"
            animate={{ 
              rotate: isHovered ? 15 : 0, 
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.15 : 0.08
            }}
            transition={{ duration: 0.6 }}
            style={{ transform: "translateZ(20px)" }}
          >
            <span className={`text-[140px] font-black bg-gradient-to-br ${gradient.bg} bg-clip-text text-transparent`}>
              0{index + 2}
            </span>
          </motion.div>

          {/* Content */}
          <div 
            className="relative z-10 h-full flex flex-col p-7 md:p-8"
            style={{ transform: "translateZ(40px)" }}
          >
            {/* Icon Container */}
            <motion.div
              className="mb-auto"
              animate={{ 
                y: isHovered ? -5 : 0,
                rotate: isHovered ? [0, -5, 5, 0] : 0 
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient.bg} p-[2px] shadow-2xl`}>
                <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                  <span className={`text-2xl font-black bg-gradient-to-br ${gradient.bg} bg-clip-text text-transparent`}>
                    {project.title.substring(0, 2)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="mt-6">
              {/* Title */}
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-semibold text-white/60 uppercase tracking-wider"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <Link
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="font-medium text-sm">View Details</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: isHovered ? 6 : 0, rotate: isHovered ? -45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </motion.svg>
              </Link>

              {/* Animated Indicator */}
              <motion.div
                className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center overflow-hidden"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 8, repeat: isHovered ? Infinity : 0, ease: "linear" }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient.bg}`}
                  animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom Progress Line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient.bg}`}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mini Feature Card
const MiniFeatureCard: React.FC<{ icon: string; title: string; value: string }> = ({ icon, title, value }) => (
  <motion.div
    className="relative group p-6 bg-white/[0.02] rounded-2xl border border-white/[0.06] hover:border-white/20 transition-all duration-500"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <div className="text-2xl font-black text-white">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wider">{title}</div>
      </div>
    </div>
  </motion.div>
);

// Main Projects Section
const ProjectsSection: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 bg-[#030303] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 119, 198, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 119, 198, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            {/* Animated Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex gap-1.5">
                <motion.span 
                  className="w-3 h-3 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.span 
                  className="w-3 h-3 rounded-full bg-violet-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span 
                  className="w-3 h-3 rounded-full bg-fuchsia-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.3em]">
                Portfolio
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-white">Featured</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
                Projects
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore a curated selection of my most impactful work, showcasing innovation and technical excellence.
            </motion.p>
          </div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: "🚀", value: "15+", title: "Projects" },
              { icon: "⚡", value: "3+", title: "Years" },
              { icon: "💯", value: "100%", title: "Passion" },
            ].map((stat, i) => (
              <MiniFeatureCard key={i} {...stat} />
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Improved Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Card - Takes 7 columns */}
          <div className="lg:col-span-7">
            {featuredProjects[0] && <HeroFeaturedCard project={featuredProjects[0]} />}
          </div>

          {/* Side Cards Stack - Takes 5 columns */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {featuredProjects.slice(1, 3).map((project, index) => (
              <ModernCompactCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Full Width Card (Optional) */}
        {featuredProjects[3] && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ModernCompactCard project={featuredProjects[3]} index={2} />
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/projects" className="group relative">
            <motion.div
              className="relative flex items-center gap-6 px-10 py-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <span className="relative z-10 text-lg font-semibold text-white">
                Explore All Projects
              </span>

              <motion.div
                className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25"
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Outer Glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;