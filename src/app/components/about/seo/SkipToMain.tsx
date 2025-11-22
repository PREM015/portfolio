"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==================== INTERFACES ====================
interface SkipToMainProps {
  mainId?: string;
  className?: string;
  showKeyboardHint?: boolean;
  enableAnalytics?: boolean;
  customText?: string;
  position?: "top-left" | "top-center" | "top-right";
  theme?: "light" | "dark" | "auto";
  showOnFocus?: boolean;
  additionalSkipLinks?: Array<{
    id: string;
    label: string;
    ariaLabel?: string;
  }>;
}

// ==================== COMPONENT ====================
export default function SkipToMain({
  mainId = "main-content",
  className = "",
  showKeyboardHint = true,
  enableAnalytics = false,
  customText,
  position = "top-left",
  theme = "auto",
  showOnFocus = true,
  additionalSkipLinks = [],
}: SkipToMainProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [keyboardUser, setKeyboardUser] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  // ========== DETECT KEYBOARD NAVIGATION ==========
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      setKeyboardUser(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // ========== THEME DETECTION ==========
  useEffect(() => {
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setCurrentTheme(mediaQuery.matches ? "dark" : "light");

      const handleChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  // ========== HANDLE SKIP TO MAIN ==========
  const handleSkipToMain = (targetId: string, label: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Smooth scroll to element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Set focus
      targetElement.focus({ preventScroll: true });

      // If element is not focusable, make it focusable temporarily
      if (!targetElement.hasAttribute("tabindex")) {
        targetElement.setAttribute("tabindex", "-1");
      }

      // Analytics tracking (optional)
      if (enableAnalytics && typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "skip_to_main", {
          event_category: "Accessibility",
          event_label: label,
        });
      }

      // Remove focus outline after animation
      setTimeout(() => {
        setIsFocused(false);
      }, 2000);
    }
  };

  // ========== POSITION STYLES ==========
  const positionClasses = {
    "top-left": "left-4 top-4",
    "top-center": "left-1/2 -translate-x-1/2 top-4",
    "top-right": "right-4 top-4",
  };

  // ========== THEME STYLES ==========
  const themeStyles = {
    light: {
      bg: "bg-white",
      text: "text-gray-900",
      border: "border-gray-300",
      hover: "hover:bg-gray-100",
      focus: "focus:ring-blue-500",
      shadow: "shadow-lg",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700",
      hover: "hover:bg-gray-800",
      focus: "focus:ring-blue-400",
      shadow: "shadow-2xl",
    },
  };

  const styles = themeStyles[currentTheme];

  // ========== DEFAULT SKIP LINKS ==========
  const defaultSkipLinks = [
    {
      id: mainId,
      label: customText || "Skip to main content",
      ariaLabel: "Skip to main content",
    },
    ...additionalSkipLinks,
  ];

  return (
    <>
      {/* ========== SKIP TO MAIN LINKS ========== */}
      <div
        className={`fixed ${positionClasses[position]} z-9999 ${className}`}
        role="navigation"
        aria-label="Skip navigation"
      >
        {defaultSkipLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleSkipToMain(link.id, link.label);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              block px-6 py-3 mb-2
              ${styles.bg} ${styles.text} ${styles.border} ${styles.hover} ${styles.shadow}
              border-2 rounded-lg
              font-semibold text-sm
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-4 ${styles.focus} focus:ring-offset-2
              ${showOnFocus ? "opacity-0 focus:opacity-100 -translate-y-20 focus:translate-y-0" : ""}
              backdrop-blur-sm
              transform
              will-change-transform
            `}
            aria-label={link.ariaLabel || link.label}
            tabIndex={0}
            initial={{ opacity: 0, y: -20 }}
            whileFocus={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex items-center gap-2">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* ========== KEYBOARD NAVIGATION HINT ========== */}
      <AnimatePresence>
        {showKeyboardHint && keyboardUser && !isFocused && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed ${positionClasses[position]} z-[9998]
              ${position === "top-center" ? "mt-16" : "mt-14"}
              px-4 py-2 rounded-md
              ${styles.bg} ${styles.text} ${styles.border}
              border text-xs font-medium
              ${styles.shadow}
              backdrop-blur-sm
              pointer-events-none
            `}
            role="status"
            aria-live="polite"
          >
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">
                Tab
              </kbd>
              <span>to navigate</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== FOCUS INDICATOR (VISUAL FEEDBACK) ========== */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9997] pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 backdrop-blur-[2px]" />
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 animate-pulse"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Accessibility mode active
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== SCREEN READER ANNOUNCEMENTS ========== */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {isFocused && "Skip to main content link focused. Press Enter to skip."}
      </div>

      {/* ========== GLOBAL STYLES FOR SKIP TARGET ========== */}
      <style jsx global>{`
        /* Ensure main content is focusable */
        #${mainId} {
          outline: none;
        }

        /* Add focus ring to main content when focused via skip link */
        #${mainId}:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 4px;
          border-radius: 8px;
        }

        /* Remove focus ring after interaction */
        #${mainId}:focus:not(:focus-visible) {
          outline: none;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .skip-to-main {
            border: 3px solid currentColor !important;
            font-weight: bold !important;
          }
        }

        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* Focus visible polyfill */
        .focus-visible:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}

// ==================== HOOK FOR PROGRAMMATIC SKIP ====================
export function useSkipToMain(targetId: string = "main-content") {
  const skipToMain = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (!targetElement.hasAttribute("tabindex")) {
        targetElement.setAttribute("tabindex", "-1");
      }

      targetElement.focus({ preventScroll: true });
    }
  };

  return { skipToMain };
}

// ==================== PRESET CONFIGURATIONS ====================
export const SkipToMainPresets = {
  minimal: {
    showKeyboardHint: false,
    showOnFocus: true,
    position: "top-left" as const,
    customText: "Skip to content",
  },

  full: {
    showKeyboardHint: true,
    enableAnalytics: true,
    showOnFocus: true,
    position: "top-center" as const,
    additionalSkipLinks: [
      { id: "navigation", label: "Skip to navigation" },
      { id: "footer", label: "Skip to footer" },
    ],
  },

  multipleLinks: {
    showKeyboardHint: true,
    position: "top-left" as const,
    additionalSkipLinks: [
      { id: "navigation", label: "Skip to navigation", ariaLabel: "Skip to main navigation" },
      { id: "sidebar", label: "Skip to sidebar", ariaLabel: "Skip to sidebar content" },
      { id: "footer", label: "Skip to footer", ariaLabel: "Skip to page footer" },
    ],
  },

  highContrast: {
    theme: "light" as const,
    showKeyboardHint: true,
    position: "top-center" as const,
    customText: "⚡ Skip to Main Content",
  },
};

// ==================== EXPORT TYPES ====================
export type { SkipToMainProps };