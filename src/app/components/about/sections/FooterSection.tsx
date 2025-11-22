'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Quick Links', links: ['Home', 'About', 'Projects', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Portfolio', 'Resume', 'GitHub'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mb-4"
            >
              <span className="text-2xl font-bold text-white">PR</span>
            </motion.div>
            <p className="text-gray-400 text-sm mb-4">
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
