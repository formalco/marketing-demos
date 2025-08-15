import { type JSX } from "react";

export default function Compliance(): JSX.Element {
  return (
    <section className="relative" style={{ background: "#f3f3f3", color: "#0a0a0a" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="v4-subhead text-3xl sm:text-4xl">Makes least privilege real, not theoretical.</h2>
        <p className="mt-3 max-w-3xl text-black/75">Map directly to NIST, SOC 2, ISO 27001, and Zero Trust principles without slowing development or operations.</p>

        <ul className="mt-8 grid gap-4 text-black/85 md:grid-cols-3">
          <li className="rounded-xl bg-white p-5 shadow-[0_8px_0_var(--v4-shadow)]">Enforce policy-as-code for consistent controls.</li>
          <li className="rounded-xl bg-white p-5 shadow-[0_8px_0_var(--v4-shadow)]">Built-in logging for audit readiness.</li>
          <li className="rounded-xl bg-white p-5 shadow-[0_8px_0_var(--v4-shadow)]">Eliminate entire classes of overprivileged access risk.</li>
        </ul>
      </div>
    </section>
  );
}


