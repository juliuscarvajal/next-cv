"use client";

import { useEffect } from "react";

// export const useIsomorphicLayoutEffect =
//   typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useIsomorphicLayoutEffect = useEffect;