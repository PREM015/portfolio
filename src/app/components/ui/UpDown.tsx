"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface UpDownProps {
  children: ReactNode;
  distanceY?: number;
  distanceX?: number;
  speed?: number;
  delay?: number;
}

/**
 * Smooth floating animation with slightly organic motion
 */
const UpDown: React.FC<UpDownProps> = ({
  children,
  distanceY = 10,
  distanceX = 0,
  speed = 4,
  delay = 0,
}) => (
  <motion.div
    animate={{
      y: [0, -distanceY * 0.8, -distanceY, -distanceY * 0.6, 0],
      x: [0, distanceX / 2, 0],
    }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth, organic float
      delay,
    }}
  >
    {children}
  </motion.div>
);

UpDown.displayName = "UpDown";

export default UpDown;
