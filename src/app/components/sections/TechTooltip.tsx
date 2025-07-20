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
  image: string;
  link?: string;
};

export const TechTooltip = ({ items }: { items: TechItem[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 100, damping: 5 });
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), { stiffness: 100, damping: 5 });

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6">
      {items.map(item => {
        const img = (
          <motion.img
            src={item.image}
            alt={item.name}
            onMouseMove={e => x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)}
            className="h-14 w-14 rounded-full border-2 border-white object-contain bg-white/10 p-2 shadow-md transition"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
          />
        );

        return (
          <div
            key={item.id}
            className="group relative"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  style={{ translateX, rotate }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-xl shadow-lg pointer-events-none text-center"
                >
                  <div className="font-semibold text-sm">{item.name}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {img}
              </a>
            ) : (
              img
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechTooltip;
