export type LogoProps = {
  className?: string;
  href?: string;            
}

export type NavLinkProps = {
  name: string,
  href: string,
  external: boolean,
}

export type NavItem = {
  name: string,
  href: string,
  external: boolean,
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
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
}