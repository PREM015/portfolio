"use client";

import React, { ChangeEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchBarProps {
  placeholder?: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onChange,
  ariaLabel = "Search input",
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setValue("");
    onChange("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
      className="max-w-2xl mx-auto mb-10"
      role="search"
    >
      <div className="relative group">
        {/* Glowing Border Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"
          animate={isFocused ? { opacity: 0.75 } : { opacity: 0 }}
        />

        {/* Main Search Container */}
        <div className="relative">
          {/* Search Icon with Animation */}
          <motion.div
            className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10"
            animate={{
              rotate: isFocused ? 90 : 0,
              scale: isFocused ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaSearch
              className="text-lg transition-colors duration-300"
              style={{ color: isFocused ? "#a855f7" : "#9ca3af" }}
            />
          </motion.div>

          {/* Input Field */}
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full pl-14 pr-14 py-4 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all duration-300 text-base font-medium"
            aria-label={ariaLabel}
          />

          {/* Clear Button with Animation */}
          <AnimatePresence>
            {value && (
              <motion.button
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
                onClick={handleClear}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors duration-200 z-10"
                aria-label="Clear search"
                type="button"
              >
                <FaTimes className="text-lg" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Animated Bottom Line */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isFocused ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Floating Particles Effect */}
        {isFocused && (
          <>
            <motion.div
              className="absolute -top-2 left-10 w-2 h-2 rounded-full bg-cyan-400"
              animate={{
                y: [-10, -20, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-2 right-10 w-2 h-2 rounded-full bg-pink-400"
              animate={{
                y: [-10, -25, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute -top-2 left-1/2 w-2 h-2 rounded-full bg-purple-400"
              animate={{
                y: [-10, -30, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        )}
      </div>

      {/* Helper Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-center text-xs text-gray-400 mt-3"
      >
        {value
          ? `Searching for "${value}"...`
          : "Start typing to search technologies"}
      </motion.p>
    </motion.div>
  );
};

export default SearchBar;