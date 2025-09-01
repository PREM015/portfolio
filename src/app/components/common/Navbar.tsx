"use client"; // ✅ Next.js client component

import Image from "next/image";
import Link from "next/link";
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
import { GlowingStarsBackground } from "@/app/components/ui/glowing-stars-background";

// ✅ Google Font Inject
const GoogleFontImport = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
    .font-marker {
      font-family: "Permanent Marker", cursive;
    }
  `}</style>
);

// ✅ Hook: Track which section is active while scrolling
const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const id of sectionIds) {
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

// ✅ Navigation Items (routes)
const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/Skills" },
  { name: "Experience", link: "/Experience" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

// ✅ Logo Component
const NavbarLogo = () => (
  <Link
    href="/"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 group"
  >
    <Image
      src="/image/computer.png"
      alt="logo"
      width={36}
      height={36}
      className="rounded-md transition-transform duration-300 group-hover:rotate-6"
    />
    <span className="font-marker text-2xl tracking-wide text-white group-hover:text-blue-400 transition-all duration-300">
      PREM RAJ
    </span>
  </Link>
);

// ✅ Main Navbar
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.link));

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      <GoogleFontImport />

      <AceternityNavbar className="top-0 z-50 bg-black backdrop-blur-lg border-b border-neutral-800 shadow-md">
        {/* 🌐 Desktop Navbar */}
        <NavBody className="relative z-10 py-4 min-h-[80px] px-4 sm:px-8 lg:px-16 overflow-hidden">
          <GlowingStarsBackground className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

          {/* 🔗 Logo */}
          <NavbarLogo />

          {/* 🔗 Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 text-sm font-marker font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                scroll={item.link.startsWith("/#")}
                prefetch={true}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.link
                    ? "text-white bg-blue-600 shadow-sm"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-950/30"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 📄 Resume Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/files/Prem.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NavbarButton
                variant="gradient"
                className="shadow-md hover:scale-105 transition"
              >
                Resume
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* 📱 Mobile Navbar */}
        <MobileNav className="relative overflow-visible">
          <GlowingStarsBackground className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

          <MobileNavHeader className="lg:hidden px-4 sm:px-8">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavHeader>

          {/* ✅ Mobile Menu Dropdown */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="absolute top-full left-0 w-full z-50"
          >
            <div className="w-full flex flex-col gap-3 bg-neutral-950 text-white rounded-xl p-4 border border-neutral-800 shadow-xl font-marker">
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.name}`}
                  href={item.link}
                  scroll={item.link.startsWith("/#")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 rounded-lg text-lg text-left transition-all duration-200 ${
                    activeSection === item.link
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-neutral-800 text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* 📄 Resume Button (Mobile) */}
              <div className="pt-4 border-t border-neutral-800 mt-4">
                <Link
                  href="/files/Prem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavbarButton variant="gradient" className="w-full text-center">
                    Resume
                  </NavbarButton>
                </Link>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
