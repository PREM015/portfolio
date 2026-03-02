"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";
import { getIcon } from "../Icons";

const PlaceholderCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div className="relative h-[420px] w-full rounded-3xl overflow-hidden cursor-pointer" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} whileHover={{ scale: 1.02 }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
            <div className="absolute inset-0 opacity-20">
                <motion.div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} animate={isHovered ? { backgroundPosition: ["0 0", "30px 30px"] } : {}} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            </div>
            {[...Array(5)].map((_, i) => (
                <motion.div key={i} className="absolute w-20 h-20 rounded-full bg-white/10" style={{ left: `${20 + i * 15}%`, top: `${10 + (i % 3) * 20}%` }} animate={isHovered ? { y: [0, -20, 0], scale: [1, 1.2, 1] } : {}} transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                    <motion.div className="p-3 rounded-2xl bg-white/20 backdrop-blur text-white" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>{getIcon(project.type)}</motion.div>
                    <span className="px-3 py-1 text-xs font-bold bg-white/20 backdrop-blur text-white rounded-full border border-white/30">✦ {project.type.toUpperCase()}</span>
                </div>
                <div className="mt-auto">
                    <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{project.subtitle}</p>
                    <motion.p className="text-gray-300 text-sm mb-4" initial={{ opacity: 0.7 }} animate={{ opacity: isHovered ? 1 : 0.7 }}>{project.description}</motion.p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                            <motion.span key={tech} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-2 py-1 text-[10px] font-semibold bg-white/20 backdrop-blur text-white rounded-lg border border-white/30">{tech}</motion.span>
                        ))}
                    </div>
                    {project.stats && (
                        <div className="flex gap-4 mb-4 py-3 border-y border-white/20">
                            {project.stats.map((stat) => (
                                <div key={stat.label}><div className="text-xl font-bold text-white">{stat.value}</div><div className="text-xs text-white/60">{stat.label}</div></div>
                            ))}
                        </div>
                    )}
                    <div className="flex gap-3">
                        <Link href={project.link} target="_blank" className="flex-1">
                            <motion.button className="w-full py-3 bg-white text-gray-900 font-bold rounded-xl" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>✦ View Project →</motion.button>
                        </Link>
                        {project.github && (
                            <Link href={project.github} target="_blank">
                                <motion.button className="p-3 bg-white/20 backdrop-blur text-white rounded-xl border border-white/30" whileHover={{ scale: 1.1 }}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {project.type === "placeholder" && (
                <motion.div className="absolute top-4 right-4 px-4 py-2 bg-yellow-500 text-black font-bold text-xs rounded-full" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>🚧 COMING SOON</motion.div>
            )}
        </motion.div>
    );
};

export default PlaceholderCard;
