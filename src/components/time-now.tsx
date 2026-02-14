"use client";

import { getLocaleTimeString } from "@/lib/getLocaleTimeString";
import { getCurrentTimezone } from "@/lib/getCurrentTimezone";
import { useTimeInterval } from "@/lib/useTimeInterval";
import { getLocaleDateString } from "@/lib/getLocaleDateString";
import { cn } from "@/lib/utils";

type TimeNowProps = {
  timezone?: string;
  className?: string;
  classes?: Record<"timezone" | "time", string>;
};

export const TimeNow = ({
  timezone,
  className = "",
  classes,
}: TimeNowProps) => {
  const time = useTimeInterval();
  const timezoneName = timezone || getCurrentTimezone();
  return (
    <span className={className}>
      <span className={cn("text-xs", classes?.timezone || "")}>
        {timezoneName}
      </span>
      <span
        suppressHydrationWarning
        className={cn(
          "w-full flex gap-x-1 flex-wrap justify-end",
          classes?.time,
        )}
      >
        <span>{getLocaleTimeString(time, timezoneName)}</span>
        <span>{getLocaleDateString(time, timezoneName)}</span>
      </span>
    </span>
  );
};
