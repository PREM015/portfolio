"use client";

import {
  Navbar as AceternityNavbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { GlowingStarsBackground } from "@/app/components/ui/glowing-stars-background"; // ✅ Background stars

// ✅ Google Font Inject (Permanent Marker)
const GoogleFontImport = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
    .font-marker {
      font-family: "Permanent Marker", cursive;
    }
  `}</style>
);

// ✅ Hook to track active section in view
const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (let id of sectionIds) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return active;
};

// ✅ Navigation items
const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

// ✅ Logo component
const NavbarLogo = () => (
  <a
    href="#home"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 group"
  >
    <img
      src="/image/computer.png"
      alt="logo"
      width={36}
      height={36}
      className="rounded-md transition-transform duration-300 group-hover:rotate-6"
    />
    <span className="font-marker text-2xl tracking-wide text-gray-800 group-hover:text-blue-600 transition-all duration-300">
      PREM RAJ
    </span>
  </a>
);

// ✅ Main Navbar component
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.link));

  return (
    <div className="relative w-full">
      <GoogleFontImport />

      <AceternityNavbar
        className="sticky top-0 z-50 overflow-hidden bg-black backdrop-blur-lg border-b border-neutral-800 shadow-md"
      >
        {/* 🌌 Glowing Animated Background */}
        <GlowingStarsBackground className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

        {/* 🌐 Desktop Navbar */}
        <NavBody className="relative z-10 py-4 min-h-[80px] px-4 sm:px-8 lg:px-16">
          <NavbarLogo />
          <div className="hidden lg:flex items-center justify-center gap-1 text-sm font-marker font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.link
                    ? "text-white bg-blue-600 shadow-sm"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-950/30"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <NavbarButton
              variant="gradient"
              className="shadow-md hover:scale-105 transition"
            >
              Resume
            </NavbarButton>
          </div>
        </NavBody>

        {/* 📱 Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item) => (
              <a
                key={`mobile-${item.name}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.link
                    ? "text-blue-600 font-bold bg-blue-50"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
