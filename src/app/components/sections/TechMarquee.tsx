"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiAwsamplify,
  SiGit,
  SiFigma,
} from "react-icons/si";

const techStack = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiAwsamplify />, name: "AWS" },
  { icon: <SiGit />, name: "Git & GitHub" },
  { icon: <SiFigma />, name: "Figma" },
];

const TechMarquee = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-black py-16 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Tech I Work With
      </h2>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 text-5xl text-gray-400"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[120px] hover:text-cyan-400 transition-colors"
            >
              {tech.icon}
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
