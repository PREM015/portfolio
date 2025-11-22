"use client";

import React from "react";
import { FocusCards } from "@/app/components/ui/focus-cards";

// Section Components
import SkillsRadarSection from "@/app/components/about/sections/SkillsRadarSection";
import TechStackRadar from "@/app/components/about/sections/TechStackRadar";
import TopSkillsSection from "@/app/components/about/sections/TopSkillsSection";
import SkillTree from "@/app/components/about/sections/SkillTree";
import SkillsEndorsement from "@/app/components/about/sections/SkillsEndorsement";
import FocusCardsSection from "@/app/components/about/sections/FocusCardsSection";
import CurrentlyLearningSection from "@/app/components/about/sections/CurrentlyLearningSection";
import LearningCurveGraph from "@/app/components/about/sections/LearningCurveGraph";
import TechStackComparison from "@/app/components/about/sections/TechStackComparison";

// Data
import { skillsData } from "@/app/data/about/skills.data";

export default function SkillsSections() {
  return (
    <section id="skills-section" className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Core Skills
      </h2>
      
    <FocusCardsSection />
      
      <SkillsRadarSection />
      <TechStackRadar />
      <TopSkillsSection />
      <SkillTree />
      <SkillsEndorsement />
      <FocusCardsSection />
      <CurrentlyLearningSection />
      <LearningCurveGraph />
      <TechStackComparison />
    </section>
  );
}