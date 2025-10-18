// 'use client';

import Link from 'next/link';
import { LogoProps } from '@/types';
// import { useTheme } from 'next-themes';
import DarkLogo from './dark-logo';
import LightLogo from './light-logo';

const Logo = ({className, href="/"}: LogoProps) => {
  // const [mounted, setMounted] = useState(false);
  // const { resolvedTheme } = useTheme();

  // // Only render theme-dependent content after mounting
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // // Render a placeholder during SSR to match initial client render
  // if (!mounted) {
  //   return (
  //     <Link href={href} rel="home" {...(className && { className })}>
  //       <div className="w-32 h-[45.5px]" /> {/* Match logo dimensions */}
  //     </Link>
  //   );
  // }

  // const isDark = resolvedTheme === "dark";

  // return (
  //   <Link href={href} rel="home" {...(className && { className })}>
  //     {isDark ? <DarkLogo/> : <LightLogo/>}
  //   </Link>
  // );

  return (
    <Link href={href} rel="home" {...(className && { className })}>
      <LightLogo/>
      <DarkLogo/>
    </Link>
  )
}

export default Logo
