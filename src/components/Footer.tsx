import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Formal, Inc.</p>
        <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</a>
          <a href="#security" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Security</a>
        </nav>
      </div>
    </footer>
  );
}


