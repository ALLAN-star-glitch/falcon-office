// app/layout.tsx
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
  title: {
    default: "OrgOffice — Manage Your Organization Smarter",
    template: "%s | OrgOffice",
  },
  description:
    "OrgOffice helps organizations centralize operations, communication, and document management — all in one smart platform built for productivity.",
  keywords: [
    "organization management",
    "team collaboration",
    "document management",
    "business automation",
    "OrgOffice platform",
  ],
  authors: [{ name: "OrgOffice Team" }],
  metadataBase: new URL("https://org-office.vercel.app/"),
  openGraph: {
    title: "OrgOffice — Manage Your Organization Smarter",
    description:
      "All-in-one platform for managing your organization — streamline operations, communication, and growth effortlessly.",
    url: "https://org-office.vercel.app/",
    siteName: "OrgOffice",
    images: [
      {
        url: "https://org-office.vercel.app/_next/image?url=%2Fcollaboration.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "OrgOffice platform dashboard preview",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
