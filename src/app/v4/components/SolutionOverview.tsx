import { type JSX } from "react";
import { Eye, ShieldCheck, DatabaseZap, LockKeyhole } from "lucide-react";

export default function SolutionOverview(): JSX.Element {
  return (
    <section className="relative" style={{ background: "var(--v4-accent)", color: "#0a0a0a" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="v4-subhead text-3xl sm:text-4xl">Control access like you control your home.</h2>
        <p className="mt-3 max-w-3xl text-lg">Formal doesn’t just open the door — it decides where you can go, what you can do, and when you can do it.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Tile icon={<Eye className="h-5 w-5" aria-hidden />} title="Selective Visibility" body="Blur sensitive data when it’s not needed." />
          <Tile icon={<DatabaseZap className="h-5 w-5" aria-hidden />} title="Contextual Permissions" body="Allow database access, block risky queries." />
          <Tile icon={<ShieldCheck className="h-5 w-5" aria-hidden />} title="Behavioral Monitoring" body="Detect & stop suspicious actions instantly." />
          <Tile icon={<LockKeyhole className="h-5 w-5" aria-hidden />} title="Granular Control" body="Allow the kitchen, lock the safe." />
        </div>
      </div>
    </section>
  );
}

function Tile({ icon, title, body }: { icon: JSX.Element; title: string; body: string }): JSX.Element {
  return (
    <article className="rounded-2xl bg-white text-black p-6 shadow-[0_8px_0_var(--v4-shadow)]">
      <div className="flex items-center gap-2 text-black/70">
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/5 text-black">{icon}</div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-black/80">{body}</p>
    </article>
  );
}


