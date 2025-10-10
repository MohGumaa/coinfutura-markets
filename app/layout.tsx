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
  metadataBase: new URL("https://mgumaa.com"),
  title: {
    default: "CoinFutura - Blockchain News for the Next Generation",
    template: "%s | CoinFutura"
  },
  description: "Discover the latest crypto news, price analysis, and blockchain trends with CoinFutura. Trusted insights on Bitcoin, Ethereum, NFTs, and the future of Web3 clear, accurate, and timely.",
  creator: "Mohamed Gumaa",
  publisher: "Mohamed Gumaa",
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
