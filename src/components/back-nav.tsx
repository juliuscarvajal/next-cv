"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BackNav = ({ className = "" }) => {
  const pathname = usePathname();
  if (pathname === "/") {
    return <div></div>; // NOTE: Placholder so that the other components won't shift
  }
  return (
    <Link href="/" className={className}>
      <ChevronLeft width={32} height={32} />
    </Link>
  );
};
