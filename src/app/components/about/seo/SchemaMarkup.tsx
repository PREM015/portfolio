"use client";

import React from "react";
import { usePathname } from "next/navigation";

// ==================== INTERFACES ====================
interface SchemaMarkupProps {
  type?: "Person" | "Organization" | "WebSite" | "Article" | "Product" | "Event" | "FAQPage" | "BreadcrumbList" | "auto";
  data?: Partial<SchemaData>;
  additionalSchemas?: object[];
}

interface SchemaData {
  // Person Schema
  name: string;
  givenName?: string;
  familyName?: string;
  alternateName?: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  telephone?: string;
  
  // Social Media
  sameAs: string[];
  
  // Professional Info
  worksFor?: {
    name: string;
    url?: string;
  };
  knowsAbout?: string[];
  hasOccupation?: {
    name: string;
    description?: string;
  };
  alumniOf?: {
    name: string;
    url?: string;
  };
  
  // Address
  address?: {
    addressCountry: string;
    addressRegion?: string;
    addressLocality?: string;
  };
  
  // Skills & Expertise
  skills?: string[];
  
  // Awards & Recognition
  award?: string[];
  
  // Website Schema
  siteName?: string;
  potentialAction?: object;
  
  // Article Schema
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  publisher?: {
    name: string;
    logo: string;
  };
  
  // Organization Schema
  logo?: string;
  foundingDate?: string;
  founders?: string[];
  
  // Product Schema
  brand?: string;
  offers?: object;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  
  // Event Schema
  startDate?: string;
  endDate?: string;
  location?: object;
  
  // FAQ Schema
  questions?: Array<{
    question: string;
    answer: string;
  }>;
}

// ==================== DEFAULT DATA ====================
const DEFAULT_DATA: SchemaData = {
  // Personal Info
  name: "Raj Prem",
  givenName: "Raj",
  familyName: "Prem",
  alternateName: "RajPrem",
  jobTitle: "Full Stack Developer",
  description: "Passionate Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, and modern web technologies. Specialized in building scalable, high-performance web applications.",
  image: "https://rajprem.vercel.app/profile.jpg",
  url: "https://rajprem.vercel.app",
  email: "contact@rajprem.dev",
  telephone: "+91-XXXXXXXXXX",
  
  // Social Media
  sameAs: [
    "https://github.com/rajprem",
    "https://linkedin.com/in/rajprem",
    "https://twitter.com/rajprem",
    "https://instagram.com/rajprem",
    "https://facebook.com/rajprem",
    "https://youtube.com/@rajprem",
    "https://dev.to/rajprem",
    "https://stackoverflow.com/users/rajprem",
  ],
  
  // Professional Info
  worksFor: {
    name: "Freelance",
    url: "https://rajprem.vercel.app",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Development",
  ],
  hasOccupation: {
    name: "Full Stack Developer",
    description: "Develops and maintains web applications using modern technologies",
  },
  alumniOf: {
    name: "Your University Name",
    url: "https://university.edu",
  },
  
  // Address
  address: {
    addressCountry: "IN",
    addressRegion: "Your State",
    addressLocality: "Your City",
  },
  
  // Skills
  skills: [
    "React Development",
    "Next.js Development",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API",
    "GraphQL",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "SEO Optimization",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
  ],
  
  // Awards
  award: [
    "Best Developer Award 2023",
    "Innovation Excellence 2022",
  ],
  
  // Website Info
  siteName: "Raj Prem - Full Stack Developer Portfolio",
};

