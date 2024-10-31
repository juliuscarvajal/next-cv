"use client";

import { useEffect, useState } from "react";

function useTimeInterval() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
}

export const TimeNow = () => {
  const time = useTimeInterval();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className="flex flex-col items-end">
      <div>{timezone}</div>
      <div>
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: true,
        })}
      </div>
    </div>
  );
};
