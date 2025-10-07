"use client";

import React, {
  useState,
  useMemo,
  useEffect,
  
  Suspense,
  lazy,
} from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Easing,
} from "framer-motion";
import { TECH_STACK } from "@/app/data/techStack";
import { debounce } from "@/app/utils/debounce";
import CategoryFilter from "@/app/components/skill_components/CategoryFilter";
import SearchBar from "@/app/components/skill_components/SearchBar";
import SkillCard from "@/app/components/skill_components/SkillCard";

const Particles = lazy(() => import("react-tsparticles"));

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

// Debounced search function
const debouncedSearch = useMemo(
  () => debounce((value: string) => setSearch(value), 200),
  []
);

  const filteredTech = useMemo(
    () =>
      TECH_STACK.filter((tech) => {
        const matchesCategory =
          selectedCategory === "All" || tech.category === selectedCategory;
        const matchesSearch = tech.name
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [selectedCategory, search]
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(TECH_STACK.map((t) => t.category)))],
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    TECH_STACK.forEach((tech) => {
      counts[tech.category] = (counts[tech.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Hero animation
  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      },
    },
  };

  // Glow animation
  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as Easing,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {!shouldReduceMotion && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-30">
            <Particles
              options={{
                particles: {
                  number: {
                    value: 50,
                    density: { enable: true, value_area: 800 },
                  },
                  color: { value: ["#a855f7", "#06b6d4", "#ec4899"] },
                  shape: { type: "circle" },
                  opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1 },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1 },
                  },
                  links: {
                    enable: true,
                    distance: 150,
                    color: "#a855f7",
                    opacity: 0.3,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "bounce" },
                  },
                },
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true,
                  },
                  modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
                },
                fpsLimit: 60,
              }}
            />
          </div>
        </Suspense>
      )}

      {/* Gradient Orbs */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate={isPageLoaded ? "visible" : "hidden"}
          variants={heroVariants}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">
              My Tech Arsenal
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Mastering the tools that shape the digital world
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 w-64 mx-auto mt-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
          />
        </motion.div>

        {/* Search */}
        <SearchBar
          placeholder="Search technologies..."
          onChange={debouncedSearch}
          ariaLabel="Search for technologies"
        />

        {/* Categories */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

        {/* Results count */}
        <motion.div
          key={filteredTech.length}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
          aria-live="polite"
        >
          <p className="text-gray-400 text-sm">
            Showing{" "}
            <span className="text-purple-400 font-bold">
              {filteredTech.length}
            </span>{" "}
            {filteredTech.length === 1 ? "skill" : "skills"}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {filteredTech.length > 0 ? (
            <motion.div
              key={selectedCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {filteredTech.map((tech, idx) => (
                <SkillCard key={tech.name} tech={tech} idx={idx} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No skills found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
