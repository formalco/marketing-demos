import Link from "next/link";
import type { JSX } from "react";

export default function Index(): JSX.Element {
  const variants: Array<{ href: string; title: string; desc: string; color: string }> = [
    { href: "/v1", title: "Variant v1 (current design)", desc: "Serif hero, emerald accent.", color: "bg-emerald-600" },
    { href: "/v2", title: "Variant v2 (yellow/black)", desc: "Loud marketing style.", color: "bg-yellow-400" },
    { href: "/v3", title: "Variant v3 (slate/purple)", desc: "Minimal, editorial.", color: "bg-purple-500" },
    { href: "/v4", title: "v4: Bold and Loud", desc: "From Binary to Brilliant.", color: "bg-[#f7f146]" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Landing Page Prototypes</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">Pick a route to explore isolated component libraries and palettes.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {variants.map((v) => (
          <Link key={v.href} href={v.href} className="group rounded-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
            <div className={`h-28 ${v.color}`} />
            <div className="p-5">
              <h2 className="text-lg font-semibold group-hover:underline">{v.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{v.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
