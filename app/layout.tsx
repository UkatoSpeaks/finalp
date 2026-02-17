import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANURAGP // EXECUTABLE_SYSTEM",
  description: "High-performance Neo-Brutalist Engineering Portfolio",
};

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased min-h-screen grid-bg`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
