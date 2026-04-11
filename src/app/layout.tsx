import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harish V | Full Stack Developer",
  description:
    "Full Stack Developer building high-performance crypto exchange platforms with 15+ microservices, NestJS, Next.js, MongoDB, Redis, and real-time WebSocket systems.",
  keywords: [
    "Full Stack Developer",
    "NestJS",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Redis",
    "Microservices",
    "WebSocket",
    "Crypto Exchange",
  ],
  openGraph: {
    title: "Harish V | Full Stack Developer",
    description:
      "Building high-performance trading platforms with 15+ microservices and 10,000+ concurrent WebSocket connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
