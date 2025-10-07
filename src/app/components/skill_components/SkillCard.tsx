"use client";

import React, { memo, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion, Variants, easeInOut, easeOut } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Tooltip } from "react-tooltip";
import type { Tech } from "@/app/types/skills";

interface SkillCardProps {
  tech: Tech;
  idx: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ tech, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Card animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: Math.min(idx * 0.05, 0.8),
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  // Icon animation variants
  const iconVariants: Variants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1.1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  // Glowing background variants
  const glowVariants: Variants = {
    hover: {
      scale: [1, 1.5, 1.3],
      opacity: [0.3, 0.6, 0.4],
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-tooltip-id={`tooltip-${tech.name}`}
      className="skill-card-wrapper"
    >
      <a
        href={tech.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`Visit ${tech.name} website`}
      >
        <Tilt
          glareEnable={!shouldReduceMotion}
          glareMaxOpacity={0.4}
          glareColor={tech.color}
          glarePosition="all"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.02}
          transitionSpeed={2500}
          className="h-full"
        >
          <div
            className="relative h-full p-6 rounded-3xl flex flex-col items-center text-center backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group"
            style={{
              background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}05, #0a0a0a)`,
            }}
          >
            {/* Animated Border Gradient */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${tech.color}40, transparent)`,
              }}
              initial={false}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />

            {/* Top Corner Shine Effect */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30"
              style={{ background: tech.color, filter: "blur(40px)" }}
              animate={isHovered ? { opacity: 0.3, scale: 1.5 } : { opacity: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Circular Progress with Icon */}
            <div className="relative w-28 h-28 mb-4 flex items-center justify-center z-10">
              <CircularProgressbar
                value={tech.level}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: tech.color,
                  trailColor: "#ffffff10",
                  pathTransitionDuration: 0.8,
                })}
              />
              <motion.div variants={iconVariants} animate={isHovered ? "hover" : ""} className="absolute">
                <tech.icon
                  className="text-4xl"
                  style={{ color: tech.color === "#FFFFFF" ? "#FFFFFF" : tech.color }}
                />
              </motion.div>

              {/* Glowing Background */}
              <motion.div
                variants={glowVariants}
                animate={isHovered ? "hover" : ""}
                className="absolute w-20 h-20 rounded-full blur-2xl pointer-events-none"
                style={{ background: tech.color }}
                aria-hidden="true"
              />
            </div>

            {/* Level Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.05 + 0.3, type: "spring", stiffness: 200 }}
              className="relative mb-3 px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm border z-10"
              style={{
                background: `${tech.color}20`,
                borderColor: `${tech.color}40`,
                color: tech.color,
              }}
            >
              {tech.level}% Proficiency
            </motion.div>

            {/* Title */}
            <h3
              className="text-2xl font-extrabold mb-2 z-10 transition-all duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed z-10 opacity-80 group-hover:opacity-100 transition-opacity">
              {tech.description}
            </p>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.4 }}
              className="mt-auto pt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider z-10"
            >
              {tech.category}
            </motion.div>

            {/* Bottom Accent Line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Tilt>
      </a>

      <Tooltip
        id={`tooltip-${tech.name}`}
        place="top"
        content={`Click to learn more about ${tech.name}`}
        style={{
          backgroundColor: tech.color,
          color: tech.color === "#FFFFFF" ? "#000" : "#FFF",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "8px 16px",
        }}
      />
    </motion.div>
  );
};

export default memo(SkillCard);
