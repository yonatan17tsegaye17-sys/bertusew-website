import Link from "next/link";
export default function NotFound() {
  return (<div className="mx-auto max-w-3xl px-5 py-32"><h1 className="text-6xl font-black">LOST YOUR ROUTE?</h1><p className="mt-3 text-xl">Let's get you moving again.</p><Link href="/" className="inline-block mt-8 bg-pine px-8 py-4 font-black uppercase">Back to home</Link></div>);
}
