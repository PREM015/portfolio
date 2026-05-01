"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Assuming motion is imported from framer-motion

const ProjectsFooter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="px-4"
    >
      {/* CTA Section */}
      <div className="relative py-16 px-6 md:px-12 rounded-3xl overflow-hidden max-w-6xl mx-auto mt-12  m-6 ">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="absolute inset-0 rounded-3xl border border-white/10" />
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-4 left-4 text-4xl"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 text-4xl"
          animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          💫
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.div
            className="text-6xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Want to Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Amazing
            </span>
            ?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto  text-lg">
            I&apos;m always excited to work on new projects and collaborate with
            awesome people. Let&apos;s create something extraordinary together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✦</span> Get In Touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </Link>
            <Link href="https://github.com/PREM015" target="_blank">
              <motion.button
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 flex items-center gap-2 backdrop-blur"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Social Links */}
      <div className="flex justify-center gap-4 ">
        {[
          {
            icon: "github",
            url: "https://github.com/PREM015",
            label: "GitHub",
            hoverColor:
              "hover:text-[#2dba4e] hover:border-[#2dba4e] hover:shadow-[0_0_15px_rgba(45,186,78,0.5)]",
          },
          {
            icon: "linkedin",
            url: "https://linkedin.com/in/prem",
            label: "LinkedIn",
            hoverColor:
              "hover:text-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]",
          },
          {
            icon: "twitter",
            url: "https://twitter.com/prem",
            label: "Twitter",
            hoverColor:
              "hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.5)]",
          },
        ].map((social) => (
          <Link key={social.icon} href={social.url} target="_blank">
            <motion.div
              className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.hoverColor}`}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              {social.icon === "github" && (
                <svg
                  className="w-6 h-6 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              {social.icon === "linkedin" && (
                <svg
                  className="w-6 h-6 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              {social.icon === "twitter" && (
                <svg
                  className="w-6 h-6 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              )}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center pb-4">
        <motion.p
          className="text-gray-600 text-sm"
          whileHover={{ scale: 1.02 }}
        >
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/PREM015"
            target="_blank"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            Prem
          </Link>{" "}
          © {new Date().getFullYear()} • All rights reserved
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectsFooter;
