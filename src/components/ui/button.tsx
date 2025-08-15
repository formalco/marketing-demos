import * as React from "react";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  function Button({ className = "", ...props }, ref) {
    return (
      <button
        ref={ref}
        className={
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 " +
          className
        }
        {...props}
      />
    );
  }
);

