import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    <html lang="en" className={`${manrope.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body
        className={`${manrope.className} antialiased`}
      >
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="page" className="max-w-screen">
            {/* HEADER */}
            <Header/>

            {/* pt-14.25 */}
            <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">

              <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"/>

              {/* MAIN */}
              <main 
                className="text-gray-600 dark:text-gray-400 overflow-x-hidden"
                >
                  {children}
              </main>

              <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10"/>

              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
