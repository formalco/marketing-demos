import Image from "next/image";
import type { JSX } from "react";

const logos = [
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Notion" },
  { src: "/globe.svg", alt: "Check" },
  { src: "/window.svg", alt: "ManoMano" },
  { src: "/file.svg", alt: "Fintual" },
  { src: "/vercel.svg", alt: "Gusto" },
];

export default function LogoWall(): JSX.Element {
  return (
    <section className="relative bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-sm/6 opacity-90">Safeguarding industry leaders</p>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-x-8 gap-y-6 items-center justify-center opacity-90">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={28}
                className="h-6 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


