// 📁 File: src/app/layout.tsx
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-black via-neutral-900 to-black text-gray-800 antialiased">
        {/* ✅ Navbar on every page */}
        <Navbar />

        {/* ✅ Main content area */}
      <main className="flex-1 pt-[90px] w-full z-10 relative">

          {children}
        </main>
      </body>
    </html>
  );
}
