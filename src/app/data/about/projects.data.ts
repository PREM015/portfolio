export const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with 10K+ users",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    metrics: {
      users: "10,000+",
      revenue: "$50K+",
      performance: "98/100",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rajprem/project",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat with AI-powered responses",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    tech: ["React", "OpenAI", "WebSocket", "Redis"],
    metrics: {
      messages: "100K+",
      responseTime: "< 200ms",
      accuracy: "95%",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rajprem/ai-chat",
  },
  {
    id: 3,
    title: "Developer Portfolio CMS",
    description: "Custom CMS for portfolio management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    metrics: {
      templates: "50+",
      downloads: "5K+",
      rating: "4.9/5",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rajprem/portfolio-cms",
  },
];

export const projectSlides = featuredProjects.map(project => ({
  title: project.title,
  button: "View Case Study",
  src: project.image,
}));