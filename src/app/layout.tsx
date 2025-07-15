// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen overflow-x-hidden bg-gradient-to-b bg-black text-gray-800 antialiased"
      >
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content Area */}
        <main className="pt-[90px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          {children}
        </main>

        {/* ✅ Footer (optional) */}
         <footer className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Prem Raj. All rights reserved.
        </footer> 
      </body>
    </html>
  );
}
