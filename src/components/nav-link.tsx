"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
  target?: string;
  underline?: boolean;
};

export const NavLink = ({
  href,
  className = "",
  target,
  underline = true,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isInternal = href.toString().startsWith("/");
  const activeClasses = isActive ? "font-bold" : "";
  const internalNavClasses = isInternal ? activeClasses : "";
  const underlineClasses = underline ? "underline underline-offset-4" : "";
  const linkTarget = target || (isInternal ? undefined : "_blank");
  return (
    <Link
      href={href}
      target={linkTarget}
      className={`${underlineClasses} ${internalNavClasses} ${className}`}
      {...props}
    />
  );
};
