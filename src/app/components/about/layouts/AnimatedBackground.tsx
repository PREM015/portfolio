"use client";

import React, { useEffect, useRef, useState, useMemo, memo } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

// ==================== INTERFACES ====================
interface AnimatedBackgroundProps {
  variant?: "default" | "gradient" | "particles" | "stars" | "waves" | "mesh" | "aurora" | "matrix" | "minimal";
  intensity?: "low" | "medium" | "high";
  color?: "default" | "blue" | "purple" | "green" | "red" | "custom";
  customColors?: {
    primary: string;
    secondary: string;
    accent: string;
     glow: string; 
  };
  enableParticles?: boolean;
  enableGradient?: boolean;
  enableGlow?: boolean;
  enableNoise?: boolean;
  particleCount?: number;
  speed?: number;
  blur?: boolean;
  overlay?: boolean;
  responsive?: boolean;
  className?: string;
}

// ==================== COLOR SCHEMES ====================
const COLOR_SCHEMES = {
  default: {
    primary: "#05060a",
    secondary: "#071227",
    accent: "#0a1929",
    glow: "rgba(59, 130, 246, 0.5)",
  },
  blue: {
    primary: "#0f172a",
    secondary: "#1e293b",
    accent: "#334155",
    glow: "rgba(96, 165, 250, 0.6)",
  },
  purple: {
    primary: "#1e1b4b",
    secondary: "#312e81",
    accent: "#4338ca",
    glow: "rgba(167, 139, 250, 0.6)",
  },
  green: {
    primary: "#022c22",
    secondary: "#064e3b",
    accent: "#065f46",
    glow: "rgba(52, 211, 153, 0.6)",
  },
  red: {
    primary: "#1e1b4b",
    secondary: "#450a0a",
    accent: "#7f1d1d",
    glow: "rgba(248, 113, 113, 0.6)",
  },

  // 👇 ADD THIS TO FIX THE TS ERROR
  custom: {
    primary: "#000000",
    secondary: "#000000",
    accent: "#000000",
    glow: "rgba(255, 255, 255, 0.5)",
  },
} as const;

// ==================== PARTICLE CLASS ====================
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number, color: string) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.color = color;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth) this.x = 0;
    if (this.x < 0) this.x = canvasWidth;
    if (this.y > canvasHeight) this.y = 0;
    if (this.y < 0) this.y = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// ==================== MAIN COMPONENT ====================
