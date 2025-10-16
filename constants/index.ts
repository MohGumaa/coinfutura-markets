import { FooterColumn, NavLink } from "@/types";

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