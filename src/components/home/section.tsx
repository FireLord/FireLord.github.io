import type { ReactNode } from "react";

import { Mono } from "@/components/home/mono";

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <Mono className="text-[color:var(--ember)]">{index}</Mono>
      <div className="h-px max-w-12 flex-1 bg-border" />
      <Mono className="text-muted-foreground uppercase">{children}</Mono>
    </div>
  );
}

export function Section({
  id,
  label,
  title,
  children,
  minScreen = true,
  centerContent = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  minScreen?: boolean;
  centerContent?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 ${minScreen ? "min-h-[calc(100svh-4rem)]" : ""}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-16 lg:py-20 ${
          centerContent && minScreen
            ? "flex min-h-[calc(100svh-4rem)] flex-col justify-center"
            : ""
        }`}
      >
        <SectionLabel index={label}>{title}</SectionLabel>
        <h2 className="mb-8 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
