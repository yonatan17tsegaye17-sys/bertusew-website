export type Status = "ACTIVE NOW" | "DEVELOPING" | "FUTURE";
export const activities: { name: string; status: Status; line: string }[] = [
  { name: "Running", status: "ACTIVE NOW", line: "The foundation." },
  { name: "Hiking", status: "ACTIVE NOW", line: "Explore beyond the road." },
  { name: "Community fitness", status: "ACTIVE NOW", line: "Move together." },
  { name: "Cycling", status: "DEVELOPING", line: "The next dimension." },
  { name: "Swimming", status: "FUTURE", line: "The future." },
  { name: "Triathlon", status: "FUTURE", line: "A long-term direction, not a current program." },
];
