"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@/app/components/ui/input";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [status, setStatus] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse follow only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY!,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch {
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <style jsx global>{`
        /* Performance optimized animations with will-change */
        
        /* Shooting Stars - Reduced on mobile */
        @keyframes shootingStar {
          0% {
            transform: translate3d(0, 0, 0) rotate(-45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-500px, 500px, 0) rotate(-45deg);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
          animation: shootingStar 3s linear infinite;
          will-change: transform, opacity;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%);
          transform: translateX(2px);
        }

        /* Mobile: Shorter tail */
        @media (max-width: 768px) {
          .shooting-star::before {
            width: 50px;
          }
        }

        /* Twinkling Stars - GPU accelerated */
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale3d(1, 1, 1); 
          }
          50% { 
            opacity: 1; 
            transform: scale3d(1.2, 1.2, 1); 
          }
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
          will-change: transform, opacity;
        }

        /* Aurora Background - Optimized */
        @keyframes aurora {
          0%, 100% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate3d(-50%, -50%, 0) rotate(180deg);
            opacity: 0.6;
          }
        }

        .aurora {
          position: absolute;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg 30deg,
            rgba(59, 130, 246, 0.1) 30deg 60deg,
            transparent 60deg 90deg,
            rgba(139, 92, 246, 0.1) 90deg 120deg,
            transparent 120deg 150deg,
            rgba(236, 72, 153, 0.1) 150deg 180deg,
            transparent 180deg
          );
          animation: aurora 20s linear infinite;
          filter: blur(80px);
          will-change: transform;
        }

        /* Mobile: Simpler aurora */
        @media (max-width: 768px) {
          .aurora {
            filter: blur(60px);
            opacity: 0.5;
          }
        }

        /* Magical Glow Input - Optimized */
        @keyframes magicGlow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.4),
              0 0 40px rgba(139, 92, 246, 0.3),
              0 0 60px rgba(236, 72, 153, 0.2),
              inset 0 0 30px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.6),
              0 0 60px rgba(139, 92, 246, 0.5),
              0 0 90px rgba(236, 72, 153, 0.4),
              inset 0 0 40px rgba(139, 92, 246, 0.2);
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmerWave {
          0% {
            transform: translate3d(-100%, -100%, 0) rotate(45deg);
          }
          100% {
            transform: translate3d(100%, 100%, 0) rotate(45deg);
          }
        }

        .input-glow-active {
          animation: magicGlow 2.5s ease-in-out infinite;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.9),
            rgba(30, 27, 75, 0.9),
            rgba(15, 23, 42, 0.9)
          );
          position: relative;
          border: 2px solid transparent;
          background-clip: padding-box;
          will-change: box-shadow;
        }

        .input-glow-active::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.8),
            rgba(139, 92, 246, 0.8),
            rgba(236, 72, 153, 0.8),
            rgba(59, 130, 246, 0.8)
          );
          background-size: 300% 300%;
          animation: borderFlow 4s linear infinite;
          z-index: -1;
          filter: blur(8px);
          will-change: background-position;
        }

        .input-glow-active::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
          animation: shimmerWave 2.5s linear infinite;
          pointer-events: none;
          will-change: transform;
        }

        /* Mobile: Simpler input glow */
        @media (max-width: 768px) {
          .input-glow-active {
            animation: none;
            box-shadow: 
              0 0 20px rgba(139, 92, 246, 0.5),
              inset 0 0 20px rgba(59, 130, 246, 0.1);
          }
          
          .input-glow-active::before {
            filter: blur(4px);
          }
        }

        /* Floating Particles - Reduced on mobile */
        @keyframes floatParticle {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(50px, -100vh, 0);
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent);
          border-radius: 50%;
          animation: floatParticle 15s linear infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }

        /* Glassmorphism Card */
        .glass-card {
          background: rgba(10, 10, 15, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 0 60px rgba(139, 92, 246, 0.05);
        }

        /* Mobile: Lighter backdrop */
        @media (max-width: 768px) {
          .glass-card {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        }

        /* Animated Button */
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(139, 92, 246, 0.4),
              0 0 40px rgba(236, 72, 153, 0.2);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(139, 92, 246, 0.6),
              0 0 60px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes gradientRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Mouse Follow Gradient - Desktop only */
        .mouse-gradient {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.15) 0%,
            rgba(236, 72, 153, 0.1) 25%,
            transparent 50%
          );
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
          filter: blur(40px);
          z-index: 1;
          will-change: transform;
        }

        /* Mobile: Hide mouse gradient */
        @media (max-width: 768px) {
          .mouse-gradient {
            display: none;
          }
        }

        /* Sparkles - Desktop only */
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale3d(0, 0, 1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale3d(1, 1, 1) rotate(180deg);
          }
        }

        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #fff, rgba(139, 92, 246, 0.8));
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: sparkle 2s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .sparkle {
            display: none;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Mobile touch feedback */
        @media (hover: none) and (pointer: coarse) {
          .input-glow-active {
            animation: none;
            transform: scale(1) !important;
          }
        }
      `}</style>

      {/* Mouse Follow Gradient - Desktop only */}
      {!isMobile && (
        <div 
          className="mouse-gradient"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
      )}

      {/* Aurora Background */}
      <div className="aurora" style={{ top: '50%', left: '50%' }} />

      {/* Twinkling Stars - Reduced on mobile */}
      {[...Array(isMobile ? 20 : 50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Shooting Stars - Reduced on mobile */}
      {[...Array(isMobile ? 2 : 5)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            right: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(isMobile ? 8 : 20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Sparkles on Form - Desktop only */}
      {!isMobile && focusedField && [...Array(8)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            top: `${50 + Math.random() * 20 - 10}%`,
            left: `${50 + Math.random() * 20 - 10}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      <div className="glass-card relative shadow-2xl mx-auto w-full max-w-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 z-10">
        {/* Rotating Gradient Border */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-20 blur-xl" 
             style={{ animation: 'gradientRotate 8s linear infinite' }} />
        
        <div className="relative z-10">
          <div className="mb-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Contact Me
            </h2>
            <div className="h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4" />
            <p className="max-w-sm mx-auto text-xs sm:text-sm text-gray-300 px-2">
              Have a question, project idea, or just want to say hi? Fill out the form
              below and I'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-gray-200 font-medium flex items-center gap-2 text-sm">
                  <span className="text-blue-400">●</span> First Name
                </Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="John"
                  type="text"
                  required
                  onFocus={() => setFocusedField("firstname")}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "bg-zinc-900/50 text-white placeholder:text-gray-500 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-zinc-700/30 text-sm sm:text-base",
                    "focus:outline-none transition-all duration-700 relative overflow-hidden",
                    "hover:border-purple-500/30 hover:bg-zinc-900/70",
                    focusedField === "firstname" && "input-glow-active sm:scale-[1.02]"
                  )}
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-gray-200 font-medium flex items-center gap-2 text-sm">
                  <span className="text-purple-400">●</span> Last Name
                </Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Doe"
                  type="text"
                  required
                  onFocus={() => setFocusedField("lastname")}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    "bg-zinc-900/50 text-white placeholder:text-gray-500 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-zinc-700/30 text-sm sm:text-base",
                    "focus:outline-none transition-all duration-700 relative overflow-hidden",
                    "hover:border-purple-500/30 hover:bg-zinc-900/70",
                    focusedField === "lastname" && "input-glow-active sm:scale-[1.02]"
                  )}
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="email" className="text-gray-200 font-medium flex items-center gap-2 text-sm">
                <span className="text-pink-400">●</span> Email Address
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="you@example.com"
                type="email"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "bg-zinc-900/50 text-white placeholder:text-gray-500 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-zinc-700/30 text-sm sm:text-base",
                  "focus:outline-none transition-all duration-700 relative overflow-hidden",
                  "hover:border-purple-500/30 hover:bg-zinc-900/70",
                  focusedField === "email" && "input-glow-active sm:scale-[1.02]"
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="subject" className="text-gray-200 font-medium flex items-center gap-2 text-sm">
                <span className="text-cyan-400">●</span> Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                type="text"
                required
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "bg-zinc-900/50 text-white placeholder:text-gray-500 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-zinc-700/30 text-sm sm:text-base",
                  "focus:outline-none transition-all duration-700 relative overflow-hidden",
                  "hover:border-purple-500/30 hover:bg-zinc-900/70",
                  focusedField === "subject" && "input-glow-active sm:scale-[1.02]"
                )}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message" className="text-gray-200 font-medium flex items-center gap-2 text-sm">
                <span className="text-violet-400">●</span> Message
              </Label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "h-28 sm:h-32 w-full bg-zinc-900/50 text-white placeholder:text-gray-500 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-zinc-700/30 text-sm sm:text-base",
                  "focus:outline-none transition-all duration-700 resize-none relative overflow-hidden",
                  "hover:border-purple-500/30 hover:bg-zinc-900/70",
                  focusedField === "message" && "input-glow-active sm:scale-[1.02]"
                )}
              ></textarea>
            </LabelInputContainer>

            <button
              className="relative group block h-12 sm:h-14 w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold text-white shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl active:scale-[0.98] sm:hover:scale-[1.03]"
              type="submit"
              style={{ animation: isMobile ? 'none' : 'buttonPulse 3s ease-in-out infinite' }}
            >
              {/* Animated Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer Effect - Desktop only */}
              {!isMobile && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              )}
              
              {/* Rotating Border - Desktop only */}
              {!isMobile && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" 
                     style={{ animation: 'gradientRotate 3s linear infinite' }} />
              )}
              
              <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Message 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>

          {status && (
            <div className={cn(
              "mt-4 sm:mt-5 p-3 sm:p-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-center animate-in fade-in slide-in-from-bottom-3 duration-500 backdrop-blur-lg",
              status.includes("✅") && "bg-green-500/20 text-green-300 border-2 border-green-500/50 shadow-lg shadow-green-500/30",
              status.includes("❌") && "bg-red-500/20 text-red-300 border-2 border-red-500/50 shadow-lg shadow-red-500/30",
              status.includes("⚠️") && "bg-yellow-500/20 text-yellow-300 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/30"
            )}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-1.5 sm:space-y-2", className)}>
    {children}
  </div>
);