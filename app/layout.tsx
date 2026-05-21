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

export const metadata: Metadata = {
  title: "SpendLens",
  description: "AI Spend Optimization",
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