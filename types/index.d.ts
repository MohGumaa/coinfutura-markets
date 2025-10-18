export type LogoProps = {
  className?: string;
  href?: string;            
  size?: string | number;
  children?: ReactNode;
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