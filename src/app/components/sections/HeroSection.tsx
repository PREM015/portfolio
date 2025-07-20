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

        {/* Right Side: Futuristic Profile with Glowing Effects */}
<div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 px-4">
  <div className="relative isolate w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] aspect-[4/5] rounded-[38%_62%_63%_37%/30%_44%_56%_70%] shadow-[0_0_80px_#6b21a8] bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#9333EA] overflow-hidden transition-all duration-700 p-3 sm:p-6 md:p-8 backdrop-blur-xl border border-purple-500/40">

    {/* Animated Floating Blobs */}
    <div className="absolute -top-8 -left-8 w-20 h-20 bg-purple-400 opacity-60 blur-2xl rounded-full animate-ping" />
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-500 opacity-50 blur-2xl rounded-full animate-pulse delay-300" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pink-500 opacity-40 blur-3xl rounded-full animate-bounce delay-700" />

    {/* Profile Image with clipping */}
    <Image
      src="/image/profile1.png"
      alt="Prem Raj"
      fill
      className="object-cover scale-[1.15] grayscale-0 drop-shadow-xl saturate-150 hover:scale-[1.2] transition-transform duration-500 ease-in-out"
      priority
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
