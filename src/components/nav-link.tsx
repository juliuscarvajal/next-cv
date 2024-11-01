"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: LinkProps & { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClasses = isActive
    ? "text-accent-foreground font-bold"
    : "text-muted-foreground";
  return (
    <Link
      href={href}
      className={`underline underline-offset-4 ${activeClasses}`}
    >
      {children}
    </Link>
  );
};
