import type { ReactNode } from "react";

import { CatGlyph } from "@/components/cat-glyph";

function Mono({
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

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <CatGlyph className="h-5 w-5 text-[color:var(--ember)]" />
          <div>
            <div className="text-[13px] font-medium">Aman Kumar</div>
            <Mono className="text-muted-foreground">
              built with code, curiosity and occasional feline supervision.
            </Mono>
          </div>
        </div>
        <Mono className="text-muted-foreground">
          <span className="inline-block text-[13px] leading-none align-[-0.04em]">
            ©
          </span>{" "}
          {new Date().getFullYear()}
        </Mono>
      </div>
    </footer>
  );
}
