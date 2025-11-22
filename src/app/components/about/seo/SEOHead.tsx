"use client";

import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

// ==================== INTERFACES ====================
interface SEOHeadProps {
  // Core SEO
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  canonical?: string;
  
  // Content Type
  type?: "website" | "article" | "profile" | "product" | "book" | "music" | "video";
  
  // Article-specific
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  section?: string;
  tags?: string[];
  
  // Localization
  locale?: string;
  alternateLocales?: string[];
  
  // Site Info
  siteName?: string;
  
  // Social Media
  twitterHandle?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  facebookAppId?: string;
  
  // Robots & Indexing
  noindex?: boolean;
  nofollow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  maxImagePreview?: "none" | "standard" | "large";
  maxSnippet?: number;
  maxVideoPreview?: number;
  
  // Structured Data
  jsonLd?: object | object[];
  
  // Geographic
  geo?: {
    position?: string;
    placename?: string;
    region?: string;
  };
  
  // Additional
  category?: string;
  copyright?: string;
  rating?: string;
  referrer?: string;
}

// ==================== DEFAULT SEO DATA ====================
const DEFAULT_SEO = {
  title: "Raj Prem | Full Stack Developer & UI/UX Designer Portfolio",
  description:
    "Passionate Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, TypeScript, and modern web technologies. Specialized in building scalable, high-performance web applications with exceptional user experiences. Available for freelance projects and collaborations.",
  keywords: [
    // Personal Brand
    "Raj Prem",
    "Raj Prem Portfolio",
    "Raj Prem Developer",
    
    // Job Titles
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Web Developer",
    "UI/UX Developer",
    
    // Technologies - Frontend
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass",
    "Material-UI",
    "Shadcn UI",
    "Framer Motion",
    "Redux",
    "Redux Toolkit",
    "Zustand",
    "React Query",
    "SWR",
    
    // Technologies - Backend
    "Node.js",
    "Express.js",
    "Nest.js",
    "GraphQL",
    "REST API",
    "tRPC",
    "Prisma",
    "Mongoose",
    
    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Supabase",
    "Firebase",
    
    // Cloud & DevOps
    "AWS",
    "Vercel",
    "Netlify",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    
    // Design & UX
    "UI/UX Design",
    "Responsive Design",
    "Mobile-First Design",
    "Accessibility",
    "WCAG Compliance",
    "Figma",
  
    
    // Methodologies
    "Agile Development",
    "Scrum",
    "Test-Driven Development",
    "Clean Code",
    "SOLID Principles",
    
    // Optimization
    "Performance Optimization",
    "SEO Optimization",
    "Web Vitals",
    "Lighthouse",
    
    // Services
    "Freelance Developer",
    "Remote Developer",
    "Contract Developer",
    "Web Development Services",
    "Custom Web Applications",
    "E-commerce Development",
    "SaaS Development",
    
    // Tools
    "Git",
    "VS Code",
    "Postman",
    "Webpack",
    "Vite",
    "ESLint",
    "Prettier",
    
    // Additional
    "Portfolio",
    "Open Source Contributor",
    "Tech Blog",
    "Code Mentor",
  ],
  author: "Raj Prem",
  image: "/og-image.jpg",
  url: "https://rajprem.vercel.app",
  siteName: "Raj Prem - Full Stack Developer Portfolio",
  twitterHandle: "@rajprem",
  facebookAppId: "",
  locale: "en_US",
  type: "profile" as const,
  category: "Technology",
  copyright: `© ${new Date().getFullYear()} Raj Prem. All rights reserved.`,
  rating: "general",
};

