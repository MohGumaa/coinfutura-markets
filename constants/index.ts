import BinanceIcon from "@/components/binance-icon";
import TwitterIcon from "@/components/twitter-icon";
import TelegramIcon from "@/components/telegram-icon";
import CoinmarketcapIcon from "@/components/coinmarketcap-icon";
import { FooterColumn, NavItem, NavLink, SocialMediaItem, ToolsProps } from "@/types";
import { BarChart3, Calculator, DollarSign, Scale, TrendingUp, Zap } from "lucide-react";

// Navigation items array
export const NAVITEMS: NavItem[] = [
  {
    name: 'news',
    href: 'https://coinfutura.com/news/',
    external: true,
    submenu: [
      {
        name: 'altcoin',
        href: 'https://coinfutura.com/news/altcoin/',
        external: true
      },
      {
        name: 'bitcoin',
        href: 'https://coinfutura.com/news/bitcoin/',
        external: true
      },
      {
        name: 'ethereum',
        href: 'https://coinfutura.com/news/ethereum/',
        external: true
      },
      {
        name: 'hot News',
        href: 'https://coinfutura.com/news/hot-news/',
        external: true
      },
      {
        name: 'memecoins',
        href: 'https://coinfutura.com/news/memecoins/',
        external: true
      }
    ]
  },
  {
    name: 'market',
    href: '/',
    external: false,
    submenu: [
      {
        name: 'live market',
        href: '/',
        external: false
      },
      {
        name: 'price analysis',
        href: 'https://coinfutura.com/market/price-analysis/',
        external: false
      },
    ]
  },
  {
    name: 'price prediction',
    href: 'https://coinfutura.com/market/price-prediction/',
    external: true,
  },
  {
    name: 'press release',
    href: 'https://coinfutura.com/press-release/',
    external: true,
  },
  {
    name: 'crypto tools',
    href: '/tools',
    external: false,
    submenu: [
      {
        name: 'crypto profit calculator',
        href: '/tools/crypto-profit-calculator',
        external: false

      },
      {
        name: 'compare coins',
        href: '/tools/compare-coins',
        external: false

      },
      {
        name: 'ROI Calculator',
        href: '/tools/roi-calculator',
        external: false

      },
      {
        name: 'portfolio tracker',
        href: '/tools/portfolio-tracker',
        external: false

      },
      {
        name: 'price converter',
        href: '/tools/price-converter',
        external: false

      },
      {
        name: 'fee calculator',
        href: '/tools/fee-calculator',
        external: false

      },
    ]
  }
]

export const SOCIALMEDIA: SocialMediaItem[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    className: "twitter-bg",
    icon: TwitterIcon
  },
  {
    id: 'telegram',
    name: 'Telegram',
    href: 'https://twitter.com/yourhandle',
    className: "telegram-bg",
    icon: TelegramIcon
  },
  {
    id: 'binance',
    name: 'Binance',
    href: 'https://twitter.com/yourhandle',
    className: "twitter-bg",
    icon: BinanceIcon
  },
    {
    id: 'coinmarketcap',
    name: 'Coinmarketcap',
    href: 'https://twitter.com/yourhandle',
    className: "bg-white",
    icon: CoinmarketcapIcon
  },
];

export const FOOTER_COLUMN_DATA: FooterColumn[] = [
  {
    id: 1,
    title: "News",
    links: [
      { id: "altcoin-news", label: "Altcoin News", href: "/altcoin-news" },
      { id: "bitcoin-news", label: "Bitcoin News", href: "/bitcoin-news" },
      { id: "ethereum-news", label: "Ethereum News", href: "/ethereum-news" },
      { id: "hot-news", label: "Hot News", href: "/hot-news" },
      { id: "memecoins-news", label: "Memecoins News", href: "/memecoins-news" },
    ]
  },
  {
    id: 2,
    title: "Trending Topics",
    links: [
      { id: "market", label: "Market", href: "/market" },
      { id: "live-market", label: "Live Market", href: "/live-market" },
      { id: "press-release", label: "Press Release", href: "/press-release" },
      { id: "price-analysis", label: "Price Analysis", href: "/price-analysis" },
      { id: "price-prediction", label: "Price Prediction", href: "/price-prediction" },
    ]
  },
  {
    id: 3,
    title: "Site Map",
    links: [
      { id: "about-us", label: "About Us", href: "/about-us" },
      { id: "disclaimer", label: "Disclaimer", href: "/disclaimer" },
      { id: "privacy-policy", label: "Privacy Policy", href: "/privacy-policy" },
      { id: "submit-press-release", label: "Submit Press Release", href: "/submit-press-release" },
      { id: "terms-conditions", label: "Term and Conditions", href: "/terms-and-conditions" },
    ]
  },
]

export const FOOTER_BOTTOM_NAV_LINKS: NavLink[] = [
  {
    id: "about",
    label: "About Us",
    href: "/about",
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    id: "terms",
    label: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
]

export const TOOLS: ToolsProps[] = [
  {
    id: "crypto-profit-calculator",
    name: "Crypto Profit Calculator",
    description: "Calculate your crypto profits and losses with real-time prices, fees, and detailed breakdowns.",
    icon: Calculator,
    href: "/tools/crypto-profit-calculator",
    status: "active",
    color: "from-cfu-0 to-cfu",
  },
  {
    id: "compare-coins",
    name: "Compare Coins",
    description: "Compare multiple cryptocurrencies side by side with market data and performance metrics.",
    icon: BarChart3,
    href: "/tools/compare-coins",
    status: "coming-soon",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description: "Calculate return on investment for your crypto trading and investment strategies.",
    icon: TrendingUp,
    href: "/tools/roi-calculator",
    status: "coming-soon",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "portfolio-tracker",
    name: "Portfolio Tracker",
    description: "Track your cryptocurrency portfolio with real-time valuations and performance analysis.",
    icon: Scale,
    href: "/tools/portfolio-tracker",
    status: "coming-soon",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "price-converter",
    name: "Crypto Price Converter",
    description: "Convert between different cryptocurrencies and fiat currencies instantly.",
    icon: DollarSign,
    href: "/tools/price-converter",
    status: "coming-soon",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "fee-calculator",
    name: "Trading Fee Calculator",
    description: "Calculate trading fees across different exchanges and find the best rates.",
    icon: Zap,
    href: "/tools/fee-calculator",
    status: "coming-soon",
    color: "from-yellow-500 to-orange-500",
  },
]