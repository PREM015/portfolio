"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

type TechItem = {
  id: number;
  name: string;
  role?: string;
  image: string;
  link?: string;
};

export const TechTooltip = ({ items }: { items: TechItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };

  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6">
      {items.map((item) => {
        const icon = (
          <motion.img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            height={56}
            width={56}
            className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        );

        return (
          <div
            key={item.id}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  style={{ translateX, rotate }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-xl shadow-lg pointer-events-none text-center"
                >
                  <div className="font-semibold text-sm">{item.name}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {icon}
              </a>
            ) : (
              icon
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechTooltip;
