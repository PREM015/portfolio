"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { BackgroundGradient } from "@/app/components/ui/f"; // modal glow

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "I primarily use React, Next.js, TypeScript, TailwindCSS, and Node.js for building modern web applications. I focus on creating responsive and performant UIs.",
  },
  {
    question: "Can I hire you for freelance work?",
    answer:
      "Yes! I am open to freelance projects. Please reach out via the contact form or email, and we can discuss your requirements in detail.",
  },
  {
    question: "Do you provide backend development?",
    answer:
      "Yes, I work with Node.js, Express, and databases like PostgreSQL and MongoDB to create full-stack applications with secure APIs and scalable architecture.",
  },
  {
    question: "Where are you based?",
    answer: "I am based in India but available for remote projects worldwide.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me via the contact page, email at rprem3096@gmail.com, or connect on LinkedIn for professional inquiries.",
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes! I can design modern and user-friendly interfaces with a focus on usability and web performance.",
  },
  {
    question: "What is your development workflow?",
    answer:
      "I follow Agile methodology with version control (Git), testing, and continuous integration to ensure high-quality deliverables.",
  },
  {
    question: "Can you optimize website performance?",
    answer:
      "Absolutely! I specialize in optimizing web apps using techniques like code-splitting, lazy loading, caching, and image optimization.",
  },
];

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState<FAQItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => setActiveFAQ(null));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-20 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-center mb-16 drop-shadow-lg">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.question}
            layout
            className="relative rounded-2xl cursor-pointer overflow-hidden"
            onClick={() => setActiveFAQ(faq)}
          >
            {/* Glowing hover effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl z-[1] opacity-0 hover:opacity-60 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at 0 100%, #00ccb1, transparent), radial-gradient(circle at 100% 0, #7b61ff, transparent), radial-gradient(circle at 100% 100%, #ffc414, transparent), radial-gradient(circle at 0 0, #1ca0fb, #141316)",
                filter: "blur(15px)",
              }}
            />

            <motion.div
              layout
              className="relative z-10 bg-neutral-900 border border-neutral-800 px-6 py-5 text-gray-100 text-lg sm:text-xl font-medium shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 rounded-2xl"
            >
              {faq.question}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Expanded FAQ */}
      <AnimatePresence>
        {activeFAQ && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-20"
            />
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 grid place-items-center px-4"
            >
              <BackgroundGradient containerClassName="w-full max-w-lg">
                <div
                  ref={modalRef}
                  className="bg-neutral-950 rounded-3xl shadow-2xl overflow-hidden relative"
                >
                  <div className="flex justify-end p-4">
                    <button
                      className="text-gray-400 hover:text-white text-2xl font-bold"
                      onClick={() => setActiveFAQ(null)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="px-8 pb-8 text-gray-200 text-base sm:text-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                      {activeFAQ.question}
                    </h2>
                    <p>{activeFAQ.answer}</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </div>
  );
}
