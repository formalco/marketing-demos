"use client";

import Link from "next/link";
import { useState } from "react";
import type { JSX } from "react";

/**
 * Top navigation for the marketing site.
 * - Sticky and translucent after scrolling
 * - Keyboard accessible with visible focus rings
 */
export default function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: Array<{ href: string; label: string }> = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Solutions" },
    { href: "#platform", label: "Platform" },
    { href: "#customers", label: "Customers" },
    { href: "#integrations", label: "Integrations" },
    { href: "#security", label: "Security" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="font-serif text-xl tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          Formal
        </Link>

        <button
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition-colors hover:text-neutral-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              <span className="after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 hover:after:scale-x-100 after:bg-neutral-900/60 dark:after:bg-white/70 after:transition-transform" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#login"
            className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1"
          >
            Login
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center rounded-md bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Schedule demo
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/90 dark:bg-black/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#demo"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm"
            >
              Schedule demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


