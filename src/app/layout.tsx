// src/app/layout.tsx
import "./globals.css"; // ✅ Tailwind base styles
import Navbar from "@/app/components/common/Navbar"; // ✅ Correct path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-white text-black">
        {/* ✅ Persistent Navbar */}
        <Navbar />

        {/* ✅ Main Page Content */}
        <main className="pt-[90px]">{children}</main>
      </body>
    </html>
  );
}
