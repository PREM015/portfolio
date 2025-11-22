export const seoData = {
  title: "About Raj Prem | Full Stack Developer Journey & Expertise",
  description: "Discover Raj Prem's journey as a Full Stack Developer with 5+ years of experience in React, Next.js, TypeScript, and modern web technologies. Expert in building scalable applications.",
  keywords: [
    "Raj Prem",
    "Full Stack Developer About",
    "React Developer Profile",
    "Next.js Expert Biography",
    "Web Developer Story",
    "TypeScript Specialist",
    "Portfolio About Page",
    "Developer Experience",
  ],
  author: "Raj Prem",
  image: "https://rajprem.vercel.app/about-og-image.jpg",
  url: "https://rajprem.vercel.app/about",
  type: "profile" as const,
  canonical: "https://rajprem.vercel.app/about",
  locale: "en_US",
  alternateLocales: ["hi_IN", "es_ES"],
  twitterHandle: "@rajprem",
  twitterCard: "summary_large_image" as const,
  noindex: false,
  nofollow: false,
  maxImagePreview: "large" as const,
  geo: {
    position: "28.6139,77.2090",
    region: "IN-DL",
    placename: "New Delhi",
  },
};

export const schemaData = {
  type: "Person" as const,
  data: {
    name: "Raj Prem",
    givenName: "Raj",
    familyName: "Prem",
    jobTitle: "Senior Full Stack Developer",
    description: "Passionate Full Stack Developer with expertise in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    image: "https://rajprem.vercel.app/profile.jpg",
    url: "https://rajprem.vercel.app",
    email: "contact@rajprem.dev",
    sameAs: [
      "https://github.com/rajprem",
      "https://linkedin.com/in/rajprem",
      "https://twitter.com/rajprem",
      "https://instagram.com/rajprem",
    ],
    knowsAbout: [
      "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
      "MongoDB", "PostgreSQL", "Tailwind CSS", "UI/UX Design"
    ],
    skills: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "API Development",
      "Database Design",
      "Performance Optimization",
      "SEO Optimization",
    ],
    award: [
      "Best Developer Award 2023",
      "Innovation Excellence 2022",
    ],
  },
};

export const skipToMainData = {
  mainId: "main-content",
  position: "top-center" as const,
  theme: "auto" as const,
  showKeyboardHint: true,
  enableAnalytics: true,
  customText: "⚡ Skip to About Content",
  additionalSkipLinks: [
    { id: "hero-section", label: "Skip to Introduction", ariaLabel: "Skip to hero introduction" },
    { id: "skills-section", label: "Skip to Skills", ariaLabel: "Skip to technical skills" },
    { id: "projects-section", label: "Skip to Projects", ariaLabel: "Skip to project showcase" },
    { id: "contact-section", label: "Skip to Contact", ariaLabel: "Skip to contact form" },
  ],
};