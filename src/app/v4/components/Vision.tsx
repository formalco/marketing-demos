import type { JSX } from "react";

const tiles: Array<{ title: string; body: string }> = [
  { title: "Selective Visibility", body: "Blur sensitive data when it’s not needed." },
  { title: "Contextual Permissions", body: "Allow database access, block risky queries." },
  { title: "Behavioral Monitoring", body: "Detect & stop suspicious actions instantly." },
  { title: "Granular Control", body: "Allow the kitchen, lock the knife drawer." },
];

export default function Vision(): JSX.Element {
  return (
    <section id="how" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="v4-subhead text-3xl sm:text-4xl">Control access like you control your home.</h2>
        <p className="mt-3 text-neutral-300">Formal doesn’t just open the door — it decides where you can go, what you can do, and when you can do it.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <article key={t.title} className="v4-card p-6">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-black/75">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


