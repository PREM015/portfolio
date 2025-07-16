"use client";

import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import Footer from "@/app/components/common/Footer";

export default function Home() {
  return (
    <main className="w-full">
      {/* ✅ Only sections here */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      {/* ❌ DO NOT include <AboutPage /> here! */}

      <Footer />
    </main>
  );
}
