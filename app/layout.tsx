import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://mgumaa.com"),
  title: {
    default: "CoinFutura - Blockchain News for the Next Generation",
    template: "%s | CoinFutura"
  },
  description: "Discover the latest crypto news, price analysis, and blockchain trends with CoinFutura. Trusted insights on Bitcoin, Ethereum, NFTs, and the future of Web3 clear, accurate, and timely.",
  keywords:[
    "Crypto News",
    "Price Analysis",
    "Blockchain",
    "Bitcoin",
    "Ethereum",
    "NFTs",
    "Web3",
    "Top trending coins",
    "Cryptos",
    "Exchange",
    "Airdrop",
    "Launchpad",
    "ETF Tracker",
  ],
  authors:[
    {
      name: "Mohamed Gumaa",
      url: "https://mgumaa.com",
    },
  ],
  creator: "Mohamed Gumaa",
  publisher: "Mohamed Gumaa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Crypto",
  classification: "Crypto Website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
