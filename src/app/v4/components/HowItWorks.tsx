import { type JSX } from "react";
import { ArrowRight, FileText, Shield, Activity } from "lucide-react";

export default function HowItWorks(): JSX.Element {
  return (
    <section className="relative bg-white text-black dark:bg-white dark:text-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="v4-subhead text-3xl sm:text-4xl">A protocol-aware security layer for any database, compute, or API.</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ol className="space-y-3 text-black/80">
            <li>Deploy Formal as a sidecar or reverse proxy next to your instance.</li>
            <li>Intercepts every request/connection.</li>
            <li>Applies policy-as-code with full context.</li>
            <li>Logs every decision for auditability.</li>
          </ol>

          {/* Architecture Diagram */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_0_var(--v4-shadow)]">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center text-sm">
              <Box label="Client" />
              <ArrowRight className="mx-2" />
              <Box label="Formal Proxy" accent>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                  <Pill icon={<Shield className="h-3 w-3" />} label="Policy Engine" />
                  <Pill icon={<FileText className="h-3 w-3" />} label="Audit Logs" />
                  <Pill icon={<Activity className="h-3 w-3" />} label="Risk Scoring" />
                </div>
              </Box>
              <ArrowRight className="mx-2" />
              <Box label="Service" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a href="#technical" className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white shadow-[0_8px_0_var(--v4-shadow)]">View Technical Overview</a>
        </div>
      </div>
    </section>
  );
}

function Box({ label, children, accent = false }: { label: string; children?: React.ReactNode; accent?: boolean }): JSX.Element {
  return (
    <div className={`rounded-xl p-4 ${accent ? "bg-yellow-300" : "bg-black/5"}`}>
      <p className="text-xs font-semibold">{label}</p>
      {children}
    </div>
  );
}

function Pill({ icon, label }: { icon: JSX.Element; label: string }): JSX.Element {
  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-black/5 px-2 py-1">
      {icon}
      <span>{label}</span>
    </div>
  );
}


