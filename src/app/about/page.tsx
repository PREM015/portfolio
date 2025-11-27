"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  FaGithub, FaEnvelope, FaLinkedin, FaBrain, FaRocket, FaChartLine ,
  FaTrophy, FaGem, FaGraduationCap, FaCertificate, FaAward,
  FaQuoteLeft, FaBullseye, FaCheckCircle, FaHeart,
  FaFire, FaSchool, FaMedal, FaPaintBrush,
  FaMagic, FaAtom, FaStar, FaBolt, FaMapMarkerAlt,
  FaClock, FaCode, FaUsers, FaLayerGroup, FaDownload,FaUserGraduate,FaTerminal,FaGuitar ,FaBook,
  FaExternalLinkAlt, FaTimes, FaFilePdf, FaCodeBranch,
FaBookReader, FaGamepad, FaMusic, FaCamera,
FaPalette, FaHandsHelping, FaChess,
  FaFileDownload, FaEye, FaHandshake, FaTools, FaLaptopCode,
  FaBriefcase, FaProjectDiagram,  FaCoffee,
  FaArrowRight, FaHatWizard,
  FaMeteor, FaGlobe, FaShieldAlt,
} from "react-icons/fa";

import { 
  SiGithub, SiLinkedin, SiReact, SiNextdotjs, SiTailwindcss,
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiMongodb,
  SiPostgresql, SiDocker, SiFigma, SiGit
} from "react-icons/si";
import { SlDiamond } from "react-icons/sl";
import { HiMiniSparkles } from "react-icons/hi2";
// ==================== ROTATING QUOTES ====================
const inspirationalQuotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" }
];

// ==================== REAL DATA ====================
const GITHUB_USERNAME = "PREM015";
const REAL_NAME = "Prem Raj";

const personalInfo = {
  name: REAL_NAME,
  title: "Computer Science Student & Full-Stack Developer",
  tagline: "Crafting Digital Magic with Code ✨",
  status: "Actively Seeking Opportunities",
  bio: "Passionate developer transforming ideas into elegant solutions. Specializing in modern web technologies with a focus on creating stunning, performant applications that users love.",
  location: "Bihar, India",
  email: "rprem3096@gmail.com",
  github: `https://github.com/PREM015`,
  linkedin: "https://linkedin.com/in/premraj",
  resumeUrl: "/resume/prem-raj-resume.pdf",
  logoUrl: "/logo.png" // Add your logo here
};

// ==================== EDUCATION DATA ====================
const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science & Engineering",
    shortDegree: "B.Tech CSE",
    institution: "IK Gujral Punjab Technical University",
    location: "Punjab, India",
    period: "2024 - 2027",
    grade: "CGPA: 7.5",
    status: "Currently Pursuing",
    description: "Mastering software engineering, algorithms, and cutting-edge development practices. Building the foundation for a stellar tech career.",
    achievements: [
      "Maintaining 7.5 CGPA",
      "Active coding club member",
      "Multiple live projects in development",
      "Learning AI/ML and cloud technologies"
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Web Technologies",
      "Software Engineering"
    ],
    color: "from-violet-500 via-purple-500 to-fuchsia-500",
    icon: FaGraduationCap,
    emoji: "🎓"
  },
  {
    id: 2,
    degree: "Diploma in Computer Science & Engineering",
    shortDegree: "Diploma CSE",
    institution: "Government Polytechnic Patna",
    location: "Patna, Bihar",
    period: "2021 - 2024",
    grade: "82%",
    status: "Completed",
    description: "Strong foundation in programming and web development with hands-on project experience.",
    achievements: [
      "82% aggregate marks",
      "Built 15+ projects",
      "Hands-on web development experience",
      "Technical symposium participation"
    ],
    relevantCourses: [
      "C/C++ Programming",
      "Web Development",
      "Database Systems",
      "Software Testing"
    ],
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: FaUserGraduate,
    emoji: "💻"
  },
  {
    id: 3,
    degree: "Secondary School Certificate (10th)",
    shortDegree: "SSC",
    institution: "SVM School",
    location: "Munger, Bihar",
    period: "2020 - 2021",
    grade: "Passed",
    status: "Completed",
    description: "Completed secondary education with strong foundation in Mathematics and Science.",
    achievements: [
      "Successfully completed SSC",
      "Strong in Mathematics",
      "Interest in computers developed"
    ],
    relevantCourses: [
      "Mathematics",
      "Science",
      "Computer Applications"
    ],
    color: "from-orange-500 via-red-500 to-pink-500",
    icon: FaSchool,
    emoji: "📚"
  }
];

