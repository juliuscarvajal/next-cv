"use client"

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const [matches, setMatches] = useState<boolean | undefined>(
    initializeWithValue ? undefined : defaultValue
  );
  useIsomorphicLayoutEffect(() => {
    if (matches !== undefined) {
      return;
    }
    if (initializeWithValue) {
      setMatches(window.matchMedia(query).matches);
    }
    setMatches(defaultValue);
  }, [matches, initializeWithValue, defaultValue]);

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(window.matchMedia(query).matches);
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}
