"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { BackgroundGradient } from "@/app/components/ui/f";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies do you use for web development?",
    answer:
      "I primarily use React, Next.js, TypeScript, TailwindCSS, and Node.js for building modern web applications. I focus on creating responsive and performant UIs with cutting-edge technologies and best practices.",
    category: "Tech Stack",
    icon: "⚡",
  },
  {
    question: "Can I hire you for freelance work?",
    answer:
      "Yes! I am open to freelance projects. Please reach out via the contact form or email, and we can discuss your requirements in detail. I offer flexible engagement models to suit your project needs.",
    category: "Services",
    icon: "💼",
  },
  {
    question: "Do you provide backend development?",
    answer:
      "Yes, I work with Node.js, Express, and databases like PostgreSQL and MongoDB to create full-stack applications with secure APIs and scalable architecture. I can handle everything from database design to API implementation.",
    category: "Tech Stack",
    icon: "🔧",
  },
  {
    question: "Where are you based?",
    answer: "I am based in India but available for remote projects worldwide. I work across different time zones and have experience collaborating with international teams.",
    category: "About",
    icon: "🌍",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me via the contact page, email at rprem3096@gmail.com, or connect on LinkedIn for professional inquiries. I typically respond within 24 hours.",
    category: "Contact",
    icon: "📧",
  },
  {
    question: "Do you offer UI/UX design services?",
    answer:
      "Yes! I can design modern and user-friendly interfaces with a focus on usability and web performance. I use tools like Figma and follow design systems for consistent, beautiful interfaces.",
    category: "Services",
    icon: "🎨",
  },
  {
    question: "What is your development workflow?",
    answer:
      "I follow Agile methodology with version control (Git), testing, and continuous integration to ensure high-quality deliverables. My workflow includes code reviews, automated testing, and deployment pipelines.",
    category: "Process",
    icon: "🔄",
  },
  {
    question: "Can you optimize website performance?",
    answer:
      "Absolutely! I specialize in optimizing web apps using techniques like code-splitting, lazy loading, caching, and image optimization. I can improve Core Web Vitals and overall site speed significantly.",
    category: "Services",
    icon: "🚀",
  },
];

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState<FAQItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const modalRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useOutsideClick(modalRef, () => setActiveFAQ(null));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
      
      {/* ==================== STYLES ==================== */}
      <style jsx global>{`
        /* Base Setup */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Animated Grid Background */
        @keyframes gridPulse {
          0%, 100% { 
            opacity: 0.02;
            transform: scale(1);
          }
          50% { 
            opacity: 0.06;
            transform: scale(1.01);
          }
        }

        .grid-background {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPulse 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        /* Floating Orbs */
        @keyframes floatOrb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(80px, -80px) scale(1.15);
            opacity: 0.5;
          }
          66% {
            transform: translate(-60px, 60px) scale(0.9);
            opacity: 0.4;
          }
        }

        .floating-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          animation: floatOrb ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* Text Shimmer */
        @keyframes textShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #06b6d4 0%,
            #3b82f6 20%,
            #8b5cf6 40%,
            #ec4899 60%,
            #f59e0b 80%,
            #06b6d4 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 5s linear infinite;
        }

        /* Neon Glow */
        .neon-text {
          text-shadow: 
            0 0 10px rgba(6, 182, 212, 0.5),
            0 0 20px rgba(6, 182, 212, 0.3),
            0 0 30px rgba(139, 92, 246, 0.3),
            0 0 40px rgba(236, 72, 153, 0.2);
        }

        /* Particle Float */
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .particle {
          position: fixed;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8), transparent);
          border-radius: 50%;
          animation: particleFloat linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* Search Glow */
        @keyframes searchGlow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(6, 182, 212, 0.2),
              inset 0 0 20px rgba(6, 182, 212, 0.05);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(139, 92, 246, 0.3),
              inset 0 0 30px rgba(139, 92, 246, 0.1);
          }
        }

        .search-input:focus {
          animation: searchGlow 3s ease-in-out infinite;
        }

        /* Category Chip */
        @keyframes chipPulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
          }
        }

        .category-active {
          animation: chipPulse 2s ease-in-out infinite;
        }

        /* Holographic Border */
        @keyframes holoBorder {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .holo-border {
          background: linear-gradient(
            90deg,
            rgba(6, 182, 212, 0.4),
            rgba(139, 92, 246, 0.4),
            rgba(236, 72, 153, 0.4),
            rgba(245, 158, 11, 0.4),
            rgba(6, 182, 212, 0.4)
          );
          background-size: 300% 300%;
          animation: holoBorder 4s ease infinite;
        }

        /* Card Hover Effect */
        @keyframes beamSweep {
          0% {
            transform: translateX(-150%) skewX(-15deg);
          }
          100% {
            transform: translateX(150%) skewX(-15deg);
          }
        }

        .hover-beam {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          animation: beamSweep 2.5s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .faq-card:hover .hover-beam {
          opacity: 1;
        }

        /* 3D Card Transform */
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out;
        }

        /* Icon Glitch */
        @keyframes iconGlitch {
          0%, 100% {
            text-shadow: 
              2px 2px 0 rgba(6, 182, 212, 0.4),
              -2px -2px 0 rgba(236, 72, 153, 0.4);
          }
          33% {
            text-shadow: 
              -2px 2px 0 rgba(139, 92, 246, 0.4),
              2px -2px 0 rgba(245, 158, 11, 0.4);
          }
          66% {
            text-shadow: 
              2px -2px 0 rgba(6, 182, 212, 0.4),
              -2px 2px 0 rgba(236, 72, 153, 0.4);
          }
        }

        .icon-glow:hover {
          animation: iconGlitch 0.4s ease-in-out 2;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .grid-background {
            background-size: 40px 40px;
          }
          .floating-orb {
            filter: blur(70px);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, 
            rgba(6, 182, 212, 0.6),
            rgba(139, 92, 246, 0.6)
          );
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, 
            rgba(6, 182, 212, 0.8),
            rgba(236, 72, 153, 0.8)
          );
        }
      `}</style>

      {/* ==================== BACKGROUND ELEMENTS ==================== */}
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Grid */}
      <div className="grid-background" />

      {/* Floating Orbs */}
      <div className="floating-orb" style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%)',
        top: '5%',
        left: '5%',
        animationDuration: '25s'
      }} />
      <div className="floating-orb" style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 70%)',
        bottom: '10%',
        right: '5%',
        animationDuration: '30s',
        animationDelay: '-10s'
      }} />
      <div className="floating-orb" style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent 70%)',
        top: '50%',
        left: '50%',
        animationDuration: '35s',
        animationDelay: '-20s'
      }} />

      {/* Particle System */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 15}s`
          }}
        />
      ))}

      {/* ==================== CONTENT ==================== */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section - Properly Centered */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold shimmer-text neon-text mb-4 sm:mb-6 px-4"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Find answers to common questions about my services, tech stack, and workflow. 
            Can't find what you're looking for? Feel free to reach out!
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
        >
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-full pl-14 pr-12 py-4 sm:py-5 bg-neutral-900/60 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 text-base sm:text-lg"
            />
            {searchQuery && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
              >
                ✕
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12 px-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg category-active"
                  : "bg-neutral-800/60 text-gray-400 hover:bg-neutral-700/60 hover:text-white border border-neutral-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm sm:text-base font-medium backdrop-blur-sm">
            <span className="text-lg">📊</span>
            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'Question' : 'Questions'} Found
          </span>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 px-4 mb-16">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 sm:py-20"
            >
              <div className="text-6xl sm:text-7xl mb-4 sm:mb-6">🔍</div>
              <p className="text-gray-400 text-lg sm:text-xl">No questions found matching your search</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 rounded-xl text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative rounded-2xl cursor-pointer overflow-hidden faq-card card-3d group"
                onClick={() => setActiveFAQ(faq)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index && window.innerWidth > 768
                    ? `perspective(1000px) rotateX(${((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * 5}deg) rotateY(${((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 5}deg)`
                    : 'none'
                }}
              >
                {/* Holographic Border */}
                <div className="absolute inset-0 holo-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]">
                  <div className="w-full h-full bg-black rounded-2xl" />
                </div>

                {/* Hover Beam */}
                <div className="hover-beam" />

                {/* Card Content */}
                <div className="relative z-10 bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-5 sm:p-6 overflow-hidden">
                  
                  {/* Glow Effect on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"
                  />

                  <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="icon-glow text-4xl sm:text-5xl flex-shrink-0 mt-1"
                    >
                      {faq.icon}
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                          {faq.category}
                        </span>
                        
                        {/* Arrow Indicator */}
                        <motion.div
                          animate={{ 
                            x: hoveredIndex === index ? 5 : 0,
                            scale: hoveredIndex === index ? 1.2 : 1
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-cyan-400 text-xl sm:text-2xl"
                        >
                          →
                        </motion.div>
                      </div>

                      {/* Question */}
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
        >
          {[
            { label: "Total FAQs", value: faqs.length, icon: "❓" },
            { label: "Categories", value: categories.length - 1, icon: "📁" },
            { label: "Response Time", value: "24h", icon: "⏱️" },
            { label: "Satisfaction", value: "100%", icon: "⭐" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-5 sm:p-6 text-center group hover:border-cyan-500/50 transition-all duration-300"
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-2 sm:mb-3"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ==================== MODAL ==================== */}
      <AnimatePresence mode="wait">
        {activeFAQ && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  bounce: 0.3
                }}
                className="w-full max-w-3xl my-8"
              >
                <BackgroundGradient containerClassName="w-full">
                  <div
                    ref={modalRef}
                    className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-3xl overflow-hidden border border-neutral-700/50 shadow-2xl"
                  >
                    {/* Close Button */}
                    <div className="flex justify-end p-4 sm:p-6">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/20 border-2 border-red-500/50 text-red-400 hover:bg-red-500/30 hover:text-red-300 font-bold text-xl sm:text-2xl flex items-center justify-center transition-all duration-300"
                        onClick={() => setActiveFAQ(null)}
                      >
                        ×
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="px-6 sm:px-10 pb-8 sm:pb-10">
                      {/* Icon and Category */}
                      <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.2, 
                            type: "spring",
                            stiffness: 200
                          }}
                          className="text-6xl sm:text-7xl md:text-8xl"
                        >
                          {activeFAQ.icon}
                        </motion.div>
                        <div>
                          <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider"
                          >
                            {activeFAQ.category}
                          </motion.span>
                        </div>
                      </div>

                      {/* Question */}
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight"
                      >
                        {activeFAQ.question}
                      </motion.h2>

                      {/* Divider */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5 }}
                        className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6 sm:mb-8 origin-left"
                      />

                      {/* Answer */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10"
                      >
                        {activeFAQ.answer}
                      </motion.p>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white text-base sm:text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                          📧 Contact Me
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveFAQ(null)}
                          className="px-6 py-4 bg-neutral-800 border-2 border-neutral-700 rounded-xl font-bold text-gray-300 text-base sm:text-lg hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-300"
                        >
                          ← Back
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ==================== BACK TO TOP ==================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-6 right-6 z-30"
      >
        <motion.button
          whileHover={{ scale: 1.15, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg overflow-hidden"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 w-full h-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl">
            ↑
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-300" />
        </motion.button>
      </motion.div>
    </div>
  );
}