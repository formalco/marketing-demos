import * as React from "react";
import { Button as Base } from "@/components/ui/button";

export type ButtonProps = React.ComponentProps<typeof Base> & { variant?: "primary" | "secondary" };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className = "", variant = "primary", ...props }, ref) {
  const styles =
    variant === "primary"
      ? "bg-black text-white shadow-[0_10px_0_#0a0a0a] hover:translate-y-[-1px]"
      : "bg-white text-black shadow-[0_10px_0_#0a0a0a] hover:translate-y-[-1px]";
  return <Base ref={ref} className={`${styles} h-12 rounded-[16px] px-5 text-base font-extrabold transition-all ${className}`} {...props} />;
});


