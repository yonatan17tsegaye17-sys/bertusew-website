// EDIT HERE: core site text, links, navigation.
export const site = {
  name: "Bertusew", full: "Bertusew Running & Bike Club",
  tagline: "Discipline • Health • Community", motto: "Run. Ride. Belong.",
  location: "Addis Ababa, Ethiopia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  anniversaryDate: null as string | null, // [ADD ANNIVERSARY DATE]
  hero: { type: "image" as "image" | "video", src: "/media/hero.jpg" as string }, // put file in /public/media, e.g. "/media/hero.jpg"
  addisActiveUrl: process.env.NEXT_PUBLIC_ADDIS_ACTIVE_URL || "",
  socials: [
    { name: "Telegram", url: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bertusew" },
    { name: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
    { name: "TikTok", url: process.env.NEXT_PUBLIC_TIKTOK_URL || "" },
    { name: "YouTube", url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "" },
  ],
  nav: [["Home","/"],["About","/about"],["Running","/running"],["Cycling","/cycling"],["Hiking","/hiking"],["Community","/community"],["Events","/events"],["Media","/media"],["Our Vision","/vision"],["Recognition","/recognition"]] as [string,string][],
};
