// HeroSection.tsx
"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { BadgeCheck, DownloadCloud, Terminal } from "lucide-react";
import TechTooltip from "@/app/components/sections/TechTooltip";

const HeroSection = () => {
  const taglines = [
    { text: "Crafting beautiful web experiences." },
    { text: "Building full-stack apps with purpose." },
    { text: "Designing with empathy. Coding with clarity." },
    { text: "Lifelong learner & creative thinker." },
  ];

  return (
    <section className="relative isolate z-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden min-h-screen">
      {/* Stars Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Stars radius={12} depth={70} count={5000} factor={4} saturation={0} fade />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate />
        </Canvas>
      </div>

      {/* Glowing Blobs */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-[35%] top-[-15%] w-[80vw] h-[80vw] bg-blue-500/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute left-1/4 bottom-[-10%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 pt-20 pb-10 z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-sm text-green-400 bg-green-900/10 px-3 py-1 rounded-full mx-auto lg:mx-0">
            <BadgeCheck className="w-4 h-4" />
            Available for Projects
          </div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
              Prem Raj
            </span>
          </motion.h1>

          <TypewriterEffectSmooth
            words={taglines.map((t) => ({ text: t.text, className: "text-white" }))}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            cursorClassName="bg-blue-500"
          />

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base md:text-lg">
            Full-stack developer passionate about crafting elegant user interfaces and robust backends that scale.
          </p>

          <TechTooltip
            items={[
              { id: 1, name: "GitHub", image: "/svg/github.svg", link: "https://github.com/premrajdev" },
              { id: 2, name: "LinkedIn", image: "/svg/linkedin.svg", link: "https://www.linkedin.com/in/premrajdev/" },
              { id: 3, name: "Twitter", image: "/svg/twitter.svg", link: "https://twitter.com/premrajcodes" },
              { id: 4, name: "Instagram", image: "/svg/instagram.svg", link: "https://www.instagram.com/premraj.codes/" },
            ]}
          />

          <div className="flex gap-4 justify-center lg:justify-start mt-6 flex-wrap">
            <a
              href="/PremRaj_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition"
            >
              <DownloadCloud className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 hover:border-white transition"
            >
              <Terminal className="w-4 h-4" />
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Image with Futuristic Shape */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 overflow-visible">
          <div className="relative isolate w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square bg-gradient-to-tr from-purple-600 via-indigo-700 to-purple-800 shadow-2xl rounded-[20%_50%_30%_50%/40%_30%_60%_50%] overflow-hidden transition-all duration-700 p-4 sm:p-6 md:p-8">

            {/* Glowing Orbs */}
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-400 blur-2xl rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-20 h-20 bg-indigo-400 blur-2xl rounded-full opacity-60 animate-pulse delay-500" />

            {/* Profile Image */}
            <Image
              src="/image/profile1.png"
              alt="Prem Raj"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