// ==================== COMPONENT ====================
export default function SEOHead({
  // Core SEO
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  author = DEFAULT_SEO.author,
  image = DEFAULT_SEO.image,
  url,
  canonical,
  
  // Content Type
  type = DEFAULT_SEO.type,
  
  // Article-specific
  publishedTime,
  modifiedTime,
  expirationTime,
  section,
  tags = [],
  
  // Localization
  locale = DEFAULT_SEO.locale,
  alternateLocales = [],
  
  // Site Info
  siteName = DEFAULT_SEO.siteName,
  
  // Social Media
  twitterHandle = DEFAULT_SEO.twitterHandle,
  twitterCard = "summary_large_image",
  facebookAppId = DEFAULT_SEO.facebookAppId,
  
  // Robots & Indexing
  noindex = false,
  nofollow = false,
  noarchive = false,
  nosnippet = false,
  noimageindex = false,
  maxImagePreview = "large",
  maxSnippet = -1,
  maxVideoPreview = -1,
  
  // Structured Data
  jsonLd,
  
  // Geographic
  geo,
  
  // Additional
  category = DEFAULT_SEO.category,
  copyright = DEFAULT_SEO.copyright,
  rating = DEFAULT_SEO.rating,
  referrer = "origin-when-cross-origin",
}: SEOHeadProps) {
  const pathname = usePathname();

  // ========== URL CONSTRUCTION ==========
  const baseUrl = "https://rajprem.vercel.app";
  const fullUrl = url || `${baseUrl}${pathname}`;
  const fullImageUrl = image?.startsWith("http") ? image : `${baseUrl}${image}`;
  const canonicalUrl = canonical || fullUrl;

  // ========== ROBOTS META TAG ==========
  const robotsDirectives = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
    noarchive && "noarchive",
    nosnippet && "nosnippet",
    noimageindex && "noimageindex",
    maxImagePreview !== "large" && `max-image-preview:${maxImagePreview}`,
    maxSnippet !== -1 && `max-snippet:${maxSnippet}`,
    maxVideoPreview !== -1 && `max-video-preview:${maxVideoPreview}`,
  ]
    .filter(Boolean)
    .join(", ");

  // ========== KEYWORDS ==========
  const allKeywords = [...keywords, ...tags].join(", ");

  // ========== STRUCTURED DATA (JSON-LD) ==========
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    url: fullUrl,
    image: fullImageUrl,
    jobTitle: "Full Stack Developer",
    description: description,
    sameAs: [
      "https://github.com/PREM015",
      "https://linkedin.com/in/rajprem",
      "https://twitter.com/rajprem",
      "https://instagram.com/rajprem",
      "https://facebook.com/rajprem",
      "https://youtube.com/@rajprem",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: keywords.slice(0, 15),
    address: geo?.region
      ? {
          "@type": "PostalAddress",
          addressRegion: geo.region,
          addressCountry: "IN",
        }
      : undefined,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: locale.replace("_", "-"),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      pathname !== "/"
        ? {
            "@type": "ListItem",
            position: 2,
            name: pathname.split("/")[1]?.charAt(0).toUpperCase() + pathname.split("/")[1]?.slice(1),
            item: fullUrl,
          }
        : null,
    ].filter(Boolean),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://github.com/PREM015",
      "https://linkedin.com/in/rajprem",
      "https://twitter.com/rajprem",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
    breadcrumb: breadcrumbSchema,
  };

  const allSchemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [personSchema, websiteSchema, breadcrumbSchema, organizationSchema, profilePageSchema];

  return (
    <Head>
      {/* ========== PRIMARY META TAGS ========== */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="creator" content={author} />
      <meta name="publisher" content={siteName} />
      <meta name="robots" content={robotsDirectives} />
      <meta name="googlebot" content={robotsDirectives} />
      <meta name="bingbot" content={robotsDirectives} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ========== CATEGORY & CLASSIFICATION ========== */}
      <meta name="category" content={category} />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="global" />
      <meta name="rating" content={rating} />
      <meta name="copyright" content={copyright} />

      {/* ========== GEOGRAPHIC METADATA ========== */}
      {geo?.position && <meta name="geo.position" content={geo.position} />}
      {geo?.placename && <meta name="geo.placename" content={geo.placename} />}
      {geo?.region && <meta name="geo.region" content={geo.region} />}
      <meta name="ICBM" content={geo?.position || ""} />

      {/* ========== OPEN GRAPH / FACEBOOK ========== */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((altLocale, idx) => (
        <meta key={idx} property="og:locale:alternate" content={altLocale} />
      ))}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}

      {/* ========== ARTICLE-SPECIFIC OG TAGS ========== */}
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {expirationTime && <meta property="article:expiration_time" content={expirationTime} />}
          {section && <meta property="article:section" content={section} />}
          <meta property="article:author" content={author} />
          {tags.map((tag, idx) => (
            <meta key={idx} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* ========== TWITTER CARD ========== */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={author} />
      <meta name="twitter:label2" content="Est. reading time" />
      <meta name="twitter:data2" content="5 minutes" />

      {/* ========== ADDITIONAL META TAGS ========== */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="audience" content="all" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content={referrer} />

      {/* ========== THEME & MOBILE ========== */}
      <meta name="theme-color" content="#05060a" />
      <meta name="msapplication-navbutton-color" content="#05060a" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />

      {/* ========== MICROSOFT TAGS ========== */}
      <meta name="msapplication-TileColor" content="#05060a" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tooltip" content={description} />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-tap-highlight" content="no" />

      {/* ========== FAVICONS & ICONS ========== */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#05060a" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* ========== PRECONNECT & DNS PREFETCH ========== */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

      {/* ========== ALTERNATE LANGUAGES ========== */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      {alternateLocales.map((altLocale, idx) => (
        <link
          key={idx}
          rel="alternate"
          hrefLang={altLocale.toLowerCase().replace("_", "-")}
          href={`${baseUrl}/${altLocale.split("_")[0]}`}
        />
      ))}

      {/* ========== STRUCTURED DATA (JSON-LD) ========== */}
      {allSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ========== VERIFICATION TAGS ========== */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="p:domain_verify" content="your-pinterest-verification-code" />
      <meta name="alexaVerifyID" content="your-alexa-verification-code" />
      <meta name="norton-safeweb-site-verification" content="your-norton-code" />

      {/* ========== SECURITY HEADERS ========== */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

      {/* ========== PERFORMANCE HINTS ========== */}
      <link rel="preload" as="image" href={fullImageUrl} />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/projects" />
      <link rel="prefetch" href="/contact" />
      <link rel="prerender" href="/projects" />

      {/* ========== PWA RELATED ========== */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />

      {/* ========== BROWSER SPECIFIC ========== */}
      <meta name="apple-mobile-web-app-status-bar" content="#05060a" />
      <meta name="msapplication-task" content="name=Projects;action-uri=/projects;icon-uri=/favicon.ico" />
      <meta name="msapplication-task" content="name=About;action-uri=/about;icon-uri=/favicon.ico" />
      <meta name="msapplication-task" content="name=Contact;action-uri=/contact;icon-uri=/favicon.ico" />
    </Head>
  );
}

// ==================== HELPER FUNCTIONS ====================
export function generateSEOProps(
  pageType: "home" | "about" | "projects" | "skills" | "experience" | "contact" | "faq"
) {
  const baseUrl = "https://rajprem.vercel.app";

  const seoConfig = {
    home: {
      title: "Raj Prem | Full Stack Developer & UI/UX Designer",
      description:
        "Welcome to Raj Prem's portfolio. Professional Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for freelance projects.",
      keywords: ["Portfolio", "Full Stack Developer", "Web Development", "Raj Prem"],
      url: baseUrl,
      type: "website" as const,
    },
    about: {
      title: "About Raj Prem | Full Stack Developer Journey & Skills",
      description:
        "Learn about Raj Prem's journey as a Full Stack Developer, technical skills, work experience, and passion for creating exceptional web applications.",
      keywords: ["About", "Developer Biography", "Skills", "Experience", "Career"],
      url: `${baseUrl}/about`,
      type: "profile" as const,
    },
    projects: {
      title: "Projects Portfolio | Raj Prem - Full Stack Developer Showcase",
      description:
        "Explore Raj Prem's latest web development projects, case studies, and technical showcases. See real-world applications built with React, Next.js, and modern technologies.",
      keywords: ["Projects", "Portfolio", "Case Studies", "Web Development", "Showcase"],
      url: `${baseUrl}/projects`,
      type: "website" as const,
    },
    skills: {
      title: "Technical Skills | Raj Prem - Full Stack Developer Expertise",
      description:
        "Comprehensive overview of Raj Prem's technical skills including React, Next.js, TypeScript, Node.js, and modern web development technologies.",
      keywords: ["Skills", "Technical Expertise", "Technologies", "Programming"],
      url: `${baseUrl}/skills`,
      type: "website" as const,
    },
    experience: {
      title: "Work Experience | Raj Prem - Professional Development Career",
      description:
        "Detailed work experience and professional journey of Raj Prem as a Full Stack Developer. View past projects, roles, and achievements.",
      keywords: ["Experience", "Work History", "Career", "Professional Background"],
      url: `${baseUrl}/experience`,
      type: "website" as const,
    },
    contact: {
      title: "Contact Raj Prem | Hire Full Stack Developer for Your Project",
      description:
        "Get in touch with Raj Prem for freelance opportunities, collaborations, or project inquiries. Available for remote work and consulting.",
      keywords: ["Contact", "Hire Developer", "Freelance", "Collaboration", "Remote Work"],
      url: `${baseUrl}/contact`,
      type: "website" as const,
    },
    faq: {
      title: "FAQ | Frequently Asked Questions - Raj Prem",
      description:
        "Find answers to commonly asked questions about Raj Prem's services, technologies, pricing, and collaboration process.",
      keywords: ["FAQ", "Questions", "Help", "Support"],
      url: `${baseUrl}/faq`,
      type: "website" as const,
    },
  };

  return seoConfig[pageType] || seoConfig.about;
}

// Export type for external use
export type { SEOHeadProps };