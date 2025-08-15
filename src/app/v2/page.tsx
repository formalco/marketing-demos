import type { JSX } from "react";

export default function HomeV2(): JSX.Element {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] bg-yellow-400 text-black p-10 shadow-[0_8px_0_#0a0a0a]">
          <h1 className="text-5xl font-extrabold tracking-tight">Your data, handled.</h1>
          <p className="mt-4 text-lg max-w-xl">A bold, high‑contrast variant using a yellow/black palette. Components and styles are fully co‑located in this route.</p>
          <div className="mt-6 flex gap-3">
            <a href="/" className="rounded-md bg-black text-white px-4 py-2">Back</a>
            <a href="/v1" className="rounded-md bg-white text-black px-4 py-2">View v1</a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["Masking", "Filtering", "Blocking"].map((t) => (
            <div key={t} className="rounded-[22px] bg-white text-black p-6 shadow-[0_4px_0_#0a0a0a]">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="text-sm mt-1 opacity-70">Simple card example within v2.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


