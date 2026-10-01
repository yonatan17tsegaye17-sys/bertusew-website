import Link from "next/link";
import { site } from "@/content/site";
export default function JoinCTA() {
  const tg = site.socials[0].url;
  return tg
    ? <a href={tg} target="_blank" rel="noopener noreferrer" className="inline-block bg-pine px-8 py-4 font-black uppercase tracking-wider">Join Bertusew on Telegram</a>
    : <p className="opacity-70">Community link coming soon. Follow our social channels as they go live.</p>;
}
