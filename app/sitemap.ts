import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { pages } from "@/content/pages";
export default function sitemap(): MetadataRoute.Sitemap { return ["", ...pages.map((p) => `/${p.slug}`)].map((u) => ({ url: site.url + u })); }
