"use client";

import type { JSX } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Nav(): JSX.Element {
  const items = ["Use Cases", "Proof", "Stack", "Plans"];
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--v4-bg)]/30 backdrop-blur-sm border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl h-16 px-6 flex items-center justify-between text-neutral-900 dark:text-neutral-100">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Formal Logo"
            width={120}
            height={18}
            className="h-[18px] w-auto v4-logo"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm opacity-80">
          {items.map((it) => (
            <span key={it} className="hover:opacity-100 cursor-default">
              {it}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}


