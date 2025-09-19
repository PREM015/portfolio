"use client";

import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Skillssection from "./components/sections/Skillssection";


export default function Home() {
  return (
    <main className="w-full">
      {/* ✅ Only sections here */}
      
      <section id="home">
        <HeroSection />
      </section>

      <section id="skills">
        <Skillssection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>




    </main>
  );
}