// ==================== SCHEMA GENERATORS ====================
const generatePersonSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${data.url}#person`,
  name: data.name,
  givenName: data.givenName,
  familyName: data.familyName,
  alternateName: data.alternateName,
  image: {
    "@type": "ImageObject",
    url: data.image,
    width: 800,
    height: 800,
  },
  url: data.url,
  email: data.email,
  telephone: data.telephone,
  jobTitle: data.jobTitle,
  description: data.description,
  sameAs: data.sameAs,
  worksFor: data.worksFor ? {
    "@type": "Organization",
    name: data.worksFor.name,
    url: data.worksFor.url,
  } : undefined,
  knowsAbout: data.knowsAbout,
  hasOccupation: data.hasOccupation ? {
    "@type": "Occupation",
    name: data.hasOccupation.name,
    description: data.hasOccupation.description,
  } : undefined,
  alumniOf: data.alumniOf ? {
    "@type": "EducationalOrganization",
    name: data.alumniOf.name,
    url: data.alumniOf.url,
  } : undefined,
  address: data.address ? {
    "@type": "PostalAddress",
    addressCountry: data.address.addressCountry,
    addressRegion: data.address.addressRegion,
    addressLocality: data.address.addressLocality,
  } : undefined,
  knowsLanguage: ["English", "Hindi"],
  award: data.award,
});

const generateOrganizationSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${data.url}#organization`,
  name: data.siteName || data.name,
  url: data.url,
  logo: {
    "@type": "ImageObject",
    url: data.logo || `${data.url}/logo.png`,
    width: 512,
    height: 512,
  },
  image: data.image,
  description: data.description,
  sameAs: data.sameAs,
  foundingDate: data.foundingDate,
  founder: data.founders?.map(founder => ({
    "@type": "Person",
    name: founder,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    email: data.email,
    telephone: data.telephone,
    contactType: "Customer Service",
    availableLanguage: ["English", "Hindi"],
  },
});

const generateWebSiteSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${data.url}#website`,
  name: data.siteName || data.name,
  url: data.url,
  description: data.description,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: data.name,
  },
  potentialAction: data.potentialAction || {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${data.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: data.name,
    logo: {
      "@type": "ImageObject",
      url: data.logo || `${data.url}/logo.png`,
    },
  },
});

const generateBreadcrumbSchema = (data: SchemaData, pathname: string) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: data.url,
    },
  ];

  pathSegments.forEach((segment, index) => {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      item: `${data.url}/${pathSegments.slice(0, index + 1).join("/")}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${data.url}${pathname}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };
};

const generateArticleSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${data.url}#article`,
  headline: data.headline,
  description: data.description,
  image: data.image,
  datePublished: data.datePublished,
  dateModified: data.dateModified || data.datePublished,
  author: {
    "@type": "Person",
    name: data.author || data.name,
    url: data.url,
  },
  publisher: {
    "@type": "Organization",
    name: data.publisher?.name || data.name,
    logo: {
      "@type": "ImageObject",
      url: data.publisher?.logo || `${data.url}/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": data.url,
  },
});

const generateProductSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${data.url}#product`,
  name: data.name,
  description: data.description,
  image: data.image,
  brand: {
    "@type": "Brand",
    name: data.brand || data.name,
  },
  offers: data.offers || {
    "@type": "Offer",
    url: data.url,
    priceCurrency: "USD",
    price: "0",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: data.aggregateRating ? {
    "@type": "AggregateRating",
    ratingValue: data.aggregateRating.ratingValue,
    reviewCount: data.aggregateRating.reviewCount,
  } : undefined,
});

const generateEventSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${data.url}#event`,
  name: data.name,
  description: data.description,
  image: data.image,
  startDate: data.startDate,
  endDate: data.endDate,
  location: data.location || {
    "@type": "VirtualLocation",
    url: data.url,
  },
  organizer: {
    "@type": "Person",
    name: data.name,
    url: data.url,
  },
});

const generateFAQSchema = (data: SchemaData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${data.url}#faq`,
  mainEntity: data.questions?.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })) || [],
});

const generateProfilePageSchema = (data: SchemaData, pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${data.url}${pathname}#profilepage`,
  mainEntity: {
    "@type": "Person",
    name: data.name,
    url: data.url,
    image: data.image,
    description: data.description,
    sameAs: data.sameAs,
  },
  breadcrumb: generateBreadcrumbSchema(data, pathname),
});

