"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PageHeader: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden px-14 pb-14 mb-16">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
          x: mousePosition.x * 0.02 - 300,
          y: mousePosition.y * 0.02 - 300,
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          x: -mousePosition.x * 0.02 + 200,
          y: -mousePosition.y * 0.02 + 200,
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)",
          x: mousePosition.x * 0.03 - 100,
          y: mousePosition.y * 0.03 - 100,
        }}
      />
      {["</>", "{}", "[]", "//", "=>", "&&", "||", "++"].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5 font-mono text-4xl md:text-5xl font-bold select-none pointer-events-none"
          style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          {symbol}
        </motion.div>
      ))}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">
            ✦ Open for Opportunities
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
            My Projects
          </span>
          <motion.span
            className="inline-block ml-4 text-4xl sm:text-5xl md:text-6xl"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          A curated collection of{" "}
          <span className="text-cyan-400 font-semibold">web apps</span>,{" "}
          <span className="text-purple-400 font-semibold">
            open source contributions
          </span>
          , <span className="text-pink-400 font-semibold">npm packages</span> &{" "}
          <span className="text-orange-400 font-semibold">developer tools</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-6"
        >
          {[
            {
              value: "8",
              label: "Projects",
              icon: "📁",
              color: "text-cyan-400",
            },
            {
              value: "5+",
              label: "Technologies",
              icon: "⚡",
              color: "text-purple-400",
            },
           
            
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <motion.div
                className={`text-3xl md:text-4xl lg:text-5xl font-black ${stat.color} mb-1`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </span>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default PageHeader;
