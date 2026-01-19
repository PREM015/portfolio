"use client";

import { Tech } from "@/app/types/skills";

/* =====================================================
    ICON IMPORTS –  GROUPED & MAINTAINABLE
   ===================================================== */

/* =====================
   🖥️ IDEs / Editors
   ===================== */
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiAndroidstudio,
  SiPycharm,
  SiIntellijidea,
  SiSublimetext,
  SiWebstorm,
  SiCplusplus,
  SiC,
  SiFirebase,
  SiMiro,
  SiMongoose,
  SiMqtt,
  SiNpm,
  SiPostman,
  SiPrisma,
  SiSupabase,
  SiVite,
  SiWebpack,
} from "react-icons/si";

/* =====================
   🌐 Frontend – Core
   ===================== */
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaChrome,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiSemanticuireact,
  SiShadcnui,
  SiStorybook,
  SiFramer,
  SiThreedotjs,
} from "react-icons/si";

/* =====================
   🎨 Design Tools
   ===================== */
import { FaFigma } from "react-icons/fa";

import { SiCanva, SiAdobephotoshop } from "react-icons/si";

/* =====================
   ⚙️ Backend / APIs
   ===================== */
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa";

import {
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGraphql,
  SiSocketdotio,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

/* =====================
   🗄️ Databases
   ===================== */
import { LuDatabaseZap } from "react-icons/lu";

import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMariadb,
  SiRedis,
  SiOracle,
  SiElasticsearch,
  SiApachecassandra,
  SiAmazondynamodb,
  SiCockroachlabs,
  SiTimescale,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

/* =====================
   🔐 Auth & Security
   ===================== */
import { FaLock, FaKey, FaShieldAlt } from "react-icons/fa";

import { BsShieldLockFill } from "react-icons/bs";

import { TbAuth2Fa } from "react-icons/tb";

import { SiAuth0, SiPassport, SiJsonwebtokens } from "react-icons/si";

/* =====================
   ☁️ DevOps / Cloud
   ===================== */
import {
  FaDocker,
  FaAws,
  FaCloudUploadAlt,
  FaLinux,
  FaUbuntu,
  FaWindows,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiNginx,
  SiPm2,
  SiRailway,
  SiRender,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

/* =====================
   🔧 Version Control / CI
   ===================== */
import { FaGitAlt } from "react-icons/fa";

import {
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

/* =====================
   🧪 Testing & Quality
   ===================== */
import {
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiLighthouse,
  SiEslint,
  SiPrettier,
} from "react-icons/si";

/* =====================
   ⚡ Performance & Tools
   ===================== */
import { MdSpeed, MdStorage } from "react-icons/md";

import { GrOptimize } from "react-icons/gr";

import { FcSalesPerformance } from "react-icons/fc";

/* =====================
   📦 State & Utilities
   ===================== */
import {
  SiRedux,
  SiZod,
  SiAxios,
  SiReacthookform,
  SiReactquery,
} from "react-icons/si";

/* =====================
   📬 Messaging / Email
   ===================== */
import { MdEmail, MdOutlineMail } from "react-icons/md";

import { SiMinutemailer, SiMailgun, SiSendgrid } from "react-icons/si";

import { AiTwotoneMail } from "react-icons/ai";

/* =====================
   💳 Payments
   ===================== */
import { SiStripe, SiPaypal, SiRazorpay, SiSquare } from "react-icons/si";

/* =====================
   🌍 Misc / UI / Effects
   ===================== */
import { BiWorld } from "react-icons/bi";

import {
  AiFillThunderbolt,
  AiOutlineThunderbolt,
  AiOutlineLoading,
} from "react-icons/ai";

import { GiLightningFrequency, GiBearFace } from "react-icons/gi";

import { LiaBullseyeSolid } from "react-icons/lia";

import { BsHandIndexThumb } from "react-icons/bs";

import { FaStopwatch, FaCogs, FaCookieBite, FaGlobe } from "react-icons/fa";

import { MdHttp, MdImage, MdLoop } from "react-icons/md";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

//  Function to calculate grade based on level
export const getTechGrade = (level: number): string => {
  if (level <= 10) return "Novice 🟢";
  if (level <= 20) return "Beginner 🟩";
  if (level <= 30) return "Learner 🟦";
  if (level <= 40) return "Intermediate 🔵";
  if (level <= 50) return "Skilled 🟣";
  if (level <= 60) return "Proficient 🟠";
  if (level <= 70) return "Advanced 🟡";
  if (level <= 80) return "Expert 🔴";
  if (level <= 90) return "Excellent 💎";
  return "Master 🌟";
};

export const TECH_STACK: Tech[] = [
  
  //------------------------Languages-----------------------------------------
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Languages",
    color: "#F7DF1E",
    description: "High-level scripting language for web development",
    level: 50,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    color: "#3178C6",
    description: "JavaScript with static typing for scalable applications",
    level: 40,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: FaPython,
    category: "Languages",
    color: "#faee05",
    description: "High-level programming language for automation and backend",
    level: 30,
    link: "https://www.python.org/",
  },
  //   {
  //   name: "Java",
  //   icon: FaJava,
  //   category: "Languages",
  //   color: "#ff0000",
  //   description: "Object-oriented programming language widely used for enterprise applications, backend development, and Android.",
  //   level: 50,
  //   link: "https://www.java.com/",
  // },

  {
    name: "C",
    icon: SiC,
    category: "Languages",
    color: "#0379fc",
    description: "Low-level programming language for system development",
    level: 50,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "Languages",
    color: "#0379fc",
    description: "High-performance language for applications and systems",
    level: 60,
    link: "https://isocpp.org/",
  },
  {
    name: "SQL",
    icon: SiMysql,
    category: "Languages",
    color: "#2f2cf5",
    description: "Query language used to manage relational databases",
    level: 60,
    link: "https://en.wikipedia.org/wiki/SQL",
  },
  // ----------------------------- MOBILE DEVELOPMENT (NEW CATEGORY) -----------------------------
  // {
  //   name: "React Native",
  //   icon: FaReact,
  //   category: "Mobile Development",
  //   color: "#61DBFB",
  //   description: "Build native mobile apps using React and JavaScript",
  //   level: 40,
  //   link: "https://reactnative.dev",
  // },
  //------------------------Frontend-----------------------------------------
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    color: "#E34F26",
    description: "Markup language for web pages",
    level: 70,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Frontend",
    color: "#0096FF",
    description: "Styling the web with modern layouts",
    level: 70,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Sass",
    icon: FaSass,
    category: "Frontend",
    color: "#CC6699",
    description: "CSS with superpowers",
    level: 70,
    link: "https://sass-lang.com",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    color: "#06B6D4",
    description: "Utility-first CSS framework",
    level: 60,
    link: "https://tailwindcss.com",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
    color: "#7952B3",
    description: "Popular CSS framework for responsive design",
    level: 55,
    link: "https://getbootstrap.com",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    color: "#F7DF1E",
    description: "Core web programming language",
    level: 50,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
    color: "#3178C6",
    description: "Type-safe JavaScript",
    level: 40,
    link: "https://www.typescriptlang.org",
  },
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    color: "#61DBFB",
    description: "Building interactive UIs",
    level: 50,
    link: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    color: "#f5f2f2",
    description: "React framework for production",
    level: 60,
    link: "https://nextjs.org",
  },
  // {
  //   name: "Nuxt.js",
  //   icon: SiNuxtdotjs,
  //   category: "Frontend",
  //   color: "#00C58E",
  //   description: "Vue.js framework for SSR, static sites, and powerful frontend apps",
  //   level: 50,
  //   link: "https://nuxt.com",
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: SiRedux,
  //   category: "Frontend",
  //   color: "#764ABC",
  //   description: "Centralized state management for React applications",
  //   level: 50,
  //   link: "https://redux-toolkit.js.org/",
  // },
  // {
  //   name: "Zustand",
  //   icon: GiBearFace,
  //   category: "Frontend",
  //   color: "#FFDD00",
  //   description: "Minimalist state management for React and Next.js",
  //   level: 50,
  //   link: "https://zustand-demo.pmnd.rs/",
  // },
  // {
  //   name: "Context API",
  //   icon: FaReact,
  //   category: "Frontend",
  //   color: "#61DBFB",
  //   description: "Built-in state management for React applications",
  //   level: 50,
  //   link: "https://react.dev/reference/react/createContext",
  // },
  {
    name: "Material UI",
    icon: SiMui,
    category: "Frontend",
    color: "#0081CB",
    description: "React UI components",
    level: 50,
    link: "https://mui.com",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    category: "Frontend",
    color: "#319795",
    description: "Accessible React component library",
    level: 50,
    link: "https://chakra-ui.com",
  },
  {
    name: "Shadcn/UI",
    icon: SiShadcnui,
    category: "Frontend",
    color: "#FCFC03",
    description:
      "Beautifully designed components built with Radix and Tailwind",
    level: 55,
    link: "https://ui.shadcn.com",
  },
  // {
  //   name: "Storybook",
  //   icon: SiStorybook,
  //   category: "Frontend",
  //   color: "#FF4785",
  //   description: "UI component explorer and documentation",
  //   level: 40,
  //   link: "https://storybook.js.org",
  // },
  {
    name: "Semantic UI React",
    icon: SiSemanticuireact,
    category: "Frontend",
    color: "#00BFFF",
    description: "UI framework with prebuilt React components and themes",
    level: 40,
    link: "https://react.semantic-ui.com",
  },
  {
    name: "Axios",
    icon: SiAxios,
    category: "Frontend",
    color: "#5A29E4",
    description: "HTTP client for API requests",
    level: 40,
    link: "https://axios-http.com",
  },
  // {
  //   name: "React Query",
  //   icon: SiReactquery,
  //   category: "Frontend",
  //   color: "#FF4154",
  //   description: "Server-state management and caching for React apps",
  //   level: 50,
  //   link: "https://tanstack.com/query/latest",
  // },
  // {
  //   name: "React Hook Form",
  //   icon: SiReacthookform,
  //   category: "Frontend",
  //   color: "#EC5990",
  //   description: "Performant form validation for React",
  //   level: 60,
  //   link: "https://react-hook-form.com",
  // },
  {
    name: "Framer Motion",
    icon: SiFramer,
    category: "Frontend",
    color: "#0055FF",
    description: "Smooth React animations",
    level: 40,
    link: "https://www.framer.com/motion",
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    category: "Frontend",
    color: "#F0DB4F",
    description:
      "JavaScript 3D library used to create 3D graphics and animations in the browser",
    level: 40,
    link: "https://threejs.org/",
  },

  //--------------------------Backend--------------------------
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    color: "#44D62C",
    description: "JavaScript runtime for server-side",
    level: 65,
    link: "https://nodejs.org",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    color: "#FFFFFF",
    description: "Fast web framework for Node",
    level: 65,
    link: "https://expressjs.com",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    category: "Backend",
    color: "#E0234E",
    description: "Scalable Node.js framework",
    level: 30,
    link: "https://nestjs.com",
  },
  // {
  //   name: "Django",
  //   icon: SiDjango,
  //   category: "Backend",
  //   color: "#31c916",
  //   description: "High-level Python web framework",
  //   level: 50,
  //   link: "https://www.djangoproject.com",
  // },
  // {
  //   name: "FastAPI",
  //   icon: SiFastapi,
  //   category: "Backend",
  //   color: "#00FFFF",
  //   description: "Modern Python async web framework",
  //   level: 60,
  //   link: "https://fastapi.tiangolo.com",
  // },
  // {
  //   name: "Flask",
  //   icon: SiFlask,
  //   category: "Backend",
  //   color: "#42a6f5",
  //   description: "Lightweight Python web framework (similar to FastAPI)",
  //   level: 30,
  //   link: "https://flask.palletsprojects.com/",
  // },
  {
    name: "Mongoose",
    icon: SiMongoose,
    category: "Backend",
    color: "#f6e406",
    description: "ODM library to interact with MongoDB",
    level: 40,
    link: "https://mongoosejs.com/",
  },
  {
    name: "Zod",
    icon: SiZod,
    category: "Backend",
    color: "#5735fc",
    description: "Request validation library for Node.js/TypeScript APIs",
    level: 40,
    link: "https://github.com/colinhacks/zod",
  },
  {
    name: "bcrypt",
    icon: FaLock,
    category: "Backend",
    color: "#F6C90E",
    description: "Password hashing for secure authentication",
    level: 55,
    link: "https://github.com/kelektiv/node.bcrypt.js",
  },
  // {
  //   name: "Passport.js",
  //   icon: SiPassport,
  //   category: "Backend",
  //   color: "#00B0D7",
  //   description: "Authentication middleware for Node.js",
  //   level: 50,
  //   link: "http://www.passportjs.org/",
  // },
  // {
  //   name: "Helmet.js",
  //   icon: FaHelmetSafety,
  //   category: "Backend",
  //   color: "#FF4500",
  //   description: "Security middleware for HTTP headers in Node.js",
  //   level: 50,
  //   link: "https://helmetjs.github.io/",
  // },
  {
    name: "CORS",
    icon: FaGlobe,
    category: "Backend",
    color: "#0096FF",
    description: "Middleware for enabling cross-origin requests",
    level: 65,
    link: "https://github.com/expressjs/cors",
  },
  {
    name: "express-rate-limit",
    icon: FaStopwatch,
    category: "Backend",
    color: "#FF6F00",
    description: "Middleware to limit repeated API requests",
    level: 55,
    link: "https://github.com/nfriedly/express-rate-limit",
  },
  {
    name: "Multer",
    icon: FaCloudUploadAlt,
    category: "Backend",
    color: "#F44C27",
    description: "Middleware for handling multipart/form-data (file uploads)",
    level: 55,
    link: "https://github.com/expressjs/multer",
  },
  {
    name: "WebSockets / Socket.io",
    icon: SiSocketdotio,
    category: "Backend",
    color: "#24C29F",
    description: "Real-time communication",
    level: 40,
    link: "https://socket.io",
  },
  // {
  //   name: "BullMQ",
  //   icon: LiaBullseyeSolid,
  //   category: "Backend",
  //   color: "#FF6600",
  //   description: "Job queue & task scheduler",
  //   level: 40,
  //   link: "https://docs.bullmq.io",
  // },
  // {
  //   name: "PM2",
  //   icon: SiPm2,
  //   category: "Backend",
  //   color: "#f01d0d",
  //   description: "Node process manager",
  //   level: 40,
  //   link: "https://pm2.keymetrics.io",
  // },
  //--------------------------Database--------------
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    color: "#05b9f5",
    description: "Advanced relational database",
    level: 65,
    link: "https://www.postgresql.org",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    color: "#36d4f7",
    description: "Popular relational database",
    level: 65,
    link: "https://www.mysql.com",
  },
  // {
  //   name: "SQLite",
  //   icon: SiSqlite,
  //   category: "Database",
  //   color: "#1E90FF",
  //   description: "Lightweight relational database",
  //   level: 70,
  //   link: "https://www.sqlite.org",
  // },
  // {
  //   name: "Oracle DB",
  //   icon: SiOracle,
  //   category: "Database",
  //   color: "#F80000",
  //   description: "Enterprise relational database",
  //   level: 40,
  //   link: "https://www.oracle.com/database/",
  // },
  // {
  //   name: "Microsoft SQL Server",
  //   icon: DiMsqlServer,
  //   category: "Database",
  //   color: "#F25022",
  //   description: "Enterprise relational database from Microsoft",
  //   level: 50,
  //   link: "https://www.microsoft.com/en-us/sql-server",
  // },
  {
    name: "NeonDB",
    icon: LuDatabaseZap,
    category: "Database",
    color: "#05b9f5",
    description: "Serverless PostgreSQL-compatible cloud database",
    level: 45,
    link: "https://neon.tech",
  },

  // {
  //   name: "MariaDB",
  //   icon: SiMariadb,
  //   category: "Database",
  //   color: "#3469fa",
  //   description: "Open-source relational database",
  //   level: 40,
  //   link: "https://mariadb.org",
  // },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    color: "#00ED64",
    description: "NoSQL document database",
    level: 42,
    link: "https://www.mongodb.com",
  },
  {
    name: "Firebase DB",
    icon: SiFirebase,
    category: "Database",
    color: "#FF9100",
    description: "NoSQL cloud database",
    level: 45,
    link: "https://firebase.google.com/products/realtime-database",
  },
  // {
  //   name: "Cassandra",
  //   icon: SiApachecassandra,
  //   category: "Database",
  //   color: "#00B0E8",
  //   description: "NoSQL wide-column store",
  //   level: 40,
  //   link: "https://cassandra.apache.org/",
  // },
  // {
  //   name: "AWS DynamoDB",
  //   icon: SiAmazondynamodb,
  //   category: "Database",
  //   color: "#FF9900",
  //   description: "Fully managed NoSQL key-value and document database by AWS",
  //   level: 40,
  //   link: "https://aws.amazon.com/dynamodb/",
  // },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
    category: "Database",
    color: "#4BDDC8",
    description: "Next-gen ORM for Node & TS",
    level: 60,
    link: "https://www.prisma.io",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Database",
    color: "#3ECF8E",
    description: "Open-source Firebase alternative",
    level: 58,
    link: "https://supabase.com",
  },
  // {
  //   name: "Redis",
  //   icon: SiRedis,
  //   category: "Database",
  //   color: "#DC382D",
  //   description: "In-memory data structure store",
  //   level: 40,
  //   link: "https://redis.io",
  // },
  // {
  //   name: "Elasticsearch",
  //   icon: SiElasticsearch,
  //   category: "Database",
  //   color: "#FED10A",
  //   description: "Search engine and analytics database",
  //   level: 40,
  //   link: "https://www.elastic.co/elasticsearch/",
  // },
  // {
  //   name: "TimescaleDB",
  //   icon: SiTimescale,
  //   category: "Database",
  //   color: "#2E90FA",
  //   description: "Time-series database built on PostgreSQL for metrics and analytics",
  //   level: 40,
  //   link: "https://www.timescale.com/",
  // },
  // {
  //   name: "CockroachDB",
  //   icon: SiCockroachlabs,
  //   category: "Database",
  //   color: "#007FFF",
  //   description: "Distributed SQL database",
  //   level: 40,
  //   link: "https://www.cockroachlabs.com",
  // },

  // ----------------------------- DEVOPS -----------------------------
  {
    name: "Linux",
    icon: FaLinux,
    category: "DevOps",
    color: "#FCC624",
    description: "Server & CLI environment",
    level: 40,
    link: "https://www.linux.org",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
    color: "#1D63ED",
    description: "Containerization platform",
    level: 20,
    link: "https://www.docker.com",
  },
  {
    name: "Nginx",
    icon: SiNginx,
    category: "DevOps",
    color: "#00fd60",
    description: "Web server & reverse proxy",
    level: 20,
    link: "https://www.nginx.com",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    color: "#326CE5",
    description: "Container orchestration",
    level: 20,
    link: "https://kubernetes.io",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    category: "DevOps",
    color: "#8C77EB",
    description: "Infrastructure as code",
    level: 20,
    link: "https://www.terraform.io",
  },
  // {
  //   name: "AWS",
  //   icon: FaAws,
  //   category: "DevOps",
  //   color: "#FF9900",
  //   description: "Cloud computing platform",
  //   level: 40,
  //   link: "https://aws.amazon.com",
  // },
  {
    name: "CI/CD",
    icon: FaCogs,
    category: "DevOps",
    color: "#FF6F00",
    description: "Continuous integration & deployment practices",
    level: 20,
    link: "https://en.wikipedia.org/wiki/Continuous_integration",
  },
  // {
  //   name: "Jenkins",
  //   icon: SiJenkins,
  //   category: "DevOps",
  //   color: "#D33834",
  //   description: "CI/CD automation server",
  //   level: 30,
  //   link: "https://www.jenkins.io",
  // },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    category: "DevOps",
    color: "#3399FF",
    description: "CI/CD pipelines on GitHub",
    level: 20,
    link: "https://github.com/features/actions",
  },

  // ----------------------------- AUTH / SECURITY -----------------------------
  {
    name: "NextAuth.js",
    icon: BsShieldLockFill,
    category: "Auth",
    color: "#00D8FF",
    description: "Authentication for Next.js apps",
    level: 25,
    link: "https://next-auth.js.org",
  },
  {
    name: "Firebase Auth",
    icon: SiFirebase,
    category: "Auth",
    color: "#FFCA28",
    description: "Auth & backend for apps",
    level: 34,
    link: "https://firebase.google.com",
  },
  {
    name: "Auth0",
    icon: SiAuth0,
    category: "Auth",
    color: "#EB5424",
    description: "Enterprise authentication platform",
    level: 32,
    link: "https://auth0.com",
  },
  {
    name: "JWT / OAuth2",
    icon: SiJsonwebtokens,
    category: "Auth",
    color: "#FF6F00",
    description: "Token-based authentication",
    level: 48,
    link: "https://jwt.io",
  },
  {
    name: "SAML",
    icon: FaLock,
    category: "Auth",
    color: "#c100ff",
    description: "Enterprise SSO protocol",
    level: 40,
    link: "https://en.wikipedia.org/wiki/SAML",
  },
  {
    name: "RBAC / Permissions",
    icon: FaLock,
    category: "Auth",
    color: "#b40dea",
    description: "Role-based access control & permission management",
    level: 40,
    link: "https://en.wikipedia.org/wiki/Role-based_access_control",
  },
  {
    name: "MFA / 2FA",
    icon: FaShieldAlt,
    category: "Auth",
    color: "#FF5722",
    description: "Multi-factor authentication for security enhancement",
    level: 40,
    link: "https://en.wikipedia.org/wiki/Multi-factor_authentication",
  },
  {
    name: "Encryption / Hashing",
    icon: FaKey,
    category: "Auth",
    color: "#07f0da",
    description: "Password hashing (bcrypt, Argon2) & TLS/SSL basics",
    level: 45,
    link: "https://en.wikipedia.org/wiki/Cryptography",
  },
  {
    name: "API Security",
    icon: FaShieldAlt,
    category: "Auth",
    color: "#FF6F00",
    description: "Rate limiting, IP whitelisting & CORS policies",
    level: 30,
    link: "https://owasp.org/www-project-api-security/",
  },
  {
    name: "Session / Cookie Security",
    icon: FaCookieBite,
    category: "Auth",
    color: "#d3c200",
    description: "Secure session management & cookie handling",
    level: 352,
    link: "https://owasp.org/www-project-top-ten/",
  },

  // ----------------------------- TESTING -----------------------------
  {
    name: "Jest",
    icon: SiJest,
    category: "Testing",
    color: "#C21325",
    description: "Unit testing for JS/TS",
    level: 20,
    link: "https://jestjs.io",
  },
  // {
  //   name: "React Testing Library",
  //   icon: SiTestinglibrary,
  //   category: "Testing",
  //   color: "#61DAFB",
  //   description: "Testing React components",
  //   level: 40,
  //   link: "https://testing-library.com/docs/react-testing-library/intro",
  // },
  // //{
  //   name: "Vitest",
  //   icon: SiVitest, // or a similar icon if available in your icon library
  //   category: "Testing",
  //   color: "#646CFF", // Vitest official purple
  //   description: "Fast unit testing framework for Vite projects",
  //   level: 40,
  //   link: "https://vitest.dev",
  //   // },
  // {
  //   name: "Playwright",
  //   icon: SiPlaywright,
  //   category: "Testing",
  //   color: "#2EAD33",
  //   description: "Modern end-to-end testing framework for web apps",
  //   level: 40,
  //   link: "https://playwright.dev",
  // },
  // {
  //   name: "Cypress",
  //   icon: SiCypress,
  //   category: "Testing",
  //   color: "#17202C",
  //   description: "Fast, reliable E2E testing for modern web applications",
  //   level: 40,
  //   link: "https://www.cypress.io",
  // },

  // ----------------------------- TOOLS -----------------------------
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    category: "Tools",
    color: "#F05032",
    description: "Version control and collaboration",
    level: 60,
    link: "https://github.com",
  },
  // {
  //   name: "GitLab",
  //   icon: SiGitlab,
  //   category: "Tools",
  //   color: "#FC6D26",
  //   description: "Git repository hosting with CI/CD pipelines",
  //   level: 50,
  //   link: "https://gitlab.com",
  // },

  // --- IDEs & code editors ---

  {
    name: "VS Code",
    icon: BiLogoVisualStudio,
    category: "Tools",
    color: "#007ACC",
    description: "Lightweight, versatile code editor",
    level: 65,
    link: "https://code.visualstudio.com",
  },
  {
    name: "PyCharm",
    icon: SiPycharm,
    category: "Tools",
    color: "#179ADF",
    description: "IDE for Python development",
    level: 55,
    link: "https://www.jetbrains.com/pycharm/",
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    category: "Tools",
    color: "#FF9800",
    description: "IDE for Java, TypeScript, and more",
    level: 42,
    link: "https://www.jetbrains.com/idea/",
  },
  {
    name: "WebStorm",
    icon: SiWebstorm,
    category: "Tools",
    color: "#FF9800",
    description: "IDE for JavaScript and TypeScript",
    level: 23,
    link: "https://www.jetbrains.com/webstorm/",
  },
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    category: "Tools",
    color: "#3DDC84",
    description: "IDE for Android app development",
    level: 25,
    link: "https://developer.android.com/studio",
  },
  // {
  //   name: "Sublime Text",
  //   icon: SiSublimetext,
  //   category: "Tools",
  //   color: "#FF9800",
  //   description: "Lightweight and fast code editor",
  //   level: 50,
  //   link: "https://www.sublimetext.com",
  // },
  {
    name: "Replit",
    icon: FaLaptopCode,
    category: "Tools",
    color: "#F00000",
    description: "Online IDE for JS, Python, and more",
    level: 42,
    link: "https://replit.com",
  },

  // --- Code quality & bundlers ---
  {
    name: "ESLint",
    icon: SiEslint,
    category: "Tools",
    color: "#4c26ff",
    description: "Code linting",
    level: 38,
    link: "https://eslint.org",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    category: "Tools",
    color: "#F7B93E",
    description: "Code formatting",
    level: 33,
    link: "https://prettier.io",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    category: "Tools",
    color: "#0a9ff5",
    description: "Module bundler",
    level: 34,
    link: "https://webpack.js.org",
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "Tools",
    color: "#646CFF",
    description: "Next generation frontend tooling",
    level: 48,
    link: "https://vitejs.dev",
  },

  // --- API & testing tools ---
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    color: "#FF6C37",
    description: "API testing & collaboration",
    level: 45,
    link: "https://www.postman.com",
  },
  {
    name: "Thunder Client",
    icon: AiFillThunderbolt,
    category: "Tools",
    color: "#FF6C37",
    description: "Lightweight API testing tool",
    level: 35,
    link: "https://www.thunderclient.io",
  },
  {
    name: "Lighthouse",
    icon: SiLighthouse,
    category: "Tools",
    color: "#E1EFFF",
    description: "Performance, accessibility, and SEO auditing tool",
    level: 30,
    link: "https://developers.google.com/speed/pagespeed/insights/",
  },

  // --- Browsers & runtime / Node ---
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    category: "Tools",
    color: "#4285F4",
    description: "Browser debugging & performance analysis",
    level: 40,
    link: "https://developer.chrome.com/docs/devtools/",
  },
  {
    name: "Node.js REPL / nvm",
    icon: FaNodeJs,
    category: "Tools",
    color: "#339933",
    description: "Node version management & REPL testing",
    level: 35,
    link: "https://github.com/nvm-sh/nvm",
  },
  {
    name: "npm / Yarn",
    icon: SiNpm,
    category: "Tools",
    color: "#CB3837",
    description: "JavaScript package managers",
    level: 20,
    link: "https://www.npmjs.com",
  },

  // ----------------------------- DESIGN / UI -----------------------------
  {
    name: "Figma",
    icon: FaFigma,
    category: "Design",
    color: "#F24E1E",
    description: "Collaborative design tool",
    level: 30,
    link: "https://www.figma.com",
  },
  // {
  //   name: "Adobe XD",
  //   icon: SiAdobeacrobatreader,
  //   category: "Design",
  //   color: "#FF61F6",
  //   description: "UI/UX design tool",
  //   level: 30,
  //   link: "https://www.adobe.com/products/xd.html",
  // },
  {
    name: "Canva",
    icon: SiCanva,
    category: "Design",
    color: "#00C4CC",
    description: "Online graphic design tool",
    level: 30,
    link: "https://www.canva.com",
  },
  {
    name: "Framer",
    icon: SiFramer,
    category: "Design",
    color: "#0055FF",
    description: "Interactive prototyping and design tool for modern websites",
    level: 40,
    link: "https://www.framer.com",
  },
  {
    name: "Miro",
    icon: SiMiro, 
    category: "Design",
    color: "#FF9F1C",
    description:
      "Collaborative online whiteboard for brainstorming and planning",
    level: 40,
    link: "https://miro.com",
  },
  // {
  //   name: "Photoshop",
  //   icon: SiAdobephotoshop,
  //   category: "Design",
  //   color: "#31A8FF",
  //   description: "Advanced image editing and graphics",
  //   level: 30,
  //   link: "https://www.adobe.com/products/photoshop.html",
  // },
  //---------------cloudplatfrom---------
  // {
  //   name: "AWS Lambda / Cloud Functions",
  //   icon: FaAws,
  //   category: "Cloud Platforms",
  //   color: "#FF9900",
  //   description: "Serverless backend functions",
  //   level: 40,
  //   link: "https://aws.amazon.com/lambda/",
  // },
  {
    name: "Netlify",
    icon: SiNetlify,
    category: "Cloud Platforms",
    color: "#00C7B7",
    description: "Frontend hosting & deployment",
    level: 35,
    link: "https://www.netlify.com",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Cloud Platforms",
    color: "#F5F5F5",
    description: "Deployment for Next.js & frontends",
    level: 45,
    link: "https://vercel.com",
  },
  {
    name: "Railway",
    icon: SiRailway,
    category: "Cloud Platforms",
    color: "#FF6B6B",
    description: "Modern platform for deploying full-stack apps instantly",
    level: 40,
    link: "https://railway.app",
  },
  {
    name: "Render",
    icon: SiRender,
    category: "Cloud Platforms",
    color: "#46E3B7",
    description: "Cloud platform for hosting web apps, APIs, and databases",
    level: 40,
    link: "https://render.com",
  },
  // -----------------------APIs/Protocols-----------------------------
  {
    name: "REST API",
    icon: TbApi,
    category: "APIs Protocols",
    color: "#FF6C37",
    description: "Representational State Transfer APIs",
    level: 40,
    link: "https://restfulapi.net",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: "APIs Protocols",
    color: "#f4447c",
    description: "API query language",
    level: 30,
    link: "https://graphql.org",
  },
  {
    name: "MQTT",
    icon: SiMqtt, // You can use an appropriate icon if available
    category: "APIs Protocols",
    color: "#FF9900",
    description: "Lightweight messaging protocol for IoT",
    level: 30,
    link: "https://mqtt.org",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "APIs Protocols",
    color: "#FF6C37",
    description: "API testing & collaboration tool",
    level: 45,
    link: "https://www.postman.com",
  },
  {
    name: "OAuth2",
    icon: TbAuth2Fa, // Use a relevant icon from react-icons
    category: "APIs Protocols",
    color: "#00BFFF",
    description: "Token-based authentication protocol",
    level: 50,
    link: "https://oauth.net/2/",
  }, 
  // ----------------------------- PAYMENT INTEGRATIONS (NEW CATEGORY) -----------------------------
  {
    name: "Stripe",
    icon: SiStripe,
    category: "Payment Integrations",
    color: "#7C5DFF",
    description: "Complete payment processing platform for online businesses",
    level: 30,
    link: "https://stripe.com",
  },
  {
    name: "PayPal",
    icon: SiPaypal,
    category: "Payment Integrations",
    color: "#00A3FF",
    description: "Global payment gateway for secure online transactions",
    level: 30,
    link: "https://www.paypal.com",
  },
  {
    name: "Razorpay",
    icon: SiRazorpay,
    category: "Payment Integrations",
    color: "#1EDAB8",
    description: "Payment gateway popular in India for seamless checkout",
    level: 30,
    link: "https://razorpay.com",
  },
  {
    name: "Square",
    icon: SiSquare,
    category: "Payment Integrations",
    color: "#FFD166",
    description: "Payment processing for retail and online businesses",
    level: 20,
    link: "https://squareup.com",
  },

  // ----------------------------- EMAIL SERVICES (NEW CATEGORY) -----------------------------
  {
    name: "SendGrid",
    icon: SiSendgrid,
    category: "Email Services",
    color: "#1A82E2",
    description: "Cloud-based email delivery service for transactional emails",
    level: 30,
    link: "https://sendgrid.com",
  },
  {
    name: "Mailgun",
    icon: SiMailgun,
    category: "Email Services",
    color: "#F06B66",
    description: "Email automation service for developers",
    level: 30,
    link: "https://www.mailgun.com",
  },
  // {
  //   name: "AWS SES",
  //   icon: FaAws,
  //   category: "Email Services",
  //   color: "#FF9900",
  //   description: "Amazon's scalable email sending service",
  //   level: 40,
  //   link: "https://aws.amazon.com/ses",
  // },
  {
    name: "Resend",
    icon: SiMinutemailer,
    category: "Email Services",
    color: "#22D3EE",
    description: "Modern email API for developers with React Email support",
    level: 30,
    link: "https://resend.com",
  },
  {
    name: "Nodemailer",
    icon: FaNodeJs,
    category: "Email Services",
    color: "#44D62C",
    description: "Popular Node.js module for sending emails",
    level: 30,
    link: "https://nodemailer.com",
  },
  {
    name: "Web3Forms",
    icon: MdEmail,
    category: "Email Services",
    color: "#3B82F6",
    description: "Free contact form API for static sites without backend",
    level: 40,
    link: "https://web3forms.com",
  },
  {
    name: "EmailJS",
    icon: MdOutlineMail,
    category: "Email Services",
    color: "#E85D75",
    description:
      "Send emails directly from JavaScript without server-side code",
    level: 40,
    link: "https://www.emailjs.com",
  },
  {
    name: "Formspree",
    icon: AiTwotoneMail,
    category: "Email Services",
    color: "#FF6F61",
    description: "Form backend service that sends submissions to your email",
    level: 40,
    link: "https://formspree.io",
  }, // ============================= PERFORMANCE & OPTIMIZATION =============================
  {
    name: "Code Splitting (Next.js)",
    icon: FcSalesPerformance,
    category: "Performance & Optimization",
    color: "#2563EB",
    description:
      "Dynamic imports and automatic code splitting to reduce initial bundle size",
    level: 35,
    link: "https://medium.com/@farihatulmaria/what-is-code-splitting-in-next-js-how-does-it-improve-performance-bccd4c8eda58",
  },
  {
    name: "Lazy Loading",
    icon: AiOutlineLoading,
    category: "Performance & Optimization",
    color: "#FF9800",
    description:
      "Loading components, routes, and images only when needed to improve performance",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading",
  },
  {
    name: "Image Optimization",
    icon: GrOptimize,
    category: "Performance & Optimization",
    color: "#00C853",
    description:
      "Using Next.js Image component, responsive images, and modern formats (WebP/AVIF)",
    level: 40,
    link: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
  },
  {
    name: "Debouncing & Throttling",
    icon: GiLightningFrequency,
    category: "Performance & Optimization",
    color: "#FF5722",
    description:
      "Optimizing high-frequency events like search, scroll, resize, and API calls",
    level: 30,
    link: "https://css-tricks.com/debouncing-throttling-explained-examples/",
  },
  {
    name: "Database Indexing",
    icon: BsHandIndexThumb,
    category: "Performance & Optimization",
    color: "#2979FF",
    description:
      "Using indexes to speed up database queries in SQL and NoSQL databases",
    level: 45,
    link: "https://www.postgresql.org/docs/current/indexes.html",
  },
  {
    name: "Query Optimization",
    icon: TbApi,
    category: "Performance & Optimization",
    color: "#8E24AA",
    description:
      "Optimizing SQL queries, avoiding N+1 problems, and improving API response time",
    level: 30,
    link: "https://use-the-index-luke.com/",
  },
  {
    name: "Lighthouse Optimization",
    icon: SiLighthouse,
    category: "Performance & Optimization",
    color: "#FBC02D",
    description:
      "Improving performance, accessibility, SEO, and best practices using Lighthouse",
    level: 45,
    link: "https://developer.chrome.com/docs/lighthouse/overview/",
  },
  {
    name: "Web Vitals (LCP, FID, CLS)",
    icon: MdSpeed,
    category: "Performance & Optimization",
    color: "#98D8C8",
    description:
      "Optimizing Core Web Vitals for better real-world user experience",
    level: 40,
    link: "https://web.dev/vitals/",
  },
  {
    name: "Caching Strategies",
    icon: SiRedis,
    category: "Performance & Optimization",
    color: "#DC382D",
    description:
      "Browser caching, HTTP caching, CDN caching, Redis, and in-memory caching techniques",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
  },
  {
    name: "Tree Shaking",
    icon: SiVite,
    category: "Performance & Optimization",
    color: "#646CFF",
    description:
      "Eliminating unused code during build process to minimize bundle size",
    level: 25,
    link: "https://webpack.js.org/guides/tree-shaking/",
  },
  {
    name: "Bundle Analysis",
    icon: SiWebpack,
    category: "Performance & Optimization",
    color: "#8DD7BF",
    description:
      "Analyzing and reducing bundle size using bundle analyzer tools",
    level: 35,
    link: "https://www.npmjs.com/package/webpack-bundle-analyzer",
  },
  {
    name: "API Response Optimization",
    icon: TbApi,
    category: "Performance & Optimization",
    color: "#009688",
    description:
      "Reducing payload size, pagination, filtering, and efficient response structures",
    level: 45,
    link: "https://restfulapi.net/best-practices/",
  },

 
  // -----------------------OperatingSystem-----------------------------
  {
    name: "Linux",
    icon: FaLinux,
    category: "Operating System",
    color: "#FCC624",
    description: "Open-source server & CLI environment",
    level: 25,
    link: "https://www.linux.org",
  },
  {
    name: "Windows",
    icon: FaWindows,
    category: "Operating System",
    color: "#0078D6",
    description: "Microsoft operating system for desktop & servers",
    level: 50,
    link: "https://www.microsoft.com/windows",
  },

  {
    name: "Ubuntu",
    icon: FaUbuntu,
    category: "Operating System",
    color: "#E95420",
    description: "Popular Linux distribution",
    level: 40,
    link: "https://ubuntu.com",
  },
  // ----------------------------- MONITORING (NEW CATEGORY) -----------------------------
  {
    name: "Vercel Analytics",
    icon: SiVercel,
    category: "Monitoring",
    color: "#00FFB2",
    description: "Real-time performance insights for Next.js applications",
    level: 40,
    link: "https://vercel.com/analytics",
  },
  {
    name: "Vercel Speed Insights",
    icon: SiVercel,
    category: "Monitoring",
    color: "#C7FF00",
    description: "Core Web Vitals monitoring and performance tracking",
    level: 40,
    link: "https://vercel.com/docs/speed-insights",
  },
  {
    name: "Google Analytics",
    icon: FaChrome, // Or use a better icon if available
    category: "Monitoring",
    color: "#FF6A00",
    description: "Web analytics and user behavior tracking",
    level: 40,
    link: "https://analytics.google.com",
  },
  // -----------------------VersionControl-----------------------------
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Version Control",
    color: "#F05032",
    description: "Distributed version control system for tracking code changes",
    level: 55,
    link: "https://git-scm.com",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Version Control",
    color: "#2DBA4E",
    description:
      "Cloud-based Git repository hosting and collaboration platform",
    level: 55,
    link: "https://github.com",
  },
  // {
  //   name: "GitLab",
  //   icon: SiGitlab,
  //   category: "Version Control",
  //   color: "#FC6D26",
  //   description: "Git repository management, CI/CD, and DevOps platform",
  //   level: 85,
  //   link: "https://gitlab.com",
  // },
  // {
  //   name: "Bitbucket",
  //   icon: SiBitbucket,
  //   category: "Version Control",
  //   color: "#d93460",
  //   description: "Git-based source code repository hosting and collaboration",
  //   level: 80,
  //   link: "https://bitbucket.org",
  // },


  // ============================= WEB FUNDAMENTALS =============================
  {
    name: "HTTP / HTTPS",
    icon: MdHttp,
    category: "Web Fundamentals",
    color: "#1AC6FF",
    description:
      "Understanding HTTP methods, headers, request-response cycle, and HTTPS security",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
  },
  {
    name: "HTTP Status Codes",
    icon: IoMdCheckmarkCircleOutline,
    category: "Web Fundamentals",
    color: "#50C878",
    description:
      "Proper usage of 2xx, 3xx, 4xx, and 5xx status codes in REST APIs",
    level: 45,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
  },
  {
    name: "Cookies vs LocalStorage vs SessionStorage",
    icon: MdStorage,
    category: "Web Fundamentals",
    color: "#FFB347",
    description:
      "Client-side storage mechanisms and their security implications",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
  },
  {
    name: "CORS",
    icon: FaGlobe,
    category: "Web Fundamentals",
    color: "#E74C3C",
    description:
      "Cross-Origin Resource Sharing, preflight requests, headers, and security",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
  },
  {
    name: "Browser Rendering Lifecycle",
    icon: FaChrome,
    category: "Web Fundamentals",
    color: "#9B59B6",
    description: "DOM, CSSOM, render tree, layout, paint, and composite phases",
    level: 25,
    link: "https://web.dev/critical-rendering-path/",
  },
  {
    name: "JavaScript Event Loop",
    icon: MdLoop,
    category: "Web Fundamentals",
    color: "#F39C12",
    description:
      "Call stack, task queue, microtasks, async/await, and execution order",
    level: 30,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
  },
  {
    name: "Async Programming (Promises & async/await)",
    icon: SiJavascript,
    category: "Web Fundamentals",
    color: "#F7DF1E",
    description:
      "Handling asynchronous operations, concurrency, and error handling",
    level: 35,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
  },
  {
    name: "Client-Server Architecture",
    icon: TbApi,
    category: "Web Fundamentals",
    color: "#0097A7",
    description: "Communication between frontend, backend, APIs, and databases",
    level: 35,
    link: "https://www.geeksforgeeks.org/client-server-model/",
  },
  {
    name: "REST Principles",
    icon: TbApi,
    category: "Web Fundamentals",
    color: "#16A085",
    description:
      "Stateless APIs, resource-based URLs, idempotency, and REST constraints",
    level: 35,
    link: "https://restfulapi.net/",
  },
  {
    name: "RESTful API Design",
    icon: TbApi,
    category: "Web Fundamentals",
    color: "#8E44AD",
    description:
      "API versioning, pagination, filtering, validation, and error handling",
    level: 35,
    link: "https://restfulapi.net/rest-api-design-tutorial-with-example/",
  },
  {
    name: "Authentication Flow",
    icon: SiJsonwebtokens,
    category: "Web Fundamentals",
    color: "#C0392B",
    description:
      "Session-based vs token-based authentication, JWTs, and refresh tokens",
    level: 42,
    link: "https://jwt.io/introduction",
  },
  {
    name: "Web Security Basics",
    icon: FaShieldAlt,
    category: "Web Fundamentals",
    color: "#E67E22",
    description:
      "XSS, CSRF, SQL Injection, HTTPS, CSP, secure headers, and OWASP Top 10",
    level: 20,
    link: "https://owasp.org/www-project-top-ten/",
  },
  {
    name: "DNS & Networking Basics",
    icon: BiWorld,
    category: "Web Fundamentals",
    color: "#3498DB",
    description:
      "DNS resolution, TCP/IP basics, and how data travels across the web",
    level: 20,
    link: "https://www.cloudflare.com/learning/dns/what-is-dns/",
  },
].map((tech) => ({
  ...tech,
  grade: getTechGrade(tech.level),
}));

