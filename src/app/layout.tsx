import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

const description =
  "Full stack engineer building real-time systems, money-safe backends and zero-knowledge apps. Next.js, NestJS, Rust, PostgreSQL, MongoDB, Redis. Open to new roles.";

export const metadata: Metadata = {
  title: "Harish V · Full Stack Engineer",
  description,
  keywords: [
    "Full Stack Engineer",
    "Next.js",
    "NestJS",
    "Rust",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "WebSocket",
    "Microservices",
    "Open to work",
  ],
  openGraph: {
    title: "Harish V · Full Stack Engineer",
    description: "I build things that move money (safely). Open to new roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${code.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
