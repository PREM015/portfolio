"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CATEGORY_CONFIG } from "@/app/data/techStack";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

// Fixed: typed variants as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const getCategoryButtonClass = (cat: string) => {
    const isSelected = selectedCategory === cat;

    if (cat === "All") {
      return isSelected
        ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/60 border-transparent"
        : "bg-white/5 hover:bg-white/15 text-white border-white/20 hover:border-white/40";
    }

    const config = CATEGORY_CONFIG[cat];
    return isSelected
      ? `${config.bgClass} text-white shadow-2xl border-transparent`
      : `bg-white/5 ${config.hoverClass} text-white border-white/20 hover:border-white/40`;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-3 mb-10"
      role="group"
      aria-label="Filter technologies by category"
    >
      {categories.map((cat, index) => {
        const isSelected = selectedCategory === cat;

        return (
          <motion.div key={cat} variants={itemVariants} className="relative">
            <motion.button
              onClick={() => onSelectCategory(cat)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all border-2 overflow-hidden ${getCategoryButtonClass(
                cat
              )}`}
              aria-label={`Filter by ${cat}`}
              aria-pressed={isSelected}
            >
              {!isSelected && (
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      cat === "All"
                        ? "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))"
                        : `linear-gradient(135deg, ${
                            CATEGORY_CONFIG[cat]?.color || "#fff"
                          }20, transparent)`,
                  }}
                />
              )}

              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"  // fix TS type
                  }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {cat}
                {cat !== "All" && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.08 + 0.2,
                      type: "spring" as const,
                    }}
                    className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20"
                  >
                    {categoryCounts[cat] || 0}
                  </motion.span>
                )}
              </span>
            </motion.button>

            {isSelected && (
              <motion.div
                layoutId="categoryIndicator"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                style={{
                  background:
                    cat === "All"
                      ? "linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)"
                      : CATEGORY_CONFIG[cat]?.color || "#fff",
                }}
                initial={false}
                transition={{
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CategoryFilter;