// Certifications
const certifications = [
  { 
    id: 1,
    title: "Meta Front-End Developer Professional", 
    issuer: "Meta",
    platform: "Coursera",
    date: "January 2024",
    credentialId: "COURSERA-META-FE-2024",
    credentialUrl: "https://coursera.org/verify/ABC123",
    pdfUrl: "/certificates/meta-frontend.pdf",
    icon: SiReact, 
    color: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "shadow-cyan-500/50",
    duration: "6 months",
    skills: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Responsive Design"],
    description: "Comprehensive front-end development program covering modern React development and professional workflows.",
    highlights: [
      "Built 8+ real-world projects",
      "Mastered React Hooks & Context API",
      "Professional Git workflows",
      "Responsive, accessible UIs"
    ],
    verified: true,
    projects: 8
  },
  { 
    id: 2,
    title: "Full-Stack Web Development Bootcamp", 
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    date: "October 2023",
    credentialId: "FCC-FULLSTACK-2023",
    credentialUrl: "https://freecodecamp.org/certification/premraj",
    pdfUrl: "/certificates/freecodecamp.pdf",
    icon: FaCode, 
    color: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "shadow-emerald-500/50",
    duration: "300 hours",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description: "Intensive full-stack development curriculum covering the complete MERN stack.",
    highlights: [
      "Built 15+ full-stack applications",
      "Secure authentication systems",
      "RESTful API development",
      "Production deployments"
    ],
    verified: true,
    projects: 15
  },
  { 
    id: 3,
    title: "Advanced React & Next.js Masterclass", 
    issuer: "Udemy",
    platform: "Udemy",
    date: "November 2023",
    credentialId: "UC-REACT-NEXTJS-2023",
    credentialUrl: "https://udemy.com/certificate/UC-456789/",
    pdfUrl: "/certificates/react-nextjs.pdf",
    icon: SiNextdotjs, 
    color: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "shadow-purple-500/50",
    duration: "42 hours",
    skills: ["Next.js 14", "React 18", "TypeScript", "Server Components"],
    description: "Deep dive into modern Next.js with App Router and Server Components.",
    highlights: [
      "Next.js 14 App Router mastery",
      "SSR & SSG applications",
      "Server Actions implementation",
      "Core Web Vitals optimization"
    ],
    verified: true,
    projects: 6
  },
  { 
    id: 4,
    title: "Google UX Design Professional", 
    issuer: "Google",
    platform: "Coursera",
    date: "September 2023",
    credentialId: "GOOGLE-UX-2023",
    credentialUrl: "https://coursera.org/verify/UX789",
    pdfUrl: "/certificates/google-ux.pdf",
    icon: FaPaintBrush, 
    color: "from-yellow-500 via-orange-500 to-red-500",
    glowColor: "shadow-orange-500/50",
    duration: "4 months",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    description: "Comprehensive UX design program covering design process from research to prototypes.",
    highlights: [
      "4 complete UX case studies",
      "User research & testing",
      "Interactive prototypes",
      "Design systems in Figma"
    ],
    verified: true,
    projects: 4
  }
];

// Experience
const experiences = [
  {
    id: 1,
    role: "Saleforce developer",
    company: "saleforce",
    type: "Internship",
    location: "Remote",
    period: "dec 2023 - jun 2024",
    duration: "3 months",
    description: "Built production features for SaaS platform using Apex",
    achievements: [
      "Developed 5+ features for 1000+ users",
      "Reduced page load time by 40%",
      "Implemented secure authentication",
      "UI/UX collaboration with design team"
    ],
    tech: ["SOSL", "Developer Console", "VS Code with Salesforce Extensions"],
    color: "from-blue-500 via-indigo-500 to-purple-500",
    glowColor: "shadow-blue-500/50",
    icon: FaBriefcase
  },
  // {
  //   id: 2,
  //   role: "Freelance Web Developer",
  //   company: "Self-Employed",
  //   type: "Freelance",
  //   location: "Remote",
  //   period: "Jan 2023 - Present",
  //   duration: "Ongoing",
  //   description: "Building custom websites and web applications for clients worldwide.",
  //   achievements: [
  //     "Completed 10+ client projects",
  //     "Generated ₹50,000+ revenue",
  //     "E-commerce with payment integration",
  //     "100% client satisfaction rate"
  //   ],
  //   tech: ["React", "Next.js", "Shopify", "WordPress", "Stripe"],
  //   color: "from-purple-500 via-pink-500 to-rose-500",
  //   glowColor: "shadow-purple-500/50",
  //   icon: FaLaptopCode
  // },
  // {
  //   id: 3,
  //   role: "Open Source Contributor",
  //   company: "Various Projects",
  //   type: "Volunteer",
  //   location: "Remote",
  //   period: "Mar 2022 - Present",
  //   duration: "2+ years",
  //   description: "Contributing to open-source projects, fixing bugs, and adding features.",
  //   achievements: [
  //     "50+ merged pull requests",
  //     "React ecosystem contributions",
  //     "Critical bug fixes in libraries",
  //     "500+ GitHub stars earned"
  //   ],
  //   tech: ["Git", "GitHub", "Open Source", "Documentation"],
  //   color: "from-green-500 via-emerald-500 to-teal-500",
  //   glowColor: "shadow-green-500/50",
  //   icon: FaCodeBranch
  // }
];


