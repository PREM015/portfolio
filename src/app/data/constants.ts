import {
  FaReact, FaNodeJs, FaGithub, FaFigma, FaDocker, FaPython, FaCode,
  FaBrain, FaEnvelope, FaLinkedin
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiFirebase,
  SiMongodb, SiPostgresql, SiJavascript, SiExpress, SiGit, SiFramer
} from "react-icons/si";

export const personalInfo = {
  name: "Prem Raj",
  title: "Full-Stack Developer",
  subtitle: "UI/UX Enthusiast",
  tagline: "Crafting interactive, modern, and scalable web experiences with passion and precision.",
  email: "rprem3096@gmail.com",
  github: "https://github.com/PREM015",
  linkedin: "https://linkedin.com/in/yourprofile",
  avatar: "👋",
};

export const socialLinks = [
  { Icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-red-400" },
  { Icon: FaGithub, href: personalInfo.github, label: "GitHub", color: "hover:text-gray-300" },
  { Icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
];

export const storySections = [
  {
    title: "Who I Am",
    description: "A passionate developer who believes in writing clean, maintainable code that scales. Every project is a chance to learn something new.",
    icon: FaReact,
    gradient: "from-cyan-400 to-blue-500",
    particles: ["💻", "⚡", "🎯"]
  },
  {
    title: "What I Build",
    description: "Full-stack solutions that solve real problems. From pixel-perfect frontends to robust APIs and scalable databases.",
    icon: FaNodeJs,
    gradient: "from-green-400 to-emerald-500",
    particles: ["🚀", "🔧", "📱"]
  },
  {
    title: "My Philosophy",
    description: "Code is poetry. Design is storytelling. Together, they create magic. I blend aesthetics with functionality.",
    icon: FaBrain,
    gradient: "from-purple-400 to-pink-500",
    particles: ["🧠", "🎭", "🌟"]
  },
];

export const skillsCompact = [
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Prisma", icon: SiPrisma, color: "#a855f7" },
  { name: "Firebase", icon: SiFirebase, color: "#ffcb2b" },
];

export const journey = [
  { year: "2021", title: "Frontend Basics", milestone: "First Website", emoji: "🌱" },
  { year: "2022", title: "Modern Stack", milestone: "React Mastery", emoji: "🌿" },
  { year: "2023", title: "Full-Stack", milestone: "First Production App", emoji: "🌳" },
  { year: "2024", title: "Advanced Tools", milestone: "Enterprise Solutions", emoji: "🚀" },
];

export const insights = [
  { emoji: "🌍", title: "Open Source", detail: "Active contributor since 2022" },
  { emoji: "🎨", title: "UI/UX Lover", detail: "Design is my second passion" },
  { emoji: "💡", title: "Side Projects", detail: "Always building something new" },
  { emoji: "🎵", title: "Lo-fi Coding", detail: "Deep focus sessions enthusiast" },
];

export const achievements = [
  { label: "Projects", value: 25, icon: "🎯", color: "from-cyan-400 to-blue-500" },
  { label: "Commits", value: 1000, icon: "💻", color: "from-green-400 to-emerald-500" },
  { label: "Clients", value: 8, icon: "🤝", color: "from-purple-400 to-pink-500" },
];