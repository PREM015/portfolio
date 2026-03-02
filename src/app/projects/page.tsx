"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ImmersiveBackground from "../components/project/ImmersiveBackground";
import AnimatedPageBorder from "../components/project/AnimatedPageBorder";
import PageHeader from "../components/project/PageHeader";
import CategoryFilter from "../components/project/CategoryFilter";
import ProjectsFooter from "../components/project/ProjectsFooter";

// Cards
import PortfolioCard from "../components/project/cards/PortfolioCard";
import VriddhiCard from "../components/project/cards/VriddhiCard";
import StudentAppCard from "../components/project/cards/StudentAppCard";
import ReactIconsCard from "../components/project/cards/ReactIconsCard";
import VSCodeExtensionCard from "../components/project/cards/VSCodeExtensionCard";
import NPMPackageCard from "../components/project/cards/NPMPackageCard";
import SolarSystemCard from "../components/project/cards/SolarSystemCard";
import SelectionSortCard from "../components/project/cards/SelectionSortCard";
import PlaceholderCard from "../components/project/cards/PlaceholderCard";

// Data & Types
import { projects } from "../components/project/data";
import { Project } from "../components/project/types";

const renderCard = (project: Project) => {
  switch (project.id) {
    case "portfolio": return <PortfolioCard project={project} />;
    case "vriddhi": return <VriddhiCard project={project} />;
    case "student-app": return <StudentAppCard project={project} />;
    case "react-icons": return <ReactIconsCard project={project} />;
    case "vscode-extension": return <VSCodeExtensionCard project={project} />;
    case "npm-package": return <NPMPackageCard project={project} />;
    case "solar-system": return <SolarSystemCard project={project} />;
    case "selection-sort": return <SelectionSortCard project={project} />;
    default: return <PlaceholderCard project={project} />;
  }
};

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "webapp") return ["webapp", "frontend", "portfolio"].includes(project.type);
    if (activeFilter === "opensource") return project.type === "opensource";
    if (activeFilter === "tools") return ["extension", "npm", "algorithm", "threejs"].includes(project.type);
    return true;
  });

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div className="text-6xl" animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>✦</motion.div>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col bg-black w-full">
      <ImmersiveBackground />
      <AnimatedPageBorder />

      <div className="relative z-10">
        {/* Hero Header */}
        <PageHeader />

        {/* Projects + Footer — single section, zero gap */}
        <div className="px-4 md:px-8 lg:px-16">
          {/* Category Filter */}
          <CategoryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-[1400px] mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  {renderCard(project)}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-4">Try selecting a different category</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
              >
                ✦ Show All Projects
              </button>
            </motion.div>
          )}

          {/* Footer CTA — directly below grid, consistent padding */}
          <div className="pt-24 pb-12">
            <ProjectsFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;