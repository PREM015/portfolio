"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";

const ReactIconsCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showMerged, setShowMerged] = useState(false);

    useEffect(() => {
        if (isHovered) {
            const timer = setTimeout(() => setShowMerged(true), 500);
            return () => clearTimeout(timer);
        }
        setShowMerged(false);
    }, [isHovered]);

    const floatingIcons = [
        { icon: "⚛️", delay: 0 }, { icon: "🎯", delay: 0.2 }, { icon: "🏹", delay: 0.4 }, { icon: "⭐", delay: 0.6 },
        { icon: "🔥", delay: 0.8 }, { icon: "💫", delay: 1 }, { icon: "✨", delay: 1.2 }, { icon: "🎨", delay: 1.4 },
    ];

    return (
        <motion.div className="relative h-[420px] w-full rounded-3xl overflow-hidden" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} whileHover={{ scale: 1.02 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-900 to-red-900" />
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full"><defs><pattern id="iconGrid" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#iconGrid)" /></svg>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                {floatingIcons.map((item, i) => (
                    <motion.div key={i} className="absolute text-3xl" style={{ left: `${10 + (i % 4) * 25}%`, top: `${10 + Math.floor(i / 4) * 40}%` }} animate={isHovered ? { y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] } : {}} transition={{ duration: 2, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}>{item.icon}</motion.div>
                ))}
            </div>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" animate={isHovered ? { scale: [1, 1.3, 1], rotate: [0, 360] } : {}} transition={{ duration: 2, ease: "easeInOut" }}>
                <svg width="100" height="100" viewBox="0 0 24 24" className="text-pink-400">
                    <motion.path d="M4 4c0 0 4 2 8 2s8-2 8-2c0 4-2 8-8 16C6 12 4 8 4 4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                    <motion.path d="M12 6v14" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
                </svg>
            </motion.div>
            <AnimatePresence>
                {showMerged && (
                    <motion.div className="absolute top-4 right-4" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }} transition={{ type: "spring", stiffness: 300 }}>
                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg shadow-purple-500/50">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
                            <span className="font-bold text-sm">✦ PR MERGED</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end">
                <motion.div className="absolute top-4 left-4 flex items-center gap-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="p-2 bg-white/10 backdrop-blur rounded-xl">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </div>
                    <div><div className="text-white font-bold text-sm">react-icons</div><div className="text-pink-300 text-xs">11k+ ⭐</div></div>
                </motion.div>
                <div className="mb-4">
                    <motion.span className="inline-block px-3 py-1 mb-2 text-xs font-bold bg-pink-500/30 text-pink-300 rounded-full border border-pink-500/50" whileHover={{ scale: 1.05 }}>✦ OPEN SOURCE</motion.span>
                    <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                    <p className="text-pink-200/70 text-sm">{project.subtitle}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4 mb-4 py-3 border-y border-pink-500/20">
                    <div className="flex items-center gap-2"><span className="text-2xl">📦</span><div><div className="text-lg font-bold text-white">1M+</div><div className="text-xs text-gray-400">Weekly Downloads</div></div></div>
                    <div className="flex items-center gap-2"><span className="text-2xl">🎯</span><div><div className="text-lg font-bold text-white">11k+</div><div className="text-xs text-gray-400">GitHub Stars</div></div></div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <motion.span key={tech} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-2 py-1 text-[10px] font-semibold bg-pink-500/20 text-pink-300 rounded-lg border border-pink-500/30">{tech}</motion.span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <Link href={project.link} target="_blank" className="flex-1">
                        <motion.button className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-xl" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>View PR →</motion.button>
                    </Link>
                    {project.github && (
                        <Link href={project.github} target="_blank">
                            <motion.button className="p-3 bg-white/10 text-white rounded-xl" whileHover={{ scale: 1.1, rotate: 5 }}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </motion.button>
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ReactIconsCard;
