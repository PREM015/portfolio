// app/components/ui/glowing-stars-background.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const GlowingStarsBackground = ({
  className,
}: {
  className?: string;
}) => {
  const stars = 258;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);
  const starPositions = useRef<{ top: string; left: string }[]>(
    Array.from({ length: stars }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 1500); // glow more frequently

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{ position: "absolute", overflow: "hidden" }}
    >
      {starPositions.current.map(({ top, left }, idx) => {
        const isGlowing = glowingStars.includes(idx);
        const delay = (idx % 5) * 0.1;

        return (
          <div
            key={`bg-star-${idx}`}
            style={{ position: "absolute", top, left }}
            className="pointer-events-none"
          >
            {/* 🌟 Star core */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: isGlowing ? [1, 1.4, 2.5, 1.8, 1.2] : 1,
                background: isGlowing ? "#fff" : "#999",
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay,
              }}
              className="h-[2px] w-[2px] rounded-full bg-[#999] z-20"
            />

            {/* 💫 Glow effect */}
            <AnimatePresence mode="wait">
              {isGlowing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[8px] w-[8px] rounded-full bg-blue-300 blur-[4px] shadow-2xl shadow-blue-400 z-10"
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
