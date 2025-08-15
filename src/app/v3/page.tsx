import type { JSX } from "react";

export default function HomeV3(): JSX.Element {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Formal</p>
          <h1 className="mt-3 font-serif text-5xl tracking-tight">Security, distilled.</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">A minimal editorial variant with slate background and purple accent, isolating styles to this route.</p>
        </header>
        <section className="mt-10 space-y-6">
          {["Precise masking", "Contextual decisions", "Signed audits"].map((s) => (
            <div key={s} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold">{s}</h3>
              <p className="text-sm text-neutral-400">Lean card example in v3.
              </p>
            </div>
          ))}
        </section>
        <div className="mt-10 flex gap-3">
          <a href="/" className="rounded-md bg-white/10 px-4 py-2">Back</a>
          <a href="/v1" className="rounded-md bg-purple-600 text-white px-4 py-2">View v1</a>
        </div>
      </div>
    </main>
  );
}


