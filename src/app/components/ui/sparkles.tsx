"use client";
import React, { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        const element = document.getElementById(id || "tsparticles");
        if (element) {
          setDimensions({
            width: element.offsetWidth,
            height: element.offsetHeight,
          });
        }
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [id]);

  const particles = React.useMemo(() => {
    const particlesArray = [];
    const density = particleDensity || 100;
    const numParticles = Math.floor((dimensions.width * dimensions.height) / density);

    for (let i = 0; i < numParticles; i++) {
      particlesArray.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1),
        speedX: (Math.random() - 0.5) * (speed || 1),
        speedY: (Math.random() - 0.5) * (speed || 1),
      });
    }
    return particlesArray;
  }, [dimensions, minSize, maxSize, speed, particleDensity]);

  return (
    <div
      id={id || "tsparticles"}
      className={cn("relative w-full h-full", className)}
      style={{ background: background || "transparent" }}
    >
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particleColor || "#FFFFFF"}
            animate={{
              x: [particle.x, particle.x + particle.speedX * 100],
              y: [particle.y, particle.y + particle.speedY * 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};