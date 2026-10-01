import Link from "next/link";
import { site } from "@/content/site";
import { clubStats } from "@/content/stats";
import { activities } from "@/content/activities";
import { values, mindset, journey, milestones } from "@/content/story";
import JoinCTA from "@/components/JoinCTA";
const label: Record<string,string> = { "ACTIVE NOW":"bg-pine","DEVELOPING":"bg-sun text-ink","FUTURE":"border border-white/40" };
export default function Home() {
  const stats = ([["Community members",clubStats.members],["Group activities",clubStats.groupActivities],["Hikes",clubStats.hikes],["Kilometers",clubStats.kilometers]] as [string,number|null][]).filter(([,v]) => v != null);
  return (<>
    <section className="relative min-h-[88vh] flex items-end px-5 pb-16 bg-gradient-to-b from-[#1b2a1d] to-ink">
      {/* Hero media: set site.hero.src in content/site.ts */}
      <div className="up mx-auto w-full max-w-7xl">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight">BERTUSEW</h1>
        <p className="mt-2 text-2xl sm:text-4xl font-black text-sun">RUN. RIDE. BELONG.</p>
        <p className="mt-4 max-w-xl text-lg opacity-80">An Ethiopian endurance community built on discipline, health and community.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/join" className="bg-pine px-8 py-4 font-black uppercase">Join the community</Link>
          <Link href="/about" className="border border-white/50 px-8 py-4 font-black uppercase">Discover Bertusew</Link>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-5 py-24">
      <h2 className="text-5xl font-black">WE MOVE TOGETHER.</h2>
      <p className="mt-6 text-xl opacity-80">Bertusew is more than running. It is a community built around movement, discipline and connection. Some come to improve their running. Some to discover cycling or hiking. Some simply want people to move with. The common thread is consistency and community.</p>
    </section>
    <section className="mx-auto max-w-7xl px-5 grid gap-4 md:grid-cols-3">
      {values.map(([n,t,d]) => <div key={n} className="border border-white/15 p-8"><p className="text-sun font-black">{n}</p><h3 className="text-3xl font-black uppercase mt-2">{t}</h3><p className="mt-2 opacity-80">{d}</p></div>)}
    </section>
    <section className="mx-auto max-w-7xl px-5 py-24">
      <h2 className="text-5xl font-black">ONE YEAR OF MOVEMENT.</h2>
      <p className="mt-3 text-xl opacity-80">One year of community. And we're just getting started.</p>
      {stats.length > 0 && <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">{stats.map(([l,v]) => <div key={l}><p className="text-6xl font-black">{v}</p><p className="text-xs uppercase tracking-widest">{l}</p></div>)}</div>}
      <ol className="mt-10 grid gap-3 md:grid-cols-4">{milestones.map((m) => <li key={m.title} className="border-t-2 border-pine pt-3"><h3 className="font-black uppercase">{m.title}</h3><p className="opacity-80 text-sm mt-1">{m.text}</p></li>)}</ol>
    </section>
    <section className="mx-auto max-w-7xl px-5">
      <h2 className="text-5xl font-black">BUILD ENDURANCE.</h2>
      <p className="mt-3 text-xl opacity-80">One community. Multiple disciplines. One mindset.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => <div key={a.name} className="border border-white/15 p-6"><span className={`text-[10px] font-black tracking-widest px-2 py-1 ${label[a.status]}`}>{a.status}</span><h3 className="mt-4 text-3xl font-black uppercase">{a.name}</h3><p className="opacity-70">{a.line}</p></div>)}
      </div>
      <Link href="/vision" className="inline-block mt-6 font-bold uppercase underline">Our long-term vision →</Link>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-24">
      <h2 className="text-5xl font-black">THE ENDURANCE MINDSET</h2>
      <p className="mt-3 text-xl opacity-80">Endurance is more than distance. It is the ability to keep showing up.</p>
      <ol className="mt-8 flex flex-wrap gap-2">{mindset.map((m,i) => <li key={m} className="text-3xl sm:text-5xl font-black uppercase">{m}{i < mindset.length-1 && <span className="text-sun mx-2">→</span>}</li>)}</ol>
      <ol className="mt-8 flex flex-wrap gap-2 text-sm uppercase tracking-widest opacity-70">{journey.map((j,i) => <li key={j}>{j}{i < journey.length-1 && " → "}</li>)}</ol>
    </section>
    <section className="mx-auto max-w-4xl px-5 pb-12 text-center">
      <h2 className="text-5xl font-black">READY TO MOVE WITH US?</h2>
      <div className="mt-8"><JoinCTA /></div>
    </section>
  </>);
}
