import type { JSX } from "react";

export default function Outcomes(): JSX.Element {
  const items: Array<{ title: string; body: string; icon: string }> = [
    {
      title: "Least‑priviledge, everywhere",
      body:
        "Enforce fine‑grained controls without database updates or schema rewrites.",
      icon: "🔒",
    },
    {
      title: "Accelerated velocity",
      body:
        "Remove blanket revokes and approval queues so your team stays unblocked.",
      icon: "🏇",
    },
    {
      title: "Provable compliance",
      body:
        "Keep regulators satisfied with continuous, query‑level audit trails.",
      icon: "📏",
    },
    {
      title: "Reduced blast radius",
      body:
        "Limit the scope of any credential leak, misconfiguration, or user error.",
      icon: "🧯",
    },
  ];

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900/30 py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">Outcomes</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
          Move with clarity and confidence
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="group">
              <div className="text-4xl" aria-hidden>
                {it.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


