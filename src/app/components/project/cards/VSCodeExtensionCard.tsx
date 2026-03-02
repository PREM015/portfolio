"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";

const VSCodeExtensionCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showError, setShowError] = useState(false);
    const codeLines = [
        { text: "const build = async () => {", color: "text-purple-400" },
        { text: "  try {", color: "text-purple-400" },
        { text: '    await compile("app");', color: "text-blue-400" },
        { text: "  } catch (error) {", color: "text-purple-400" },
        { text: '    // Build failed!', color: "text-green-500" },
        { text: "    playFaahSound();", color: "text-yellow-400" },
        { text: "  }", color: "text-purple-400" },
        { text: "};", color: "text-purple-400" },
    ];

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                setShowError(true);
                setTimeout(() => { setShowError(false); setIsPlaying(false); }, 2000);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isPlaying]);

    return (
        <motion.div className="relative h-[420px] w-full rounded-xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02, y: -5 }}>
            <div className="h-8 bg-[#323233] flex items-center px-3 gap-2">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
                <div className="flex-1 text-center"><span className="text-xs text-gray-400">✦ faah-on-fail - Visual Studio Code</span></div>
            </div>
            <div className="flex h-[calc(100%-32px)]">
                <div className="w-12 bg-[#333333] flex flex-col items-center py-2 gap-4">
                    <motion.div className="p-2 text-white bg-white/10 rounded" whileHover={{ scale: 1.1 }}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </motion.div>
                    <div className="p-2 text-gray-500"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
                </div>
                <div className="w-48 bg-[#252526] p-3 border-r border-[#3c3c3c]">
                    <div className="text-xs text-gray-400 mb-2 font-semibold">EXTENSIONS</div>
                    <motion.div className="p-2 bg-[#37373d] rounded-lg mb-3 cursor-pointer" whileHover={{ backgroundColor: "#45454a" }}>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-sm font-bold">FF</div>
                            <div><div className="text-white text-xs font-semibold">Faah On Fail</div><div className="text-gray-500 text-[10px]">premdev</div></div>
                        </div>
                        <div className="flex items-center gap-1 mt-1"><div className="flex text-yellow-400 text-[10px]">★★★★★</div><span className="text-gray-500 text-[10px]">(100+)</span></div>
                    </motion.div>
                    <div className="text-[10px] text-gray-500 mb-2">INSTALLED</div>
                    <div className="flex items-center gap-2 text-green-400 text-xs">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        ✦ Active
                    </div>
                </div>
                <div className="flex-1 bg-[#1e1e1e] relative">
                    <div className="h-9 bg-[#252526] flex items-center border-b border-[#3c3c3c]">
                        <div className="px-4 h-full flex items-center gap-2 bg-[#1e1e1e] border-r border-[#3c3c3c]">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <span className="text-white text-xs">build.js</span>
                            <span className="text-gray-500 text-xs">×</span>
                        </div>
                    </div>
                    <div className="p-4 font-mono text-sm">
                        <div className="flex">
                            <div className="text-gray-600 text-right pr-4 select-none">{codeLines.map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}</div>
                            <div className="flex-1">{codeLines.map((line, i) => <motion.div key={i} className={`leading-6 ${line.color}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>{line.text}</motion.div>)}</div>
                        </div>
                    </div>
                    <AnimatePresence>
                        {showError && (
                            <motion.div className="absolute bottom-4 right-4 left-4" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}>
                                <div className="bg-red-900/90 border border-red-500 rounded-lg p-3 flex items-center gap-3">
                                    <div className="text-3xl animate-bounce">🔊</div>
                                    <div><div className="text-red-300 font-bold text-sm">BUILD FAILED!</div><div className="text-red-400 text-xs">Playing "Faah" sound... 🎵</div></div>
                                    <motion.div className="ml-auto text-4xl" animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>😤</motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.button className="absolute top-12 right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-lg flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsPlaying(true)} disabled={isPlaying}>
                        {isPlaying ? <><span className="animate-pulse">●</span> Running...</> : <>▶ Run Demo</>}
                    </motion.button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#007acc] flex items-center px-3 justify-between">
                <div className="flex items-center gap-3 text-white text-xs"><span>⎇ main</span><span>◯ 0 ⚠ 0</span></div>
                <div className="flex items-center gap-3 text-white text-xs"><span>TypeScript</span><span>UTF-8</span></div>
            </div>
            <Link href={project.link} target="_blank">
                <motion.div className="absolute top-2 right-2 z-10" whileHover={{ scale: 1.05 }}>
                    <div className="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg shadow-lg shadow-green-500/30">✦ Install Extension ↗</div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default VSCodeExtensionCard;
