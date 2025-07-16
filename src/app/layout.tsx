// 📁 File: src/app/layout.tsx
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer"; 
import HeroSection from "@/app/components/sections/HeroSection";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-black via-neutral-900 to-black text-gray-800 antialiased">

        {/* ✅ Navbar */}
        <Navbar />
        <HeroSection/>
        {/* ✅ Main Content Area */}
        <main className="flex-1 pt-[90px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full z-10 relative">
          {children}
        </main>

        {/* ✅ Footer (with animated background) */}
        <Footer />
      </body>
    </html>
  );
}
