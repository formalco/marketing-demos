import type { JSX } from "react";

export default function Platform(): JSX.Element {
  return (
    <section id="platform" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">Platform</h2>
        <p className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
          Secure all of your data with a single platform
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <p className="text-xs font-mono text-neutral-500">mask phone_number data_label</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 text-neutral-100 p-4 text-xs leading-6 shadow-inner">
{`package formal.v2

import future.keywords.if
import future.keywords.in

pre_request := { "action": "mask", "type":
  "redact.constant_characters", redact:
  "[phone_number is redacted]", "columns": columns }
if {
  columns := [col | col := input.row[.];
  col["data_label"] == "phone_number"]
}`}
            </pre>
          </div>
          <div className="rounded-xl p-8 ring-1 ring-black/5 dark:ring-white/10 bg-neutral-100/70 dark:bg-white/5">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Console</p>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Define your policies
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Write policies for your entire data stack to enforce masking, filtering, rate‑limiting, blocking, and decrypting. Manage them alongside integrations and audit logs from one place.
            </p>
            <a
              href="#learn-more"
              className="mt-4 inline-block text-sm font-medium text-emerald-800 dark:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl p-8 ring-1 ring-black/5 dark:ring-white/10 bg-neutral-100/70 dark:bg-white/5">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Connector</p>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Control your data with every request
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Drop a stateless reverse proxy into your VPC or cluster and inspect every request, map it to session context, enforce your cached policies instantly, and log a signed decision to your Console, all asynchronously without additional delays.
            </p>
          </div>
          <div className="rounded-xl p-8 ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">☎</span>
              <div>
                <p className="text-sm font-medium">Phone Number</p>
                <p className="text-sm tracking-[0.3em] text-neutral-400">•••••••</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


