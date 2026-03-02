"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../types";

const SelectionSortCard: React.FC<{ project: Project }> = ({ project }) => {
    const [array, setArray] = useState<number[]>([64, 34, 25, 85, 12, 22, 11, 90]);
    const [sorting, setSorting] = useState(false);
    const [currentIndices, setCurrentIndices] = useState<{ i: number; j: number; min: number } | null>(null);
    const [sorted, setSorted] = useState<number[]>([]);
    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);

    const resetArray = () => {
        setArray(Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10));
        setSorted([]); setCurrentIndices(null); setComparisons(0); setSwaps(0);
    };

    const selectionSort = async () => {
        setSorting(true); setComparisons(0); setSwaps(0);
        const arr = [...array]; const n = arr.length; const sortedIndices: number[] = [];
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                setCurrentIndices({ i, j, min: minIdx }); setComparisons(c => c + 1);
                await new Promise(resolve => setTimeout(resolve, 300));
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            if (minIdx !== i) { [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; setSwaps(s => s + 1); setArray([...arr]); await new Promise(resolve => setTimeout(resolve, 300)); }
            sortedIndices.push(i); setSorted([...sortedIndices]);
        }
        sortedIndices.push(n - 1); setSorted([...sortedIndices]); setCurrentIndices(null); setSorting(false);
    };

    const maxValue = Math.max(...array);

    return (
        <motion.div className="relative h-[420px] w-full rounded-3xl overflow-hidden" whileHover={{ scale: 1.02 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900" />
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full"><defs><pattern id="sortGrid" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#sortGrid)" /></svg>
            </div>
            <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <motion.div className="p-2 bg-amber-500/30 rounded-xl text-amber-300" animate={sorting ? { rotate: 360 } : {}} transition={{ duration: 2, repeat: sorting ? Infinity : 0, ease: "linear" }}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                        </motion.div>
                        <div><h3 className="text-lg font-bold text-white">{project.title}</h3><p className="text-amber-300/70 text-xs">{project.subtitle}</p></div>
                    </div>
                    <span className="px-3 py-1 text-xs font-bold bg-amber-500/30 text-amber-300 rounded-full border border-amber-500/50">✦ O(n²)</span>
                </div>
                <div className="flex-1 flex items-end justify-center gap-2 py-4 px-2 bg-black/30 rounded-2xl mb-4">
                    {array.map((value, index) => {
                        const height = (value / maxValue) * 100;
                        const isCurrentI = currentIndices?.i === index, isCurrentJ = currentIndices?.j === index, isMin = currentIndices?.min === index, isSorted = sorted.includes(index);
                        let bgColor = "bg-amber-500";
                        if (isSorted) bgColor = "bg-green-500"; else if (isMin) bgColor = "bg-purple-500"; else if (isCurrentI) bgColor = "bg-blue-500"; else if (isCurrentJ) bgColor = "bg-red-500";
                        return (
                            <motion.div key={index} className={`relative flex-1 ${bgColor} rounded-t-lg transition-colors duration-200`} style={{ height: `${height}%` }} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white text-xs font-bold">{value}</span>
                                {(isCurrentI || isCurrentJ || isMin) && (
                                    <motion.div className="absolute -top-10 left-1/2 -translate-x-1/2 text-lg" initial={{ scale: 0 }} animate={{ scale: 1 }}>{isMin ? "👆" : isCurrentI ? "📍" : "🔍"}</motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-black/30 rounded-xl p-3 text-center"><div className="text-xl font-bold text-amber-400">{comparisons}</div><div className="text-xs text-gray-400">Comparisons</div></div>
                    <div className="flex-1 bg-black/30 rounded-xl p-3 text-center"><div className="text-xl font-bold text-green-400">{swaps}</div><div className="text-xs text-gray-400">Swaps</div></div>
                    <div className="flex-1 bg-black/30 rounded-xl p-3 text-center"><div className="text-xl font-bold text-purple-400">{array.length}</div><div className="text-xs text-gray-400">Elements</div></div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded" /><span className="text-gray-400">Current</span></div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded" /><span className="text-gray-400">Comparing</span></div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-purple-500 rounded" /><span className="text-gray-400">Minimum</span></div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded" /><span className="text-gray-400">Sorted</span></div>
                </div>
                <div className="flex gap-3">
                    <motion.button onClick={selectionSort} disabled={sorting} className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${sorting ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-amber-500 to-orange-600 text-white"}`} whileHover={sorting ? {} : { scale: 1.02 }} whileTap={sorting ? {} : { scale: 0.98 }}>
                        {sorting ? <><span className="animate-spin">⚙️</span> Sorting...</> : <>✦ Start Sort</>}
                    </motion.button>
                    <motion.button onClick={resetArray} disabled={sorting} className="px-4 py-3 bg-white/10 text-white font-bold rounded-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>🔄</motion.button>
                    <Link href={project.github || project.link} target="_blank">
                        <motion.button className="px-4 py-3 bg-white/10 text-white font-bold rounded-xl" whileHover={{ scale: 1.05 }}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default SelectionSortCard;
