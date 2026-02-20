export function getLocaleTimeString(date: Date, timezone?: string) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone,
  });
}
