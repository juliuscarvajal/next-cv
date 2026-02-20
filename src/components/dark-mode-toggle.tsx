"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

function useWorkaroundIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export const DarkModeToggle = ({ className = "" }) => {
  const { isDarkMode, toggle } = useDarkMode();

  const onClick = useCallback(() => {
    toggle();
  }, [isDarkMode, toggle]);

  const isMounted = useWorkaroundIsMounted();
  if (!isMounted) {
    return null; // NOTE: Avoid SSR issues
  }

  return (
    <Button
      className={className}
      size="icon"
      variant="ghost"
      onClick={onClick}
      aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
    >
      {isDarkMode ? (
        <Sun width={48} height={48} />
      ) : (
        <Moon width={48} height={48} />
      )}
    </Button>
  );
};