const AnimatedBackground = memo(({
  variant = "default",
  intensity = "medium",
  color = "default",
  customColors,
  enableParticles = true,
  enableGradient = true,
  enableGlow = true,
  enableNoise = false,
  particleCount = 50,
  speed = 1,
  blur = false,
  overlay = true,
  responsive = true,
  className = "",
}: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Color scheme
  const colors = useMemo(() => {
    if (customColors) return customColors;
    return COLOR_SCHEMES[color] || COLOR_SCHEMES.default;
  }, [color, customColors]);

  // Particle count based on intensity and device
  const effectiveParticleCount = useMemo(() => {
    if (shouldReduceMotion) return 0;
    
    const baseCount = {
      low: Math.floor(particleCount * 0.5),
      medium: particleCount,
      high: Math.floor(particleCount * 1.5),
    }[intensity];

    // Reduce on mobile
    return typeof window !== "undefined" && window.innerWidth < 768
      ? Math.floor(baseCount * 0.5)
      : baseCount;
  }, [intensity, particleCount, shouldReduceMotion]);

  // ========== RESIZE HANDLER ==========
  useEffect(() => {
    if (!responsive) {
      setDimensions({
        width: typeof window !== "undefined" ? window.innerWidth : 1920,
        height: typeof window !== "undefined" ? window.innerHeight : 1080,
      });
      return;
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [responsive]);

  // ========== PARTICLE ANIMATION ==========
  useEffect(() => {
    if (!enableParticles || !canvasRef.current || effectiveParticleCount === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < effectiveParticleCount; i++) {
      particles.push(new Particle(dimensions.width, dimensions.height, colors.glow));
    }

    let animationFrameId: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      
      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(dimensions.width, dimensions.height);
        particle.draw(ctx);
      });

      // Draw connections
      if (intensity !== "low") {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.strokeStyle = colors.glow;
              ctx.globalAlpha = (1 - distance / 100) * 0.2;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          });
        });
      }
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, effectiveParticleCount, colors, intensity, enableParticles]);

  // ========== SCROLL-BASED TRANSFORMS ==========
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

  // ========== VARIANT RENDERERS ==========
  const renderVariant = () => {
    switch (variant) {
      case "gradient":
        return (
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at top, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
              opacity,
            }}
          />
        );

      case "particles":
        return null; // Handled by canvas

      case "stars":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 3 + "px",
                  height: Math.random() * 3 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.7 + 0.3,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        );

      case "waves":
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={colors.primary} stopOpacity="0.8" />
                <stop offset="100%" stopColor={colors.accent} stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,160 C320,100 420,200 740,160 L740,320 L0,320 Z"
              fill="url(#wave-gradient)"
              style={{ y: y1 }}
            />
            <motion.path
              d="M0,200 C280,140 380,240 740,200 L740,320 L0,320 Z"
              fill="url(#wave-gradient)"
              opacity="0.5"
              style={{ y: y2 }}
            />
          </svg>
        );

      case "mesh":
        return (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(${colors.glow} 1px, transparent 1px),
                  linear-gradient(90deg, ${colors.glow} 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                opacity: 0.1,
              }}
            />
          </div>
        );

      case "aurora":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${colors.glow}, transparent 70%)`,
                opacity,
                scale,
              }}
              animate={{
                x: ["-10%", "10%", "-10%"],
                y: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );

      case "matrix":
        return (
          <div className="absolute inset-0 font-mono text-green-500 overflow-hidden opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xs"
                style={{ left: `${i * 5}%` }}
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                {Array.from({ length: 20 }, () => String.fromCharCode(Math.random() * 94 + 33)).join("\n")}
              </motion.div>
            ))}
          </div>
        );

      case "minimal":
        return (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            }}
          />
        );

      default:
        return (
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
            }}
          />
        );
    }
  };

  return (
    <div 
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {/* ========== BASE BACKGROUND ========== */}
      {enableGradient && renderVariant()}

      {/* ========== PARTICLE CANVAS ========== */}
      {enableParticles && !shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: blur ? "blur(1px)" : "none",
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* ========== GLOW EFFECTS ========== */}
      {enableGlow && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${colors.glow}, transparent)`,
              y: y1,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${colors.glow}, transparent)`,
              y: y2,
            }}
          />
        </>
      )}

      {/* ========== NOISE TEXTURE ========== */}
      {enableNoise && (
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* ========== OVERLAY ========== */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      )}

      {/* ========== GRID OVERLAY (OPTIONAL) ========== */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;

// ==================== PRESET CONFIGURATIONS ====================
export const BackgroundPresets = {
  default: {
    variant: "default" as const,
    intensity: "medium" as const,
    color: "default" as const,
    enableParticles: true,
    enableGradient: true,
    enableGlow: true,
  },
  
  performance: {
    variant: "minimal" as const,
    intensity: "low" as const,
    enableParticles: false,
    enableGradient: true,
    enableGlow: false,
    enableNoise: false,
  },
  
  immersive: {
    variant: "aurora" as const,
    intensity: "high" as const,
    color: "purple" as const,
    enableParticles: true,
    enableGradient: true,
    enableGlow: true,
    enableNoise: true,
    particleCount: 100,
  },
  
  space: {
    variant: "stars" as const,
    intensity: "medium" as const,
    color: "blue" as const,
    enableParticles: true,
    enableGlow: true,
  },
  
  matrix: {
    variant: "matrix" as const,
    intensity: "low" as const,
    color: "green" as const,
    enableParticles: false,
  },
};

// ==================== EXPORT TYPES ====================
export type { AnimatedBackgroundProps };