"use client";

import React from "react";
import { motion } from "framer-motion";

const CategoryFilter: React.FC<{
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}> = ({ activeFilter, setActiveFilter }) => {
    const categories = [
        { id: "all", label: "All Projects", icon: "🎯" },
        { id: "webapp", label: "Web Apps", icon: "🌐" },
        { id: "opensource", label: "Open Source", icon: "💻" },
        { id: "tools", label: "Dev Tools", icon: "🛠️" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-16 px-4"
        >
            {categories.map((cat) => (
                <motion.button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-all ${activeFilter === cat.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                        }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>{cat.icon}</span>
                    {cat.label}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default CategoryFilter;
