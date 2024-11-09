"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  waitBeforeShow?: number;
  placeholder?: React.ReactNode;
};

const Delay = ({ children, waitBeforeShow = 200, placeholder }: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  if (!isShown) {
    return placeholder || null;
  }
  return children;
};

export default Delay;