const achievements = [
  {
    title: "Published Research Paper",
    date: "October 2023",
    description: "ML optimization paper published in IEEE conference proceedings",
    icon: FaBookReader,
    color: "from-green-400 via-emerald-400 to-teal-500",
    glowColor: "shadow-green-500/50"
  },
  {
    title: "GitHub Campus Expert",
    date: "August 2023",
    description: "Selected as GitHub Campus Expert for community building",
    icon: SiGithub,
    color: "from-purple-400 via-violet-400 to-indigo-500",
    glowColor: "shadow-purple-500/50"
  }
];

// Strengths
const strengths = [
  { 
    title: "Fast Learner", 
    description: "Quickly adapt to new technologies and frameworks",
    icon: FaRocket,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "shadow-blue-500/50"
  },
  { 
    title: "Problem Solver", 
    description: "Love tackling complex challenges creatively",
    icon: FaBrain,
    color: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "shadow-purple-500/50"
  },
  { 
    title: "Team Player", 
    description: "Collaborate effectively and share knowledge",
    icon: FaHandsHelping,
    color: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "shadow-green-500/50"
  },
  { 
    title: "Detail-Oriented", 
    description: "Pixel-perfect UI and clean, bug-free code",
    icon: SlDiamond,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "shadow-orange-500/50"
  }
];

// Fun Facts
const funFacts = [
  { 
    fact: "I can code for 8+ hours straight when I'm in the zone", 
    icon: FaFire, 
    color: "from-orange-500 via-red-500 to-pink-500",
    glowColor: "shadow-red-500/50"
  },
  { 
    fact: "I debug with console.log() before trying a debugger", 
    icon: FaTerminal, 
    color: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "shadow-cyan-500/50"
  },
  { 
    fact: "I visualize UI designs in my mind before opening Figma", 
    icon: FaPalette, 
    color: "from-purple-500 via-pink-500 to-fuchsia-500",
    glowColor: "shadow-purple-500/50"
  },
  { 
    fact: "Coffee is my debugging fuel ☕ (3-5 cups daily!)", 
    icon: FaCoffee, 
    color: "from-yellow-500 via-orange-500 to-red-500",
    glowColor: "shadow-yellow-500/50"
  },
  { 
    fact: "I prefer dark mode everywhere - even in real life", 
    icon: FaMagic, 
    color: "from-gray-700 via-gray-800 to-black",
    glowColor: "shadow-gray-500/50"
  },
  { 
    fact: "My code commits are like poetry - meaningful and well-crafted", 
    icon: SiGithub, 
    color: "from-indigo-500 via-purple-500 to-pink-500",
    glowColor: "shadow-indigo-500/50"
  }
];

// Hobbies
const hobbies = [
  
  { name: "Photography", icon: FaCamera, color: "from-blue-500 to-purple-500", glowColor: "shadow-blue-500/90" },
  { name: "Chess", icon: FaChess, color: "from-gray-600 to-gray-800", glowColor: "shadow-gray-500/90" },
  { name: "Music", icon: FaMusic, color: "from-pink-500 to-rose-500", glowColor: "shadow-pink-500/90" },
  { name: "Reading", icon: FaBook, color: "from-cyan-500 to-blue-500", glowColor: "shadow-cyan-500/90" },
  { name: "Gaming", icon: FaGamepad, color: "from-purple-500 to-indigo-500", glowColor: "shadow-purple-500/90" }
];

// Downloads
const downloads = [
  { 
    title: "My Resume", 
    description: "Download CV", 
    fileUrl: "/resume/prem-raj-resume.pdf", 
    icon: FaFileDownload, 
    color: "from-blue-500 via-indigo-500 to-purple-500",
    glowColor: "shadow-blue-500/50",
    size: "245 KB" 
  },
  { 
    title: "Portfolio PDF", 
    description: "Project showcase", 
    fileUrl: "/downloads/portfolio.pdf", 
    icon: FaProjectDiagram, 
    color: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "shadow-purple-500/50",
    size: "1.2 MB" 
  },
  { 
    title: "React Cheat Sheet", 
    description: "Quick reference", 
    fileUrl: "/downloads/react-cheatsheet.pdf", 
    icon: SiReact, 
    color: "from-cyan-400 via-blue-500 to-indigo-500",
    glowColor: "shadow-cyan-500/50",
    size: "180 KB" 
  }
];

