/**
 * FILE PATH: src/app/components/skill_components/SkillCard.tsx
 * 
 * Premium Skill Card Component - Optimized Version
 * Maintains original design with improved performance
 */

"use client";

import React, { memo, useState, useMemo, useCallback } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Tooltip } from "react-tooltip";
import type { Tech } from "@/app/types/skills";

// ============================================
// TYPES
// ============================================
interface SkillCardProps {
  tech: Tech;
  idx: number;
}

interface SparkleProps {
  color: string;
  size: number;
  top: string;
  right: string;
  delay: number;
}

// ============================================
// UTILITY FUNCTIONS (Memoized outside component)
// ============================================
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getContrastColor = (hexColor: string): string => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? "#000000" : "#FFFFFF";
};

// ============================================
// STATIC ANIMATION VARIANTS (Outside component to prevent re-creation)
// ============================================
const iconVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -8, 8, -8, 0],
    scale: [1, 1.15, 1.15, 1.15, 1.1],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 0 },
  hover: {
    scale: [1, 1.8, 2.2],
    opacity: [0.4, 0.2, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" },
  },
};

const sparkleVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1.5, 0],
    opacity: [0, 1, 0],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

// ============================================
// SUB-COMPONENTS (Memoized for performance)
// ============================================

// Sparkle Component
const Sparkle = memo<SparkleProps>(({ color, size, top, right, delay }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      background: color,
      width: size,
      height: size,
      top,
      right,
      boxShadow: `0 0 ${size * 2}px ${color}`,
    }}
    variants={sparkleVariants}
    initial="initial"
    animate="animate"
    transition={{ delay }}
  />
));
Sparkle.displayName = "Sparkle";

// Sparkles Container
const Sparkles = memo<{ color: string; isVisible: boolean }>(({ color, isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <Sparkle color={color} size={8} top="2rem" right="2rem" delay={0} />
      <Sparkle color={color} size={6} top="4rem" right="4rem" delay={0.3} />
      <Sparkle color={color} size={4} top="3rem" right="5rem" delay={0.6} />
    </>
  );
});
Sparkles.displayName = "Sparkles";

// Corner Accent Component
const CornerAccent = memo<{
  position: "top-left" | "bottom-right";
  color: string;
  isHovered: boolean;
}>(({ position, color, isHovered }) => {
  const isTopLeft = position === "top-left";

  return (
    <motion.div
      className={`absolute ${isTopLeft ? "top-0 left-0 rounded-br-full" : "bottom-0 right-0 rounded-tl-full"}`}
      style={{
        background: color,
        width: isTopLeft ? 96 : 128,
        height: isTopLeft ? 96 : 128,
      }}
      animate={{
        scale: isHovered ? (isTopLeft ? 1.3 : 1.4) : 1,
        opacity: isHovered ? (isTopLeft ? 0.25 : 0.2) : (isTopLeft ? 0.15 : 0.1),
      }}
      transition={{ duration: 0.4, delay: isTopLeft ? 0 : 0.1 }}
    />
  );
});
CornerAccent.displayName = "CornerAccent";

// Side Glow Component
const SideGlow = memo<{
  side: "left" | "right";
  color: string;
  isHovered: boolean;
}>(({ side, color, isHovered }) => (
  <motion.div
    className={`absolute ${side}-0 top-1/4 bottom-1/4 w-1 ${side === "left" ? "rounded-r-full" : "rounded-l-full"}`}
    style={{ background: color }}
    initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
    animate={{
      opacity: isHovered ? 0.6 : 0,
      x: isHovered ? 0 : (side === "left" ? -10 : 10),
    }}
    transition={{ duration: 0.3 }}
  />
));
SideGlow.displayName = "SideGlow";

// Progress Ring Component
const ProgressRing = memo<{
  level: number;
  color: string;
  isHovered: boolean;
}>(({ level, color, isHovered }) => {
  const progressStyles = useMemo(
    () =>
      buildStyles({
        pathColor: color,
        trailColor: hexToRgba(color, 0.1),
        pathTransitionDuration: 1,
      }),
    [color]
  );

  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <CircularProgressbar
        value={level}
        strokeWidth={6}
        styles={progressStyles}
      />
    </motion.div>
  );
});
ProgressRing.displayName = "ProgressRing";

