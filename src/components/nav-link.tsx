"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  className = "",
  target,
  ...props
}: LinkProps & {
  className?: string;
  children: React.ReactNode;
  target?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClasses = isActive
    ? "text-accent-foreground font-bold"
    : "text-muted-foreground";
  const isInternal = href.toString().startsWith("/");
  const linkTarget = target || (isInternal ? undefined : "_blank");
  return (
    <Link
      href={href}
      target={linkTarget}
      className={`underline underline-offset-4 ${activeClasses} ${className}`}
      {...props}
    />
  );
};
