"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedPageBorder: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden ">
        <motion.div
          className="h-full w-[200%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-[200%] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Left Border */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] overflow-hidden">
        <motion.div
          className="w-full h-[200%] bg-gradient-to-b from-transparent via-pink-500 to-transparent"
          animate={{ y: ["-50%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Right Border */}
      <div className="absolute right-0 top-0 bottom-0 w-[2px] overflow-hidden">
        <motion.div
          className="w-full h-[200%] bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Corner Glows */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-transparent rounded-br-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20">
        <motion.div
          className="w-full h-full bg-gradient-to-bl from-purple-500/30 to-transparent rounded-bl-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20">
        <motion.div
          className="w-full h-full bg-gradient-to-tr from-pink-500/30 to-transparent rounded-tr-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <motion.div
          className="w-full h-full bg-gradient-to-tl from-emerald-500/30 to-transparent rounded-tl-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </div>
    </div>
  );
};

export default AnimatedPageBorder;
