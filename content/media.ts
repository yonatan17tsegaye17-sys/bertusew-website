// EDIT HERE: add your own photos to /public/media, then add an entry. category: Runs | Cycling | Community | Addis | Hikes | Events
export type MediaItem = { src: string; alt: string; caption: string; category: string; type?: "image" | "video" };
export const media: MediaItem[] = [
  { src: "/media/hike-group.jpg", alt: "Large group of Bertusew members in yellow jerseys sitting together in a forest", caption: "The community on a hike", category: "Hikes" },
  { src: "/media/night-jerseys.jpg", alt: "Bertusew members posing together at night in Bertusew jerseys", caption: "Evening with the community", category: "Community" },
  { src: "/media/night-lake.jpg", alt: "Group of runners celebrating at night in front of Addis Ababa buildings and a lake", caption: "Night run in Addis", category: "Runs" },
  { src: "/media/day-group.jpg", alt: "Smiling group of runners with arms raised under trees", caption: "Group run", category: "Runs" },
  { src: "/media/plaza-night.jpg", alt: "Group cheering in front of the lit 4 Kilo Plaza fountain at night", caption: "4 Kilo Plaza at night", category: "Addis" },
  { src: "/media/summit.jpg", alt: "Four hikers on a rocky summit under a clear blue sky", caption: "On the summit", category: "Hikes" },
  { src: "/media/summit-pair.jpg", alt: "Two hikers flexing on a mountain ridge", caption: "Strength together", category: "Hikes" },
  { src: "/media/viewpoint.jpg", alt: "Two members in Bertusew running club jerseys sitting on a cliff above the city", caption: "Above the city", category: "Hikes" },
  { src: "/media/race-day.jpg", alt: "Two runners smiling during a road race", caption: "Race day", category: "Events" },
];
