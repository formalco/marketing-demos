import { type JSX } from "react";

export default function Adoption(): JSX.Element {
  return (
    <section className="relative" style={{ background: "var(--v4-accent)", color: "#0a0a0a" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="v4-subhead text-3xl sm:text-4xl">Be live in weeks, not months. Works with your stack — no user retraining.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-black shadow-[0_8px_0_var(--v4-shadow)]">Works with your identity provider, SIEM, and logging stack.</div>
          <div className="rounded-2xl bg-white p-6 text-black shadow-[0_8px_0_var(--v4-shadow)]">Zero “rip and replace.”</div>
          <div className="rounded-2xl bg-white p-6 text-black shadow-[0_8px_0_var(--v4-shadow)]">Transparent to end users.</div>
        </div>

        {/* Logos placeholder */}
        <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-6 text-sm font-semibold opacity-70">
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">Okta</div>
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">Azure AD</div>
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">AWS</div>
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">GCP</div>
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">Snowflake</div>
          <div className="rounded-lg bg-black/5 px-3 py-2 text-center">Databricks</div>
        </div>
      </div>
    </section>
  );
}


