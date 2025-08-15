import type { JSX } from "react";
import Image from "next/image";

export default function Solutions(): JSX.Element {
  const items: Array<{ title: string; body: string; img: string }> = [
    {
      title: "Secure developer access",
      body:
        "Keep your data safe while letting your engineers ship. Grant policy based access to databases, CLIs, and Kubernetes in seconds.",
      img: "/file.svg",
    },
    {
      title: "Secure tool access",
      body:
        "Let teammates see only rows that matters in tools like Retool and Zendesk with dynamic filters and masking tied to their active tickets or datasets.",
      img: "/window.svg",
    },
    {
      title: "Secure data sharing",
      body:
        "Share precisely what partners, vendors, or AI models need, with real‑time redaction and filtering before data leaves your cluster or hits an external API.",
      img: "/globe.svg",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">Solutions</h2>
        <p className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
          Protecting the products of tomorrow
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl p-6 ring-1 ring-black/5 dark:ring-white/10 hover:shadow-lg hover:-translate-y-1 transition-all bg-white/60 dark:bg-white/5 backdrop-blur"
            >
              <div className="h-28 w-full rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-white/10 dark:to-white/5 grid place-items-center overflow-hidden">
                <Image src={item.img} alt="" width={48} height={48} className="opacity-60 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