const generateWebPageSchema = (data: SchemaData, pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${data.url}${pathname}#webpage`,
  url: `${data.url}${pathname}`,
  name: data.name,
  description: data.description,
  isPartOf: {
    "@id": `${data.url}#website`,
  },
  about: {
    "@id": `${data.url}#person`,
  },
  author: {
    "@id": `${data.url}#person`,
  },
  breadcrumb: {
    "@id": `${data.url}${pathname}#breadcrumb`,
  },
  inLanguage: "en-US",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: [`${data.url}${pathname}`],
    },
  ],
});

// ==================== COMPONENT ====================
export default function SchemaMarkup({
  type = "auto",
  data = {},
  additionalSchemas = [],
}: SchemaMarkupProps) {
  const pathname = usePathname();
  
  // Merge with default data
  const mergedData: SchemaData = { ...DEFAULT_DATA, ...data };

  // Auto-detect schema type based on pathname
  let detectedType = type;
  if (type === "auto") {
    if (pathname === "/") detectedType = "WebSite";
    else if (pathname === "/about") detectedType = "Person";
    else if (pathname.includes("/blog/") || pathname.includes("/article/")) detectedType = "Article";
    else if (pathname === "/faq") detectedType = "FAQPage";
    else if (pathname.includes("/event")) detectedType = "Event";
    else if (pathname.includes("/product")) detectedType = "Product";
    else detectedType = "Person";
  }

  // Generate schemas based on type
  const schemas: object[] = [];

  // Always include basic schemas
  schemas.push(generatePersonSchema(mergedData));
  schemas.push(generateWebSiteSchema(mergedData));
  schemas.push(generateOrganizationSchema(mergedData));
  schemas.push(generateBreadcrumbSchema(mergedData, pathname));
  schemas.push(generateWebPageSchema(mergedData, pathname));

  // Add type-specific schema
  switch (detectedType) {
    case "Person":
      schemas.push(generateProfilePageSchema(mergedData, pathname));
      break;
    case "Article":
      schemas.push(generateArticleSchema(mergedData));
      break;
    case "Product":
      schemas.push(generateProductSchema(mergedData));
      break;
    case "Event":
      schemas.push(generateEventSchema(mergedData));
      break;
    case "FAQPage":
      schemas.push(generateFAQSchema(mergedData));
      break;
  }

  // Add additional schemas
  if (additionalSchemas.length > 0) {
    schemas.push(...additionalSchemas);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0), // Minified for production
          }}
        />
      ))}
    </>
  );
}

// ==================== PRESET CONFIGURATIONS ====================
export const SchemaPresets = {
  aboutPage: {
    type: "Person" as const,
    data: {
      jobTitle: "Full Stack Developer",
      description: "Experienced developer specializing in modern web technologies",
    },
  },

  homepage: {
    type: "WebSite" as const,
    data: {
      siteName: "Raj Prem Portfolio",
    },
  },

  blogPost: (title: string, publishedDate: string) => ({
    type: "Article" as const,
    data: {
      headline: title,
      datePublished: publishedDate,
      dateModified: publishedDate,
    },
  }),

  faqPage: (questions: Array<{ question: string; answer: string }>) => ({
    type: "FAQPage" as const,
    data: {
      questions,
    },
  }),

  projectPage: (projectName: string, description: string) => ({
    type: "Product" as const,
    data: {
      name: projectName,
      description: description,
    },
  }),
};

// ==================== HELPER FUNCTIONS ====================
export function generateCustomSchema(schemaType: string, customData: object) {
  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    ...customData,
  };
}

export function validateSchema(schema: object): boolean {
  try {
    JSON.stringify(schema);
    return true;
  } catch (error) {
    console.error("Invalid schema:", error);
    return false;
  }
}

// ==================== EXPORT TYPES ====================
export type { SchemaMarkupProps, SchemaData };