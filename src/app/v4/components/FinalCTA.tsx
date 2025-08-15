import { type JSX } from "react";
import { Button } from "../ui/button";

export default function FinalCTA(): JSX.Element {
  return (
    <section className="relative" style={{ background: "#0a0a0a", color: "#ffffff" }}>
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="v4-display text-[42px] sm:text-[54px] md:text-[64px] leading-[0.98]">Stop playing access roulette.</h2>
        <p className="mt-4 text-lg opacity-90">Upgrade to intelligent, adaptive access control for every request, every system, every time.</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button >See the Platform</Button>
          <Button variant="secondary">Book a Demo</Button>
        </div>
      </div>
    </section>
  );
}


