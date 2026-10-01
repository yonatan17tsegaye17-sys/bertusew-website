import Link from "next/link";
import { site } from "@/content/site";
export default function Footer() {
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="border-t border-white/10 px-5 py-12 mt-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-2xl font-black tracking-widest">BERTUSEW</p>
        <p className="text-xs tracking-widest text-sun mt-1">{site.tagline.toUpperCase()}</p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">{site.nav.map(([n, h]) => <Link key={h} href={h}>{n}</Link>)}<Link href="/join">Join</Link></nav>
        {socials.length > 0 && <p className="mt-4 flex gap-4 text-sm">{socials.map((s) => <a key={s.name} href={s.url} rel="noopener noreferrer" target="_blank">{s.name}</a>)}</p>}
        <p className="mt-6 text-sm opacity-60">{site.location} · © {new Date().getFullYear()} {site.full}</p>
      </div>
    </footer>);
}
