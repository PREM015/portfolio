"use client";

import React from "react";
import Link from "next/link";
import { Vortex } from "@/app/components/ui/vortex";
import "@/app/globals.css";
import { motion } from "framer-motion";

const iconClass =
  "w-6 h-6 text-gray-300 transition-transform duration-300 transform hover:scale-125 hover:text-cyan-400 hover:drop-shadow-lg";

const TwitterIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.72 9.72 0 01-3.1 1.19 4.52 4.52 0 00-7.86 4.12A12.84 12.84 0 013 2.1a4.51 4.51 0 001.4 6.06 4.48 4.48 0 01-2-.55v.06a4.52 4.52 0 003.6 4.43 4.52 4.52 0 01-2 .08 4.52 4.52 0 004.2 3.13A9.05 9.05 0 013 19.54a12.94 12.94 0 007 2.05c8.4 0 13-7.24 13-13.51 0-.2 0-.42-.02-.63A9.6 9.6 0 0023 3z" />
  </svg>
);

const GithubIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.57v-2.1c-3.34.73-4-1.6-4-1.6a3.15 3.15 0 00-1.33-1.76c-1.1-.75.08-.73.08-.73a2.52 2.52 0 011.84 1.25 2.53 2.53 0 003.44 1 2.53 2.53 0 01.75-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.63 4.63 0 011.23-3.2 4.3 4.3 0 01.12-3.15s1-.33 3.3 1.24a11.4 11.4 0 016 0c2.3-1.57 3.3-1.24 3.3-1.24a4.3 4.3 0 01.12 3.15 4.63 4.63 0 011.23 3.2c0 4.61-2.8 5.63-5.47 5.93a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.68.83.57A12 12 0 0012 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3zm7.5 0h3.8v1.7h.05c.53-.99 1.83-2 3.77-2 4.03 0 4.78 2.64 4.78 6.08v6.22h-4v-5.5c0-1.31-.03-3-1.84-3s-2.12 1.43-2.12 2.9v5.6h-4v-12z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/PREM015", Icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prem-r-2655a3302", Icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://twitter.com", Icon: TwitterIcon, label: "Twitter" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/skills", label: "Skills" },
    { href: "/resume.pdf", label: "Resume", target: "_blank" },
    { href: "/faq", label: "FAQs" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-black text-gray-200 mt-20">
      <Vortex
        backgroundColor="black"
        className="flex flex-col items-center justify-center w-full px-4 py-20"
        containerClassName="w-full max-w-7xl mx-auto relative"
        particleCount={600}
        baseHue={210}
      >
        <div className="w-full px-4 md:px-8 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

            {/* About */}
            <div>
              <p className="text-sm leading-relaxed mb-6 text-white drop-shadow-md">
                Full Stack Developer crafting modern, performant UIs with React, TypeScript, and Next.js. Passionate about web performance and UX design.
              </p>
              <div className="flex justify-center sm:justify-start gap-6">
                {socialLinks.map(({ href, Icon, label }) => (
                  <Link key={label} href={href} target="_blank" aria-label={label}>
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-colors duration-300 text-white hover:text-cyan-400 drop-shadow-lg"
                    >
                      <Icon />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h6 className="text-xl font-orbitron font-bold text-white mb-4 drop-shadow-md">
                Navigation
              </h6>
              <ul className="space-y-3 text-sm font-medium tracking-wide">
                {navLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="relative text-pink-500 hover:text-yellow-400 transition-all duration-300 group font-bold"
                    >
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="text-xl font-orbitron font-bold text-white mb-4 drop-shadow-md">
                Quick Links
              </h6>
              <ul className="space-y-3 text-sm font-medium tracking-wide">
                {quickLinks.map(({ href, label, target }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={target}
                      className="relative text-green-400 hover:text-yellow-400 transition-all duration-300 group font-bold"
                    >
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h6 className="text-xl font-orbitron font-bold text-white mb-4 drop-shadow-md">
                Contact
              </h6>
              <p className="text-sm mb-2 text-white drop-shadow-sm">
                <span className="text-cyan-400 font-semibold">Email</span><br />
                contact@rajportfolio.dev
              </p>
              <p className="text-sm text-white drop-shadow-sm">
                <span className="text-cyan-400 font-semibold">Based in</span><br />
                India
              </p>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-16 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-400 font-light drop-shadow-md">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Raj Portfolio</span>. Built with 💙 using Next.js.
          </div>
        </div>
      </Vortex>
    </footer>
  );
};

export default Footer;
