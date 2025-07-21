// 📁 src/app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/app/components/common/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Prem Raj's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Teko:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-black via-neutral-900 to-black text-gray-200 antialiased">
        {/* ✅ Navbar shown on all pages */}
        <Navbar />

        {/* ✅ Main content area */}
        <main className="flex-1 pt-[90px] w-full z-10 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
