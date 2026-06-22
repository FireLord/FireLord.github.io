import type { ReactNode } from "react";

export function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono text-[12px] tracking-tight ${className}`}>
      {children}
    </span>
  );
}
