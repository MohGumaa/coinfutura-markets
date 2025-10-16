export type Logo = {
  className?: string;
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