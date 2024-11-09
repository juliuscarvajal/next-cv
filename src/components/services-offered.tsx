"use client";

import { servicesOffered } from "@/constants/servicesOffered";
import { Badge } from "./ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";

export const ServicesOffered = () => {
  const [isOpen, setIsOpen] = useState(false);
  const batchLimit = 4;
  const firstBatch = servicesOffered.slice(0, batchLimit);
  const secondBatch = servicesOffered.slice(batchLimit);
  const commonBadgeStyle = "px-3 py-1";
  const badgeStyle = `${commonBadgeStyle} bg-gradient-to-r from-stone-200 to-stone-50 dark:from-stone-400 dark:to-stone-50`;
  const badgeStyleExpand = `${commonBadgeStyle}`;
  return (
    <Collapsible
      className="flex gap-2 flex-wrap"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {firstBatch.map((service) => {
        return (
          <Badge key={service} variant="outline" className={badgeStyle}>
            {service}
          </Badge>
        );
      })}
      {!isOpen && (
        <CollapsibleTrigger>
          <Badge className={badgeStyleExpand}>
            {secondBatch.length} more services
          </Badge>
        </CollapsibleTrigger>
      )}
      <CollapsibleContent className="flex gap-2 flex-wrap">
        {secondBatch.map((service) => {
          return (
            <Badge key={service} variant="outline" className={badgeStyle}>
              {service}
            </Badge>
          );
        })}
        {isOpen && (
          <CollapsibleTrigger>
            <Badge className={badgeStyleExpand}>Show less</Badge>
          </CollapsibleTrigger>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};
