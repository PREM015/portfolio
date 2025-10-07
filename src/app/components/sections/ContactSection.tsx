"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");
  const formSubmitURL = process.env.NEXT_PUBLIC_FORMSUBMIT_ID ?? "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await fetch(formSubmitURL, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully! 🎉");
        form.reset();
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch {
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden">
      {/* Background highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-20 -left-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="relative max-w-3xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl p-10 transition-all hover:scale-[1.02]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-white/20 rounded-xl p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-white/20 rounded-xl p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-white/20 rounded-xl p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="border border-white/20 rounded-xl p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 mt-2 font-semibold text-lg rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 shadow-lg shadow-blue-500/25 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <motion.p
            className="mt-6 text-center text-sm sm:text-base text-cyan-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
