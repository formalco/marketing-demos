import type { JSX } from "react";
import { Button } from "../ui/button";

export default function FinalPush(): JSX.Element {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="v4-subhead text-3xl sm:text-4xl">Stop playing access roulette.</h2>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button>Book a Demo</Button>
          <Button variant="secondary">See the Platform</Button>
        </div>
        <p className="mt-3 text-neutral-300">Be live in weeks, not months. Works with your stack — no user retraining.</p>
      </div>
    </section>
  );
}