// ==================== COMPONENTS ====================

// Rotating Quote
const RotatingQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuote}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <FaQuoteLeft className="text-4xl md:text-5xl text-cyan-400/30 mb-6 mx-auto" />
        <p className="text-xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
          "{inspirationalQuotes[currentQuote].text}"
        </p>
        <p className="text-base md:text-xl text-cyan-400 font-semibold">
          — {inspirationalQuotes[currentQuote].author}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

// Certificate Modal
const CertificateModal = ({ cert, onClose }: { cert: any; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
        style={{ perspective: "1000px" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-all group"
        >
          <FaTimes className="text-white text-xl group-hover:rotate-90 transition-transform" />
        </button>

        <div className={`bg-gradient-to-r ${cert.color} p-[3px] rounded-3xl shadow-2xl ${cert.glowColor}`}>
          <div className="bg-gray-900 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${cert.color} p-6 sm:p-8`}>
              <div className="flex items-start gap-4 sm:gap-6">
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <cert.icon className="text-4xl sm:text-5xl text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{cert.title}</h3>
                  <p className="text-white/90 font-semibold text-base sm:text-lg">{cert.issuer} • {cert.platform}</p>
                  <div className="flex flex-wrap gap-3 mt-4 text-sm">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur rounded-xl text-white font-semibold flex items-center gap-2">
                      <FaClock />
                      {cert.date}
                    </span>
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur rounded-xl text-white font-semibold flex items-center gap-2">
                      <FaFire />
                      {cert.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xl font-black text-white mb-3 flex items-center gap-2">
                  <FaBookReader className="text-cyan-400" />
                  About This Certification
                </h4>
                <p className="text-gray-300 leading-relaxed">{cert.description}</p>
              </div>

              <div>
                <h4 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cert.highlights.map((highlight: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all"
                    >
                      <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                  <FaCode className="text-purple-400" />
                  Skills Mastered
                </h4>
                <div className="flex flex-wrap gap-3">
                  {cert.skills.map((skill: string, idx: number) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-xl font-bold text-sm shadow-lg ${cert.glowColor}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 bg-gradient-to-r ${cert.color} text-white shadow-lg hover:shadow-2xl ${cert.glowColor} transition-all group`}
                >
                  <FaEye className="text-2xl group-hover:scale-110 transition-transform" />
                  View Certificate
                </a>
                <a
                  href={cert.pdfUrl}
                  download
                  className="flex-1 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 bg-gray-800 text-white border-2 border-gray-700 hover:border-cyan-500 transition-all group"
                >
                  <FaDownload className="text-2xl group-hover:scale-110 transition-transform" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// GitHub Stats
const GitHubStats = () => {
  const [stats, setStats] = useState({ repos: 32, stars: 580, followers: 45, commits: 3200 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/PREM015`);
        const userData = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/PREM015/repos?per_page=100`);
        const reposData = await reposRes.json();
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        setStats({
          repos: userData.public_repos || 32,
          stars: totalStars || 580,
          followers: userData.followers || 45,
          commits: reposData.length * 100
        });
        setLoading(false);
      } catch (error) {
        setStats({ repos: 32, stars: 580, followers: 45, commits: 3200 });
        setLoading(false);
      }
    };
    fetchGitHubStats();
  }, []);

  const statItems = [
    { 
      label: "Repositories", 
      value: stats.repos, 
      icon: FaCode, 
      color: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "shadow-purple-500/50"
    },
    { 
      label: "Total Stars", 
      value: stats.stars, 
      icon: FaStar, 
      color: "from-yellow-500 via-orange-500 to-red-500",
      glowColor: "shadow-yellow-500/50"
    },
    { 
      label: "Followers", 
      value: stats.followers, 
      icon: FaUsers, 
      color: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "shadow-blue-500/50"
    },
    { 
      label: "Contributions", 
      value: stats.commits, 
      icon: FaCodeBranch, 
      color: "from-green-500 via-emerald-500 to-teal-500",
      glowColor: "shadow-green-500/50"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statItems.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring" }}
          whileHover={{ y: -10, scale: 1.05 }}
          className="group"
        >
          <div className={`bg-gradient-to-br ${stat.color} p-[2px] rounded-2xl shadow-xl hover:shadow-2xl ${stat.glowColor} transition-all`}>
            <div className="bg-gray-900/95 backdrop-blur rounded-2xl p-6 h-full">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`text-5xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </motion.div>
              <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {loading ? (
                  <div className="w-20 h-10 bg-gray-800 animate-pulse rounded" />
                ) : (
                  <AnimatedCounter value={stat.value} />
                )}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                {stat.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Counter
const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
};
// Magical Floating Orbs - FIXED
const MagicalOrbs = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  
  useEffect(() => {
    // Set dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orbs = Array.from({ length: 15 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            background: `radial-gradient(circle, ${
              ['rgba(99, 102, 241, 0.3)', 'rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(59, 130, 246, 0.3)'][i % 4]
            }, transparent)`
          }}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
// Sparkle Effect - FIXED
const SparkleEffect = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sparkles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          <HiMiniSparkles className="text-yellow-400" style={{ fontSize: Math.random() * 20 + 10 }} />
        </motion.div>
      ))}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

export default function AboutPage() {
  const { scrollY } = useScroll();
  const scrollProgress = useSpring(useTransform(scrollY, [0, 500], [0, 1]));
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <>
      <title>About {personalInfo.name} | {personalInfo.title}</title>
      
      {/* Rainbow Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left z-50 shadow-lg shadow-purple-500/50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>

      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        
        {/* Magical Background */}
        <div className="fixed inset-0 -z-10">
          <MagicalOrbs />
          <SparkleEffect />
          
          {/* Gradient Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-24 sm:space-y-32">
          
          {/* ✨ HERO SECTION - Logo on Left */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen flex items-center justify-center"
          >
            <div className="max-w-7xl w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                
                {/* Logo Section - Left Side */}
                <motion.div
                  initial={{ opacity: 0, x: -100, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-2xl animate-pulse"></div>
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1.5 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      {/* Replace with actual logo */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-6xl sm:text-8xl lg:text-9xl"
                      >
                        💼
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center gap-2 border-2 border-white/20"
                  >
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/80"></span>
                    <span className="text-white font-black text-sm whitespace-nowrap">Open to Work</span>
                  </motion.div>
                </motion.div>

                {/* Text Content - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1 text-center lg:text-left"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-6"
                  >
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-purple-500/30 rounded-full text-purple-400 font-bold text-sm shadow-lg shadow-purple-500/20">
                      <HiMiniSparkles className="animate-pulse" />
                      {personalInfo.title}
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-2xl">
                      {personalInfo.name}
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold mb-6"
                  >
                    {personalInfo.tagline}
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  >
                    {personalInfo.bio}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  >
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white font-black text-lg flex items-center justify-center gap-3 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaHandshake className="text-2xl" />
                        Let's Connect
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaArrowRight />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>

                    <motion.a
                      href={personalInfo.resumeUrl}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gray-900/80 backdrop-blur border-2 border-gray-700 hover:border-purple-500 rounded-full text-white font-black text-lg flex items-center justify-center gap-3 transition-all"
                    >
                      <FaDownload className="text-2xl text-purple-400" />
                      Resume
                    </motion.a>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center lg:justify-start gap-4 mb-6"
                  >
                    {[
                      { Icon: SiGithub, href: personalInfo.github, label: "GitHub", color: "from-gray-700 to-gray-900" },
                      { Icon: SiLinkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-800" },
                      { Icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "from-red-600 to-pink-600" }
                    ].map(({ Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -10, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} border-2 border-white/10 shadow-lg hover:shadow-2xl transition-all`}
                      >
                        <Icon className="text-2xl text-white" />
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center justify-center lg:justify-start gap-2 text-gray-400"
                  >
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>{personalInfo.location}</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>        
         {/* 📊 GITHUB STATS */}
<div>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.span 
      whileHover={{ scale: 1.1 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-cyan-500/30 rounded-full text-cyan-400 font-bold text-sm mb-6 shadow-lg shadow-cyan-500/20"
    >
      <FaGlobe className="animate-spin" style={{ animationDuration: '3s' }} />
      Live GitHub Statistics
    </motion.span>
    
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
        Open Source Contributions
      </span>
    </h2>
    
    <motion.a
      href={personalInfo.github}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-3 text-xl text-gray-400 hover:text-cyan-400 transition-colors group"
    >
      <SiGithub className="text-3xl" />
      <span className="font-mono">@PREM015</span>
      <FaExternalLinkAlt className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  </motion.div>

  <GitHubStats />
</div>

{/* 🔥 GITHUB STREAK STATS - NEW SECTION */}
<div>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <motion.span 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-2 border-orange-500/30 rounded-full text-orange-400 font-bold text-sm mb-6 shadow-lg shadow-orange-500/20"
    >
      <FaFire className="animate-bounce" />
      Coding Consistency
    </motion.span>
    
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
        GitHub Streak & Activity
      </span>
    </h2>
    
    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      Consistency is key! Track my daily coding journey and commitment
    </p>
  </motion.div>

  {/* Streak Stats Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="max-w-4xl mx-auto mb-12"
  >
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all">
      <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-8 sm:p-12">
        
        {/* Streak Stats Image */}
        <div className="relative mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://streak-stats.demolab.com/?user=prem015&theme=ocean-dark&hide_border=true&background=0D1117&ring=F97316&fire=F97316&currStreakLabel=F97316&sideLabels=F97316&currStreakNum=FFFFFF&sideNums=FFFFFF&dates=9CA3AF"
              alt="GitHub Streak Stats"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-2 border-orange-500/20 rounded-2xl backdrop-blur">
            <FaBolt className="text-3xl text-yellow-400 animate-pulse" />
            <p className="text-lg text-gray-300 font-semibold">
              <span className="text-orange-400 font-black">"Consistency</span> beats talent when talent doesn't work hard"
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </motion.div>

  {/* GitHub Activity Graph */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
  >
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all">
      <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
          <FaChartLine className="text-cyan-400" />
          Contribution Activity
        </h3>
        
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=PREM015&theme=react-dark&hide_border=true&bg_color=0D1117&color=F97316&line=F97316&point=FFFFFF&area=true&area_color=F97316"
            alt="GitHub Activity Graph"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </motion.div>

  {/* GitHub Profile Trophy */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="mt-12"
  >
   {/* GitHub Profile Stats Card */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
  className="mt-12"
>
  <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition-all">
    <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-6 sm:p-8">
      <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
        <FaTrophy className="text-yellow-400 animate-bounce" />
        GitHub Profile Stats
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Stats Card */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://github-readme-stats.vercel.app/api?username=PREM015&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=F97316&icon_color=F97316&text_color=FFFFFF&count_private=true"
            alt="GitHub Stats"
            className="w-full h-auto"
          />
        </div>

        {/* Top Languages Card */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PREM015&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=F97316&text_color=FFFFFF"
            alt="Top Languages"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</motion.div>
  </motion.div>
</div>
          {/* 🎓 EDUCATION */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-blue-500/30 rounded-full text-blue-400 font-bold text-sm mb-6 shadow-lg shadow-blue-500/20"
              >
                <FaHatWizard className="animate-bounce" />
                Academic Excellence
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Educational Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building expertise through continuous learning and academic excellence
              </p>
            </motion.div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className={`bg-gradient-to-r ${edu.color} p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500 group`}>
                    <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-8 sm:p-10">
                      <div className="flex flex-col lg:flex-row items-start gap-8">
                        
                        {/* Icon with Emoji */}
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`relative p-6 bg-gradient-to-br ${edu.color} rounded-2xl flex-shrink-0 shadow-xl`}
                        >
                          <edu.icon className="text-6xl text-white" />
                          <span className="absolute -top-3 -right-3 text-4xl">{edu.emoji}</span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className={`inline-block px-4 py-2 text-xs font-black mb-3 bg-gradient-to-r ${edu.color} text-white rounded-full shadow-lg`}
                              >
                                {edu.status}
                              </motion.span>
                              <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
                                {edu.degree}
                              </h3>
                              <p className={`text-xl font-bold mb-3 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                                {edu.institution}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-full">
                                  <FaMapMarkerAlt className="text-purple-400" />
                                  {edu.location}
                                </span>
                                <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-full">
                                  <FaClock className="text-pink-400" />
                                  {edu.period}
                                </span>
                                <span className="flex items-center gap-2 text-green-400 font-bold bg-gray-800/50 px-3 py-1.5 rounded-full">
                                  <FaTrophy className="text-yellow-400" />
                                  {edu.grade}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                            {edu.description}
                          </p>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                              <FaStar className="text-yellow-400 animate-pulse" />
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {edu.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  whileHover={{ x: 5, scale: 1.02 }}
                                  className="flex items-start gap-3 bg-gray-800/30 p-3 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
                                >
                                  <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Relevant Courses */}
                          <div>
                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                              <FaBook className="text-cyan-400" />
                              Relevant Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.relevantCourses.map((course, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  whileHover={{ scale: 1.1, y: -3 }}
                                  className="px-4 py-2 bg-gray-800 border border-gray-700 hover:border-cyan-500 rounded-xl text-sm text-gray-300 transition-all"
                                >
                                  {course}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🏆 CERTIFICATIONS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-yellow-500/30 rounded-full text-yellow-400 font-bold text-sm mb-6 shadow-lg shadow-yellow-500/20"
              >
                <FaMeteor className="animate-bounce" />
                Professional Certifications
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                  Certified Excellence
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-recognized credentials from leading tech companies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer group"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    whileHover={{ y: -15, rotateY: 10, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className={`bg-gradient-to-br ${cert.color} p-[3px] rounded-2xl shadow-xl hover:shadow-2xl ${cert.glowColor} transition-all`}
                  >
                    <div className="bg-gray-900/95 backdrop-blur rounded-2xl p-6 h-full flex flex-col">
                      
                      {/* Verified Badge */}
                      {cert.verified && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="flex justify-end mb-3"
                        >
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-black flex items-center gap-1 shadow-lg shadow-green-500/50">
                            <FaCheckCircle />
                            Verified
                          </span>
                        </motion.div>
                      )}

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${cert.glowColor}`}
                      >
                        <cert.icon className="text-4xl text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm text-gray-400 mb-3 font-semibold">
                        {cert.issuer}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-full">
                          <FaClock />
                          {cert.date}
                        </span>
                        <span className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-full">
                          <FaFire />
                          {cert.duration}
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 3).map((skill: string, idx: number) => (
                          <span key={idx} className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 bg-gradient-to-r ${cert.color} text-white shadow-lg hover:shadow-2xl ${cert.glowColor} transition-all`}
                        >
                          <FaEye />
                          View Details
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💼 EXPERIENCE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border-2 border-green-500/30 rounded-full text-green-400 font-bold text-sm mb-6 shadow-lg shadow-green-500/20"
              >
                <FaRocket className="animate-pulse" />
                Professional Experience
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Work Journey
                </span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className={`bg-gradient-to-r ${exp.color} p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all`}>
                    <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-8">
                      <div className="flex flex-col sm:flex-row items-start gap-6">
                        
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-5 bg-gradient-to-br ${exp.color} rounded-2xl flex-shrink-0 shadow-xl ${exp.glowColor}`}
                        >
                          <exp.icon className="text-5xl text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div>
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="text-2xl sm:text-3xl font-black text-white">
                                  {exp.role}
                                </h3>
                                <motion.span 
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  className={`px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                                >
                                  {exp.type}
                                </motion.span>
                              </div>
                              <p className={`text-xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                                {exp.company}
                              </p>
                              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                                  <FaMapMarkerAlt />
                                  {exp.location}
                                </span>
                                <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                                  <FaClock />
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                                  <FaFire />
                                  {exp.duration}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-5 leading-relaxed text-lg">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="mb-5">
                            <h4 className="text-base font-black text-white mb-3 flex items-center gap-2 uppercase tracking-wider">
                              <FaStar className="text-yellow-400" />
                              Key Accomplishments
                            </h4>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-3 text-sm text-gray-300"
                                >
                                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-xl text-sm font-bold shadow-lg ${exp.glowColor}`}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🏅 ACHIEVEMENTS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border-2 border-orange-500/30 rounded-full text-orange-400 font-bold text-sm mb-6 shadow-lg shadow-orange-500/20"
              >
                <FaTrophy className="animate-bounce" />
                Achievements & Recognition
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                  Milestones
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
                  style={{ perspective: "1000px" }}
                >
                  <div className={`bg-gradient-to-br ${achievement.color} p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all ${achievement.glowColor}`}>
                    <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-5 bg-gradient-to-br ${achievement.color} rounded-2xl flex-shrink-0 shadow-xl ${achievement.glowColor}`}
                        >
                          <achievement.icon className="text-5xl text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-3 font-semibold">{achievement.date}</p>
                          <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💪 STRENGTHS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-500/30 rounded-full text-cyan-400 font-bold text-sm mb-6 shadow-lg shadow-cyan-500/20"
              >
                <FaShieldAlt className="animate-pulse" />
                Core Strengths
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  What I Bring
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strengths.map((strength, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`bg-gradient-to-br ${strength.color} p-[3px] rounded-2xl shadow-xl hover:shadow-2xl ${strength.glowColor} transition-all`}>
                    <div className="bg-gray-900/95 backdrop-blur rounded-2xl p-8">
                      <div className="flex items-start gap-5">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-4 bg-gradient-to-br ${strength.color} rounded-xl flex-shrink-0 shadow-lg ${strength.glowColor}`}
                        >
                          <strength.icon className="text-4xl text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-white mb-2">
                            {strength.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🎉 FUN FACTS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border-2 border-pink-500/30 rounded-full text-pink-400 font-bold text-sm mb-6 shadow-lg shadow-pink-500/20"
              >
                <HiMiniSparkles className="animate-spin" style={{ animationDuration: '2s' }} />
                Fun Facts
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
                  The Real Me
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  whileHover={{ rotate: 5, scale: 1.05, y: -10 }}
                >
                  <div className={`bg-gradient-to-br ${fact.color} p-[3px] rounded-3xl shadow-xl hover:shadow-2xl ${fact.glowColor} transition-all`}>
                    <div className="bg-gray-900 backdrop-blur rounded-3xl p-8 min-h-[220px] flex flex-col items-center justify-center text-center">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-5 bg-gradient-to-br ${fact.color} rounded-full mb-5 shadow-xl ${fact.glowColor}`}
                      >
                        <fact.icon className="text-5xl text-white" />
                      </motion.div>
                      <p className="text-white font-bold text-lg leading-relaxed">
                        {fact.fact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 🎨 HOBBIES */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-indigo-500/30 rounded-full text-indigo-400 font-bold text-sm mb-6 shadow-lg shadow-indigo-500/20"
              >
                <FaPalette className="animate-bounce" />
                Beyond Coding
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Hobbies & Interests
                </span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {hobbies.map((hobby, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                >
                  <div className={`bg-gradient-to-r ${hobby.color} p-[2px] rounded-full shadow-lg hover:shadow-xl ${hobby.glowColor} transition-all`}>
                    <div className="bg-gray-900/90 backdrop-blur rounded-full px-6 py-4 flex items-center gap-3">
                      <hobby.icon className={`text-3xl bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent`} />
                      <span className="text-white font-black text-lg">{hobby.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 📥 DOWNLOADS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-teal-500/30 rounded-full text-teal-400 font-bold text-sm mb-6 shadow-lg shadow-teal-500/20"
              >
                <FaDownload className="animate-bounce" />
                Free Resources
              </motion.span>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                  Downloads
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloads.map((download, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  whileHover={{ y: -15, rotateX: 10, scale: 1.05 }}
                  style={{ perspective: "1000px" }}
                >
                  <a href={download.fileUrl} download className="block group">
                    <div className={`bg-gradient-to-br ${download.color} p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all ${download.glowColor}`}>
                      <div className="bg-gray-900/95 backdrop-blur rounded-3xl p-10 h-full flex flex-col items-center text-center">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-8 bg-gradient-to-br ${download.color} rounded-full mb-6 shadow-2xl ${download.glowColor}`}
                        >
                          <download.icon className="text-6xl text-white" />
                        </motion.div>
                        <h3 className="text-3xl font-black text-white mb-3">
                          {download.title}
                        </h3>
                        <p className="text-gray-400 mb-6 text-lg flex-1">
                          {download.description}
                        </p>
                        <div className="flex items-center justify-between w-full pt-6 border-t border-gray-800">
                          <span className="text-sm text-gray-500 font-semibold">{download.size}</span>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`px-5 py-2 rounded-xl bg-gradient-to-r ${download.color} text-white font-black text-sm flex items-center gap-2 shadow-lg ${download.glowColor}`}
                          >
                            <FaDownload />
                            Download
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💭 ROTATING QUOTES */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-[3px] rounded-3xl shadow-2xl hover:shadow-[0_0_80px_rgba(251,146,60,0.6)] transition-all">
                <div className="bg-gray-900 rounded-3xl p-12 sm:p-16 min-h-[400px] flex items-center justify-center">
                  <RotatingQuote />
                </div>
              </div>
            </motion.div>
          </div>

          {/* 🚀 FINAL CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-[3px] shadow-2xl hover:shadow-[0_0_100px_rgba(168,85,247,0.8)] transition-all">
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-[3rem] p-12 sm:p-20 text-center overflow-hidden">
                  
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        initial={{ x: Math.random() * 1000, y: Math.random() * 500 }}
                        animate={{
                          x: Math.random() * 1000,
                          y: Math.random() * 500,
                          scale: [1, 2, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: Math.random() * 10 + 5,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-8xl sm:text-9xl mb-8"
                  >
                    🚀
                  </motion.div>

                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                      Let's Build Something
                      <br />
                      Extraordinary Together!
                    </span>
                  </h2>

                  <p className="text-2xl sm:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Ready to turn your vision into reality? Let's create magic with code! ✨
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(6,182,212,0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white font-black text-2xl flex items-center justify-center gap-4 overflow-hidden shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        <FaHandshake className="text-3xl" />
                        Get In Touch
                        <motion.span
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaArrowRight className="text-2xl" />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>

                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-12 py-6 bg-gray-900/80 backdrop-blur border-4 border-gray-700 hover:border-purple-500 rounded-full text-white font-black text-2xl flex items-center justify-center gap-4 transition-all shadow-xl"
                    >
                      <SiGithub className="text-3xl" />
                      View GitHub
                    </motion.a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center gap-12 pt-12 border-t-2 border-gray-800">
                    {[
                      { icon: FaBolt, text: "Lightning Fast", color: "text-yellow-400" },
                      { icon: FaHeart, text: "Passionate", color: "text-red-400" },
                      { icon: FaStar, text: "Top Quality", color: "text-yellow-400" },
                      { icon: FaRocket, text: "Always Learning", color: "text-purple-400" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <item.icon className={`text-5xl ${item.color} drop-shadow-lg`} />
                        <span className="text-gray-300 font-bold text-lg">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
