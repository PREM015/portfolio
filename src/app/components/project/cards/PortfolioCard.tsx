"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";
import { getIcon } from "../Icons";

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);
    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            ref={cardRef}
            className="relative h-[420px] w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden " style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{ background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)", backgroundSize: "200% 200%" }}
                        animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative h-full p-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl">
                        <motion.div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-3xl opacity-40" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
                        <motion.div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 blur-3xl opacity-40" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
                        <div className="flex items-start justify-between mb-4">
                            <motion.div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                                {getIcon(project.type)}
                            </motion.div>
                            <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30">✦ PORTFOLIO</span>
                        </div>
                        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-1">{project.title}</h3>
                        <p className="text-cyan-300/70 text-sm mb-3">{project.subtitle}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <motion.span key={tech} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-2 py-1 text-[10px] font-semibold bg-white/10 backdrop-blur text-cyan-300 rounded-lg border border-cyan-500/30">{tech}</motion.span>
                            ))}
                        </div>
                        <div className="flex gap-4 mb-4">
                            {project.stats?.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <Link href={project.link} target="_blank" className="flex-1 py-2.5 text-center text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all">Visit Site →</Link>
                            <button onClick={() => setIsFlipped(true)} className="px-4 py-2.5 text-sm font-bold bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all">Details</button>
                        </div>
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <div className="h-full p-6 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 rounded-3xl">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-cyan-400">✦ Project Details</h4>
                            <button onClick={() => setIsFlipped(false)} className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                <div className="text-xs text-cyan-400 mb-1">TECHNOLOGIES</div>
                                <div className="text-sm text-white">{project.tech.join(", ")}</div>
                            </div>
                            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                <div className="text-xs text-cyan-400 mb-1">FEATURES</div>
                                <ul className="text-sm text-white space-y-1">
                                    <li>• Responsive Design</li><li>• Dark/Light Mode</li><li>• Smooth Animations</li><li>• SEO Optimized</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PortfolioCard;
