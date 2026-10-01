"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-black tracking-widest" onClick={() => setOpen(false)}>BERTUSEW</Link>
        <nav aria-label="Main" className="hidden xl:flex gap-5 text-xs font-bold uppercase tracking-wider">
          {site.nav.slice(1).map(([n, h]) => <Link key={h} href={h} className="hover:text-sun">{n}</Link>)}
          <Link href="/join" className="bg-pine px-4 py-2 -my-2">Join us</Link>
        </nav>
        <button className="xl:hidden min-h-11 min-w-11 text-sm font-bold uppercase" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="xl:hidden fixed inset-x-0 top-16 bottom-0 bg-ink overflow-auto p-5 flex flex-col">
          {[...site.nav, ["Join", "/join"] as [string, string]].map(([n, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-3xl font-black uppercase border-b border-white/10">{n}</Link>
          ))}
        </nav>)}
    </header>);
}
