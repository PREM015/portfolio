"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";
import { getIcon } from "../Icons";

const VriddhiCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative h-[420px] w-full rounded-3xl overflow-hidden cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
        >
            {/* Animated Liquid Background */}
            <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        </filter>
                    </defs>
                    <g filter="url(#goo)">
                        <motion.circle cx="100" cy="100" r="80" fill="url(#liquidGrad)" animate={isHovered ? { cx: [100, 150, 100], cy: [100, 150, 100] } : {}} transition={{ duration: 3, repeat: Infinity }} />
                        <motion.circle cx="300" cy="300" r="80" fill="url(#liquidGrad)" animate={isHovered ? { cx: [300, 250, 300], cy: [300, 250, 300] } : {}} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
                        <motion.circle cx="200" cy="200" r="60" fill="url(#liquidGrad)" animate={isHovered ? { r: [60, 100, 60] } : {}} transition={{ duration: 2, repeat: Infinity }} />
                    </g>
                </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                    <motion.div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white" animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}} transition={{ duration: 0.5 }}>
                        {getIcon(project.type)}
                    </motion.div>
                    <motion.div className="flex items-center gap-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-xs text-emerald-400 font-medium">✦ LIVE</span>
                    </motion.div>
                </div>
                <div className="mt-auto">
                    <motion.span className="inline-block px-3 py-1 mb-2 text-xs font-bold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30" whileHover={{ scale: 1.05 }}>WEB APPLICATION</motion.span>
                    <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                    <p className="text-emerald-300/70 text-sm mb-3">{project.subtitle}</p>
                    <div className="relative h-16 mb-4">
                        <motion.p className="absolute inset-0 text-gray-300 text-sm overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }}>{project.description}</motion.p>
                        <motion.div className="flex flex-wrap gap-2 absolute inset-0" initial={{ opacity: 1 }} animate={{ opacity: isHovered ? 0 : 1 }}>
                            {project.tech.map((tech, i) => (
                                <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/10 text-emerald-300 rounded-full border border-emerald-500/20">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex gap-6 mb-4 py-3 border-y border-emerald-500/20">
                        {project.stats?.map((stat, i) => (
                            <motion.div key={stat.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
                                <div className="text-xl font-bold text-emerald-400">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <Link href={project.link} target="_blank">
                        <motion.button className="w-full py-3 text-sm font-bold text-white rounded-xl overflow-hidden relative group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600" />
                            <motion.span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                ✦ Explore Platform
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default VriddhiCard;
