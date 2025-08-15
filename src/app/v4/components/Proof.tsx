import type { JSX } from "react";

export default function Proof(): JSX.Element {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl v4-card p-8">
        <h2 className="v4-subhead text-3xl sm:text-4xl">When it’s your name on the breach report, you choose Formal.</h2>
        <blockquote className="mt-6 text-lg text-black/80">“Formal made overprivilege disappear overnight — without slowing us down.”</blockquote>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div><p className="text-4xl font-bold">72%</p><p className="text-sm text-black/70">fewer alerts from overprivileged accounts</p></div>
          <div><p className="text-4xl font-bold">40%</p><p className="text-sm text-black/70">faster compliance audits</p></div>
          <div><p className="text-4xl font-bold">0</p><p className="text-sm text-black/70">user pushback reported post‑rollout</p></div>
        </div>
      </div>
    </section>
  );
}


