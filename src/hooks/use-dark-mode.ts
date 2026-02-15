"use client"

import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage";
import { useMediaQuery } from "./use-media-query";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";

type DarkModeOptions = {
  defaultValue?: boolean;
  localStorageKey?: string;
  initializeWithValue?: boolean;
};

type DarkModeReturn = {
  isDarkMode: boolean;
  toggle: () => void;
  set: (value: boolean) => void;
};

export function useDarkMode(options: DarkModeOptions = {}): DarkModeReturn {
  const {
    defaultValue,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true,
  } = options;

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue,
  });
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS,
    { initializeWithValue }
  );

  // Update darkMode if os prefers changes
  useEffect(() => {
    if (isDarkMode === undefined && isDarkOS) {
      setDarkMode(isDarkOS);
    }
  }, [isDarkMode, isDarkOS, setDarkMode]);

  useEffect(() => {
    const DARK_CLASS = "dark";
    if (isDarkMode) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    set: (value) => setDarkMode(value),
  };
}
