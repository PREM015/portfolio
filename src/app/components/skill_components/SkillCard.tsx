/**
 * FILE PATH: src/app/components/skill_components/SkillCard.tsx
 * 
 * This is the individual skill card component
 */

"use client";

import React, { memo, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Tooltip } from "react-tooltip";
import type { Tech } from "@/app/types/skills";

interface SkillCardProps {
  tech: Tech;
  idx: number;
}

// Convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Get contrasting text color
const getContrastColor = (hexColor: string): string => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? "#000000" : "#FFFFFF";
};

const SkillCard: React.FC<SkillCardProps> = ({ tech, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: Math.min(idx * 0.06, 1),
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: 20,
      transition: { duration: 0.4 },
    },
  };

  const iconVariants: Variants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -8, 8, -8, 0],
      scale: [1, 1.15, 1.15, 1.15, 1.1],
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  const pulseVariants: Variants = {
    initial: { scale: 1, opacity: 0 },
    hover: {
      scale: [1, 1.8, 2.2],
      opacity: [0.4, 0.2, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-tooltip-id={`tooltip-${tech.name}`}
      className="skill-card-wrapper h-full"
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
          glareMaxOpacity={0.35}
          glareColor={tech.color}
          glarePosition="all"
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          scale={1.03}
          transitionSpeed={2000}
          className="h-full"
        >
          <div
            className="relative h-full min-h-[320px] p-6 rounded-3xl flex flex-col items-center text-center backdrop-blur-sm border-2 shadow-2xl overflow-hidden group transition-all duration-500"
            style={{
              background: `linear-gradient(145deg, ${hexToRgba(tech.color, 0.08)}, ${hexToRgba(tech.color, 0.02)}, rgba(10, 10, 10, 0.95))`,
              borderColor: hexToRgba(tech.color, 0.2),
              boxShadow: isHovered
                ? `0 20px 60px ${hexToRgba(tech.color, 0.4)}, 0 0 40px ${hexToRgba(tech.color, 0.2)}`
                : `0 10px 30px rgba(0, 0, 0, 0.5)`,
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${hexToRgba(tech.color, 0.25)}, transparent 50%),
                             radial-gradient(circle at 70% 80%, ${hexToRgba(tech.color, 0.2)}, transparent 50%)`,
              }}
              initial={false}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />

            {/* Corner Accents */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-br-full opacity-20"
              style={{ background: tech.color }}
              animate={isHovered ? { scale: 1.3, opacity: 0.25 } : { scale: 1, opacity: 0.15 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-15"
              style={{ background: tech.color }}
              animate={isHovered ? { scale: 1.4, opacity: 0.2 } : { scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />

            {/* Sparkles */}
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 rounded-full"
                  style={{ background: tech.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute top-16 right-16 w-1.5 h-1.5 rounded-full"
                  style={{ background: tech.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="absolute top-12 right-20 w-1 h-1 rounded-full"
                  style={{ background: tech.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
              </>
            )}

            {/* Icon with Progress Ring */}
            <div className="relative w-32 h-32 mb-5 flex items-center justify-center z-10">
              <motion.div
                className="absolute inset-0"
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <CircularProgressbar
                  value={tech.level}
                  strokeWidth={6}
                  styles={buildStyles({
                    pathColor: tech.color,
                    trailColor: hexToRgba(tech.color, 0.1),
                    pathTransitionDuration: 1,
                  })}
                />
              </motion.div>

              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className="absolute w-20 h-20 rounded-full"
                style={{ background: tech.color, filter: "blur(20px)" }}
              />

              <motion.div
                variants={iconVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className="absolute flex items-center justify-center"
              >
                <tech.icon
                  className="text-5xl drop-shadow-2xl"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 12px ${hexToRgba(tech.color, 0.6)})`,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute w-32 h-32 rounded-full blur-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${hexToRgba(tech.color, 0.4)}, transparent)`,
                }}
                animate={
                  isHovered
                    ? { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }
                    : { scale: 1, opacity: 0.2 }
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Proficiency Badge */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                delay: idx * 0.06 + 0.3,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="relative mb-4 px-5 py-2 rounded-full text-sm font-black backdrop-blur-md border-2 z-10 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${hexToRgba(tech.color, 0.25)}, ${hexToRgba(tech.color, 0.15)})`,
                borderColor: hexToRgba(tech.color, 0.4),
                color: tech.color,
                boxShadow: `0 4px 20px ${hexToRgba(tech.color, 0.3)}`,
                textShadow: `0 0 10px ${hexToRgba(tech.color, 0.5)}`,
              }}
            >
              <motion.span
                animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tech.level}%  {tech.grade} 
              </motion.span>
            </motion.div>


            {/* Title */}
            <motion.h3
              className="text-2xl sm:text-3xl font-black mb-3 z-10 transition-all duration-300"
              style={{
                color: tech.color,
                textShadow: isHovered ? `0 0 20px ${hexToRgba(tech.color, 0.6)}` : "none",
              }}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              {tech.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed z-10 mb-4 px-2"
              style={{
                color: getContrastColor(tech.color) === "#FFFFFF" ? "#E5E7EB" : "#9CA3AF",
              }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0.75 }}
              transition={{ duration: 0.3 }}
            >
              {tech.description}
            </motion.p>

      

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 + 0.4 }}
              className="mt-auto pt-3 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest z-10 backdrop-blur-sm border"
              style={{
                background: hexToRgba(tech.color, 0.15),
                borderColor: hexToRgba(tech.color, 0.3),
                color: tech.color,
              }}
            >
              {tech.category}
            </motion.div>

            {/* Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Side Glows */}
            <motion.div
              className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full"
              style={{ background: tech.color }}
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute right-0 top-1/4 bottom-1/4 w-1 rounded-l-full"
              style={{ background: tech.color }}
              initial={{ opacity: 0, x: 10 }}
              animate={isHovered ? { opacity: 0.6, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Tilt>
      </a>

      <Tooltip
        id={`tooltip-${tech.name}`}
        place="top"
        content={`Click to explore ${tech.name} • ${tech.level}% Proficiency`}
        style={{
          backgroundColor: tech.color,
          color: getContrastColor(tech.color),
          fontWeight: "700",
          borderRadius: "16px",
          padding: "10px 20px",
          fontSize: "14px",
          boxShadow: `0 8px 32px ${hexToRgba(tech.color, 0.4)}`,
        }}
      />
    </motion.div>
  );
};

export default memo(SkillCard);