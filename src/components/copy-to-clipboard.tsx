"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";

export const CopyToClipboard = ({ text = "", className = "" }) => {
  const [copied, setCopied] = useState(false);
  const ClipBoardComponent = copied ? ClipboardCheck : Clipboard;

  // NOTE: Reset copied state when text changes
  useEffect(() => {
    setCopied(false);
  }, [text]);

  return (
    <ClipBoardComponent
      width={16}
      height={16}
      className={`${className} ${
        copied ? "text-green-500" : "text-stone-500"
      } cursor-pointer`}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(text);
      }}
    />
  );
};
