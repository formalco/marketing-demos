import type { JSX } from "react";

const features: Array<{ title: string; body: string; icon: string }> = [
  {
    title: "Zero-trust session intelligence",
    body:
      "Apply policies continuously from login to logout, adapting in real time to device context, geos, and MFA state so sessions never drift out of compliance.",
    icon: "🛡️",
  },
  {
    title: "Dynamic data masking",
    body:
      "Scrub or tokenize sensitive fields on the fly with regex or ML classifiers, or reveal the data instantly upon approval.",
    icon: "🎭",
  },
  {
    title: "One‑line deployment",
    body:
      "Insert our connector as a sidecar or transparent proxy. Start securing traffic instantly with no code changes or SDKs.",
    icon: "🧩",
  },
];

export default function Technology(): JSX.Element {
  return (
    <section id="technology" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">Technology</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
          Exceptional craftsmanship in every feature
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-neutral-100/70 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
            >
              <div className="text-xl" aria-hidden>
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


