"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";

const NPMPackageCard: React.FC<{ project: Project }> = ({ project }) => {
    const [typedCommand, setTypedCommand] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
    const fullCommand = "npx create-nextjs-backend my-app";

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullCommand.length) { setTypedCommand(fullCommand.slice(0, index)); index++; }
            else { clearInterval(typeInterval); setTimeout(() => setShowOutput(true), 500); }
        }, 80);
        const cursorInterval = setInterval(() => { setCursorVisible(v => !v); }, 530);
        return () => { clearInterval(typeInterval); clearInterval(cursorInterval); };
    }, []);

    const outputLines = [
        { text: "✔ Creating project structure...", color: "text-green-400", delay: 0 },
        { text: "✔ Installing dependencies...", color: "text-green-400", delay: 0.3 },
        { text: "✔ Setting up API routes...", color: "text-green-400", delay: 0.6 },
        { text: "✔ Configuring database...", color: "text-green-400", delay: 0.9 },
        { text: "✔ Adding authentication...", color: "text-green-400", delay: 1.2 },
        { text: "", color: "", delay: 1.5 },
        { text: "✦ Project created successfully!", color: "text-yellow-400 font-bold", delay: 1.8 },
        { text: "   cd my-app && npm run dev", color: "text-gray-400", delay: 2.1 },
    ];

    return (
        <motion.div className="relative h-[420px] w-full rounded-2xl overflow-hidden " whileHover={{ scale: 1.02 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900" />
            <div className="relative h-full flex flex-col">
                <div className="h-10 bg-gray-900 flex items-center px-4 gap-3">
                    <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
                    <div className="flex-1 text-center text-gray-400 text-sm font-mono">~/projects — bash</div>
                    <span className="text-xs text-orange-400 font-bold px-2 py-0.5 bg-orange-400/20 rounded">✦ npm</span>
                </div>
                <div className="flex-1 bg-gray-950 p-4 font-mono text-sm overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-green-400">➜</span><span className="text-cyan-400">projects</span>
                        <span className="text-white">{typedCommand}</span>
                        {cursorVisible && <span className="w-2 h-5 bg-white animate-pulse" />}
                    </div>
                    <AnimatePresence>
                        {showOutput && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                                {outputLines.map((line, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: line.delay }} className={line.color}>{line.text}</motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.div className="absolute bottom-20 left-4 right-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"><div className="text-2xl mb-1">📦</div><div className="text-lg font-bold text-white">200+</div><div className="text-xs text-gray-400">Downloads</div></div>
                            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"><div className="text-2xl mb-1">⚡</div><div className="text-lg font-bold text-white">v1.0.0</div><div className="text-xs text-gray-400">Latest</div></div>
                            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"><div className="text-2xl mb-1">📁</div><div className="text-lg font-bold text-white">15KB</div><div className="text-xs text-gray-400">Size</div></div>
                        </div>
                    </motion.div>
                </div>
                <div className="h-16 bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" /></svg>
                        </div>
                        <div><div className="text-white font-bold">create-nextjs-backend</div><div className="text-red-200 text-xs">by premdev</div></div>
                    </div>
                    <Link href={project.link} target="_blank">
                        <motion.button className="px-4 py-2 bg-white text-red-600 font-bold rounded-lg text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>✦ View on NPM →</motion.button>
                    </Link>
                </div>
            </div>
            <motion.div className="absolute top-14 right-4 text-4xl" animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>📦</motion.div>
        </motion.div>
    );
};

export default NPMPackageCard;