// ============================================
// MAIN COMPONENT
// ============================================
const SkillCard: React.FC<SkillCardProps> = ({ tech, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Memoized callbacks
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  // Memoized card variants (depends on idx)
  const cardVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -20 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 0.7,
          delay: Math.min(idx * 0.06, 1),
          ease: [0.23, 1, 0.32, 1],
        },
      },
      exit: {
        opacity: 0,
        scale: 0.85,
        y: 20,
        transition: { duration: 0.4 },
      },
    }),
    [idx]
  );

  // Memoized color calculations
  const colors = useMemo(
    () => ({
      primary: tech.color,
      bgGradient: `linear-gradient(145deg, ${hexToRgba(tech.color, 0.08)}, ${hexToRgba(tech.color, 0.02)}, rgba(10, 10, 10, 0.95))`,
      borderColor: hexToRgba(tech.color, 0.2),
      hoverShadow: `0 20px 60px ${hexToRgba(tech.color, 0.4)}, 0 0 40px ${hexToRgba(tech.color, 0.2)}`,
      defaultShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      radialBg: `radial-gradient(circle at 30% 20%, ${hexToRgba(tech.color, 0.25)}, transparent 50%),
                 radial-gradient(circle at 70% 80%, ${hexToRgba(tech.color, 0.2)}, transparent 50%)`,
      iconShadow: `drop-shadow(0 0 12px ${hexToRgba(tech.color, 0.6)})`,
      badgeBg: `linear-gradient(135deg, ${hexToRgba(tech.color, 0.25)}, ${hexToRgba(tech.color, 0.15)})`,
      badgeBorder: hexToRgba(tech.color, 0.4),
      badgeShadow: `0 4px 20px ${hexToRgba(tech.color, 0.3)}`,
      textGlow: `0 0 20px ${hexToRgba(tech.color, 0.6)}`,
      categoryBg: hexToRgba(tech.color, 0.15),
      categoryBorder: hexToRgba(tech.color, 0.3),
      bottomBorder: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
      pulseGlow: hexToRgba(tech.color, 0.4),
      contrastText: getContrastColor(tech.color) === "#FFFFFF" ? "#E5E7EB" : "#9CA3AF",
    }),
    [tech.color]
  );

  // Memoized tooltip ID
  const tooltipId = useMemo(() => `tooltip-${tech.name}`, [tech.name]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      data-tooltip-id={tooltipId}
      className="skill-card-wrapper h-full"
    >
      <a
        href={tech.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-3xl"
        aria-label={`Visit ${tech.name} website - ${tech.level}% proficiency`}
      >
        <Tilt
          glareEnable={!shouldReduceMotion}
          glareMaxOpacity={0.35}
          glareColor={colors.primary}
          glarePosition="all"
          glareBorderRadius="24px"
          tiltMaxAngleX={shouldReduceMotion ? 0 : 12}
          tiltMaxAngleY={shouldReduceMotion ? 0 : 12}
          scale={1.03}
          transitionSpeed={2000}
          className="h-full"
        >
          <div
            className="relative h-full min-h-[320px] p-6 rounded-3xl flex flex-col items-center text-center backdrop-blur-sm border-2 overflow-hidden group transition-all duration-500"
            style={{
              background: colors.bgGradient,
              borderColor: colors.borderColor,
              boxShadow: isHovered ? colors.hoverShadow : colors.defaultShadow,
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: colors.radialBg }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            />

            {/* Corner Accents */}
            <CornerAccent position="top-left" color={colors.primary} isHovered={isHovered} />
            <CornerAccent position="bottom-right" color={colors.primary} isHovered={isHovered} />

            {/* Sparkles */}
            <Sparkles color={colors.primary} isVisible={isHovered && !shouldReduceMotion} />

            {/* Icon with Progress Ring */}
            <div className="relative w-32 h-32 mb-5 flex items-center justify-center z-10">
              {/* Progress Ring */}
              <ProgressRing
                level={tech.level}
                color={colors.primary}
                isHovered={isHovered && !shouldReduceMotion}
              />

              {/* Pulse Glow */}
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className="absolute w-20 h-20 rounded-full pointer-events-none"
                style={{ background: colors.primary, filter: "blur(20px)" }}
              />

              {/* Icon */}
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className="absolute flex items-center justify-center"
              >
                <span
                  style={{ color: tech.color }}
                  className="text-5xl drop-shadow-2xl"
                >
                  <tech.icon />
                </span>

              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute w-32 h-32 rounded-full blur-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${colors.pulseGlow}, transparent)`,
                }}
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
                }}
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
                background: colors.badgeBg,
                borderColor: colors.badgeBorder,
                color: colors.primary,
                boxShadow: colors.badgeShadow,
                textShadow: `0 0 10px ${hexToRgba(tech.color, 0.5)}`,
              }}
            >
              <motion.span
                animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <span>{tech.level}%</span>
                <span className="w-px h-4 bg-current opacity-30" />
                <span>{tech.grade}</span>
              </motion.span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl sm:text-3xl font-black mb-3 z-10 transition-colors duration-300"
              style={{
                color: colors.primary,
                textShadow: isHovered ? colors.textGlow : "none",
              }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {tech.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed z-10 mb-4 px-2 line-clamp-3"
              style={{ color: colors.contrastText }}
              animate={{ opacity: isHovered ? 1 : 0.75 }}
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
                background: colors.categoryBg,
                borderColor: colors.categoryBorder,
                color: colors.primary,
              }}
            >
              {tech.category}
            </motion.div>

            {/* Bottom Border */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: colors.bottomBorder }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Side Glows */}
            <SideGlow side="left" color={colors.primary} isHovered={isHovered} />
            <SideGlow side="right" color={colors.primary} isHovered={isHovered} />
          </div>
        </Tilt>
      </a>

      {/* Tooltip */}
      <Tooltip
        id={tooltipId}
        place="top"
        delayShow={300}
        style={{
          backgroundColor: colors.primary,
          color: getContrastColor(tech.color),
          fontWeight: "700",
          borderRadius: "16px",
          padding: "12px 20px",
          fontSize: "14px",
          boxShadow: `0 8px 32px ${hexToRgba(tech.color, 0.4)}`,
          zIndex: 9999,
        }}
      >
        <div className="flex items-center gap-2">
          <span>🚀</span>
          <span>Explore {tech.name}</span>
          <span className="opacity-60">•</span>
          <span>{tech.level}% Mastery</span>
        </div>
      </Tooltip>
    </motion.div>
  );
};

export default memo(SkillCard);