import { type JSX } from "react";

export default function ProblemFraming(): JSX.Element {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[28px] bg-[#0c0c0c] text-white shadow-[0_18px_0_#000] p-8 md:p-12">
          <h2 className="v4-subhead text-3xl sm:text-4xl">Binary access can’t protect modern enterprises.</h2>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <ul className="space-y-3 text-white/85 text-base">
              <li>Swipe card → all or nothing.</li>
              <li>No nuance. No context.</li>
              <li>Overprivileged accounts are security incidents waiting to happen.</li>
              <li>Threat actors thrive on this weakness.</li>
            </ul>

            {/* Before/After visual */}
            <div className="grid grid-cols-2 gap-6">
              {/* Before: Binary switch */}
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">Before</p>
                <div className="mt-3 h-28 rounded-xl bg-white/5 flex items-center justify-center">
                  <div className="relative h-10 w-20 rounded-full bg-white/10">
                    <div className="absolute left-1 top-1 h-8 w-8 rounded-full bg-white" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/80">Binary light switch</p>
              </div>

              {/* After: Smart sliders */}
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">After</p>
                <div className="mt-3 h-28 rounded-xl bg-white/5 flex items-center justify-center">
                  <div className="w-[120px] space-y-2">
                    <SliderLine width="80%" />
                    <SliderLine width="55%" />
                    <SliderLine width="95%" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/80">Multi‑slider smart control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderLine({ width }: { width: string }): JSX.Element {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <div className="h-2 rounded-full bg-white" style={{ width }} />
    </div>
  );
}


