export const beforeAfterComparison = {
  before: {
    title: "Before Optimization",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    metrics: [
      { label: "Load Time", value: "4.5s", bad: true },
      { label: "Lighthouse Score", value: "45/100", bad: true },
      { label: "Bundle Size", value: "2.5MB", bad: true },
    ],
  },
  after: {
    title: "After Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    metrics: [
      { label: "Load Time", value: "0.8s", good: true },
      { label: "Lighthouse Score", value: "98/100", good: true },
      { label: "Bundle Size", value: "350KB", good: true },
    ],
  },
};