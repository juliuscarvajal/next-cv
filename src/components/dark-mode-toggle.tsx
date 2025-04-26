"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const DARK_CLASS = "dark";

function useWorkaroundIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export const DarkModeToggle = ({ className = "" }) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(DARK_CLASS);
      enable();
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
      disable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]); // NOTE: Adding enable and disable in deps array will break initial dark mode initialisation

  const onClick = useCallback(() => {
    toggle();
    if (isDarkMode) {
      document.documentElement.classList.remove(DARK_CLASS);
    } else {
      document.documentElement.classList.add(DARK_CLASS);
    }
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
