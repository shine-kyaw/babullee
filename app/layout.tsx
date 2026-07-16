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
  title: "Babullee 李仁柏 | Student Roboticist and Programmer",
  description:
    "Portfolio of Babullee 李仁柏, a student roboticist, programmer, strategist, and VEX Team 10004X member focused on robotics, C++, mathematics, engineering, and STEM.",
  openGraph: {
    title: "Babullee 李仁柏 | Student Roboticist and Programmer",
    description:
      "Student roboticist, programmer, strategist, and VEX Team 10004X member.",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
