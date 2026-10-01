import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { events } from "@/content/events";
import { documents, testimonials, relationships } from "@/content/recognition";
import JoinCTA from "@/components/JoinCTA";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return pages.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params; const p = pages.find((x) => x.slug === slug);
  return p ? { title: p.kicker, description: p.intro, alternates: { canonical: `/${p.slug}` } } : {};
}
const Empty = ({ children }: { children: React.ReactNode }) => <p className="border border-dashed border-white/25 p-6 opacity-80">{children}</p>;
export default async function Page({ params }: P) {
  const { slug } = await params; const p = pages.find((x) => x.slug === slug); if (!p) notFound();
  return (
    <article className="mx-auto max-w-5xl px-5 py-20">
      <p className="text-sun text-xs font-black uppercase tracking-widest">{p.kicker}</p>
      <h1 className="mt-2 text-5xl sm:text-7xl font-black uppercase">{p.title}</h1>
      <p className="mt-4 text-xl opacity-80 max-w-2xl">{p.intro}</p>
      <div className="mt-12 grid gap-4">
        {p.sections.map((s) => <section key={s.h} className="border-t border-white/15 pt-5">{s.tag && <span className="text-[10px] font-black tracking-widest bg-sun text-ink px-2 py-1">{s.tag}</span>}<h2 className="mt-2 text-2xl font-black uppercase">{s.h}</h2><p className="opacity-80 mt-1">{s.b}</p></section>)}
        {slug === "events" && (events.length ? events.map((e) => <div key={e.title} className="border border-white/15 p-5"><b>{e.title}</b> · {e.date} · {e.status}</div>) : <Empty>NEW EVENTS ARE COMING.</Empty>)}
        {slug === "join" && <JoinCTA />}
        {slug === "recognition" && (<>
          <h2 className="text-2xl font-black uppercase">Relationships</h2>
          {relationships.map((r) => <div key={r.name} className="border border-white/15 p-6"><h3 className="text-3xl font-black uppercase">{r.name}</h3><p className="text-xs text-sun uppercase">{r.type}</p><p className="mt-2 opacity-80">{r.description}</p>{r.story && <p className="mt-2">{r.story}</p>}{r.link && <a className="underline" href={r.link} target="_blank" rel="noopener noreferrer">Read more →</a>}</div>)}
          <h2 className="text-2xl font-black uppercase mt-6">Letters</h2>
          {documents.length ? documents.map((d) => <a key={d.id} href={d.file_url} className="border border-white/15 p-5 block"><b>{d.title}</b> · {d.organization} · {d.type}</a>) : <Empty>Coming soon. Recognition and recommendations will be added here.</Empty>}
          <h2 className="text-2xl font-black uppercase mt-6">Recommended by people who know the journey</h2>
          {testimonials.length ? testimonials.map((t) => <blockquote key={t.quote} className="border-l-4 border-pine pl-4">“{t.quote}”<footer className="text-sm opacity-70">{t.name}{t.organization && `, ${t.organization}`}</footer></blockquote>) : <Empty>No recommendations have been published yet.</Empty>}
        </>)}
      </div>
    </article>);
}
