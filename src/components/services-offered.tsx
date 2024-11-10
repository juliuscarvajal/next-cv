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
};

export const ServicesOffered = ({
  batchLimit = 5,
  expandText = "",
  collapseText = "Show less",
  onSelect,
}: ServicesOfferedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstBatch = servicesOffered.slice(0, batchLimit);
  const secondBatch = servicesOffered.slice(batchLimit);
  const commonBadgeStyle = "";
  const badgeStyle = `${commonBadgeStyle} ${
    onSelect ? "cursor-pointer" : ""
  } font-bold text-black bg-gradient-to-r from-stone-200 to-stone-50 dark:from-stone-400 dark:to-stone-50`;
  const expandStyle = `text-xs block p-0`;
  return (
    <Collapsible className="space-y-2" open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-2 flex-wrap">
        {firstBatch.map((service) => {
          return (
            <Badge
              key={service}
              className={badgeStyle}
              onClick={() => onSelect?.(service)}
            >
              {service}
            </Badge>
          );
        })}
      </div>
      {!isOpen && secondBatch?.length > 0 && (
        <CollapsibleTrigger asChild>
          <Button className={expandStyle} size="sm" variant="link">
            {expandText || `+ ${secondBatch?.length} more`}
          </Button>
        </CollapsibleTrigger>
      )}
      <CollapsibleContent className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          {secondBatch.map((service) => {
            return (
              <Badge
                key={service}
                className={badgeStyle}
                onClick={() => onSelect?.(service)}
              >
                {service}
              </Badge>
            );
          })}
        </div>
        {isOpen && (
          <CollapsibleTrigger asChild>
            <Button className={expandStyle} size="sm" variant="link">
              {collapseText}
            </Button>
          </CollapsibleTrigger>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};
