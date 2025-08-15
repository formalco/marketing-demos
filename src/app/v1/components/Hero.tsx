"use client";

import { useId, useState } from "react";
import type { JSX } from "react";

export default function Hero(): JSX.Element {
  const inputId = useId();
  const [email, setEmail] = useState("");

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-24 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.05] fade-in-up">
          Experience the renaissance
          <br />
          in data security.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Seamlessly govern access to your infrastructure, data, and third‑party tools.
        </p>

        <form
          action="#demo"
          className="mt-8 flex max-w-xl mx-auto items-center gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor={inputId} className="sr-only">
            Email
          </label>
          <input
            id={inputId}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            className="flex-1 h-11 rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 text-sm placeholder:text-neutral-400 shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition"
          />
          <button
            className="h-11 shrink-0 rounded-md bg-emerald-700 text-white px-4 text-sm font-medium shadow-sm hover:translate-y-[-1px] hover:shadow-lg active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            type="submit"
          >
            Schedule demo
          </button>
        </form>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-36 sm:-bottom-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-28 sm:h-32 w-full rounded-t-[28px] bg-emerald-900" />
        </div>
      </div>

      <BackgroundSketch />
    </section>
  );
}

function BackgroundSketch(): JSX.Element {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="mask-fade-b absolute inset-x-0 bottom-0 h-[65%] bg-[url('/window.svg')] bg-no-repeat bg-center opacity-[0.08]" />
    </div>
  );
}


