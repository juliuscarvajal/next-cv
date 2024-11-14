"use client";

import { getLocaleTimeString } from "@/lib/getLocaleTimeString";
import { getCurrentTimezone } from "@/lib/getCurrentTimezone";
import { useTimeInterval } from "@/lib/useTimeInterval";

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
      <span className={classes?.timezone || ""}>{timezoneName}</span>
      <span suppressHydrationWarning className={classes?.time}>
        {getLocaleTimeString(time, timezoneName)}
      </span>
    </span>
  );
};
