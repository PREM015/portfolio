"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";
import { getIcon } from "../Icons";

const StudentAppCard: React.FC<{ project: Project }> = ({ project }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <motion.div className="relative h-[420px] w-full" whileHover={{ rotateZ: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="absolute inset-2 bg-gray-800 rounded-lg transform rotate-2" />
            <div className="absolute inset-1 bg-gray-700 rounded-lg transform rotate-1" />
            <div className="relative h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-red-800 to-red-700">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-900/50" />
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="absolute left-1/2 -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-full" style={{ top: `${8 + i * 8}%` }} />
                    ))}
                </div>
                <div className="absolute inset-0 ml-14 mr-4 mt-4 mb-4">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="absolute left-0 right-0 h-px bg-blue-200" style={{ top: `${6 + i * 6}%` }} />
                    ))}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-red-300" />
                </div>
                <div className="relative h-full p-6 pl-20 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                        <motion.div className="flex items-center gap-2" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <div className="p-2 bg-green-500 rounded-lg text-white">{getIcon(project.type)}</div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                                <p className="text-xs text-gray-500">{project.subtitle}</p>
                            </div>
                        </motion.div>
                        <div className="flex items-center gap-1">
                            <span className="text-2xl">📚</span>
                            <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">✦ FRONTEND</span>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {["Overview", "Features", "Stack"].map((tab, i) => (
                            <button key={tab} onClick={() => setActiveTab(i)} className={`px-3 py-1 text-xs font-bold rounded-t-lg transition-colors ${activeTab === i ? "bg-yellow-300 text-gray-800" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}>{tab}</button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        {activeTab === 0 && (
                            <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1">
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.stats?.map((stat) => (
                                        <div key={stat.label} className="text-center p-2 bg-white/50 rounded-lg">
                                            <div className="text-xl font-bold text-green-600">{stat.value}</div>
                                            <div className="text-xs text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 1 && (
                            <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1">
                                <ul className="space-y-2">
                                    {["Student Dashboard", "Attendance Tracking", "Grade Management", "Reports & Analytics"].map((feature, i) => (
                                        <motion.li key={feature} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="text-green-500">✓</span>{feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                        {activeTab === 2 && (
                            <motion.div key="stack" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <motion.span key={tech} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="px-3 py-2 text-xs font-bold bg-green-100 text-green-700 rounded-lg border-2 border-green-200">{tech}</motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="mt-auto pt-4">
                        <Link href={project.link} target="_blank">
                            <motion.button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/30" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>✦ View Project 📖</motion.button>
                        </Link>
                    </div>
                    <div className="absolute bottom-4 right-4 text-4xl opacity-30">📝</div>
                </div>
            </div>
            <div className="absolute -top-3 right-10 w-8 h-12 border-4 border-gray-400 rounded-xl transform -rotate-12" />
        </motion.div>
    );
};

export default StudentAppCard;
