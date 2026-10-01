import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.full} | ${site.location}`, template: `%s | ${site.name}` },
  description: "An Ethiopian endurance community built on discipline, health and community. Running, hiking and cycling in Addis Ababa.",
  openGraph: { title: site.full, description: site.motto, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image" },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Navbar /><main className="pt-16">{children}</main><Footer /></body></html>);
}
