import type { JSX } from "react";

export default function Pain(): JSX.Element {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="v4-subhead text-3xl sm:text-4xl">Why hotel keys fail in a smart home world</h2>
            <p className="mt-4 text-neutral-200">In the 90s, “access” was simple — swipe a card, get in the room. Today’s enterprise is a smart home: hundreds of devices, sensitive data flows, and AI systems running 24/7.</p>
            <ul className="mt-6 space-y-2 text-neutral-300 list-disc pl-5">
              <li>Every guest gets the same access.</li>
              <li>Overprivileged accounts are security incidents waiting to happen.</li>
              <li>Threat actors thrive on this binary weakness.</li>
            </ul>
          </div>
          <div className="v4-card p-6">
            <p className="text-sm text-black/70">Smart home floor plan (placeholder)</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-lg bg-white/70 p-4">Kitchen = Dev env</div>
              <div className="rounded-lg bg-white/70 p-4">Safe = Finance data</div>
              <div className="rounded-lg bg-white/70 p-4">Door = VPN/SSO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


