"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";

const Planet = dynamic(() => import("./Planet"), { ssr: false });

const HeroSection = () => {
  const router = useRouter();

  const role = [{ text: "Full Stack Developer", className: "text-blue-400" }];
  const taglines = [
    { text: "Crafting modern UIs." },
    { text: "Building full-stack apps." },
    { text: "Scaling with Next.js." },
    { text: "Delivering performance." },
    { text: "I ❤️ open source!" },
  ];

  return (
    <section className="relative isolate z-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden py-32">
      {/* 🔵 Background Glow Circles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[35%] top-[-15%] w-[80vw] h-[80vw] bg-blue-600/25 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute left-1/4 bottom-[-10%] w-[60vw] h-[60vw] bg-purple-500/20 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20 px-6 md:px-12">
        {/* 👋 Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text underline underline-offset-4 decoration-blue-500/40">
              Prem Raj
            </span>
          </motion.h1>

          <TypewriterEffectSmooth
            words={role}
            className="mb-4 text-2xl sm:text-3xl font-semibold"
            cursorClassName="bg-blue-400"
          />

          <TypewriterEffectSmooth
            words={taglines.map((t) => ({
              text: t.text,
              className: "text-white",
            }))}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
            cursorClassName="bg-blue-500"
          />

          {/* 🚀 Call To Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <button
              onClick={() => router.push("/projects")}
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/60 group overflow-hidden"
            >
              <span className="z-10">View Projects</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-0 group-hover:opacity-70 transition duration-500" />
            </button>
          </motion.div>
        </motion.div>

        {/* 🌍 Right Side 3D Planet */}
        <div className="w-full lg:w-1/2 h-[420px] md:h-[500px] relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <Planet />
            <Stars
              radius={12}
              depth={70}
              count={5000}
              factor={4}
              saturation={0}
              fade
            />
            <OrbitControls enablePan={false} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
