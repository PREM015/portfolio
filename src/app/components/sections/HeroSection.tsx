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

      {/* Main Content */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-12 pt-24 pb-16 z-10">
        {/* Left Column */}
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
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
              Prem Raj
            </span>
          </motion.h1>

          <TypewriterEffectSmooth
            words={taglines.map((t) => ({ text: t.text, className: "text-white" }))}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-marker"
            cursorClassName="bg-blue-500"
          />

          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base md:text-lg font-cinzel">
            Full-stack developer passionate about crafting elegant user interfaces and robust backends that scale.
          </p>

          <TechTooltip
            items={[
              { id: 1, name: "GitHub", image: "/svg/github.svg", link: "https://github.com/PREM015" },
              { id: 2, name: "LinkedIn", image: "/svg/linkedin.svg", link: "https://www.linkedin.com/in/prem-r-2655a3302" },
              { id: 3, name: "Twitter", image: "/svg/twitter.svg", link: "https://twitter.com/premrajcodes" },
              { id: 4, name: "Instagram", image: "/svg/instagram.svg", link: "https://www.instagram.com/rajxdev07/" },
            ]}
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 z-10">
            <motion.a
              href="/PremRaj_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            >
              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 blur-sm"></span>
              <DownloadCloud className="w-4 h-4 z-10" />
              <span className="z-10">Download CV</span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-blue-400 transition-all duration-300 backdrop-blur-md bg-white/5"
            >
              <span className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_12px_rgba(147,197,253,0.5)] transition duration-300 blur-sm"></span>
              <Terminal className="w-4 h-4 z-10" />
              <span className="z-10">Explore Services</span>
            </motion.a>
          </div>
        </div>

        {/* Right Column: Animated Profile Blob */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-14 lg:mt-0 px-4">
          <div className="relative group isolate w-[260px] sm:w-[320px] md:w-[400px] aspect-[5/6] bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#8B5CF6] rounded-[34%_66%_58%_42%/40%_30%_70%_60%] p-1 shadow-[0_0_60px_#9333ea] transition-all duration-700 overflow-hidden border border-purple-500/50 animate-slowspin">
            <div className="absolute inset-0 rounded-[34%_66%_58%_42%/40%_30%_70%_60%] ring-4 ring-[#c084fc]/40 animate-pulse-slow z-0"></div>
            <div className="absolute inset-0 rounded-[34%_66%_58%_42%/40%_30%_70%_60%] border-[1.5px] border-white/10 backdrop-blur-xl z-10 pointer-events-none" />
            <div className="absolute -top-10 left-10 w-24 h-24 bg-purple-400 opacity-30 blur-2xl rounded-full animate-float z-0" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 opacity-20 blur-2xl rounded-full animate-float-slow z-0" />

            <Image
              src="/image/profile1.png"
              alt="Prem Raj"
              fill
              className="object-cover rounded-[34%_66%_58%_42%/40%_30%_70%_60%] scale-[1.12] group-hover:scale-[1.18] brightness-110 saturate-150 transition-all duration-700 ease-in-out z-20 relative"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
