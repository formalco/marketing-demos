"use client";

import type { JSX } from "react";
import { ThemeProvider } from "next-themes";

export default function V4ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      suppressHydrationWarning
    >
      {children}
    </ThemeProvider>
  );
}


