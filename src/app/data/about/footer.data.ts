// ============================================
// FILE: src/app/data/about/footer.data.ts
// ============================================

export const footerSectionData = {
  sections: [
    {
      title: "Quick Links",
      links: [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Projects", href: "/projects" },
        { text: "Blog", href: "/blog" },
        { text: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Social",
      links: [
        { text: "GitHub", href: "https://github.com/rajprem", icon: "github" },
        { text: "LinkedIn", href: "https://linkedin.com/in/rajprem", icon: "linkedin" },
        { text: "Twitter", href: "https://twitter.com/rajprem", icon: "twitter" }
      ]
    }
  ],
  copyright: "© 2024 Raj Prem. All rights reserved.",
  builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
};