import * as React from "react";

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, BaseInputProps>(
  function Input({ className = "", ...props }, ref) {
    return (
      <input
        ref={ref}
        className={
          "h-11 rounded-md border px-3 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 " +
          className
        }
        {...props}
      />
    );
  }
);
 
