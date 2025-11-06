import { LucideIcon } from "lucide-react";

export type LogoProps = {
  className?: string;
  href?: string;            
}

export type NavLinkProps = {
  name: string;
  href: string;
  external: boolean;
}

export type NavItem = {
  name: string;
  href: string;
  external: boolean;
  submenu?: NavLinkProps[];
}

export type NavigationProps = {
  isMobile?: boolean;
}

export type SocialMediaItem = {
  id: string;
  name: string;
  href: string;
  className: string;
  icon: React.ComponentType<any>;
}

export type NavLink = {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGAElement>>;
  disabled?: boolean
}

export type FooterColumn = {
  id: number;
  title: string;
  links: NavLink[]
}

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  market_cap: number | null;
  total_volume: number | null;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d_in_currency: number | null;
}

export type HeroSectionProps = {
  icon?: LucideIcon;
  title: string;
  highlight?: string;
  description: string;
  // iconSize?: "small" | "medium" | "large";
  // gradientFrom?: string;
  // gradientTo?: string;
}

export type CTABannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
}

export type ToolsProps = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon,
  href: string;
  status: string;
  color: string;
}