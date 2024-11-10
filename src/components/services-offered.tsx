"use client";

import { servicesOffered } from "@/constants/servicesOffered";
import { Badge } from "./ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { Button } from "./ui/button";

type ServicesOfferedProps = {
  batchLimit?: number;
  expandText?: string;
  collapseText?: string;
  onSelect?: (service: string) => void;
  size?: "xs" | "sm" | "md" | "lg";
};

export const ServicesOffered = ({
  batchLimit = 5,
  expandText = "",
  collapseText = "Show less",
  size = "md",
  onSelect,
}: ServicesOfferedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstBatch = servicesOffered.slice(0, batchLimit);
  const secondBatch = servicesOffered.slice(batchLimit);
  const sizeStyle = `text-${size}`;
  const badgeStyle = `${sizeStyle} ${onSelect ? "cursor-pointer" : ""}`;
  const expandStyle = `${sizeStyle} block px-3 py-0.5 h-auto`;
  return (
    <div className="flex gap-2 flex-wrap">
      {firstBatch.map((service) => {
        return (
          <Badge
            key={service}
            onClick={() => onSelect?.(service)}
            className={badgeStyle}
          >
            {service}
          </Badge>
        );
      })}
      {!isOpen && secondBatch?.length > 0 && (
        <Button
          className={expandStyle}
          size="sm"
          variant="secondary"
          onClick={() => setIsOpen(true)}
        >
          {expandText || `Show +${secondBatch?.length} more`}
        </Button>
      )}
      {isOpen && secondBatch?.length > 0 && (
        <>
          {secondBatch?.map((service) => {
            return (
              <Badge
                key={service}
                onClick={() => onSelect?.(service)}
                className={badgeStyle}
              >
                {service}
              </Badge>
            );
          })}
          <Button
            className={expandStyle}
            size="sm"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            {collapseText}
          </Button>
        </>
      )}
    </div>
  );
};
