"use client";

import React from "react";
import { motion } from "framer-motion";

// UI Components
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";

// Section Components
import HeroSection from "@/app/components/about/sections/HeroSection";
import VideoIntroduction from "@/app/components/about/sections/VideoIntroduction";
import PersonalizedGreeting from "@/app/components/about/sections/PersonalizedGreeting";
import ResponseTimeWidget from "@/app/components/about/sections/ResponseTimeWidget";
import RecentBookings from "@/app/components/about/sections/RecentBookings";

// Data (imported within this group)
import { typewriterWords, focusCards } from "@/app/data/about/hero.data";

export default function HeroSections() {
  return (
    <section id="hero-section" className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <TypewriterEffectSmooth words={typewriterWords} />
      </motion.div>
      
      {/* 3D Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl">
        {focusCards.map((card, i) => (
          <CardContainer key={i}>
            <CardBody className="bg-gray-50 dark:bg-black dark:border-white/[0.2] rounded-xl p-6">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={card.src} className="h-60 w-full object-cover rounded-xl" alt={card.title} />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      
      <PersonalizedGreeting />
      <HeroSection />
      <VideoIntroduction />
      <RecentBookings />
      <ResponseTimeWidget />
    </section>
  );
}