'use client';

import Link from 'next/link';
import { LogoProps } from '@/types';
import { useTheme } from 'next-themes';
import DarkLogo from './dark-logo';
import LightLogo from './light-logo';

const Logo = ({className, href="/", size, children}: LogoProps) => {
  const { resolvedTheme  } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Link href={href} rel="home" {...(className && { className })}>
      {isDark ? <DarkLogo/> : <LightLogo/>}
    </Link>
  )
}

export default Logo
