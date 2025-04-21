"use client";

import {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export const DarkModeToggle = ({ className = "" }) => {
  const ref = useRef<MediaQueryList>();
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  // NOTE: Set the first time
  useLayoutEffect(() => {
    const mql = window.matchMedia(COLOR_SCHEME_QUERY);
    if (isDarkMode !== mql.matches) {
      console.log(`>>> useLayoutEffect:initial`, isDarkMode, mql.matches);
      const darkmode = isDarkMode === undefined ? true : mql.matches;
      console.log(`>>> set...`, darkmode);
      setIsDarkMode(darkmode);
      document.documentElement.classList.toggle("dark");
    }
    ref.current = mql;
    const onChange = () => {
      console.log(
        `>>> useLayoutEffect:onChange`,
        isDarkMode,
        ref?.current?.matches
      );
      if (isDarkMode !== ref?.current?.matches) {
        setIsDarkMode(ref?.current?.matches);
        document.documentElement.classList.toggle("dark");
      }
    };
    ref?.current?.addEventListener("change", onChange);

    return () => ref?.current?.removeEventListener("change", onChange);
  }, [isDarkMode]);

  // useEffect(() => {
  //   const mql = ref.current;
  //   if (!mql) {
  //     return;
  //   }
  //   const onChange = () => {
  //     console.log(`>>> ref:onChange`, isDarkMode, mql.matches);
  //     if (isDarkMode !== mql.matches) {
  //       setIsDarkMode(mql.matches);
  //       document.documentElement.classList.toggle("dark");
  //     }
  //   };
  //   mql.addEventListener("change", onChange);
  //   return () => mql.removeEventListener("change", onChange);
  // });

  // useEffect(() => {
  //   const mql = window.matchMedia(COLOR_SCHEME_QUERY);
  //   const onChange = () => {
  //     console.log(`>>> useEffect:onChange`, isDarkMode, mql.matches);
  //     if (!isDarkMode && mql.matches) {
  //       setIsDarkMode(mql.matches);
  //       document.documentElement.classList.toggle("dark");
  //     }
  //   };
  //   mql.addEventListener("change", onChange);
  //   return () => mql.removeEventListener("change", onChange);
  // }, [isDarkMode]);

  return (
    <Button
      className={className}
      size="icon"
      variant="ghost"
      onClick={() => {
        // const mql = window.matchMedia(COLOR_SCHEME_QUERY);
        // // const mql = ref.current;
        // console.log(`>>> onClick`, isDarkMode, mql?.matches);
        // if (!mql) {
        //   return;
        // }
        // if (isDarkMode === mql.matches) {
        //   // setIsDarkMode(!isDarkMode);
        // document.documentElement.classList.toggle("dark");
        // }
        const mql = window.matchMedia(COLOR_SCHEME_QUERY);
        if (isDarkMode === mql.matches) {
          setIsDarkMode(!isDarkMode);
        }
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
