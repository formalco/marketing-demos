import type { JSX } from "react";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="py-12 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Formal Security</p>
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/v2" className="hover:underline">Variant v2</Link>
          <Link href="/v3" className="hover:underline">Variant v3</Link>
        </nav>
      </div>
    </footer>
  );
}


