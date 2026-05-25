import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Spendlens — AI Spend Audit",
  description:
    "Find hidden AI subscription waste and optimize your startup's AI stack.",

  openGraph: {
    title: "Spendlens — AI Spend Audit",
    description:
      "Find hidden AI subscription waste and optimize your AI tooling.",
    url: "https://spendlens-delta.vercel.app",
    siteName: "Spendlens",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spendlens AI Spend Audit",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spendlens — AI Spend Audit",
    description:
      "Find hidden AI subscription waste and optimize your startup AI spend.",
    images: ["/og-image.png"],
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
        className={`${bebas.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}