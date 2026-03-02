"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";

const SolarSystemCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activePlanet, setActivePlanet] = useState<string | null>(null);
    const [stars, setStars] = useState<{ left: number; top: number; opacity: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        setStars(Array.from({ length: 100 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            opacity: Math.random() * 0.8 + 0.2,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
        })));
    }, []);

    const planets = [
        { name: "Mercury", color: "#b5b5b5", size: 6, orbit: 35, speed: 4 },
        { name: "Venus", color: "#e6c87a", size: 8, orbit: 50, speed: 6 },
        { name: "Earth", color: "#6b93d6", size: 9, orbit: 65, speed: 8 },
        { name: "Mars", color: "#c1440e", size: 7, orbit: 80, speed: 10 },
        { name: "Jupiter", color: "#d8ca9d", size: 16, orbit: 105, speed: 14 },
        { name: "Saturn", color: "#f4d59e", size: 14, orbit: 130, speed: 18 },
    ];

    return (
        <motion.div className="relative h-[420px] w-full rounded-3xl overflow-hidden cursor-pointer" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => { setIsHovered(false); setActivePlanet(null); }} whileHover={{ scale: 1.02 }}>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950" />
            <div className="absolute inset-0">
                {stars.map((star, i) => (
                    <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${star.left}%`, top: `${star.top}%`, opacity: star.opacity }} animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }} transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }} />
                ))}
            </div>
            <motion.div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)" }} animate={isHovered ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 4, repeat: Infinity }} />
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="absolute w-16 h-16 rounded-full z-10" style={{ background: "radial-gradient(circle, #ffd700 0%, #ff8c00 50%, #ff4500 100%)", boxShadow: "0 0 60px #ffa500, 0 0 100px #ff8c00, 0 0 140px #ff4500" }} animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 60px #ffa500, 0 0 100px #ff8c00", "0 0 80px #ffa500, 0 0 120px #ff8c00", "0 0 60px #ffa500, 0 0 100px #ff8c00"] }} transition={{ duration: 3, repeat: Infinity }} />
                {planets.map((planet) => (
                    <React.Fragment key={planet.name}>
                        <motion.div className="absolute rounded-full border border-white/10" style={{ width: planet.orbit * 2, height: planet.orbit * 2 }} animate={isHovered ? { borderColor: "rgba(255,255,255,0.3)" } : {}} />
                        <motion.div className="absolute" style={{ width: planet.orbit * 2, height: planet.orbit * 2 }} animate={{ rotate: 360 }} transition={{ duration: planet.speed, repeat: Infinity, ease: "linear" }}>
                            <motion.div className="absolute cursor-pointer" style={{ width: planet.size, height: planet.size, borderRadius: "50%", background: planet.color, top: 0, left: "50%", transform: "translateX(-50%)", boxShadow: `0 0 ${planet.size}px ${planet.color}` }} whileHover={{ scale: 2 }} onHoverStart={() => setActivePlanet(planet.name)} onHoverEnd={() => setActivePlanet(null)} />
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>
            <AnimatePresence>
                {activePlanet && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur rounded-lg border border-purple-500/50">
                        <span className="text-white font-bold text-sm">✦ {activePlanet}</span>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold bg-purple-500/30 text-purple-300 rounded-full border border-purple-500/50" whileHover={{ scale: 1.05 }}><span>🌌</span> THREE.JS / WEBGL</motion.span>
                <h3 className="text-2xl font-black text-white mb-1">{project.title}</h3>
                <p className="text-purple-200/70 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <motion.span key={tech} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-2 py-1 text-[10px] font-semibold bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">{tech}</motion.span>
                    ))}
                </div>
                <Link href={project.github || project.link} target="_blank">
                    <motion.button className="w-full py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        ✦ View Repository
                    </motion.button>
                </Link>
            </div>
            <motion.div className="absolute top-4 right-4 text-4xl" animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>👨‍🚀</motion.div>
        </motion.div>
    );
};

export default SolarSystemCard;
