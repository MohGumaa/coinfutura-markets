import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  // IMPORTANT: subdomain base
  metadataBase: new URL("https://market.coinfutura.com"),

  // Google Search Console for verify
  verification: {
    google: "QWNxvW40oSgcnmmsVw_-6I61DhuAgEy7I-rnwWpFceI",
  },

  title: {
    default: "Tools – Free Crypto Calculators & Market Utilities",
    template: "%s | CoinFutura",
  },

  description:
    "Free crypto tools by CoinFutura—including a Profit Calculator, Coin Comparison, ROI Calculator, Portfolio Tracker, and more. Powered by real-time market data.",

  keywords: [
    "Crypto Tools",
    "Crypto Calculator",
    "Crypto Profit Calculator",
    "Compare Coins",
    "Crypto ROI Calculator",
    "Portfolio Tracker",
    "Crypto Converter",
    "Trading Fee Calculator",
    "Bitcoin",
    "Ethereum",
    "Web3 Tools",
  ],

  authors: [{ name: "Mohamed Gumaa", url: "https://mgumaa.com" }],
  creator: "Mohamed Gumaa",
  publisher: "CoinFutura",

  alternates: {
    canonical: "https://market.coinfutura.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://market.coinfutura.com",
    title: "CoinFutura Tools – Free Crypto Calculators & Market Utilities",
    description:
      "Free crypto tools including calculators, converters, and tracking utilities powered by CoinFutura.",
    siteName: "CoinFutura Tools",
    images: [
      {
        url: "https://market.coinfutura.com/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoinFutura Tools",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CoinFutura Tools – Free Crypto Calculators & Market Utilities",
    description:
      "Explore CoinFutura’s free suite of crypto tools powered by real-time market data.",
    creator: "@mgumaa",
    images: ["https://market.coinfutura.com/og/og-image.jpg"],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  category: "Crypto Tools",
  classification: "Crypto Tools Platform",
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
