"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {
  FaFire, FaReact, FaNodeJs, FaFigma, FaDocker, FaGithub, FaPython,
  FaLinux, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaPhp
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiMongodb, SiRedis, SiPostgresql,
  SiJest, SiGraphql, SiKubernetes, SiAwsamplify, SiRedux, SiVercel, SiDocker,
  SiTerraform, SiJenkins, SiVuedotjs, SiAngular, SiFsharp, SiLaravel, SiCplusplus
} from "react-icons/si";

const techStack = [
  { id: 1, icon: <FaReact />, name: "React", color: "#61DBFB" },
  { id: 2, icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { id: 3, icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
  { id: 4, icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { id: 5, icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { id: 6, icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { id: 7, icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { id: 8, icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { id: 9, icon: <SiAwsamplify />, name: "AWS Amplify", color: "#FF9900" },
  { id: 10, icon: <FaGithub />, name: "Git & GitHub", color: "#ffffff" },
  { id: 11, icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
  { id: 12, icon: <SiPrisma />, name: "Prisma", color: "#0C344B" },
  { id: 13, icon: <FaFire />, name: "Firebase", color: "#FFCA28" },
  { id: 14, icon: <SiRedis />, name: "Redis", color: "#DC382D" },
  { id: 15, icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
  { id: 16, icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
  { id: 17, icon: <SiJest />, name: "Jest", color: "#C21325" },
  { id: 18, icon: <FaPython />, name: "Python", color: "#3776AB" },
  { id: 19, icon: <FaLinux />, name: "Linux", color: "#FCC624" },
  { id: 20, icon: <SiRedux />, name: "Redux", color: "#764ABC" },
  { id: 21, icon: <FaJava />, name: "Java", color: "#007396" },
  { id: 22, icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
  { id: 23, icon: <SiDocker />, name: "Docker Compose", color: "#2496ED" },
  { id: 24, icon: <SiTerraform />, name: "Terraform", color: "#623CE4" },
  { id: 25, icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
  { id: 26, icon: <SiVuedotjs />, name: "Vue.js", color: "#41B883" },
  { id: 27, icon: <SiAngular />, name: "Angular", color: "#DD0031" },
  { id: 28, icon: <SiFsharp />, name: "F#", color: "#239120" },
  { id: 29, icon: <SiLaravel />, name: "Laravel", color: "#FF2D20" },
  { id: 30, icon: <SiCplusplus />, name: "C++", color: "#00599C" },
  { id: 31, icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { id: 32, icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { id: 33, icon: <FaPhp />, name: "PHP", color: "#777BB4" },
  { id: 34, icon: <FaGitAlt />, name: "Git", color: "#F1502F" },
];

export const TechMarquee = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Tech I Work With
      </h2>

      <InfiniteMovingCards
        items={techStack}
        direction="left"
        speed="normal"
        renderItem={(tech, idx) => (
          <div className="flex flex-col items-center min-w-[120px]">
            <div
              className="text-6xl mb-2"
              style={{
                color: tech.color,
                filter: `drop-shadow(0 0 ${4 + (idx % 3) * 2}px ${tech.color})`,
              }}
            >
              {tech.icon}
            </div>
            <p className="text-sm font-semibold text-gray-200 mt-2 drop-shadow-lg">
              {tech.name}
            </p>
          </div>
        )}
      />
    </section>
  );
};
