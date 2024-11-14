export function getLocaleTimeString(date: Date, timezone?: string) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "2-digit",
    hour12: true,
    timeZone: timezone,
  });
}
