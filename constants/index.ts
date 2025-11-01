import BinanceIcon from "@/components/binance-icon";
import TwitterIcon from "@/components/twitter-icon";
import TelegramIcon from "@/components/telegram-icon";
import CoinmarketcapIcon from "@/components/coinmarketcap-icon";
import { FooterColumn, NavItem, NavLink, SocialMediaItem } from "@/types";

// Navigation items array
export const NAVITEMS: NavItem[] = [
  {
    name: 'news',
    href: 'https://example.com/bitcoin',
    external: true,
    submenu: [
      {
        name: 'bitcoin',
        href: 'https://example.com/bitcoin',
        external: true
      },
      {
        name: 'ethereum',
        href: 'https://example.com/ethereum',
        external: true
      },
      {
        name: 'altcoin',
        href: 'https://example.com/altcoin',
        external: true
      },
      {
        name: 'hot News',
        href: 'https://example.com/hot-news',
        external: true
      }
    ]
  },
  {
    name: 'market',
    href: '/market',
    external: false,
    submenu: [
      {
        name: 'live market',
        href: '/live-market',
        external: false
      },
      {
        name: 'price analysis',
        href: '/price-analysis',
        external: false
      },
      {
        name: 'price prediction',
        href: '/price-prediction',
        external: false,
      },
    ]
  },
  {
    name: 'press release',
    href: '/press-release',
    external: false,
  },
  {
    name: 'free tools',
    href: '/tools',
    external: false,
    submenu: [
      {
        name: 'crypto profit calculator',
        href: '/tools/crypto-profit-calculator',
        external: false

      }
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