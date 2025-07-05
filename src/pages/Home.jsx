import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import projects from '../data/projects';

const Home = () => {
  return (
    <div id="home" className="py-10">
      <HeroSection />
      <ProjectsSection projects={projects} />
    </div>
  );
};

export default Home;
