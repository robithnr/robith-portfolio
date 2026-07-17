import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

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
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Robith Naufal | Data Analyst Portfolio",
    template: "%s | Robith Naufal",
  },

  description:
    "Portfolio of Robith Naufal, a Data Analyst specializing in retail analytics, dashboard development, business intelligence, sales analysis, inventory analytics, and data-driven decision making.",

  keywords: [
    "Robith Naufal",
    "Data Analyst",
    "Business Intelligence",
    "Business Analyst",
    "Retail Analytics",
    "Dashboard Development",
    "Looker Studio",
    "Python",
    "SQL",
    "Data Visualization",
    "Portfolio",
  ],

  authors: [
    {
      name: "Robith Naufal",
    },
  ],

  creator: "Robith Naufal",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Robith Naufal | Data Analyst Portfolio",

    description:
      "Retail Data Analyst with experience in sales analytics, inventory analysis, dashboard development, and business intelligence.",

    url: "https://your-domain.vercel.app",

    siteName: "Robith Naufal Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Robith Naufal Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Robith Naufal | Data Analyst Portfolio",

    description:
      "Retail Data Analyst specializing in dashboard development and business intelligence.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}