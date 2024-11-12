"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const BackNav = ({ className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/") {
    return <div />; // NOTE: Placholder so that the other components won't shift
  }
  const onClick = () => {
    if (pathname.startsWith("/projects")) {
      router.replace("/");
      return;
    }
    router.back();
  };
  return (
    <Button size="icon" variant="ghost" className={className} onClick={onClick}>
      <ChevronLeft width={48} height={48} />
    </Button>
  );
};
