// 📁 src/app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import { Permanent_Marker, Teko } from "next/font/google";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";

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

export const metadata: Metadata = {
  title: "Prem raj",
  description: "Prem Raj's Portfolio",
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
      </body>
    </html>
  );
}
