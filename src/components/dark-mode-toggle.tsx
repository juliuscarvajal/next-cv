"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Button
      className={className}
      size="icon"
      variant="ghost"
      onClick={() => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
      }}
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
