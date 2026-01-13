// 📁 src/app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { Permanent_Marker, Teko } from "next/font/google";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ✅ Load Google Fonts
const markerFont = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
  display: "swap",
});
const tekoFont = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
});

// ---------- SEO Metadata (add this to your layout.tsx or generate dynamically) ----------
export const metadata: Metadata = {
  title: " Prem Raj | Full-Stack Developer & UI/UX Designer",
  description: "Learn about Prem Raj, a passionate full-stack developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Based in India, creating scalable web applications.",
  keywords: ["Prem Raj", "Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Web Developer", "UI/UX Designer"],
  authors: [{ name: "Prem Raj" }],
  openGraph: {
    title: "About Prem Raj | Full-Stack Developer",
    description: "Full-stack developer crafting interactive, modern web experiences",
    url: "https://rajprem.vercel.app/about",
    siteName: "Prem Raj Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prem Raj | Full-Stack Developer",
    description: "Full-stack developer crafting interactive, modern web experiences",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rajprem.vercel.app/about" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${markerFont.variable} ${tekoFont.variable}`}>
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-black via-neutral-900 to-black text-gray-200 antialiased">
        <Navbar />
        <main className="flex-1 pt-[90px] w-full z-10 relative">
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
