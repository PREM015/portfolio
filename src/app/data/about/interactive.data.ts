// ==================== INTERACTIVE DATA ====================

export const quizQuestions = [
  {
    id: 1,
    question: "What type of project do you need?",
    options: ["Website", "Web App", "Mobile App", "API"],
  },
  {
    id: 2,
    question: "What's your timeline?",
    options: ["< 1 month", "1-3 months", "3-6 months", "6+ months"],
  },
];

export const projectCalculator = {
  features: [
    { name: "Authentication", cost: 500, time: 3 },
    { name: "Payment Integration", cost: 800, time: 5 },
    { name: "Admin Dashboard", cost: 1200, time: 7 },
    { name: "Real-time Features", cost: 1000, time: 6 },
  ],
};

export const roiCalculator = {
  metrics: [
    { label: "Monthly Revenue", multiplier: 12 },
    { label: "Cost Savings", multiplier: 1 },
    { label: "Time Saved (hours)", multiplier: 50 },
  ],
};

export const availabilitySlots = [
  { day: "Monday", slots: ["9:00 AM", "2:00 PM", "4:00 PM"] },
  { day: "Tuesday", slots: ["10:00 AM", "3:00 PM"] },
  { day: "Wednesday", slots: ["9:00 AM", "1:00 PM", "5:00 PM"] },
];

export const quickQuestions = [
  { id: 1, question: "How do I get started?", answer: "Just send me a message!" },
  { id: 2, question: "What are your rates?", answer: "Contact me for a custom quote" },
  { id: 3, question: "Do you offer support?", answer: "Yes, lifetime support included" },
];