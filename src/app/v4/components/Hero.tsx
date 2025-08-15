"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { JSX } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Filter, CircleSlash2 } from "lucide-react";
import gsap from "gsap";


function MaskIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden>
      <path d="M12 2c4.97 0 9 2.239 9 5v4c0 4.418-4.03 8-9 8s-9-3.582-9-8V7c0-2.761 4.03-5 9-5zm-3.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 17c2.386 0 4.5-1.343 4.5-3H7.5c0 1.657 2.114 3 4.5 3z" />
    </svg>
  );
}

export default function Hero(): JSX.Element {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const [rowHeight, setRowHeight] = useState<number | null>(null);
  const BADGE_ITEMS = [
    { label: "Filtered", icon: <Filter className="text-[1em]" style={{ width: "1em", height: "1em" }} /> },
    { label: "Masked", icon: <MaskIcon /> },
    { label: "Blocked", icon: <CircleSlash2 className="text-[1em]" style={{ width: "1em", height: "1em" }} /> },
  ];

  // const { theme, setTheme } = useTheme();
  
  // useEffect(() => {
  //   console.log(theme);
  //   setTheme("light");
  // }, []);
  
  useEffect(() => {
    const container = wheelRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    // Measure precise row height after fonts load
    const ready = (document as any).fonts?.ready as Promise<void> | undefined;
    const measure = () => {
      const base = children[0].getBoundingClientRect().height; // row height
      const h = base;
      setRowHeight(h);
      
      const totalItems = children.length - 1; // exclude the clone
      
      // Start with container positioned so LAST item (before clone) is visible
      // This way first item is below viewport ready to slide up
      const startY = -(h * (totalItems ));
      gsap.set(container, { y: startY });
      
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      
      // Move container UP (negative y) to slide next item DOWN into view
      for (let i = 1; i <= totalItems; i += 1) {
        const targetY = startY + (h * i); // move up by one row each time
        
        if (i === totalItems) {
          // This is the clone - animate to it but don't pause
          tl.to(container, { y: targetY + 24, duration: 0.42, ease: "power2.in" })
            .to(container, { y: targetY, duration: 0.28, ease: "back.out(3.5)" })
            // Immediately reset to start position while clone is visible
            .set(container, { y: startY });
        } else {
          // Normal items - animate and pause
          tl.to(container, { y: targetY + 24, duration: 0.42, ease: "power2.in" })
            .to(container, { y: targetY, duration: 0.28, ease: "back.out(3.5)" })
            .to(container, { y: "+=0", duration: 1.0 });
        }
      }
      return tl;
    };

    let tl: gsap.core.Timeline | null = null;
    if (ready) {
      ready.then(() => { tl = measure(); });
    } else {
      tl = measure();
    }

    return () => { tl?.kill(); };
  }, []);

  return (
    <section className="relative isolate">{/* NavBar now in layout */}
      <div>
        <div
          className="rounded-[28px] mx-[var(--v4-inset)] my-[var(--v4-inset)]"
          style={{
            background: "#f7f146",
            color: "#0a0a0a",
            padding: "var(--v4-inset)",
            height: "calc(100dvh - 64px - (2 * var(--v4-inset)))",
          }}
        >
          <div className="flex flex-col justify-center m-auto w-[80%] h-[80%] items-center text-center">
            <h1 className="v4-display text-[56px] sm:text-[72px] md:text-[92px] leading-[0.98] mb-[-10px]">
              <span>Your data,</span>
            </h1>
            <BadgeWheel wheelRef={wheelRef as React.RefObject<HTMLDivElement>} items={BADGE_ITEMS} rowHeight={rowHeight ?? undefined} />
            <h1 className="v4-display mt-[2px] text-[56px] sm:text-[72px] md:text-[92px] leading-[0.98]">handled.</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-black/80">Control who gets in, what they see, and what they can do — without changing your stack or slowing your team.</p>

            <form className="mt-8 flex max-w-xl mx-auto items-center justify-center gap-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor={inputId} className="sr-only">Email</label>
              <Input id={inputId} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
              <Button type="submit">Get a demo</Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeWheel({ wheelRef, items, rowHeight }: { wheelRef: React.RefObject<HTMLDivElement>; items: Array<{ label: string; icon: JSX.Element }>; rowHeight?: number }): JSX.Element {
  return (
    <div className="mx-auto mt-[-4px] inline-flex items-center rounded-[28px] bg-black text-white px-6 py-4 shadow-[0_18px_0_#0a0a0a] rotate-[-2deg]">
      <div className="overflow-hidden" style={{ height: rowHeight ?? 60, width: "100%" }}>
        <div ref={wheelRef} className="flex flex-col" style={{ willChange: "transform" }}>
          {items.concat([items[0]]).map((it, idx) => (
            <div key={`${it.label}-${idx}`} className="flex w-full items-center justify-center gap-4" style={{ height: rowHeight ?? 60 }}>
              <span className="font-extrabold text-[38px] sm:text-[46px] md:text-[56px] leading-[0.95] flex items-center gap-4">
                {it.icon}
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


