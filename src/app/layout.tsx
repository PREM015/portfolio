import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prem Raj | Portfolio",
  description: "My personal portfolio built with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
