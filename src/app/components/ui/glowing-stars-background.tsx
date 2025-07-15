"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const GlowingStarsBackground = ({
  className,
}: {
  className?: string;
}) => {
  const stars = 108;
  const columns = 18;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 2500); // slightly faster

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn("h-full w-full absolute inset-0 p-1", className)}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1px",
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;

        return (
          <div
            key={`bg-star-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            {/* 🌟 Main Star */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: isGlowing ? [1, 1.2, 2.8, 2.4, 1.5] : 1,
                background: isGlowing ? "#fff" : "#aaa",
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                delay,
              }}
              className="bg-[#aaa] h-[2px] w-[2px] rounded-full relative z-20"
            />

            {/* 💫 Glow */}
            <AnimatePresence mode="wait">
              {isGlowing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut",
                    delay,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 z-10 h-[8px] w-[8px] rounded-full bg-blue-300 blur-[3px] shadow-2xl shadow-blue-400"
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
