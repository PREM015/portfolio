"use client";

import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Skillssection from "@/app/components/sections/Skillssection";
import { TechMarquee } from "@/app/components/sections/TechMarquee";

// NEW COMPONENTS

import ExperienceSection from "@/app/components/sections/ExperienceSection";
import ContactSection from "@/app/components/sections/ContactSection";

import AchievementsSection from "@/app/components/sections/AchievementsSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* ✅ Only sections here */}

      {/* 1️⃣ Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

    
      {/* 3️⃣ Skills Section */}
      <section id="skills">
        <Skillssection />
      </section>

      {/* 4️⃣ Experience Section */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* 5️⃣ Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* 6️⃣ Tech / Marquee Section */}
      <section id="tech">
        <TechMarquee />
      </section>

      {/* 7️⃣ Achievements Section */}
      <section id="achievements">
        <AchievementsSection
         
        />
      </section>


      {/* 9️⃣ Contact Section */}
      <section id="contact">
        <ContactSection

        />
      </section>
    </main>
  );
}
