import * as React from "react";
import { Input as Base } from "@/components/ui/input";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof Base>>(function Input({ className = "", ...props }, ref) {
  return (
    <Base
      ref={ref}
      className={`h-12 w-[360px] rounded-[16px] bg-[#f7f146] border border-black/10 text-black placeholder:text-black/60 px-4 shadow-[0_10px_0_#0a0a0a] focus:shadow-[0_4px_0_#0a0a0a] transition-all ${className}`}
      {...props}
    />
  );
});


