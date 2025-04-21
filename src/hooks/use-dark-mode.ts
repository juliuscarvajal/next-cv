"use client"

import { useEffect, useState } from "react";
import { useLocalStorage } from "./use-local-storage";

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
  enable: () => void;
  disable: () => void;
  set: (value: boolean) => void;
};

export function useDarkMode(options: DarkModeOptions = {}): DarkModeReturn {
  const {
    defaultValue,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true,
  } = options;

  const [isDarkOS, setDarkOS] = useState(false);
    // () => {
    // const mql = window.matchMedia(COLOR_SCHEME_QUERY);
    // return mql.matches;
    // const onChange = () => {
    //   setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    // };
    // mql.addEventListener("change", onChange);
    // setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    // return () => mql.removeEventListener("change", onChange);
//   }) 
  useEffect(() => {
    const mql = window.matchMedia(COLOR_SCHEME_QUERY);
    if (mql.matches) {
      setDarkOS(true);
    }
  }, [])

//   const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
//     initializeWithValue,
//     defaultValue,
//   });
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
    { initializeWithValue }
  );

  // Update darkMode if os prefers changes
  useEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(isDarkOS);
    }
  }, [isDarkMode, isDarkOS, setDarkMode]);

  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    },
    set: (value) => {
      setDarkMode(value);
    },
  };
}
