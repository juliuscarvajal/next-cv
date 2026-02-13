export function getLocaleDateString(date: Date, timezone?: string) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: timezone,
  });
}
