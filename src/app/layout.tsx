import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import AnimatedCursor from "react-animated-cursor";
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
    <>
      <html lang="en">
        <body
          className={`${clashDisplay.variable} ${geistMono.variable} antialiased font-sans`}
        >
          <AnimatedCursor
            innerSize={18}
            outerSize={18}
            color="255,255,255"
            outerAlpha={0.4}
            innerScale={1.4}
            outerScale={10}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              ".clickable"
            ]}
          />
          {children}
        </body>
      </html>
    </>
  );
}
