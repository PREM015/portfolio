export const expandableCards = [
  {
    description: "Technical Writing",
    title: "Blog Articles",
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    ctaText: "Read",
    ctaLink: "#",
    content: () => (
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
        I write in-depth technical articles about web development, performance optimization,
        and best practices. My articles have been featured on Dev.to and Medium with over
        10,000+ reads. Topics include React optimization, Next.js tips, TypeScript patterns,
        and full-stack development workflows.
      </p>
    ),
  },
  {
    description: "Video Tutorials",
    title: "YouTube Content",
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    ctaText: "Watch",
    ctaLink: "#",
    content: () => (
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
        Creating beginner-friendly coding tutorials on YouTube. Covering topics from
        HTML/CSS basics to advanced React patterns. My channel has helped thousands of
        developers learn web development with practical, real-world projects.
      </p>
    ),
  },
  {
    description: "Open Source",
    title: "GitHub Projects",
    src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    ctaText: "Explore",
    ctaLink: "#",
    content: () => (
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
        Active contributor to open-source projects with 10+ merged PRs in popular repositories.
        I've built and maintain several npm packages used by the community.
      </p>
    ),
  },
  {
    description: "Community",
    title: "Mentorship",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
        Mentoring junior developers through code reviews, pair programming sessions, and
        career guidance. I've helped 20+ developers land their first tech job.
      </p>
    ),
  },
];