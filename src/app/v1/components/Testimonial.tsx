import type { JSX } from "react";
import Image from "next/image";

export default function Testimonial(): JSX.Element {
  return (
    <section id="customers" className="bg-emerald-900 text-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl sm:text-4xl tracking-tight">
          Trusted by security teams who can’t afford surprises.
        </h2>
        <div className="mt-10 rounded-xl bg-white text-neutral-900 p-6 sm:p-8 shadow-xl ring-1 ring-black/5">
          <div className="grid gap-6 sm:grid-cols-[1fr_2fr] items-start">
            <Image
              src="https://images.unsplash.com/photo-1559028012-aa99c5f111a8?q=80&w=1200&auto=format&fit=crop"
              alt="Team collaborating"
              width={1200}
              height={400}
              className="w-full h-56 object-cover rounded-lg"
            />
            <blockquote className="text-neutral-700">
              <p className="text-lg">
                “With Formal, we have been able to quickly set up automated data protection in complex scenarios. This has allowed the Privacy Security team to agilely support the changing needs of the business with minimal impact on product development teams.”
              </p>
              <footer className="mt-4 text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">Justin Collins</span>
                , Head of Security
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-10 opacity-80">
          <span className="font-medium">gusto</span>
          <span className="font-medium">Modern Health</span>
          <span className="font-medium">ramp</span>
        </div>
      </div>
    </section>
  );
}


