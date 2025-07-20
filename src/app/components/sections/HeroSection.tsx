"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { BadgeCheck, DownloadCloud, Terminal } from "lucide-react";
import TechTooltip from "@/app/components/sections/TechTooltip";

// Removed Planet import (not used anymore)
// const Planet = dynamic(() => import("./Planet"), { ssr: false });

const HeroSection = () => {
  const taglines = [
    { text: "Crafting beautiful web experiences." },
    { text: "Building full-stack apps with purpose." },
    { text: "Designing with empathy. Coding with clarity." },
    { text: "Lifelong learner & creative thinker." },
  ];

  return (
    <section className="relative isolate z-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden min-h-screen">
      
      {/* 🌌 Starfield Canvas Without Planet */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          {/* Removed: <Planet /> */}
          <Stars radius={12} depth={70} count={5000} factor={4} saturation={0} fade />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate />
        </Canvas>
      </div>

      {/* 🔮 Glowing Background Circles */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-[35%] top-[-15%] w-[80vw] h-[80vw] bg-blue-600/25 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute left-1/4 bottom-[-10%] w-[60vw] h-[60vw] bg-purple-500/20 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      {/* ✨ Hero Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 pt-16 pb-10 z-10">
        
        {/* 💬 Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-sm text-green-400 bg-green-900/10 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0">
            <BadgeCheck className="w-4 h-4" />
            Available for Projects
          </div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Prem Raj
            </span>
          </motion.h1>

          <TypewriterEffectSmooth
            words={taglines.map((t) => ({ text: t.text, className: "text-white" }))}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            cursorClassName="bg-blue-500"
          />

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base md:text-lg">
            Whether it’s a full-stack project or an elegant UI, I bring ideas to life with purpose and precision.
          </p>

          <div className="mt-8">
            <TechTooltip
              items={[
                {
                  id: 1,
                  name: "JavaScript",
                  role: "Frontend & Logic",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  id: 2,
                  name: "React",
                  role: "UI Library",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                },
                {
                  id: 3,
                  name: "Next.js",
                  role: "App Framework",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                },
                {
                  id: 4,
                  name: "Node.js",
                  role: "Backend Runtime",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  id: 5,
                  name: "Tailwind CSS",
                  role: "Styling",
                  image: "/image/tailwindcss.svg",
                },
              ]}
            />
          </div>

          <div className="flex gap-4 justify-center lg:justify-start mt-6">
            <a
              href="/PremRaj_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 transition"
            >
              <DownloadCloud className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold border border-white/20 hover:border-white"
            >
              <Terminal className="w-4 h-4" />
              Explore Services
            </a>
          </div>
        </div>

        {/* 🖼️ Vertical Hexagon with Glowing Points and Overflowing Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 overflow-visible">
          <div className="relative isolate w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square bg-gradient-to-tr from-purple-600 via-indigo-700 to-purple-800 shadow-2xl clip-hexagon-vertical overflow-visible">
            
            {/* 🔮 Glowing Top Point */}
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-400 blur-2xl rounded-full opacity-50 z-0" />

            {/* 🔮 Glowing Bottom Point */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-400 blur-2xl rounded-full opacity-50 z-0" />

            {/* 📸 Image poking out like a letter */}
            <Image
              src="/image/profile1.png"
              alt="Prem Raj"
              width={400}
              height={400}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
