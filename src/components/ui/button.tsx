import type { ButtonHTMLAttributes } from "react";

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 ${className}`}
      {...props}
    />
  );
}