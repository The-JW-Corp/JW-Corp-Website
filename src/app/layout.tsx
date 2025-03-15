import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import AnimatedCursorWrapper from "@/components/animated-cursor-wrapper";
import PageWrapper from "@/components/page-wrapper";

const clashDisplay = localFont({
  src: "../../public/ClashDisplay-Regular.otf",
  variable: "--font-clash",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JW Corp - Web3 Solutions",
  description:
    "JW Corp builds high-performance Web3 products: smart contracts, DEXs, bots, marketplaces, and go-to-market strategies. Trusted by top brands, VCs & DAOs worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <PageWrapper>
          <AnimatedCursorWrapper />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