export const CATEGORY_CONFIG: Record<
  string,
  { color: string; bgClass: string; hoverClass: string }
> = {
  // ---------------- Languages ----------------
  Languages: {
    color: "#FF6B6B", // red-orange
    bgClass: "bg-gradient-to-r from-red-400 to-orange-400",
    hoverClass: "hover:bg-red-400/20",
  },
  // ----------------------------- Mobile Development -----------------------------
  "Mobile Development": {
    color: "#61DBFB",
    bgClass: "bg-gradient-to-r from-cyan-400 to-blue-500",
    hoverClass: "hover:bg-cyan-400/20",
  },

  // ---------------- Frontend ----------------
  Frontend: {
    color: "#4D79FF", // blue
    bgClass: "bg-gradient-to-r from-blue-400 to-indigo-500",
    hoverClass: "hover:bg-blue-400/20",
  },

  // ---------------- Backend ----------------
  Backend: {
    color: "#33CC33", // green
    bgClass: "bg-gradient-to-r from-green-400 to-emerald-500",
    hoverClass: "hover:bg-green-400/20",
  },

  // ---------------- Database ----------------
  Database: {
    color: "#FF9933", // orange
    bgClass: "bg-gradient-to-r from-orange-400 to-yellow-400",
    hoverClass: "hover:bg-orange-400/20",
  },

  // ---------------- DevOps ----------------
  DevOps: {
    color: "#FF6600", // darker orange
    bgClass: "bg-gradient-to-r from-orange-500 to-red-500",
    hoverClass: "hover:bg-orange-500/20",
  },

  // ---------------- Cloud Platforms ----------------
  "Cloud Platforms": {
    color: "#1E90FF",
    bgClass: "bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-500",
    hoverClass: "hover:bg-blue-500/30",
  },

  // ---------------- Version Control ----------------
  "Version Control": {
    color: "#8A2BE2", // blue violet
    bgClass: "bg-gradient-to-r from-purple-400 to-indigo-500",
    hoverClass: "hover:bg-purple-400/20",
  },

  // ---------------- Auth / Security ----------------
  Auth: {
    color: "#FF1493", // deep pink
    bgClass: "bg-gradient-to-r from-pink-500 to-rose-600",
    hoverClass: "hover:bg-pink-500/20",
  },

  // ---------------- Testing ----------------
  Testing: {
    color: "#DC143C", // crimson
    bgClass: "bg-gradient-to-r from-red-600 to-rose-700",
    hoverClass: "hover:bg-red-600/20",
  },

  // ---------------- Operating System ----------------
  "Operating System": {
    color: "#FFA500", // orange
    bgClass: "bg-gradient-to-r from-yellow-400 to-orange-500",
    hoverClass: "hover:bg-yellow-400/20",
  },

  // ---------------- Tools ----------------
  Tools: {
    color: "#00CED1", // dark turquoise
    bgClass: "bg-gradient-to-r from-teal-400 to-cyan-500",
    hoverClass: "hover:bg-teal-400/20",
  },

  // ---------------- APIs / Protocols ----------------
  "APIs Protocols": {
    color: "#FF4500", // orange-red
    bgClass: "bg-gradient-to-r from-orange-500 to-red-500",
    hoverClass: "hover:bg-orange-500/20",
  },

  // ---------------- Analytics / Monitoring ----------------
  "Analytics Monitoring": {
    color: "#20B2AA", // light sea green
    bgClass: "bg-gradient-to-r from-teal-400 to-green-400",
    hoverClass: "hover:bg-teal-400/20",
  },

  // ---------------- Design ----------------
  Design: {
    color: "#FF69B4", // hot pink
    bgClass: "bg-gradient-to-r from-pink-500 to-rose-500",
    hoverClass: "hover:bg-pink-500/20",
  },
  // ----------------------------- Payment Integrations -----------------------------
  "Payment Integrations": {
    color: "#635BFF",
    bgClass: "bg-gradient-to-r from-purple-500 to-indigo-600",
    hoverClass: "hover:bg-purple-500/20",
  },
  // ----------------------------- Monitoring -----------------------------
  Monitoring: {
    color: "#362D59",
    bgClass: "bg-gradient-to-r from-purple-600 to-indigo-700",
    hoverClass: "hover:bg-purple-600/20",
  },
  // ----------------------------- Email Services -----------------------------
  "Email Services": {
    color: "#1A82E2",
    bgClass: "bg-gradient-to-r from-blue-500 to-cyan-500",
    hoverClass: "hover:bg-blue-500/20",
  }, // ----------------------------- Performance & Optimization -----------------------------
  "Performance & Optimization": {
    color: "#FF6B6B",
    bgClass: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500",
    hoverClass: "hover:bg-orange-400/20",
  },

  // ----------------------------- Web Fundamentals -----------------------------
  "Web Fundamentals": {
    color: "#4A90E2",
    bgClass: "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600",
    hoverClass: "hover:bg-blue-500/20",
  },
};
