// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
