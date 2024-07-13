import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Document from "../components/document";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fontLobster = localFont({
  src: "../public/fonts/Lobster-Regular.woff2",
  display: "swap",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "BaseLine",
  description: "Stats for NBA fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fontLobster.variable}`}>
      <Document>{children}</Document>
    </html>
  );
}
