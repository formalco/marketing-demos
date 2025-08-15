import { type JSX } from "react";
import { ArrowRight, ShieldCheck, Eye, KeyRound } from "lucide-react";

export default function BinaryAccess(): JSX.Element {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Copy */}
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase opacity-60">From Binary Access to Intelligent Control</p>
            <h2 className="v4-display mt-3 text-[42px] sm:text-[54px] md:text-[64px] leading-[0.98]">
              <span>You wouldn’t give every guest the same key.</span>
              <br />
              <span>Why give every user the same access?</span>
            </h2>

            <div className="mt-6 space-y-5">
              <p>
                Legacy PAM is binary: swipe in or stay out. It gives the same “master key” to everyone — creating
                overprivileged accounts, audit headaches, and easy wins for attackers.
              </p>
              <div className="rounded-xl bg-white text-black p-4 shadow-sm border border-black/10">
                <p className="font-semibold">
                  Formal adapts access in real time — the right person, the right data, the right moment.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual placeholder - Keycard → Smart home panel */}
          <div aria-label="Concept graphic: hotel keycard to smart home control panel" className="flex items-center justify-center md:justify-end w-full">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Keycard */}
              <div className="relative h-28 w-44 rounded-xl bg-black text-white shadow-[0_8px_0_#0a0a0a] ring-1 ring-white/10">
                <div className="absolute left-4 top-4 h-6 w-10 rounded-sm bg-yellow-400" aria-hidden />
                <div className="absolute left-4 right-4 bottom-4 h-2 rounded bg-white/20" aria-hidden />
                <div className="absolute left-4 right-12 top-14 h-2 rounded bg-white/40" aria-hidden />
              </div>

              {/* Arrow */}
              <ArrowRight className="opacity-60" style={{ color: "var(--v4-fg)" }} aria-hidden />

              {/* Smart panel */}
              <div className="bg-white text-black rounded-2xl p-4 w-[220px] shadow-[0_8px_0_var(--v4-shadow)]">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-8 rounded-full bg-black/20" aria-hidden />
                  <div className="h-2 w-2 rounded-full bg-black/20" aria-hidden />
                </div>
                <div className="mt-4 space-y-3">
                  <ControlRow label="Prod DB" state="Allowed" tone="green" />
                  <ControlRow label="PII Query" state="Masked" tone="amber" />
                  <ControlRow label="SSH Root" state="Blocked" tone="red" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsections */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <Feature
            icon={<KeyRound className="h-5 w-5" aria-hidden />}
            title="Replace master keys"
            body="Ditch binary roles. Policies adapt access by identity, device, location, data sensitivity, and intent."
            actionLabel="See policies"
          />
          <Feature
            icon={<Eye className="h-5 w-5" aria-hidden />}
            title="Observe and adapt"
            body="Watch behavior in real time. Auto‑mask sensitive fields, throttle risky queries, or require step‑up auth."
            actionLabel="View live controls"
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
            title="Least privilege, actually"
            body="Granular, reversible permissions that keep teams fast while closing easy wins for attackers."
            actionLabel="Compare to PAM"
          />
        </div>
      </div>
    </section>
  );
}

function ControlRow({ label, state, tone }: { label: string; state: string; tone: "green" | "amber" | "red" }): JSX.Element {
  const toneMap: Record<typeof tone, { dot: string; chip: string; text: string }> = {
    green: { dot: "bg-green-500", chip: "bg-green-100", text: "text-green-800" },
    amber: { dot: "bg-amber-400", chip: "bg-amber-100", text: "text-amber-900" },
    red: { dot: "bg-red-500", chip: "bg-red-100", text: "text-red-900" },
  } as const;
  const t = toneMap[tone];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${t.dot}`} aria-hidden />
        <span className="text-sm font-medium text-black/80">{label}</span>
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded ${t.chip} ${t.text}`}>{state}</span>
    </div>
  );
}

function Feature({ icon, title, body, actionLabel }: { icon: JSX.Element; title: string; body: string; actionLabel: string }): JSX.Element {
  return (
    <article>
      <div className="flex items-center gap-2 opacity-60">
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">{icon}</div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm opacity-80">{body}</p>
      <a href="#how" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline">
        {actionLabel} <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}


